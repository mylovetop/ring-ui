---
title: Breaking Changes
category: Docs
order: 2
---

See the “breaking change” commits [in Upsource](https://upsource.jetbrains.com/ring-ui/view?query=path:%20%7B%2A%2Fbreaking-changes.md%7D%20and%20not%20%22Wording%22).

### 15-11-2016: Footer no longer supports the "ring-footer_floating" modifier, use "floating" prop instead

Before:
```
<Footer className="ring-footer_floating"/>
```

After:
```
<Footer floating={true}/>
```

### 31-10-2016: ListItem and ListCustom no longer pass all props to DOM elements

Since React prohibits passing non-supported props to DOM elements we now have a whitelist of supported props declared in PropTypes.
Other props are no longer passed to `ListItem` and `ListCustom`.

### 29-08-2016: The long-deprecated .ring-input__error-bubble and .ring-form__footer styles were removed

Please migrate to `.ring-error-bubble` and `.ring-panel`

### 25-08-2016: SelectNg requires pack size to be specified in infinite scroll mode

infiniteScrollPackSize should match the value of `$top` REST parameter.

Before:
```
<rg-select ...
           with-infinite-scroll="true">
</rg-select>
```

After:
```
<rg-select ...
           infinite-scroll-pack-size="50">
</rg-select>
```

### 10-08-2016: Introduced new versioning system

To make Ring UI installable with `npm install ring-ui` we have changed the versioning scheme.

Before:
```
2.4.0-4995 (major.minor.patch-build)
```

After:
```
2.4.4996 (major.minor.build)
```

### 29-06-2016: Added "ring-" suffix to the constants in palette/palette.scss

Before:
```
$palette-array, $palette-white-text, $palette-grey-text
```

After:
```
$ring-palette-array, $ring-palette-white-text, $ring-palette-grey-text
```

### 27-05-2016: rgba-attribute mixin was removed

Use rgba colors directly as we no longer support ancient IE versions.

Before:
```
  @include rgba-attribute('border-color', rgba(0, 0, 0, 0.15));
```

After:
```
  border-color: rgba(0, 0, 0, 0.15);
```

### 04-04-2016: Browser requirements for Autoprefixer should be specified in the target project (RG-963)

Place a [`browserslist`](https://github.com/ai/browserslist#config-file) file in your project directory.
Default query is `> 1%, last 2 versions, Firefox ESR` which currently resolves to:

```
and_chr 49
and_uc 9.9
android 4.4
chrome 49
chrome 48
edge 13
edge 12
firefox 45
firefox 44
firefox 38
ie 11
ie 10
ie_mob 11
ie_mob 10
ios_saf 9.3
ios_saf 9.0-9.2
ios_saf 8.1-8.4
op_mini 5.0-8.0
opera 36
opera 35
safari 9.1
safari 9
```

### 17-05-2016: ES6! All existing code was converted, new code should be written in ES6 only

### 22-04-2016: Permissions: parameter "config" does not have property config.serviceId, use config.services instead

Before:
```
new Permissions(auth, {serviceId: auth.serviceId})
```

After:
```
new Permissions(auth, {services: [auth.serviceId]})
```

### 20-02-2016: `Button.Modifiers` enum was removed, attributes should be used instead

Before:
```
<Button modifier={Button.Modifiers.BLUE}>{'Button text'}</Button>
```

After:
```
<Button blue={true}>{'Button text'}</Button>
```

### 03-02-2016: `in-space` parameter of `rg-permission` and `rg-permission-if` directives was renamed to `in-project` (RG-750)

Before:
```
<div rg-permission="space-read" in-space="0-0-0-0-0">
 Is visible if user has permission 'read-space' in space 0-0-0-0-0.
</div>
```

After:
```
<div rg-permission="project-read" in-project="0-0-0-0-0">
 Is visible if user has permission 'read-project' in project 0-0-0-0-0.
</div>
```

### 28-01-2016: Changed the way form control sizes are set

To set the size of the form controls, use the `ring-input-size_<size>` class, where `<size>` can be "sx" (50px), "s" (100px), "md" (200px) or "l" (400px).

Before:
```
<div class="ring-form">
  <input class="ring-input"/>
  ...
  <input class="ring-input ring-input_long"/>
</div>
```

After:
```
<div class="ring-form">
  <input class="ring-input ring-input-size_md"/>
  ...
  <input class="ring-input ring-input-size_l"/>
</div>
```

### 28-01-2016: CSS class .ring-form__error-bubble was renamed to .ring-error-bubble

### 11-01-2016: Popup API change: "Corner" and "Direction" props replaced with "Directions" array

The arcane bitwise API was replaced with a more straightforward [direction specification](https://en.bem.info/libs/bem-components/v2.4.0/desktop/popup/#directions-field).
"Corner" and "Direction" properties were dropped, "Directions" array was introduced. Example:
Before:
```
props: {
  ...
  Corner: Popup.PopupProps.Corner.BOTTOM_LEFT,
  Direction: Popup.PopupProps.Direction.DOWN | Popup.PopupProps.Direction.RIGHT
  ...
}
```
After:
```
props: {
  ...
  Directions: Popup.PopupProps.Directions.BOTTOM_RIGHT
  ...
}
```

### 22-12-2015: "form-ng__update-text" component was removed

Please use the `rg-save-field` component instead.

### 18-12-2015: "textarea" component was removed

Please use `ring-input` instead.

### 11-12-2015: SVGO is not used in Ring UI anymore, its config has been removed

`jetbrains-icons` (since 1.0.12) and `jetbrains-logos` (since 1.0.5) packages now contain compressed SVG images, so there is no more `RingSVGOConfig` in `webpack.config.js`.
Migration path: update `jetbrains-icons` and `jetbrains-logos`.

### 07-12-2015: Changes in markup of ring-input, ring-textarea, error-bubble and ring-form__control (RG-965)

* If ring-input or ring-textarea is used outside of `ring-form__control`, it should have class `ring-input_medium` (`ring-textarea_medium`),
otherwise it will have a width of 100%
* Class `ring-input_full-width` renamed to `ring-form__control_full-width` (as `ring-input` is now full-width by default)

### 19-11-2015: LoaderInline was reimplemented

Usages should be updated if you're not using the React component. ([See example](loader-inline.html)).

### 02-11-2015: Auth: Hub 1.0 defaults applied

* `redirect` param in Auth is now `false` by default
* `redirect` param in Auth doesn't have the `background-unsafe` value anymore, so it should be removed from project's Auth configs
* Background token refresh always uses `request_credentials` mode `silent`

### 30-10-2015: webpack.config.js does not provide loaders for applications' code anymore, you will need to set up all the necessary loaders in your project configuration.

### 30-10-2015: Icons are now loaded using [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader). They were also moved to a separate package (RG-550, RG-834)

Icon's `glyph` property now accepts URL from loader instead of ID, e.g. `<Icon glyph={require('jetbrains-icons/add.svg')}>`.

### 30-10-2015: Migration to ES6, React 0.14 and Babel (RG-361, RG-420)

jQuery, when.js, and mout are not used anymore. See the detailed [migration guide](http://ring-ui.github.io/migration-to-2.3.0.html).

### 30-10-2015: Components should be addressed by full path

E.g. you should use import `ring-ui/components/react-ng/react-ng` instead of `react-ng/react-ng`.

### 29-10-2015: Loader was renamed to LoaderInline to give place to the brand new Loader

LoaderInline is `display: inline-block` by default and shouldn't be used as the main loader anymore.

### 22-05-2015: "user2" icon duplicate removed

### 06-05-2015: Unused filtering functionality removed from `popup-menu` (RG-700)

`filter` property doesn't make sense anymore

### 06-05-2015: `form-ng__update-text` is no more required in `form-ng` (part of RG-676)

`form-ng__update-text` should be required separately from `form-ng` in consuming code

### 28-04-2015: `ring-island` refactoring (RG-662)

* Renamed `_island.scss` to `island.scss`
* Removed `display: block` from the main class and dropped the `.ring-island_inline` modifier completely

### 21-04-2015: Removed deprecated Auth.prototype.isGuest method (RG-644)

Use the `guest` field of the user object instead. It is included by default in `Auth.prototype.requestUser` response.

### 20-04-2015: userFields introduced in Auth config (RG-640)

It's now required to set `userFields` in the `Auth` config if any fields other than `guest, id, name, profile/avatar/url` are needed in auth.requestUser.
Please note that you need to explicitly specify `profile` sub-fields to request them, specifying `profile` won't do anything.

Example:
```js
var auth = new Auth({
  serverUri: 'http://localhost/',
  userFields: ['login', 'profile/email']
});
```