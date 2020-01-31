(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),u=n("./packages/unity-core/lib/colors.js"),s=n.n(u),p=n("./packages/unity-web/src/components/Buttons/Button.js");function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=Object(o.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",p.a,"{box-shadow:none;}",p.a," + ",p.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",p.a,":not(:last-child):not(:first-of-type){border-radius:0;}",p.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",p.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),l=function(e){var t=e.selected,n=c(e,["selected"]);return a.a.createElement(p.b,Object.assign({type:t?"primary":"default"},n))};l.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonGroups.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),u=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Buttons/ButtonGroup.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,m(t).call(this,e))).layout=null,n}var n,o,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=c(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"buttongroups"}},"ButtonGroups"),r.a.createElement(a.MDXTag,{name:"p",components:t},"A ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ButtonGroup")," groups a set of actions together that act like checkboxes or\nradio inputs. For example, displaying days of the week would be better suited\nas a ButtonGroup then as distinct checkboxes. "),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { ButtonGroup, ButtonGroupItem } from '@clarityhub/unity-web/lib/components/Buttons';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(u.e,{__position:0,__code:"<ButtonGroup>\n  <ButtonGroupItem>Mon</ButtonGroupItem>\n  <ButtonGroupItem selected>Tue</ButtonGroupItem>\n  <ButtonGroupItem>Wed</ButtonGroupItem>\n  <ButtonGroupItem>Thu</ButtonGroupItem>\n  <ButtonGroupItem selected>Fri</ButtonGroupItem>\n  <ButtonGroupItem>Sat</ButtonGroupItem>\n  <ButtonGroupItem>Sun</ButtonGroupItem>\n</ButtonGroup>",__scope:{props:this?this.props:n,ButtonGroup:s.a,ButtonGroupItem:s.b}},r.a.createElement(s.a,null,r.a.createElement(s.b,null,"Mon"),r.a.createElement(s.b,{selected:!0},"Tue"),r.a.createElement(s.b,null,"Wed"),r.a.createElement(s.b,null,"Thu"),r.a.createElement(s.b,{selected:!0},"Fri"),r.a.createElement(s.b,null,"Sat"),r.a.createElement(s.b,null,"Sun"))),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(a.MDXTag,{name:"p",components:t},"The ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<ButtonGroupItem />")," component takes the following prop types."),r.a.createElement(u.f,{of:s.b}))}}])&&i(n.prototype,o),p&&i(n,p),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-buttons-button-groups.d93812c072344a2254b1.js.map