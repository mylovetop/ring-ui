!function(n){function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.i=function(n){return n},e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="/",e(e.s=1104)}({10:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var i=t(68),r=o(i),s=t(65),a=o(s),l=t(63),c=o(l),u=t(21),f=o(u);e.default=function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));n.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(n,e):(0,r.default)(n,e))}},100:function(n,e,t){n.exports={default:t(196),__esModule:!0}},11:function(n,e,t){"use strict";e.__esModule=!0;var o=t(21),i=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?n:e}},1104:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(55),i=t.n(o),r=t(981);i.a.module("ExampleApp",[r.a]).run(["loaderScreen",function(n){n.setVisible(!0),n.startInitialLoading()}])},12:function(n,e){function t(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=o(i);return[t].concat(i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"})).concat([r]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var s=n[i];"number"==typeof s[0]&&o[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),e.push(s))}},e}},15:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* stylelint-disable color-no-hex */\n\n:root {\n  /* Element */\n  --ring-line-color: #dfe5eb;\n  --ring-dark-line-color: #263b4c;\n  --ring-borders-color: #b8d1e5;\n  --ring-icon-color: #b8d1e5;\n  --ring-icon-color: var(--ring-borders-color);\n  --ring-border-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: #dbdbdb;\n  --ring-icon-disabled-color: var(--ring-border-disabled-color);\n  --ring-border-hover-color: #80c6ff;\n  --ring-icon-hover-color: #80c6ff;\n  --ring-icon-hover-color: var(--ring-border-hover-color);\n  --ring-main-color: #008eff;\n  --ring-main-hover-color: #007ee5;\n  --ring-icon-error-color: #db5860;\n  --ring-icon-warning-color: #eda200;\n  --ring-icon-success-color: #59a869;\n  --ring-pale-control-color: #cfdbe5;\n  --ring-popup-border-components: 0, 42, 76;\n  --ring-popup-border-color: rgba(0, 42, 76, .1);\n  --ring-popup-border-color: rgba(var(--ring-popup-border-components), 0.1);\n  --ring-popup-shadow-color: rgba(0, 42, 76, .15);\n  --ring-popup-shadow-color: rgba(var(--ring-popup-border-components), 0.15);\n  --ring-message-shadow-color: rgba(0, 42, 76, .3);\n  --ring-message-shadow-color: rgba(var(--ring-popup-border-components), 0.3);\n\n  /* Text */\n  --ring-search-color: #669ecc;\n  --ring-hint-color: #406380;\n  --ring-link-color: #0f5b99;\n  --ring-link-hover-color: #ff008c;\n  --ring-error-color: #c22731;\n  --ring-warning-color: #cc8b00;\n  --ring-success-color: #1c8c32;\n  --ring-text-color: #444;\n  --ring-dark-text-color: #fff;\n  --ring-heading-color: #222;\n  --ring-secondary-color: #999;\n  --ring-dark-secondary-color: #888;\n  --ring-disabled-color: #bbb;\n  --ring-dark-active-color: #ccc;\n\n  /* Background */\n  --ring-content-background-color: #fff;\n  --ring-sidebar-background-color: #f7f9fa;\n  --ring-selected-background-color: #d4edff;\n  --ring-hover-background-color: #f2f9ff;\n  --ring-dark-selected-background-color: #002a4d;\n  --ring-message-background-color: rgba(0, 21, 38, .9);\n  --ring-navigation-background-color: #000;\n\n  /* Metrics */\n  --ring-border-radius: 3px;\n  --ring-border-radius-small: 2px;\n  --ring-font-size-larger: 14px;\n  --ring-font-size: 13px;\n  --ring-font-size-smaller: 12px;\n  --ring-line-height-taller: 21px;\n  --ring-line-height: 20px;\n  --ring-line-height-lower: 18px;\n  --ring-line-height-lowest: 16px;\n  --ring-ease: 0.3s ease-out;\n  --ring-fast-ease: 0.15s ease-out;\n\n  /* TODO: return raw value back if this issue fixed https://github.com/JLHwung/postcss-font-family-system-ui/issues/65 */\n  --ring-font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  --ring-font-family-monospace: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n\n  /* Common z-index-values */\n\n  /* Invisible element is an absolutely positioned element which should be below */\n  /* all other elements on the page */\n  --ring-invisible-element-z-index: -1;\n\n  /* z-index for position: fixed elements */\n  --ring-fixed-z-index: 1;\n\n  /* Elements that should overlay all other elements on the page */\n  --ring-overlay-z-index: 5;\n\n  /* Alerts should de displayed above overlays */\n  --ring-alert-z-index: 6;\n}\n',""])},17:function(n,e,t){function o(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=g[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(f(o.parts[r],e))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(f(o.parts[r],e));g[o.id]={id:o.id,refs:1,parts:s}}}}function i(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],s=e.base?r[0]+e.base:r[0],a=r[1],l=r[2],c=r[3],u={css:a,media:l,sourceMap:c};o[s]?o[s].parts.push(u):t.push(o[s]={id:s,parts:[u]})}return t}function r(n,e){var t=b(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),w.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=b(n.insertAt.before,t);t.insertBefore(e,i)}}function s(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=w.indexOf(n);e>=0&&w.splice(e,1)}function a(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var t=u();t&&(n.attrs.nonce=t)}return c(e,n.attrs),r(n,e),e}function l(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",c(e,n.attrs),r(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(){return t.nc}function f(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var c=y++;t=x||(x=a(e)),o=d.bind(null,t,c,!1),i=d.bind(null,t,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(e),o=p.bind(null,t,e),i=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),o=h.bind(null,t),i=function(){s(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function d(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=k(e,i);else{var r=document.createTextNode(i),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(r,s[e]):n.appendChild(r)}}function h(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=_(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var g={},v=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n,e){return e?e.querySelector(n):document.querySelector(n)},b=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=m.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),x=null,y=0,w=[],_=t(60);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=v()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=i(n,e);return o(t,e),function(n){for(var r=[],s=0;s<t.length;s++){var a=t[s],l=g[a.id];l.refs--,r.push(l)}n&&o(i(n,e),e);for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete g[l.id]}}}};var k=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},19:function(n,e,t){n.exports=t(2)(566)},196:function(n,e,t){t(24),t(19),t(20),t(198),t(201),t(200),t(199),n.exports=t(9).Set},198:function(n,e,t){n.exports=t(2)(225)},199:function(n,e,t){n.exports=t(2)(629)},2:function(n,e){n.exports=vendor_lib},20:function(n,e,t){n.exports=t(2)(645)},200:function(n,e,t){n.exports=t(2)(630)},201:function(n,e,t){n.exports=t(2)(631)},202:function(n,e,t){n.exports=t(2)(818)},21:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var i=t(67),r=o(i),s=t(66),a=o(s),l="function"==typeof a.default&&"symbol"==typeof r.default?function(n){return typeof n}:function(n){return n&&"function"==typeof a.default&&n.constructor===a.default&&n!==a.default.prototype?"symbol":typeof n};e.default="function"==typeof a.default&&"symbol"===l(r.default)?function(n){return void 0===n?"undefined":l(n)}:function(n){return n&&"function"==typeof a.default&&n.constructor===a.default&&n!==a.default.prototype?"symbol":void 0===n?"undefined":l(n)}},23:function(n,e,t){n.exports={default:t(44),__esModule:!0}},24:function(n,e,t){n.exports=t(2)(529)},26:function(n,e,t){n.exports={default:t(43),__esModule:!0}},313:function(n,e,t){"use strict";var o=t(4),i=t.n(o),r=t(5),s=t.n(r),a=function(){function n(){for(var e=this,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];i()(this,n),this.$inject={},this.constructor.$inject.forEach(function(n,t){e.$inject[n]=o[t]})}return s()(n,null,[{key:"controller",get:function(){return this}}]),n}();a.$inject=[],e.a=a},33:function(n,e,t){n.exports=t(2)(400)},34:function(n,e,t){"use strict";function o(n){return n===document||n instanceof Node&&document.documentElement.contains(n.parentNode)}function i(n){if(n instanceof Range||o(n)){var e=n.getBoundingClientRect();return{top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}}return b()({},w)}function r(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function s(){return window.innerHeight}function a(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function l(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(n){n.preventDefault&&n.preventDefault()}t.d(e,"d",function(){return y}),e.h=o,e.a=i,e.b=r,e.g=s,e.e=a,e.f=l,t.d(e,"l",function(){return _}),t.d(e,"j",function(){return k}),t.d(e,"k",function(){return S}),t.d(e,"c",function(){return M}),e.i=c;var u=t(100),f=t.n(u),d=t(4),h=t.n(d),p=t(5),g=t.n(p),v=t(35),m=(t.n(v),t(23)),b=t.n(m),x=t(202),y=(t.n(x),window.getComputedStyle.bind(window)),w={top:0,right:0,bottom:0,left:0,width:0,height:0},_=function(n){return function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).forEach(function(t){return e[n](t)})}},k=_("add"),S=_("remove"),M=function(){function n(){h()(this,n),this._all=new f.a}return g()(n,[{key:"add",value:function(n,e,t,o){n.addEventListener(e,t,o);var i=function(){return n.removeEventListener(e,t,o)};return this._all.add(i),i}},{key:"remove",value:function(n){n(),this._all.delete(n)}},{key:"removeAll",value:function(){var n=this;this._all.forEach(function(e){return n.remove(e)})}}]),n}()},35:function(n,e,t){n.exports={default:t(89),__esModule:!0}},4:function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},43:function(n,e,t){t(61);var o=t(9).Object;n.exports=function(n,e,t){return o.defineProperty(n,e,t)}},434:function(n,e,t){"use strict";var o=t(23),i=t.n(o),r=t(4),s=t.n(r),a=t(5),l=t.n(a),c=t(33),u=(t.n(c),t(34)),f=t(439),d=t.n(f),h=function(){function n(e){var t=e.x,o=e.y,i=e.radius,r=e.color;s()(this,n),this.radius=i,this.x=t,this.y=o,this.color=r,this.decay=.01,this.life=1}return l()(n,[{key:"step",value:function(){this.life-=this.decay}},{key:"isAlive",value:function(){return this.life>=0}},{key:"draw",value:function(n){var e=this.life>=0?this.life:0;n.fillStyle="rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", "+e+")",n.beginPath(),n.arc(this.x+this.radius,this.y+this.radius,this.radius,0,2*Math.PI),n.fill()}}]),n}(),p=function(){function n(e,t){s()(this,n),this.isRunning=!1,this.props=i()({},n.defaultProps,t),this.renderInNodeAndStart(e)}return l()(n,null,[{key:"calculateGradient",value:function(n,e,t){var o=function(n,e){return n+Math.round((e-n)*t)};return{r:o(n.r,e.r),g:o(n.g,e.g),b:o(n.b,e.b)}}}]),l()(n,[{key:"setCanvasSize",value:function(){var e=n.getPixelRatio(),t=this.props.size*e;this.canvas.width=t,this.canvas.height=t,this.canvas.style.width=this.props.size+"px",this.canvas.style.height=this.props.size+"px",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(e,e)}},{key:"initializeLoader",value:function(){this.setCanvasSize(),this.height=this.props.size,this.width=this.props.size,this.particles=[],this.baseSpeed=1,this.colorIndex=0,this.maxRadius=10,this.minRadius=6,this.colorChangeTick=40,this.x=0,this.y=0,this.radius=8,this.hSpeed=1.5,this.vSpeed=.5,this.radiusSpeed=.05,this.tick=0,this.prepareInitialState(100),this.isRunning=!0,this.loop()}},{key:"prepareInitialState",value:function(n){for(var e=0;e<n;e++)this.step()}},{key:"handleLimits",value:function(n,e,t,o){var i=Math.random(this.baseSpeed)-this.baseSpeed/2;return n+2*e+this.baseSpeed>=o?-(this.baseSpeed+i):n<=this.baseSpeed?this.baseSpeed+i:t}},{key:"calculateNextCoordinates",value:function(){this.x+=this.hSpeed,this.y+=this.vSpeed,this.hSpeed=this.handleLimits(this.x,this.radius,this.hSpeed,this.width),this.vSpeed=this.handleLimits(this.y,this.radius,this.vSpeed,this.height)}},{key:"calculateNextRadius",value:function(){this.radius+=this.radiusSpeed,(this.radius>this.maxRadius||this.radius<this.minRadius)&&(this.radiusSpeed=-this.radiusSpeed)}},{key:"getNextColor",value:function(){var e=this.props.colors,t=e[this.colorIndex],o=e[this.colorIndex+1]||e[0];return n.calculateGradient(t,o,this.tick/this.colorChangeTick)}},{key:"nextTick",value:function(){++this.tick>this.colorChangeTick&&(this.tick=0,++this.colorIndex>this.props.colors.length-1&&(this.colorIndex=0))}},{key:"step",value:function(){this.nextTick(),this.calculateNextCoordinates(),this.calculateNextRadius(),this.particles.forEach(function(n){return n.step()}),this.particles.push(new h({x:this.x,y:this.y,radius:this.radius,color:this.getNextColor()}))}},{key:"removeDeadParticles",value:function(){this.particles=this.particles.filter(function(n){return n.isAlive()})}},{key:"draw",value:function(){var n=this;this.ctx.clearRect(0,0,this.width,this.height),this.removeDeadParticles(),this.particles.forEach(function(e){return e.draw(n.ctx)})}},{key:"loop",value:function(){var n=this;this.step(),this.draw(),this.isRunning&&window.requestAnimationFrame(function(){return n.loop()})}},{key:"updateMessage",value:function(n){this.textNode.textContent=n||""}},{key:"destroy",value:function(){this.isRunning=!1}},{key:"renderInNodeAndStart",value:function(n){return this.canvas=document.createElement("canvas"),this.canvas.dataset.test="ring-loader",this.canvas.classList.add(d.a.canvas),this.textNode=document.createElement("div"),this.textNode.dataset.test="ring-loader-text",this.textNode.classList.add(d.a.text),this.textNode.textContent=this.props.message?this.props.message:"",n.appendChild(this.canvas),n.appendChild(this.textNode),this.initializeLoader(),n}}],[{key:"getPixelRatio",value:function(){return t.i(u.b)()}}]),n}();p.defaultProps={size:64,colors:[{r:215,g:60,b:234},{r:145,g:53,b:224},{r:88,g:72,b:224},{r:37,g:183,b:255},{r:89,g:189,b:0},{r:251,g:172,b:2},{r:227,g:37,b:129}]},e.a=p},436:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.i(t(7),void 0),e.push([n.i,"@-webkit-keyframes rotation-keyframes_556 {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes rotation-keyframes_556 {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.canvas_f75 {\n  display: block;\n\n  margin: 16px auto;\n\n  -webkit-animation: rotation-keyframes_556 36s linear infinite;\n\n          animation: rotation-keyframes_556 36s linear infinite;\n  pointer-events: none;\n}\n\n.text_e8e {\n  text-align: center;\n\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n",""]),e.locals={unit:""+t(7).locals.unit,canvas:"canvas_f75","rotation-keyframes":"rotation-keyframes_556",text:"text_e8e"}},439:function(n,e,t){var o=t(436);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,t(17)(o,i),o.locals&&(n.exports=o.locals)},44:function(n,e,t){t(71),n.exports=t(9).Object.assign},45:function(n,e,t){t(72);var o=t(9).Object;n.exports=function(n,e){return o.create(n,e)}},46:function(n,e,t){t(73);var o=t(9).Object;n.exports=function(n,e){return o.getOwnPropertyDescriptor(n,e)}},47:function(n,e,t){t(75),n.exports=t(9).Object.getPrototypeOf},48:function(n,e,t){t(76),n.exports=t(9).Object.setPrototypeOf},49:function(n,e,t){t(77),t(24),t(78),t(79),n.exports=t(9).Symbol},5:function(n,e,t){"use strict";e.__esModule=!0;var o=t(26),i=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()},50:function(n,e,t){t(19),t(20),n.exports=t(70).f("iterator")},52:function(n,e,t){n.exports={default:t(46),__esModule:!0}},55:function(n,e,t){n.exports=t(2)(394)},60:function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i))return n;var r;return r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},61:function(n,e,t){n.exports=t(2)(516)},63:function(n,e,t){n.exports={default:t(45),__esModule:!0}},64:function(n,e,t){n.exports={default:t(69),__esModule:!0}},65:function(n,e,t){n.exports={default:t(48),__esModule:!0}},654:function(n,e,t){e=n.exports=t(12)(!1),e.i(t(15),""),e.push([n.i,".loaderScreen_84d {\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n\n  text-align: center;\n  vertical-align: middle\n}\n\n.loaderScreen_84d::before {\n  display: inline-block;\n  height: 100%;\n  content: '';\n  vertical-align: middle;\n}\n\n.loader_144 {\n  display: inline-block;\n}\n\n.loaderWithoutSpacing_ab3 canvas {\n  margin: 0;\n}\n",""]),e.locals={loaderScreen:"loaderScreen_84d",loader:"loader_144",loaderWithoutSpacing:"loaderWithoutSpacing_ab3"}},66:function(n,e,t){n.exports={default:t(49),__esModule:!0}},67:function(n,e,t){n.exports={default:t(50),__esModule:!0}},68:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0;var i=t(26),r=o(i),s=t(52),a=o(s),l=t(64),c=o(l);e.default=function(n,e){for(var t=(0,c.default)(e),o=0;o<t.length;o++){var i=t[o],s=(0,a.default)(e,i);s&&s.configurable&&void 0===n[i]&&(0,r.default)(n,i,s)}return n}},69:function(n,e,t){t(74);var o=t(9).Object;n.exports=function(n){return o.getOwnPropertyNames(n)}},7:function(n,e,t){e=n.exports=t(12)(!1),e.push([n.i,'/* https://readymag.com/artemtiunov/RingUILanguage/colours/ */\n\n/*\nUnit shouldn\'t be CSS custom property because it is not intended to change\nAlso it won\'t form in FF47 https://bugzilla.mozilla.org/show_bug.cgi?id=594933\n*/\n\n.clearfix_1e8::after {\n  display: block;\n  clear: both;\n  content: \'\';\n}\n\n.font_3f3 {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;\n  font-family: var(--ring-font-family);\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  line-height: 20px;\n  line-height: var(--ring-line-height);\n}\n\n.font-lower_cf2 {\n\n  line-height: 18px;\n\n  line-height: var(--ring-line-height-lower);\n}\n\n.font-smaller_1da {\n\n  font-size: 12px;\n\n  font-size: var(--ring-font-size-smaller);\n}\n\n.font-smaller-lower_c69 {\n\n  line-height: 16px;\n\n  line-height: var(--ring-line-height-lowest);\n}\n\n.font-larger-lower_fa1 {\n\n  font-size: 14px;\n\n  font-size: var(--ring-font-size-larger);\n}\n\n.font-larger_938 {\n\n  line-height: 21px;\n\n  line-height: var(--ring-line-height-taller);\n}\n\n/* To be used at large sizes */\n/* As close as possible to Helvetica Neue Thin (to replace Gotham) */\n.thin-font_52b {\n  font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  font-size: var(--ring-font-size);\n  font-weight: 100; /* Renders Helvetica Neue UltraLight on OS X  */\n}\n\n.monospace-font_b2e {\n  font-family: Menlo, "Bitstream Vera Sans Mono", "Ubuntu Mono", Consolas, "Courier New", Courier, monospace;\n  font-family: var(--ring-font-family-monospace);\n  font-size: 12px;\n  font-size: var(--ring-font-size-smaller);\n}\n\n.ellipsis_894 {\n  overflow: hidden;\n\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n/* Note: footer also has top margin which isn\'t taken into account here */\n\n/* Media breakpoints (minimal values) */\n\n/* Media queries */\n',""]),e.locals={unit:"8px","footer-height":"64px","breakpoint-small":"640px","breakpoint-middle":"960px","breakpoint-large":"1200px","extra-small-screen-media":"(max-width: 639px)","small-screen-media":"(min-width: 640px) and (max-width: 959px)","middle-screen-media":"(min-width: 960px) and (max-width: 1199px)","large-screen-media":"(min-width: 1200px)",clearfix:"clearfix_1e8",font:"font_3f3","font-lower":"font-lower_cf2 font_3f3","font-smaller":"font-smaller_1da font-lower_cf2 font_3f3","font-smaller-lower":"font-smaller-lower_c69 font-smaller_1da font-lower_cf2 font_3f3","font-larger-lower":"font-larger-lower_fa1 font-lower_cf2 font_3f3","font-larger":"font-larger_938 font-larger-lower_fa1 font-lower_cf2 font_3f3","thin-font":"thin-font_52b","monospace-font":"monospace-font_b2e",ellipsis:"ellipsis_894"}},70:function(n,e,t){n.exports=t(2)(222)},71:function(n,e,t){n.exports=t(2)(513)},72:function(n,e,t){n.exports=t(2)(514)},728:function(n,e,t){var o=t(654);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0,t(17)(o,i),o.locals&&(n.exports=o.locals)},73:function(n,e,t){n.exports=t(2)(518)},74:function(n,e,t){n.exports=t(2)(519)},75:function(n,e,t){n.exports=t(2)(520)},76:function(n,e,t){n.exports=t(2)(528)},77:function(n,e,t){n.exports=t(2)(576)},78:function(n,e,t){n.exports=t(2)(638)},79:function(n,e,t){n.exports=t(2)(639)},8:function(n,e,t){n.exports={default:t(47),__esModule:!0}},89:function(n,e,t){t(91),n.exports=t(9).Object.entries},9:function(n,e,t){n.exports=t(2)(24)},91:function(n,e,t){n.exports=t(2)(612)},926:function(n,e,t){"use strict";var o=t(8),i=t.n(o),r=t(4),s=t.n(r),a=t(5),l=t.n(a),c=t(11),u=t.n(c),f=t(10),d=t.n(f),h=t(55),p=t.n(h),g=t(313),v=t(434),m=p.a.module("Ring.loader",[]),b=function(n){function e(){var n;s()(this,e);for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];var a=u()(this,(n=e.__proto__||i()(e)).call.apply(n,[this].concat(o))),l=a.$inject.$element;return a.loader=new v.a(l[0],{message:a.message}),a}return d()(e,n),l()(e,[{key:"$onDestroy",value:function(){this.loader.destroy()}},{key:"$onChanges",value:function(n){this.loader.updateMessage(n.message.currentValue)}}]),e}(g.a);b.$inject=["$element"],b.bindings={message:"@"},m.component("rgLoader",b),e.a=m.name},981:function(n,e,t){"use strict";var o=t(55),i=t.n(o),r=t(926),s=t(728),a=t.n(s),l=i.a.module("Ring.loader-screen",[r.a]);l.service("loaderScreen",["$timeout","$rootScope",function(n,e){var t=this,o=!1,i=!1,r=void 0,s=void 0;this.startLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;s||(s=n(function(){t.setVisible(!0)},e))},this.stopLoading=function(){s&&(n.cancel(s),s=null),t.setVisible(!1)},this.startInitialLoading=function(){o=!0,t.setVisible(!0)},this.stopInitialLoading=function(){o=!1,t.setVisible(!1)},e.isInitialLoading=function(){return o},e.isLoaderVisible=function(){return r},e.isLoadingFailed=function(){return i},this.failInitialLoading=function(n){t.stopInitialLoading(),i=!0,e.error=n},this.setVisible=function(n){r=n},e.$on("$routeChangeSuccess",function(){t.stopInitialLoading()}),e.$on("$routeChangeError",function(n,e,o,i){i&&(i.silent||i.authRedirect)||t.failInitialLoading(i)})}]),l.directive("rgLoaderScreen",[function(){return{restrict:"A",scope:{message:"@rgLoaderScreen"},template:'\n<div class="'+a.a.loaderScreen+'" ng-if="$root.isLoaderVisible()">\n  <rg-loader class="'+a.a.loader+'"\n    message="{{$root.isInitialLoading() ? message : \'\'}}"></rg-loader>\n</div>\n    '}}]),e.a=l.name}});