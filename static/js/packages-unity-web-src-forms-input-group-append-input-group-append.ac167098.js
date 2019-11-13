(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),u=n("./packages/unity-core/lib/colors.js"),s=n.n(u),i=n("./packages/unity-web/src/components/Buttons/Button.js");function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=Object(r.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",i.a,"{box-shadow:none;}",i.a," + ",i.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",i.a,":not(:last-child):not(:first-of-type){border-radius:0;}",i.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",i.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),l=function(e){var t=e.selected,n=p(e,["selected"]);return a.a.createElement(i.b,Object.assign({type:t?"primary":"default"},n))};l.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/components/Buttons/Button.js"),u=Object(r.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(o.css)("display:flex;align-items:center;justify-content:flex-end;",a.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),s=function(){return React.createElement("div",null)};u.propTypes=s.propTypes,t.b=u,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return r.b});var o=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/forms/Input/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Input/Input.js");n.d(t,"a",function(){return r.b})},"./packages/unity-web/src/forms/InputGroup/InputGroup.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./packages/unity-web/src/forms/Input/Input.js"),a=Object(r.default)("div",{target:"eys7a3w0"})("display:flex;padding-top:1rem;position:relative;& + &{margin-top:1rem;}& >:not(:last-child) ",o.a,"{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;}");t.a=a},"./packages/unity-web/src/forms/InputGroup/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/InputGroup/InputGroup.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/InputGroupAppend/InputGroupAppend.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./packages/unity-web/src/components/Buttons/Button.js"),a=Object(r.default)("div",{target:"egks70m0"})("display:flex;",o.a,"{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;}&:not(:last-child){",o.a,"{border-top-right-radius:0;border-bottom-right-radius:0;}}");t.a=a},"./packages/unity-web/src/forms/InputGroupAppend/InputGroupAppend.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/forms/InputGroupAppend/InputGroupAppend.js"),i=n("./packages/unity-web/src/components/Buttons/index.js"),p=n("./packages/unity-web/src/forms/InputGroup/index.js"),c=n("./packages/unity-web/src/forms/LabelledInput/index.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,m(t).call(this,e))).layout=null,n}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"inputgroupappend"}},"InputGroupAppend"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import InputGroupAppend from '@clarityhub/unity-web/lib/forms/InputGroupAppend';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"inputgroupappend-example"}},"InputGroupAppend Example"),o.a.createElement(u.e,{__position:0,__code:"<InputGroup>\n  <LabelledInput label=\"Access Key ID\" readonly value={'123456'} />\n  <InputGroupAppend>\n    <Button outline type=\"primary\" onClick={() => onClick('123456')}>\n      Button\n    </Button>\n  </InputGroupAppend>\n  <InputGroupAppend>\n    <Button outline type=\"primary\" onClick={() => onClick('123456')}>\n      Button\n    </Button>\n  </InputGroupAppend>\n</InputGroup>",__scope:{props:this?this.props:n,InputGroupAppend:s.a,Button:i.b,InputGroup:p.a,LabelledInput:c.a}},o.a.createElement(p.a,null,o.a.createElement(c.a,{label:"Access Key ID",readonly:!0,value:"123456"}),o.a.createElement(s.a,null,o.a.createElement(i.b,{outline:!0,type:"primary",onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return onClick("123456")})},"Button")),o.a.createElement(s.a,null,o.a.createElement(i.b,{outline:!0,type:"primary",onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return onClick("123456")})},"Button")))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(a.MDXTag,{name:"p",components:t},"The following props are available for the CopyToClipboard component."),o.a.createElement(u.f,{of:s.a}))}}])&&f(n.prototype,r),l&&f(n,l),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,n){"use strict";var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-core/lib/typography.js"),u=n("./packages/unity-core/lib/colors.js"),s=n.n(u),i=Object(r.default)("label",{target:"e25mnj60"})("color:",s.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",a.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(s.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(o.css)("color ",s.a.danger.default,";")},"");t.a=i},"./packages/unity-web/src/forms/Label/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/Label/Label.js");n.d(t,"a",function(){return r.a})},"./packages/unity-web/src/forms/LabelledInput/LabelledInput.js":function(e,t,n){"use strict";n.d(t,"a",function(){return w});var r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),a=n.n(o),u=n("./packages/unity-web/src/forms/Input/index.js"),s=n("./packages/unity-web/src/forms/Label/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,m,y,g=Object(r.default)("div",{target:"e14k2y3z0"})({name:"8atqhb",styles:"width:100%;"}),j=0,w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,d(t).call(this,e))).inputId="input-".concat(String(j)),j++,n}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.label,n=e.error,r=e.value,o=e.defaultValue,i=e.prefixIcon,c=p(e,["label","error","value","defaultValue","prefixIcon"]),l={};return(o||r)&&(l["data-not-empty"]=!0),a.a.createElement(g,null,a.a.createElement(u.a,Object.assign({},c,{id:this.inputId,defaultValue:o,error:n,prefixIcon:i,value:r},l,{label:t}),a.a.createElement(s.a,{htmlFor:this.inputId,error:n},t)))}}])&&c(n.prototype,r),i&&c(n,i),t}();y={type:"text"},(m="defaultProps")in(b=w)?Object.defineProperty(b,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[m]=y,w.__docgenInfo={description:"",methods:[],displayName:"LabelledInput",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},defaultValue:{type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!0,description:""},prefixIcon:{type:{name:"node"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""}}}},"./packages/unity-web/src/forms/LabelledInput/index.js":function(e,t,n){"use strict";var r=n("./packages/unity-web/src/forms/LabelledInput/LabelledInput.js");n.d(t,"a",function(){return r.a})}}]);
//# sourceMappingURL=packages-unity-web-src-forms-input-group-append-input-group-append.062bed49f1782a8d865a.js.map