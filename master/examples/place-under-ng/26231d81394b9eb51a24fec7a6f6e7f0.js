!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1148)}({100:function(e,t,n){e.exports={default:n(196),__esModule:!0}},1148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),o=(n.n(i),n(493),n(34));window.addEventListener("scroll",function(){var e=document.querySelector(".target-element"),t=n.i(o.e)();e.style.position=t>30?"fixed":"static"})},19:function(e,t,n){e.exports=n(2)(566)},196:function(e,t,n){n(24),n(19),n(20),n(198),n(201),n(200),n(199),e.exports=n(9).Set},198:function(e,t,n){e.exports=n(2)(225)},199:function(e,t,n){e.exports=n(2)(629)},2:function(e,t){e.exports=vendor_lib},20:function(e,t,n){e.exports=n(2)(645)},200:function(e,t,n){e.exports=n(2)(630)},201:function(e,t,n){e.exports=n(2)(631)},202:function(e,t,n){e.exports=n(2)(818)},220:function(e,t,n){e.exports={default:n(237),__esModule:!0}},23:function(e,t,n){e.exports={default:n(44),__esModule:!0}},237:function(e,t,n){n(24),n(19),n(20),n(244),n(245),n(246),e.exports=n(9).Promise},24:function(e,t,n){e.exports=n(2)(529)},244:function(e,t,n){e.exports=n(2)(532)},245:function(e,t,n){e.exports=n(2)(618)},246:function(e,t,n){e.exports=n(2)(619)},26:function(e,t,n){e.exports={default:n(43),__esModule:!0}},326:function(e,t,n){"use strict";var i=e.exports={};i.isIE=function(e){return!(!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()||e&&e!==function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},i.isLegacyOpera=function(){return!!window.opera}},327:function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var i=t(e[n]);if(i)return i}}},33:function(e,t,n){e.exports=n(2)(400)},34:function(e,t,n){"use strict";function i(e){return e===document||e instanceof Node&&document.documentElement.contains(e.parentNode)}function o(e){if(e instanceof Range||i(e)){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}return b()({},x)}function r(){return"devicePixelRatio"in window?window.devicePixelRatio:1}function a(){return window.innerHeight}function s(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function c(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function l(e){e.preventDefault&&e.preventDefault()}n.d(t,"d",function(){return w}),t.h=i,t.a=o,t.b=r,t.g=a,t.e=s,t.f=c,n.d(t,"l",function(){return E}),n.d(t,"j",function(){return S}),n.d(t,"k",function(){return H}),n.d(t,"c",function(){return A}),t.i=l;var u=n(100),d=n.n(u),f=n(4),h=n.n(f),p=n(5),v=n.n(p),g=n(35),m=(n.n(g),n(23)),b=n.n(m),y=n(202),w=(n.n(y),window.getComputedStyle.bind(window)),x={top:0,right:0,bottom:0,left:0,width:0,height:0},E=function(e){return function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/g).forEach(function(n){return t[e](n)})}},S=E("add"),H=E("remove"),A=function(){function e(){h()(this,e),this._all=new d.a}return v()(e,[{key:"add",value:function(e,t,n,i){e.addEventListener(t,n,i);var o=function(){return e.removeEventListener(t,n,i)};return this._all.add(o),o}},{key:"remove",value:function(e){e(),this._all.delete(e)}},{key:"removeAll",value:function(){var e=this;this._all.forEach(function(t){return e.remove(t)})}}]),e}()},346:function(e,t,n){"use strict";function i(){function e(e,t){t||(t=e,e=0),e>r?r=e:e<a&&(a=e),i[e]||(i[e]=[]),i[e].push(t),o++}function t(){for(var e=a;e<=r;e++)for(var t=i[e],n=0;n<t.length;n++){var o=t[n];o()}}function n(){return o}var i={},o=0,r=0,a=0;return{add:e,process:t,size:n}}var o=n(347);e.exports=function(e){function t(e,t){!p&&d&&u&&0===h.size()&&a(),h.add(e,t)}function n(){for(p=!0;h.size();){var e=h;h=i(),e.process()}p=!1}function r(e){p||(void 0===e&&(e=u),f&&(s(f),f=null),e?a():n())}function a(){f=c(n)}function s(e){return clearTimeout(e)}function c(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var l=e.reporter,u=o.getOption(e,"async",!0),d=o.getOption(e,"auto",!0);d&&!u&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),u=!0);var f,h=i(),p=!1;return{add:t,force:r}}},347:function(e,t,n){"use strict";function i(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}(e.exports={}).getOption=i},349:function(e,t,n){"use strict";var i=n(326);e.exports=function(e){function t(e,t){function n(){t(e)}if(!o(e))throw new Error("Element is not detectable by this strategy.");i.isIE(8)?(c(e).object={proxy:n},e.attachEvent("onresize",n)):o(e).contentDocument.defaultView.addEventListener("resize",n)}function n(e,t,n){n||(n=t,t=e,e=null),e=e||{},e.debug,i.isIE(8)?n(t):function(e,t){function n(){function n(){if("static"===l.position){e.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(a,e,l,"top"),t(a,e,l,"right"),t(a,e,l,"bottom"),t(a,e,l,"left")}}function s(){function i(e,t){if(!e.contentDocument)return void setTimeout(function(){i(e,t)},100);t(e.contentDocument)}r||n(),i(this,function(n){t(e)})}""!==l.position&&(n(l),r=!0);var u=document.createElement("object");u.style.cssText=o,u.tabIndex=-1,u.type="text/html",u.onload=s,i.isIE()||(u.data="about:blank"),e.appendChild(u),c(e).object=u,i.isIE()&&(u.data="about:blank")}var o="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",r=!1,l=window.getComputedStyle(e),u=e.offsetWidth,d=e.offsetHeight;c(e).startSize={width:u,height:d},s?s.add(n):n()}(t,n)}function o(e){return c(e).object}function r(e){i.isIE(8)?e.detachEvent("onresize",c(e).object.proxy):e.removeChild(o(e)),delete c(e).object}e=e||{};var a=e.reporter,s=e.batchProcessor,c=e.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:r}}},35:function(e,t,n){e.exports={default:n(89),__esModule:!0}},350:function(e,t,n){"use strict";var i=n(327).forEach;e.exports=function(e){function t(e){e.className+=" "+v+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return u.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function o(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return u.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function r(e){return f(e).container.childNodes[0].childNodes[0].childNodes[0]}function a(e){return f(e).container.childNodes[0].childNodes[0].childNodes[1]}function s(e,t){if(!f(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");f(e).listeners.push(t)}function c(e,o,s){function c(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(h.get(o),"Scroll: "),u.log.apply)u.log.apply(null,t);else for(var n=0;n<t.length;n++)u.log(t[n])}}function l(e){var t=f(e).container.childNodes[0],n=window.getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function g(){var e=window.getComputedStyle(o),t={};return t.position=e.position,t.width=o.offsetWidth,t.height=o.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function m(){var e=g();f(o).startSize={width:e.width,height:e.height},c("Element start size",f(o).startSize)}function b(){f(o).listeners=[]}function y(){if(c("storeStyle invoked."),!f(o))return void c("Aborting because element has been uninstalled");var e=g();f(o).style=e}function w(e,t,n){f(e).lastWidth=t,f(e).lastHeight=n}function x(e){return r(e).childNodes[0]}function E(){return 2*p.width+1}function S(){return 2*p.height+1}function H(e){return e+10+E()}function A(e){return e+10+S()}function C(e){return 2*e+E()}function _(e){return 2*e+S()}function T(e,t,n){var i=r(e),o=a(e),s=H(t),c=A(n),l=C(t),u=_(n);i.scrollLeft=s,i.scrollTop=c,o.scrollLeft=l,o.scrollTop=u}function k(){var e=f(o).container;if(!e){e=document.createElement("div"),e.className=v,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",f(o).container=e,t(e),o.appendChild(e);var i=function(){f(o).onRendered&&f(o).onRendered()};n(e,"animationstart",i),f(o).onAnimationStart=i}return e}function L(){function e(){f(o).onExpand&&f(o).onExpand()}function t(){f(o).onShrink&&f(o).onShrink()}if(c("Injecting elements"),!f(o))return void c("Aborting because element has been uninstalled");!function(){var e=f(o).style;if("static"===e.position){o.style.position="relative";var t=function(e,t,n,i){var o=n[i];"auto"!==o&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(o)&&(e.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",t),t.style[i]=0)};t(u,o,e,"top"),t(u,o,e,"right"),t(u,o,e,"bottom"),t(u,o,e,"left")}}();var i=f(o).container;i||(i=k());var r=p.width,a=p.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,i){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0","left: "+e+"; top: "+t+"; right: "+i+"; bottom: "+n+";"}(-(1+r),-(1+a),-a,-r),l=document.createElement("div"),d=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),b=document.createElement("div");l.dir="ltr",l.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",l.className=v,d.className=v,d.style.cssText=s,h.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",m.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",b.style.cssText="position: absolute; width: 200%; height: 200%;",h.appendChild(g),m.appendChild(b),d.appendChild(h),d.appendChild(m),l.appendChild(d),i.appendChild(l),n(h,"scroll",e),n(m,"scroll",t),f(o).onExpandScroll=e,f(o).onShrinkScroll=t}function z(){function t(e,t,n){var i=x(e),o=H(t),r=A(n);i.style.width=o+"px",i.style.height=r+"px"}function n(n){var i=o.offsetWidth,r=o.offsetHeight;c("Storing current size",i,r),w(o,i,r),d.add(0,function(){if(!f(o))return void c("Aborting because element has been uninstalled");if(!s())return void c("Aborting because element container has not been initialized");if(e.debug){var n=o.offsetWidth,a=o.offsetHeight;n===i&&a===r||u.warn(h.get(o),"Scroll: Size changed before updating detector elements.")}t(o,i,r)}),d.add(1,function(){return f(o)?s()?void T(o,i,r):void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")}),n&&d.add(2,function(){return f(o)?s()?void n():void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")})}function s(){return!!f(o).container}function p(){c("notifyListenersIfNeeded invoked");var e=f(o);return function(){return void 0===f(o).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?c("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?c("Not notifying: Size already notified"):(c("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(f(o).listeners,function(e){e(o)}))}function v(){if(c("startanimation triggered."),l(o))return void c("Ignoring since element is still unrendered...");c("Element rendered.");var e=r(o),t=a(o);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(c("Scrollbars out of sync. Updating detector elements..."),n(p))}function g(){if(c("Scroll detected."),l(o))return void c("Scroll event fired while unrendered. Ignoring...");var e=o.offsetWidth,t=o.offsetHeight;e!==f(o).lastWidth||t!==f(o).lastHeight?(c("Element size changed."),n(p)):c("Element size has not changed ("+e+"x"+t+").")}if(c("registerListenersAndPositionElements invoked."),!f(o))return void c("Aborting because element has been uninstalled");f(o).onRendered=v,f(o).onExpand=g,f(o).onShrink=g;var m=f(o).style;t(o,m.width,m.height)}function N(){if(c("finalizeDomMutation invoked."),!f(o))return void c("Aborting because element has been uninstalled");var e=f(o).style;w(o,e.width,e.height),T(o,e.width,e.height)}function I(){s(o)}function O(){c("Installing..."),b(),m(),d.add(0,y),d.add(1,L),d.add(2,z),d.add(3,N),d.add(4,I)}s||(s=o,o=e,e=null),e=e||{},c("Making detectable..."),function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===window.getComputedStyle(e)}(o)?(c("Element is detached"),k(),c("Waiting until element is attached..."),f(o).onRendered=function(){c("Element is now attached"),O()}):O()}function l(e){var t=f(e);t&&(t.onExpandScroll&&o(r(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&o(a(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&o(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var u=e.reporter,d=e.batchProcessor,f=e.stateHandler.getState,h=(e.stateHandler.hasState,e.idHandler);if(!d)throw new Error("Missing required dependency: batchProcessor");if(!u)throw new Error("Missing required dependency: reporter.");var p=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,i=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:i}}(),v="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",i=t+"_animation_active",o="/* Created by the element-resize-detector library. */\n";o+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",o+="."+i+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",o+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",o+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var i=document.createElement("style");i.innerHTML=t,i.id=e,n(i)}(o)}}("erd_scroll_detection_scrollbar_style",v),{makeDetectable:c,addListener:s,uninstall:l}}},351:function(e,t,n){"use strict";function i(e){return Array.isArray(e)||void 0!==e.length}function o(e){if(Array.isArray(e))return e;var t=[];return s(e,function(e){t.push(e)}),t}function r(e){return e&&1===e.nodeType}function a(e,t,n){var i=e[t];return void 0!==i&&null!==i||void 0===n?i:n}var s=n(327).forEach,c=n(352),l=n(355),u=n(353),d=n(354),f=n(356),h=n(326),p=n(346),v=n(357),g=n(349),m=n(350);e.exports=function(e){function t(e,t,n){function c(e){var t=A.get(e);s(t,function(t){t(e)})}function l(e,t,n){A.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(r(t))t=[t];else{if(!i(t))return x.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=o(t)}var u=0,d=a(e,"callOnAdd",S.callOnAdd),f=a(e,"onReady",function(){}),h=a(e,"debug",S.debug);s(t,function(e){v.getState(e)||(v.initState(e),b.set(e));var i=b.get(e);if(h&&x.log("Attaching listener to element",i,e),!C.isDetectable(e))return h&&x.log(i,"Not detectable."),C.isBusy(e)?(h&&x.log(i,"System busy making it detectable"),l(d,e,n),k[i]=k[i]||[],void k[i].push(function(){++u===t.length&&f()})):(h&&x.log(i,"Making detectable..."),C.markBusy(e,!0),H.makeDetectable({debug:h},e,function(e){if(h&&x.log(i,"onElementDetectable"),v.getState(e)){C.markAsDetectable(e),C.markBusy(e,!1),H.addListener(e,c),l(d,e,n);var o=v.getState(e);if(o&&o.startSize){var r=e.offsetWidth,a=e.offsetHeight;o.startSize.width===r&&o.startSize.height===a||c(e)}k[i]&&s(k[i],function(e){e()})}else h&&x.log(i,"Element uninstalled before being detectable.");delete k[i],++u===t.length&&f()}));h&&x.log(i,"Already detecable, adding listener."),l(d,e,n),u++}),u===t.length&&f()}function n(e){if(!e)return x.error("At least one element is required.");if(r(e))e=[e];else{if(!i(e))return x.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=o(e)}s(e,function(e){A.removeAllListeners(e),H.uninstall(e),v.cleanState(e)})}e=e||{};var b;if(e.idHandler)b={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var y=u(),w=d({idGenerator:y,stateHandler:v});b=w}var x=e.reporter;x||(x=f(!1===x));var E=a(e,"batchProcessor",p({reporter:x})),S={};S.callOnAdd=!!a(e,"callOnAdd",!0),S.debug=!!a(e,"debug",!1);var H,A=l(b),C=c({stateHandler:v}),_=a(e,"strategy","object"),T={reporter:x,batchProcessor:E,stateHandler:v,idHandler:b};if("scroll"===_&&(h.isLegacyOpera()?(x.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),_="object"):h.isIE(9)&&(x.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),_="object")),"scroll"===_)H=m(T);else{if("object"!==_)throw new Error("Invalid strategy name: "+_);H=g(T)}var k={};return{listenTo:t,removeListener:A.removeListener,removeAllListeners:A.removeAllListeners,uninstall:n}}},352:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=r(e);return t&&!!t.isDetectable}function n(e){r(e).isDetectable=!0}function i(e){return!!r(e).busy}function o(e,t){r(e).busy=!!t}var r=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:i,markBusy:o}}},353:function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},354:function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=o(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=i.generate();return t.id=n,n}var i=e.idGenerator,o=e.stateHandler.getState;return{get:t,set:n}}},355:function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:r[n]||[]}function n(t,n){var i=e.get(t);r[i]||(r[i]=[]),r[i].push(n)}function i(e,n){for(var i=t(e),o=0,r=i.length;o<r;++o)if(i[o]===n){i.splice(o,1);break}}function o(e){var n=t(e);n&&(n.length=0)}var r={};return{get:t,add:n,removeListener:i,removeAllListeners:o}}},356:function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var i=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},357:function(e,t,n){"use strict";function i(e){return e[a]={},o(e)}function o(e){return e[a]}function r(e){delete e[a]}var a="_erd";e.exports={initState:i,getState:o,cleanState:r}},4:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},413:function(e,t){function n(e,t,n){var i;return function(){if(!t)return e.apply(this,arguments);var o=this,r=arguments,a=n&&!i;return clearTimeout(i),i=setTimeout(function(){if(i=null,!a)return e.apply(o,r)},t),a?e.apply(this,arguments):void 0}}e.exports=n},43:function(e,t,n){n(61);var i=n(9).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},44:function(e,t,n){n(71),e.exports=n(9).Object.assign},493:function(e,t,n){"use strict";var i=n(220),o=n.n(i),r=n(55),a=n.n(r),s=n(33),c=(n.n(s),n(413)),l=n.n(c),u=n(351),d=n.n(u),f=n(34),h=d()(),p=a.a.module("Ring.place-under",[]);p.directive("rgPlaceUnder",["$window","getClosestElementWithCommonParent","rgPlaceUnderHelper",function(e,t,n){return{restrict:"A",link:function(e,i,o){function r(n){n&&e.$evalAsync(function(){var e=t(a,n);if(!e)throw new Error("rgPlaceUnder cannot find element to sync with.");s.syncPositionWith(e)})}var a=i[0],s=n.createPositionSynchronizer(a,o,e);o.$observe("rgPlaceUnder",r)}}}]),p.factory("getClosestElementWithCommonParent",[function(){return function e(t,n){var i=t.parentNode;return i?i.query(n)||e(i,n):null}}]),p.factory("rgPlaceUnderHelper",["$window",function(e){var t=10,i=50,r=50;return{DEBOUNCE_INTERVAL:t,AFTER_SCROLL_RECHECK_INTERVAL:i,HEIGHT_CHECK_INTERVAL:r,createPositionSynchronizer:function(a,s,c){function u(t){return new o.a(function(n){function i(){0===t.offsetHeight?e.setTimeout(i,r):n()}i()})}function d(t){var i=n.i(f.e)(),o=e.document.documentElement&&e.document.documentElement.offsetHeight||e.document.body.offsetHeight,r=t.offsetHeight,s=t.getBoundingClientRect().top+i,c=s+r,l=Math.max(c-i,r);if(a.style.marginTop=l+g+"px",m){var u=0;if(b.length)for(var d=0;d<b.length;d++){var h=b[d].split(";"),p=e.document.querySelector(h[0]),v=h[1]?parseInt(h[1],10):0;if(p){var y=p.getBoundingClientRect();if(0===y.top)continue;var w=parseInt(e.getComputedStyle(p).getPropertyValue("margin-top"),10);(u=o-y.top+w+v)<0&&(u=0);break}}a.style.height="calc(100% - "+(parseInt(a.style.marginTop,10)+u)+"px)"}}function p(){y.map(function(e){return e()}),y=[]}function v(n){var o=this;p();var r=l()(function(){return o.onScroll(n)},i),a=l()(function(){o.onScroll(n),r()},t);this.waitForNonZeroHeight(n).then(a),e.addEventListener("scroll",a),y.push(function(){e.removeEventListener("scroll",a)}),y.push(c.$watch("show",a)),y.push(c.$on("rgPlaceUnder:sync",a));var u=s.listenToHeightChange?e.document.querySelector(s.listenToHeightChange):e.document.body;h.listenTo(u,a),y.push(function(){return h.removeAllListeners(u)})}var g=parseInt(s.placeTopOffset,10)||0,m=s.syncHeight,b=[],y=[];return s.syncBottom&&(b=s.syncBottom.split(",")),c.$on("$destroy",p),{waitForNonZeroHeight:u,onScroll:d,syncPositionWith:v}}}}]),t.a=p.name},5:function(e,t,n){"use strict";t.__esModule=!0;var i=n(26),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},55:function(e,t,n){e.exports=n(2)(394)},61:function(e,t,n){e.exports=n(2)(516)},71:function(e,t,n){e.exports=n(2)(513)},89:function(e,t,n){n(91),e.exports=n(9).Object.entries},9:function(e,t,n){e.exports=n(2)(24)},91:function(e,t,n){e.exports=n(2)(612)}});