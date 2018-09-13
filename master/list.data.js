window.source = {
  "title": "List",
  "url": "list.html",
  "type": "js",
  "content": "/**\n * @name List\n * @category Components\n * @tags Ring UI Language\n * @description Displays a list of items.\n */\n\nimport 'dom4';\nimport 'core-js/modules/es6.array.find';\nimport 'core-js/modules/es7.array.includes';\nimport React, {Component, cloneElement} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport VirtualizedList from 'react-virtualized/dist/commonjs/List';\nimport AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';\nimport WindowScroller from 'react-virtualized/dist/commonjs/WindowScroller';\nimport {CellMeasurer, CellMeasurerCache} from 'react-virtualized/dist/commonjs/CellMeasurer';\n\nimport dataTests from '../global/data-tests';\nimport getUID from '../global/get-uid';\nimport scheduleRAF from '../global/schedule-raf';\nimport memoize from '../global/memoize';\nimport {preventDefault} from '../global/dom';\nimport Shortcuts from '../shortcuts/shortcuts';\n\nimport styles from './list.css';\nimport ListItem from './list__item';\nimport ListCustom from './list__custom';\nimport ListLink from './list__link';\nimport ListTitle from './list__title';\nimport ListSeparator from './list__separator';\nimport ListHint from './list__hint';\n\nconst scheduleScrollListener = scheduleRAF();\nconst scheduleHoverListener = scheduleRAF();\n/**\n * @enum {number}\n */\nconst Type = {\n  SEPARATOR: 0,\n  LINK: 1,\n  ITEM: 2,\n  HINT: 3,\n  CUSTOM: 4,\n  TITLE: 5,\n  MARGIN: 6\n};\n\nconst Dimension = {\n  ITEM_PADDING: 16,\n  ITEM_HEIGHT: 32,\n  COMPACT_ITEM_HEIGHT: 24,\n  SEPARATOR_HEIGHT: 25,\n  SEPARATOR_FIRST_HEIGHT: 16,\n  SEPARATOR_TEXT_HEIGHT: 18,\n  TITLE_HEIGHT: 42,\n  INNER_PADDING: 8,\n  MARGIN: 8\n};\n\nconst DEFAULT_ITEM_TYPE = Type.ITEM;\n\nfunction noop() {}\n\n/**\n * @param {Type} listItemType\n * @param {Object} item list item\n */\nfunction isItemType(listItemType, item) {\n  let type = item.rgItemType;\n  if (type == null) {\n    type = DEFAULT_ITEM_TYPE;\n  }\n  return type === listItemType;\n}\n\n/**\n * @name List\n * @constructor\n * @extends {ReactComponent}\n * @example-file ./list.examples.html\n */\n// eslint-disable-next-line react/no-deprecated\nexport default class List extends Component {\n  static isItemType = isItemType;\n\n  static ListHint = ListHint;\n\n  static ListProps = {\n    Type,\n    Dimension\n  };\n\n  static propTypes = {\n    className: PropTypes.string,\n    hint: PropTypes.string,\n    hintOnSelection: PropTypes.string,\n    data: PropTypes.array,\n    maxHeight: PropTypes.oneOfType([\n      PropTypes.string,\n      PropTypes.number\n    ]),\n    activeIndex: PropTypes.number,\n    restoreActiveIndex: PropTypes.bool,\n    activateSingleItem: PropTypes.bool,\n    activateFirstItem: PropTypes.bool,\n    shortcuts: PropTypes.bool,\n    onMouseOut: PropTypes.func,\n    onSelect: PropTypes.func,\n    onScrollToBottom: PropTypes.func,\n    onResize: PropTypes.func,\n    useMouseUp: PropTypes.bool,\n    visible: PropTypes.bool,\n    renderOptimization: PropTypes.bool,\n    disableMoveOverflow: PropTypes.bool,\n    disableMoveDownOverflow: PropTypes.bool,\n    compact: PropTypes.bool\n  };\n\n  static defaultProps = {\n    data: [],\n    restoreActiveIndex: false, // restore active item using its \"key\" property\n    activateSingleItem: false, // if there is only one item, activate it\n    activateFirstItem: false, // if there no active items, activate the first one\n    onMouseOut: noop,\n    onSelect: noop,\n    onScrollToBottom: noop,\n    onResize: noop,\n    shortcuts: false,\n    renderOptimization: true,\n    disableMoveDownOverflow: false\n  };\n\n  state = {\n    activeIndex: null,\n    activeItem: null,\n    needScrollToActive: false,\n    scrolling: false,\n    hasOverflow: false,\n    disabledHover: false,\n    scrolledToBottom: false\n  };\n\n  componentWillMount() {\n    this.checkActivatableItems(this.props.data);\n    if (this.props.activeIndex != null && this.props.data[this.props.activeIndex]) {\n      this.setState({\n        activeIndex: this.props.activeIndex,\n        activeItem: this.props.data[this.props.activeIndex],\n        needScrollToActive: true\n      });\n    } else if (\n      this.props.activeIndex == null &&\n      this.shouldActivateFirstItem(this.props) &&\n      this.isActivatable(this.props.data[0])\n    ) {\n      this.setState({\n        activeIndex: 0,\n        activeItem: this.props.data[0],\n        needScrollToActive: true\n      });\n    }\n  }\n\n  componentDidMount() {\n    document.addEventListener('mousemove', this.onDocumentMouseMove);\n    document.addEventListener('keydown', this.onDocumentKeyDown, true);\n  }\n\n  componentWillReceiveProps(props) {\n    if (props.data) {\n      //TODO investigate (https://youtrack.jetbrains.com/issue/RG-772)\n      //props.data = props.data.map(normalizeListItemType);\n\n      this.checkActivatableItems(props.data);\n\n      this.setState(prevState => {\n        let activeIndex = null;\n        let activeItem = null;\n\n        if (\n          props.restoreActiveIndex &&\n          prevState.activeItem &&\n          prevState.activeItem.key != null\n        ) {\n          for (let i = 0; i < props.data.length; i++) {\n            // Restore active index if there is an item with the same \"key\" property\n            if (props.data[i].key !== undefined && props.data[i].key === prevState.activeItem.key) {\n              activeIndex = i;\n              activeItem = props.data[i];\n              break;\n            }\n          }\n        }\n\n        if (\n          activeIndex === null &&\n          this.shouldActivateFirstItem(props) &&\n          this.isActivatable(props.data[0])\n        ) {\n          activeIndex = 0;\n          activeItem = props.data[0];\n        } else if (\n          props.activeIndex != null &&\n          props.activeIndex !== this.props.activeIndex &&\n          props.data[props.activeIndex]\n        ) {\n          activeIndex = props.activeIndex;\n          activeItem = props.data[props.activeIndex];\n        }\n\n        return {\n          activeIndex,\n          activeItem,\n          needScrollToActive:\n            activeIndex !== prevState.activeIndex ? true : prevState.needScrollToActive\n        };\n      });\n    }\n  }\n\n  shouldComponentUpdate(nextProps, nextState) {\n    return nextProps !== this.props ||\n      Object.keys(nextState).some(key => nextState[key] !== this.state[key]);\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.virtualizedList && prevProps.data.length !== this.props.data.length) {\n      this.virtualizedList.recomputeRowHeights();\n    }\n\n    this.checkOverflow();\n  }\n\n  componentWillUnmount() {\n    this.unmounted = true;\n    document.removeEventListener('mousemove', this.onDocumentMouseMove);\n    document.removeEventListener('keydown', this.onDocumentKeyDown, true);\n  }\n\n  hoverHandler = memoize(index => () =>\n    scheduleHoverListener(() => {\n      if (this.state.disabledHover) {\n        return;\n      }\n\n      if (this.container) {\n        this.setState({\n          activeIndex: index,\n          activeItem: this.props.data[index],\n          needScrollToActive: false\n        });\n      }\n    })\n  );\n\n  _activatableItems = false;\n\n  // eslint-disable-next-line no-magic-numbers\n  _bufferSize = 10; // keep X items above and below of the visible area\n  // reuse size cache for similar items\n  sizeCacheKey = index => {\n    if (index === 0 || index === this.props.data.length + 1) {\n      return Type.MARGIN;\n    }\n\n    const item = this.props.data[index - 1];\n    const isFirst = index === 1;\n    switch (item.rgItemType) {\n      case Type.SEPARATOR:\n      case Type.TITLE:\n        return `${item.rgItemType}${isFirst ? '_first' : ''}${item.description ? '_desc' : ''}`;\n      case Type.MARGIN:\n        return Type.MARGIN;\n      case Type.CUSTOM:\n        return `${Type.CUSTOM}_${item.key}`;\n      case Type.ITEM:\n      case Type.LINK:\n      default:\n        if (item.details) {\n          return `${Type.ITEM}_${item.details}`;\n        }\n        return Type.ITEM;\n    }\n  };\n\n  _cache = new CellMeasurerCache({\n    defaultHeight: this.defaultItemHeight(),\n    fixedWidth: true,\n    keyMapper: this.sizeCacheKey\n  });\n\n  hasActivatableItems() {\n    return this._activatableItems;\n  }\n\n  checkActivatableItems(items) {\n    this._activatableItems = false;\n    for (let i = 0; i < items.length; i++) {\n      if (this.isActivatable(items[i])) {\n        this._activatableItems = true;\n        return;\n      }\n    }\n  }\n\n  isActivatable(item) {\n    return !(item.rgItemType === Type.HINT ||\n      item.rgItemType === Type.SEPARATOR ||\n      item.rgItemType === Type.TITLE ||\n      item.disabled);\n  }\n\n  selectHandler = memoize(index => event => {\n    const item = this.props.data[index];\n    if (!this.props.useMouseUp && item.onClick) {\n      item.onClick(item, event);\n    } else if (this.props.useMouseUp && item.onMouseUp) {\n      item.onMouseUp(item, event);\n    }\n\n    if (this.props.onSelect) {\n      this.props.onSelect(item, event);\n    }\n  });\n\n  upHandler = e => {\n    const {data, disableMoveOverflow} = this.props;\n    const index = this.state.activeIndex;\n    let newIndex;\n\n    if (index === null || index === 0) {\n      if (!disableMoveOverflow) {\n        newIndex = data.length - 1;\n      } else {\n        return;\n      }\n    } else {\n      newIndex = index - 1;\n    }\n\n    this.moveHandler(newIndex, this.upHandler, e);\n  };\n\n  downHandler = e => {\n    const {data, disableMoveOverflow, disableMoveDownOverflow} = this.props;\n    const index = this.state.activeIndex;\n    let newIndex;\n\n    if ((index === null || index + 1 === data.length)) {\n      if (!disableMoveOverflow && !disableMoveDownOverflow) {\n        newIndex = 0;\n      } else {\n        return;\n      }\n    } else {\n      newIndex = index + 1;\n    }\n\n    this.moveHandler(newIndex, this.downHandler, e);\n  };\n\n  homeHandler = e => {\n    this.moveHandler(0, this.downHandler, e);\n  };\n\n  endHandler = e => {\n    this.moveHandler(this.props.data.length - 1, this.upHandler, e);\n  };\n\n  onDocumentMouseMove = () => {\n    if (this.state.disabledHover) {\n      this.setState({disabledHover: false});\n    }\n  };\n\n  onDocumentKeyDown = e => {\n    const metaKeys = [16, 17, 18, 19, 20, 91]; // eslint-disable-line no-magic-numbers\n    if (!this.state.disabledHover && !metaKeys.includes(e.keyCode)) {\n      this.setState({disabledHover: true});\n    }\n  };\n\n  moveHandler(index, retryCallback, e) {\n    let correctedIndex;\n    if (this.props.data.length === 0 || !this.hasActivatableItems()) {\n      return;\n    } else if (this.props.data.length < index) {\n      correctedIndex = 0;\n    } else {\n      correctedIndex = index;\n    }\n\n    const item = this.props.data[correctedIndex];\n    this.setState(\n      {\n        activeIndex: correctedIndex,\n        activeItem: item,\n        needScrollToActive: true\n      },\n      function onSet() {\n        if (!this.isActivatable(item)) {\n          retryCallback(e);\n          return;\n        }\n\n        preventDefault(e);\n      }\n    );\n  }\n\n  mouseHandler = () => {\n    this.setState({scrolling: false});\n  };\n\n  scrollHandler = () => {\n    this.setState({scrolling: true}, this.scrollEndHandler);\n  };\n\n  enterHandler = (event, shortcut) => {\n    if (this.state.activeIndex !== null) {\n      const item = this.props.data[this.state.activeIndex];\n      this.selectHandler(this.state.activeIndex)(event);\n\n      if (item.href && !event.defaultPrevented) {\n        if (['command+enter', 'ctrl+enter'].includes(shortcut)) {\n          window.open(item.href, '_blank');\n        } else if (shortcut === 'shift+enter') {\n          window.open(item.href);\n        } else {\n          window.location.href = item.href;\n        }\n      }\n      return false; // do not propagate event\n    } else {\n      return true; // propagate event to the parent component (e.g., QueryAssist)\n    }\n  };\n\n  getFirst() {\n    return this.props.data.find(\n      item => item.rgItemType === Type.ITEM || item.rgItemType === Type.CUSTOM\n    );\n  }\n\n  getSelected() {\n    return this.props.data[this.state.activeIndex];\n  }\n\n  clearSelected() {\n    this.setState({\n      activeIndex: null,\n      needScrollToActive: false\n    });\n  }\n\n  defaultItemHeight() {\n    return this.props.compact ? Dimension.COMPACT_ITEM_HEIGHT : Dimension.ITEM_HEIGHT;\n  }\n\n  shouldActivateFirstItem(props) {\n    return props.activateFirstItem ||\n      props.activateSingleItem && props.length === 1;\n  }\n\n  scrollEndHandler = () => scheduleScrollListener(() => {\n    const innerContainer = this.inner;\n    if (innerContainer) {\n      const maxScrollingPosition = innerContainer.scrollHeight;\n      const sensitivity = this.defaultItemHeight() / 2;\n      const currentScrollingPosition =\n        innerContainer.scrollTop + innerContainer.clientHeight + sensitivity;\n      const scrolledToBottom =\n        maxScrollingPosition > 0 && currentScrollingPosition >= maxScrollingPosition;\n      if (!this.unmounted) {\n        this.setState({scrolledToBottom});\n      }\n      if (scrolledToBottom) {\n        this.props.onScrollToBottom();\n      }\n    }\n  });\n\n  checkOverflow = () => {\n    if (this.inner) {\n      this.setState({\n        hasOverflow: this.inner.scrollHeight - this.inner.clientHeight > 1\n      });\n    }\n  };\n\n  getVisibleListHeight(props) {\n    return props.maxHeight - this.defaultItemHeight() - Dimension.INNER_PADDING;\n  }\n\n  renderItem = ({index, style, isScrolling, parent}) => {\n    let key;\n    let el;\n\n    const realIndex = index - 1;\n\n    const item = this.props.data[realIndex];\n\n    // top and bottom margins\n    if (index === 0 || index === this.props.data.length + 1 || item.rgItemType === Type.MARGIN) {\n      key = `${Type.MARGIN}_${index}`;\n      el = <div style={{height: Dimension.MARGIN}}/>;\n    } else {\n\n      // Hack around SelectNG implementation\n      // eslint-disable-next-line no-unused-vars\n      const {selectedLabel, originalModel, ...cleanedProps} = item;\n      const itemProps = Object.assign({rgItemType: DEFAULT_ITEM_TYPE}, cleanedProps);\n\n      if (itemProps.url) {\n        itemProps.href = itemProps.url;\n      }\n      if (itemProps.href) {\n        itemProps.rgItemType = Type.LINK;\n      }\n\n      // Probably unique enough key\n      key = itemProps.key ||\n        `${itemProps.rgItemType}_${itemProps.label || itemProps.description}`;\n\n      itemProps.hover = (realIndex === this.state.activeIndex);\n      itemProps.onMouseOver = this.hoverHandler(realIndex);\n      itemProps.tabIndex = -1;\n      itemProps.scrolling = isScrolling;\n\n      const selectHandler = this.selectHandler(realIndex);\n\n      if (this.props.useMouseUp) {\n        itemProps.onMouseUp = selectHandler;\n      } else {\n        itemProps.onClick = selectHandler;\n      }\n\n      if (itemProps.compact == null) {\n        itemProps.compact = this.props.compact;\n      }\n\n      let ItemComponent;\n      const isFirst = index === 1;\n      switch (itemProps.rgItemType) {\n        case Type.SEPARATOR:\n          ItemComponent = ListSeparator;\n          itemProps.isFirst = isFirst;\n          break;\n        case Type.LINK:\n          ItemComponent = ListLink;\n          this.addItemDataTestToProp(itemProps);\n          break;\n        case Type.ITEM:\n          ItemComponent = ListItem;\n          this.addItemDataTestToProp(itemProps);\n          break;\n        case Type.CUSTOM:\n          ItemComponent = ListCustom;\n          this.addItemDataTestToProp(itemProps);\n          break;\n        case Type.TITLE:\n          itemProps.isFirst = isFirst;\n          ItemComponent = ListTitle;\n          break;\n        default:\n          throw new Error(`Unknown menu element type: ${itemProps.rgItemType}`);\n      }\n\n      el = <ItemComponent {...itemProps}/>;\n    }\n\n    return parent ? (\n      <CellMeasurer\n        cache={this._cache}\n        key={key}\n        parent={parent}\n        rowIndex={index}\n        columnIndex={0}\n      >\n        <div style={style}>{el}</div>\n      </CellMeasurer>\n    ) : cloneElement(el, {key});\n  };\n\n  addItemDataTestToProp = props => {\n    props['data-test'] = dataTests('ring-list-item', props['data-test']);\n    return props;\n  };\n\n  virtualizedListRef = el => {\n    this.virtualizedList = el;\n  };\n\n  containerRef = el => {\n    this.container = el;\n  };\n\n  get inner() {\n    if (!this._inner) {\n      this._inner = this.container && this.container.query('.ring-list__i');\n    }\n    return this._inner;\n  }\n\n  renderVirtualizedInner({\n    height,\n    maxHeight,\n    autoHeight = false,\n    rowCount,\n    isScrolling,\n    onChildScroll = noop,\n    scrollTop\n  }) {\n    return (\n      <AutoSizer disableHeight onResize={this.props.onResize}>\n        {({width}) => (\n          <VirtualizedList\n            ref={this.virtualizedListRef}\n            className=\"ring-list__i\"\n            autoHeight={autoHeight}\n            style={maxHeight ? {maxHeight, height: 'auto'} : {}}\n            autoContainerWidth\n            height={height}\n            width={width}\n            isScrolling={isScrolling}\n            // eslint-disable-next-line react/jsx-no-bind\n            onScroll={e => {\n              onChildScroll(e);\n              this.scrollEndHandler(e);\n            }}\n            scrollTop={scrollTop}\n            rowCount={rowCount}\n            estimatedRowSize={this.defaultItemHeight()}\n            rowHeight={this._cache.rowHeight}\n            rowRenderer={this.renderItem}\n            overscanRowCount={this._bufferSize}\n\n            // ensure rerendering\n            // eslint-disable-next-line react/jsx-no-bind\n            noop={() => {}}\n\n            scrollToIndex={\n              this.state.needScrollToActive && this.state.activeIndex != null\n                ? this.state.activeIndex + 1\n                : undefined\n            }\n            scrollToAlignment=\"center\"\n            deferredMeasurementCache={this._cache}\n            onRowsRendered={this.checkOverflow}\n          />\n        )}\n      </AutoSizer>\n    );\n  }\n\n  renderVirtualized(maxHeight, rowCount) {\n    if (maxHeight) {\n      return this.renderVirtualizedInner({height: maxHeight, maxHeight, rowCount});\n    }\n\n    return (\n      <WindowScroller>\n        {props => this.renderVirtualizedInner({...props, rowCount, autoHeight: true})}\n      </WindowScroller>\n    );\n  }\n\n  renderSimple(maxHeight, rowCount) {\n    const items = [];\n\n    for (let index = 0; index < rowCount; index++) {\n      items.push(this.renderItem({\n        index,\n        isScrolling: this.state.scrolling\n      }));\n    }\n\n    return (\n      <div\n        className={classNames('ring-list__i', styles.simpleInner)}\n        onScroll={this.scrollHandler}\n        onMouseMove={this.mouseHandler}\n      >\n        <div\n          style={maxHeight\n            ? {maxHeight: this.getVisibleListHeight(this.props)}\n            : null\n          }\n        >\n          {items}\n        </div>\n      </div>\n    );\n  }\n\n  shortcutsScope = getUID('list-');\n  shortcutsMap = {\n    up: this.upHandler,\n    down: this.downHandler,\n    home: this.homeHandler,\n    end: this.endHandler,\n    enter: this.enterHandler,\n    'meta+enter': this.enterHandler,\n    'ctrl+enter': this.enterHandler,\n    'command+enter': this.enterHandler,\n    'shift+enter': this.enterHandler\n  };\n\n  /** @override */\n  render() {\n    const hint = this.getSelected() && this.props.hintOnSelection || this.props.hint;\n    const fadeStyles = hint ? {bottom: Dimension.ITEM_HEIGHT} : null;\n\n    const rowCount = this.props.data.length + 2;\n\n    const maxHeight = this.props.maxHeight && this.getVisibleListHeight(this.props);\n\n    const classes = classNames(styles.list, this.props.className);\n\n    return (\n      <div\n        ref={this.containerRef}\n        className={classes}\n        onMouseOut={this.props.onMouseOut}\n        onMouseDown={this.mouseDownHandler}\n        onMouseUp={this.mouseUpHandler}\n        data-test=\"ring-list\"\n      >\n        {this.props.shortcuts &&\n        (\n          <Shortcuts\n            map={this.shortcutsMap}\n            scope={this.shortcutsScope}\n          />\n        )\n        }\n        {this.props.renderOptimization\n          ? this.renderVirtualized(maxHeight, rowCount)\n          : this.renderSimple(maxHeight, rowCount)\n        }\n        {this.state.hasOverflow && !this.state.scrolledToBottom && (\n          <div\n            className={styles.fade}\n            style={fadeStyles}\n          />\n        )}\n        {hint && (\n          <ListHint\n            label={hint}\n          />\n        )}\n      </div>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "List",
      "url": "examples/list/list.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [];\nfor (var i = 0; i < 1000; i++) {\n  listData.push({\n    label: 'Item ' + i,\n    rgItemType: List.ListProps.Type.ITEM\n  });\n}\n\nrender(\n  <List\n    maxHeight={400}\n    data={listData}\n    shortcuts\n    compact\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List with a hint below",
      "url": "examples/list/list-with-a-hint-below.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [\n  {'label': 'One', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Two', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Active as default', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Four', 'rgItemType': List.ListProps.Type.ITEM},\n  {\n    'label': 'Five (disabled)',\n    'rgItemType': List.ListProps.Type.ITEM,\n    disabled: true\n  }\n];\n\nrender(\n  <List\n    data={listData}\n    shortcuts\n    onSelect={console.log.bind(console)}\n    activeIndex={2}\n    hint=\"Hint about the list\"\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List #2",
      "url": "examples/list/list-2.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [\n{'label': 'One', href: 'http://example.com', 'rgItemType': List.ListProps.Type.LINK},\n  {'label': 'Two', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Active as default', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Four', 'rgItemType': List.ListProps.Type.ITEM},\n  {'label': 'Five', 'rgItemType': List.ListProps.Type.ITEM}\n];\n\nrender(\n  <List\n    data={listData}\n    activeIndex={2}\n    shortcuts\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List #3",
      "url": "examples/list/list-3.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [\n  {\n    'rgItemType': List.ListProps.Type.SEPARATOR,\n    'description': 'First separator'\n  },\n  {'label': 'Item 1', 'rgItemType': List.ListProps.Type.ITEM},\n  {\n    'rgItemType': List.ListProps.Type.SEPARATOR,\n    'description': 'Second sep'\n  },\n  {'label': 'Item 2', 'rgItemType': List.ListProps.Type.ITEM},\n  {\n    'rgItemType': List.ListProps.Type.TITLE,\n    'label': 'Group title',\n    'description': 'With description'\n  },\n  {\n    'label': 'Item 3',\n    'rgItemType': List.ListProps.Type.ITEM,\n    'description': 'Foo bar'\n  },\n  {\n    'label': 'Item 4',\n    'rgItemType': List.ListProps.Type.ITEM,\n    'description': 'Item description'\n  },\n  {\n    'label': 'Item 5',\n    'rgItemType': List.ListProps.Type.ITEM,\n    'description': 'Item description',\n    details: 'Additional details line'\n  },\n  {\n    'label': 'Item 6',\n    'rgItemType': List.ListProps.Type.ITEM,\n    'description': 'Item description',\n    details: 'Additional details line, a long long text. And once again, additional details line, a long long text. And once again, additional details line, a long long text. And once again, additional details line, a long long text. And once again, additional details line, a long long text.'\n  },\n];\n\nrender(\n  <List\n    data={listData}\n    shortcuts\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List with item icons",
      "url": "examples/list/list-with-item-icons.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list' style=\"width: 300px;\"></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\nimport {WarningIcon} from '@jetbrains/ring-ui/components/icon';\n\nvar listData = [\n  {\n    label: 'Some item',\n    description: 'Long long long long long long long long long long long long long long long description',\n    key: '1',\n    'rgItemType': List.ListProps.Type.ITEM,\n    glyph: WarningIcon,\n    rightGlyph: WarningIcon\n  },\n  {\n    label: 'Some item with a long long label, much longer than description',\n    key: '2',\n    'rgItemType': List.ListProps.Type.ITEM,\n    description: 'Test item',\n    icon: 'http://icons.iconarchive.com/icons/osiris/world-flags/16/00-cctld-ac-icon.png'\n  },\n  {\n    label: 'Some item with a long long label',\n    key: '3',\n    'rgItemType': List.ListProps.Type.ITEM,\n    description: 'Long long long long long long long long long long long long long long long description',\n    checkbox: true\n  },\n  //Link doesn't support icons\n  {\n    label: 'Some item',\n    key: '4',\n    'rgItemType': List.ListProps.Type.LINK,\n    description: 'Test item',\n    icon: 'http://www.thg.ru/forum/images/icons/icon6.gif'\n  },\n  {\n    label: 'Some item',\n    key: '5',\n    href: 'http://localhost:9999',\n    description: 'Test item',\n    icon: 'http://www.thg.ru/forum/images/icons/icon6.gif'\n  }\n];\n\nrender(\n  <List\n    data={listData}\n    shortcuts\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List should support the deprecated item.type parameter",
      "url": "examples/list/list-should-support-the-deprecated-item-type-parameter.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [\n  {'label': 'One', 'type': List.ListProps.Type.ITEM},\n  {'label': 'Two', 'type': List.ListProps.Type.ITEM},\n  {'label': 'Three', 'type': List.ListProps.Type.ITEM},\n  {'label': 'Four', 'type': List.ListProps.Type.ITEM},\n  {'label': 'Five', 'type': List.ListProps.Type.ITEM}\n];\n\nrender(\n  <List\n    data={listData}\n    shortcuts\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List with custom items",
      "url": "examples/list/list-with-custom-items.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport React from 'react';\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\n\nvar listData = [\n  {\n    key: '1',\n    rgItemType: List.ListProps.Type.CUSTOM,\n    template: React.createElement('span', {}, 'custom item')\n  },\n  {\n    key: '2',\n    rgItemType: List.ListProps.Type.CUSTOM,\n    template: React.createElement('span', {}, 'custom item (disabled)'),\n    disabled: true\n  },\n  {\n    key: '3',\n    rgItemType: List.ListProps.Type.CUSTOM,\n    template: React.createElement('span', {}, 'custom item 3')\n  },\n];\n\nrender(\n  <List\n    data={listData}\n    shortcuts\n    onSelect={console.log.bind(console)}\n  />,\n  document.getElementById('list')\n);\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "List of users",
      "url": "examples/list/list-of-users.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n<div id='list'></div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport List from '@jetbrains/ring-ui/components/list/list';\nimport Code from '@jetbrains/ring-ui/components/code/code';\nimport ContentLayout, {Sidebar} from '@jetbrains/ring-ui/components/content-layout/content-layout';\nimport Loader from '@jetbrains/ring-ui/components/loader-inline/loader-inline'\nimport React, {Component} from 'react';\nimport Source from '@jetbrains/ring-ui/components/list/list__users-groups-source';\nimport hubConfig from '@ring-ui/docs/components/hub-config';\nimport Auth from '@jetbrains/ring-ui/components/auth/auth';\n\nclass UserList extends Component {\n  state = {\n    listData: null,\n    selected: null\n  };\n  auth = new Auth(hubConfig);\n  source = new Source(this.auth);\n\n  componentDidMount() {\n    this.loadUsers();\n  }\n\n  async loadUsers() {\n    await this.auth.init();\n    const listData = await this.source.getForList('ring', Source.Filter.USERS);\n    this.setState({listData});\n  }\n\n  handleSelect = selected => this.setState({selected});\n\n  render() {\n    const {listData, selected} = this.state;\n    return listData ? (\n      <ContentLayout>\n        <Sidebar>\n          <List\n            className=\"list\"\n            data={this.state.listData}\n            shortcuts\n            onSelect={this.handleSelect}\n          />\n        </Sidebar>\n        {selected && (\n          <Code\n            className=\"selected\"\n            language=\"json\"\n            code={JSON.stringify(selected, null, 2)}\n          />\n        )}\n      </ContentLayout>\n    ) : <Loader />;\n  }\n}\n\nrender(<UserList/>, document.getElementById('list'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Displays a list of items.",
  "attrs": {
    "name": "List",
    "category": "Components",
    "tags": "Ring UI Language",
    "description": "Displays a list of items."
  }
};