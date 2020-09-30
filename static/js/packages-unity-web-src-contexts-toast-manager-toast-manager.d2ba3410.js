(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={borderRadius:{default:4,rem:(0,((r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r}).default)(4)}};t.default=o},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},o={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};t.types=o;var a=r;t.default=a},"./packages/unity-core/lib/typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var r,o=(r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var a={h1:{px:32,rem:(0,o.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,o.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,o.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,o.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,o.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,o.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,o.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,o.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,o.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,o.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=a},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var r,o=(r=n("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var a={},i=function(e,t,n){var r="".concat(e,":").concat(t,":").concat(n);if(a[r])return a[r];var i=(0,o.default)(t)[e](n).rgb().string();return a[r]=i,i};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(a[n])return a[n];var r=(0,o.default)(e).rgb().array();r.push(t);var i="rgba(".concat(r.join(","),")");return a[n]=i,i}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/components/Modals/ModalPortal.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-dom/index.js"),i=n.n(a);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,a=f(s);function s(){var e;c(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(d(e=a.call.apply(a,[this].concat(n))),"state",{ready:!1}),e}return t=s,(n=[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),document.body.appendChild(this.el),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.el&&document.body.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.noPortal,t=this.state.ready;return e?o.a.createElement("div",null,this.props.children):t?i.a.createPortal(this.props.children,this.el):null}}])&&u(t.prototype,n),r&&u(t,r),s}(r.Component);b.__docgenInfo={description:"",methods:[],displayName:"ModalPortal"}},"./packages/unity-web/src/contexts/ToastManager/ToastManager.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./packages/unity-web/src/components/Modals/ModalPortal.js"),s=n("./packages/unity-web/src/components/Notification/Notification.js");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=Object(r.default)("div",{target:"e1wwvadz0"})({name:"eg4d83",styles:"display:flex;flex-flow:column;position:fixed;top:4rem;left:50%;z-index:99999;> *{max-width:auto;margin:0.25rem;display:inline-block;transform:translateX(-50%);width:auto !important;}"}),g=function(e){var t=e.message,n=y(e,["message"]);return a.a.createElement(s.a,n,t)},h=Object(o.createContext)(),v={toasts:[]},j=function(e,t){switch(t.type){case"create":return e.toasts.find((function(e){return e.dedupId===t.data.dedupId}))?e:{toasts:[t.data].concat(p(e.toasts))};case"clear":return{toasts:e.toasts.filter((function(e){return e.dedupId!==t.dedupId}))};default:return e}},w=function(e){var t=f(Object(o.useReducer)(j,v),2),n=t[0],r=t[1],s={createToast:function(e){var t=e.dedupId||Date.now();r({type:"create",data:u({dedupId:t},e)}),setTimeout((function(){r({type:"clear",dedupId:t})}),3e3)}};return a.a.createElement(h.Provider,{value:s},a.a.createElement(i.a,null,a.a.createElement(b,null,n.toasts.map((function(e){return a.a.createElement(g,Object.assign({key:e.dedupId},e,{variant:"thin"}))})))),e.children)};t.b=h,w.__docgenInfo={description:"",methods:[],displayName:"ToastManagerProvider"}},"./packages/unity-web/src/contexts/ToastManager/ToastManager.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/contexts/ToastManager/ToastManager.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(d,e);var t,n,r,c=p(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=c.call(this,e)).layout=null,t}return t=d,(n=[{key:"render",value:function(){var e=this.props,t=e.components,n=u(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"toastmanager"}},"ToastManager"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Wrap your app with the provider:"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { ToastManagerProvider } from '@clarityhub/unity-web/lib/contexts/ToastManager';\n")),o.a.createElement(a.MDXTag,{name:"p",components:t},"To use toasts in your app, use the following with ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"useContext"),":"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import ToastManager from '@clarityhub/unity-web/lib/contexts/ToastManager';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"toastmanagerprovider-example"}},"ToastManagerProvider Example"),o.a.createElement(i.e,{__position:0,__code:"<ToastManagerProvider>Your content here</ToastManagerProvider>",__scope:{props:this?this.props:n,ToastManager:s.b,ToastManagerProvider:s.a}},o.a.createElement(s.a,null,"Your content here")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"toastmanager-usage-example"}},"ToastManager Usage Example"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { useContext } from 'react';\nimport ToastManager from '@clarityhub/unity-web/lib/contexts/ToastManager';\n\nconst CopyToClipboard = ({ children }) => {\n    const { createToast } = useContext(ToastManager);\n\n    const onClick = (data) => {\n        copyToClipboard(data);\n\n        createToast({\n            dedupId: 'copy-to-clipboard',\n            message: 'Copied!',\n            type: 'success',\n        });\n    };\n\n    return children({ onClick });\n};\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The following props are available for the ToastManagerProvider component."),o.a.createElement(i.f,{of:s.a}))}}])&&l(t.prototype,n),r&&l(t,r),d}(o.a.Component);y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-contexts-toast-manager-toast-manager.6534160d806d367c91ad.js.map