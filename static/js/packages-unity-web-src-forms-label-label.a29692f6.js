(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"./packages/unity-core/lib/colors.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},o={primary:{background:n.primary,color:n.white},danger:{background:n.danger,color:n.white},success:{background:n.success,color:n.white},brand:{background:n.brand,color:n.white}};t.types=o;var a=n;t.default=a},"./packages/unity-web/src/forms/Label/Label.js":function(e,t,r){"use strict";var n=r("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=r("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=r("./packages/unity-core/lib/typography.js"),l=r("./packages/unity-core/lib/colors.js"),c=r.n(l),s=Object(n.default)("label",{target:"e25mnj60"})("color:",c.a.darkGray.default,";cursor:text;display:block;flex:1;font-size:0.9rem;line-height:1.2rem;left:0;padding:0 0.4rem;position:absolute;text-align:left;top:0;transition:0.2s ease-out;",a.variants.text.string," ",function(e){switch(e.variant){case"white":return"\n                color: ".concat(c.a.white.default,";\n                ");default:return""}}," ",function(e){return e.error&&Object(o.css)("color ",c.a.danger.default,";")},"");t.a=s},"./packages/unity-web/src/forms/Label/Label.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var n=r("./node_modules/react/index.js"),o=r.n(n),a=r("./node_modules/@mdx-js/tag/dist/index.js"),l=r("./node_modules/docz/dist/index.m.js"),c=r("./packages/unity-web/src/forms/Label/Label.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=p(this,f(t).call(this,e))).layout=null,r}var r,n,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,r=i(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"label"}},"Label"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"label--component"}},"<Label /",">"," component"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Label from '@clarityhub/unity-web/lib/forms/Label';\n")),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(l.f,{of:c.a}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),o.a.createElement(l.e,{__position:1,__code:"<Label>Hello World</Label>\n<br />\n<br />\n<Label error>Hello World</Label>",__scope:{props:this?this.props:r,Label:c.a}},o.a.createElement(c.a,null,"Hello World"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(c.a,{error:!0},"Hello World")))}}])&&u(r.prototype,n),s&&u(r,s),t}();b.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-label-label.7fcb59b90cc3782a9b4c.js.map