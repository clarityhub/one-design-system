(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./packages/unity-core/lib/colors.js"),s=n.n(i),u=n("./packages/unity-web/src/components/Buttons/Button.js");function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=Object(r.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",u.a,"{box-shadow:none;}",u.a," + ",u.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",u.a,":not(:last-child):not(:first-of-type){border-radius:0;}",u.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",u.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),p=function(e){var t=e.selected,n=c(e,["selected"]);return a.a.createElement(u.b,Object.assign({type:t?"primary":"default"},n))};p.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/components/Buttons/Button.js"),i=Object(r.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(o.css)("display:flex;align-items:center;justify-content:flex-end;",a.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),s=function(){return React.createElement("div",null)};i.propTypes=s.propTypes,t.b=i,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return r.b});var o=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Modals/ModalPortal.js":function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/index.js"),a=n.n(o);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){var e,n,r,o,a,s,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var p=arguments.length,d=new Array(p),f=0;f<p;f++)d[f]=arguments[f];return r=this,n=!(o=(e=u(t)).call.apply(e,[this].concat(d)))||"object"!==i(o)&&"function"!==typeof o?c(r):o,a=c(n),l={ready:!1},(s="state")in a?Object.defineProperty(a,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[s]=l,n}var n,o,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),document.body.appendChild(this.el),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.el&&document.body.removeChild(this.el)}},{key:"render",value:function(){return this.state.ready?a.a.createPortal(this.props.children,this.el):null}}])&&s(n.prototype,o),p&&s(n,p),t}();p.__docgenInfo={description:"",methods:[],displayName:"ModalPortal"}},"./packages/unity-web/src/components/Notification/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Notification/Notification.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/contexts/ToastManager/ToastManager.js":function(e,t,n){"use strict";n.d(t,"a",function(){return j});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./packages/unity-web/src/components/Modals/ModalPortal.js"),s=n("./packages/unity-web/src/components/Notification/index.js");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=Object(r.default)("div",{target:"e1wwvadz0"})({name:"eg4d83",styles:"display:flex;flex-flow:column;position:fixed;top:4rem;left:50%;z-index:99999;> *{max-width:auto;margin:0.25rem;display:inline-block;transform:translateX(-50%);width:auto !important;}"}),b=function(e){var t=e.message,n=d(e,["message"]);return a.a.createElement(s.a,n,t)},y=Object(o.createContext)(),m={toasts:[]},g=function(e,t){switch(t.type){case"create":return e.toasts.find(function(e){return e.dedupId===t.data.dedupId})?e:{toasts:[t.data].concat(p(e.toasts))};case"clear":return{toasts:e.toasts.filter(function(e){return e.dedupId!==t.dedupId})};default:return e}},j=function(e){var t=l(Object(o.useReducer)(g,m),2),n=t[0],r=t[1],s={createToast:function(e){var t=e.dedupId||Date.now();r({type:"create",data:u({dedupId:t},e)}),setTimeout(function(){r({type:"clear",dedupId:t})},3e3)}};return a.a.createElement(y.Provider,{value:s},a.a.createElement(i.a,null,a.a.createElement(f,null,n.toasts.map(function(e){return a.a.createElement(b,Object.assign({key:e.dedupId},e,{variant:"thin"}))}))),e.children)};t.b=y,j.__docgenInfo={description:"",methods:[],displayName:"ToastManagerProvider"}},"./packages/unity-web/src/forms/Input/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Input/Input.js");n.d(t,"a",function(){return r.b})},"./packages/unity-web/src/forms/InputGroup/InputGroup.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./packages/unity-web/src/forms/Input/Input.js"),a=Object(r.default)("div",{target:"eys7a3w0"})("display:flex;padding-top:1rem;position:relative;& + &{margin-top:1rem;}& >:not(:last-child) ",o.a,"{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;}");t.a=a},"./packages/unity-web/src/forms/InputGroup/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/InputGroup/InputGroup.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/InputGroupAppend/InputGroupAppend.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./packages/unity-web/src/components/Buttons/Button.js"),a=Object(r.default)("div",{target:"egks70m0"})("display:flex;",o.a,"{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;}&:not(:last-child){",o.a,"{border-top-right-radius:0;border-bottom-right-radius:0;}}");t.a=a},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-core/lib/typography.js"),i=n("./packages/unity-core/lib/colors.js"),s=n.n(i),u=Object(r.default)("label",{target:"e25mnj60"})("color:",s.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",a.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(s.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(o.css)("color ",s.a.danger.default,";")},"");t.a=u},"./packages/unity-web/src/forms/Label/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Label/Label.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/LabelledInput/LabelledInput.js":function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./packages/unity-web/src/forms/Input/index.js"),s=n("./packages/unity-web/src/forms/Label/index.js");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y,m,g=Object(r.default)("div",{target:"e14k2y3z0"})({name:"8atqhb",styles:"width:100%;"}),j=0,w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,d(t).call(this,e))).inputId="input-".concat(String(j)),j++,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.error,r=e.value,o=e.defaultValue,u=e.prefixIcon,l=c(e,["label","error","value","defaultValue","prefixIcon"]),p={};return(o||r)&&(p["data-not-empty"]=!0),a.a.createElement(g,null,a.a.createElement(i.a,Object.assign({},l,{id:this.inputId,defaultValue:o,error:n,prefixIcon:u,value:r},p,{label:t}),a.a.createElement(s.a,{htmlFor:this.inputId,error:n},t)))}}])&&l(n.prototype,r),u&&l(n,u),t}();m={type:"text"},(y="defaultProps")in(b=w)?Object.defineProperty(b,y,{value:m,enumerable:!0,configurable:!0,writable:!0}):b[y]=m,w.__docgenInfo={description:"",methods:[],displayName:"LabelledInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},prefixIcon:{type:{name:"node"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledInput/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/LabelledInput/LabelledInput.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/interactions/CopyToClipboard/CopyToClipboard.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/contexts/ToastManager/ToastManager.js"),u=function(e){var t=e.children,n=Object(r.useContext)(s.b).createToast;return t({onClick:function(e){!function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))}(e),n({dedupId:"copy-to-clipboard",message:"Copied!",type:"success"})}})},c=n("./packages/unity-web/src/components/Buttons/index.js"),l=n("./packages/unity-web/src/forms/InputGroup/index.js"),p=n("./packages/unity-web/src/forms/LabelledInput/index.js"),d=n("./packages/unity-web/src/forms/InputGroupAppend/InputGroupAppend.js");function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return w});var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,g(t).call(this,e))).layout=null,n}var n,r,f;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"copytoclipboard"}},"CopyToClipboard"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Use the CopyToClipboard interaction to allow users to quickly copy text to their clipboard"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import CopyToClipboard from '@clarityhub/unity-web/lib/interactions/CopyToClipboard';\n")),o.a.createElement(a.MDXTag,{name:"p",components:t},"Make sure you also have ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ToastManagerProvider")," as a wrapper."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"copytoclipboard-example"}},"CopyToClipboard Example"),o.a.createElement(i.e,{__position:0,__code:"<ToastManagerProvider>\n  <CopyToClipboard>\n    {({ onClick }) => (\n      <InputGroup>\n        <LabelledInput label=\"Access Key ID\" readonly value={'123456'} />\n        <InputGroupAppend>\n          <Button outline type=\"primary\" onClick={() => onClick('123456')}>\n            Copy\n          </Button>\n        </InputGroupAppend>\n      </InputGroup>\n    )}\n  </CopyToClipboard>\n</ToastManagerProvider>",__scope:{props:this?this.props:n,CopyToClipboard:u,ToastManagerProvider:s.a,Button:c.b,InputGroup:l.a,LabelledInput:p.a,InputGroupAppend:d.a}},o.a.createElement(s.a,null,o.a.createElement(u,null,function(e){var t=e.onClick;return o.a.createElement(l.a,null,o.a.createElement(p.a,{label:"Access Key ID",readonly:!0,value:"123456"}),o.a.createElement(d.a,null,o.a.createElement(c.b,{outline:!0,type:"primary",onClick:function(){return t("123456")}},"Copy")))}))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The following props are available for the CopyToClipboard component."),o.a.createElement(i.f,{of:u}))}}])&&y(n.prototype,r),f&&y(n,f),t}();w.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-interactions-copy-to-clipboard-copy-to-clipboard.4094b9e49a2194823e73.js.map