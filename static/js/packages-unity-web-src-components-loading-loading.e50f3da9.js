(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var o={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},r={primary:{background:o.primary,color:o.white},danger:{background:o.danger,color:o.white},success:{background:o.success,color:o.white},brand:{background:o.brand,color:o.white}};t.types=r;var a=o;t.default=a},"./packages/unity-web/src/components/Loading/Loading.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=n("./packages/unity-core/lib/colors.js"),d=n.n(l),p=n("./packages/unity-web/src/components/svgs/Loading.js"),u=Object(c.css)("svg *{fill:",d.a.primary.default,";}"),f={name:"a8dkhq",styles:"display:flex;justify-content:center;align-items:center;flex:1;height:100%;"},m=Object(s.default)("div",{target:"eod4uu60"})([u,function(e){var t=e.flex;return t&&f},function(e){var t=e.size;return t&&Object(c.css)("svg{width:",50*t,"px;height:",50*t,"px;}")}],""),g=function(e){var t=e.flex,n=e.size;return r.a.createElement(m,{flex:t,size:n},r.a.createElement(p.a,null))},y=g;function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}g.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{flex:{type:{name:"bool"},required:!1,description:""},size:{type:{name:"number"},required:!1,description:""}}},n.d(t,"default",function(){return j});var j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,v(t).call(this,e))).layout=null,n}var n,o,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.components,n=h(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"loading"}},"Loading"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Use a Loading component when loading content. There are two types - A generic loader, and Section Loader,\nwhich will be centered with padding."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"component"}},"Component"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Loading from '@clarityhub/unity-web/lib/components/Loading';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(i.f,{of:y}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),r.a.createElement(i.e,{__position:1,__code:"<Loading />",__scope:{props:this?this.props:n,Loading:y}},r.a.createElement(y,null)),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"section-loader"}},"Section Loader"),r.a.createElement(i.e,{__position:2,__code:"<div style={{ height: '300px' }}>\n  <Loading flex size={2} />\n</div>",__scope:{props:this?this.props:n,Loading:y}},r.a.createElement("div",{style:{height:"300px"}},r.a.createElement(y,{flex:!0,size:2}))))}}])&&w(n.prototype,o),s&&w(n,s),t}();j.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/svgs/Loading.js":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),a=function(){return r.a.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"}},r.a.createElement("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"},r.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})))};t.a=a,a.__docgenInfo={description:"",methods:[],displayName:"Loading"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-loading-loading.062bed49f1782a8d865a.js.map