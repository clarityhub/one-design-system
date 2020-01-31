(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"./packages/unity-core/lib/borders.js":function(e,r,t){"use strict";var n;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a={borderRadius:{default:4,rem:(0,((n=t("./packages/unity-core/lib/utilities/rem.js"))&&n.__esModule?n:{default:n}).default)(4)}};r.default=a},"./packages/unity-core/lib/colors.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.types=void 0;var n={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:n.primary,color:n.white},danger:{background:n.danger,color:n.white},success:{background:n.success,color:n.white},brand:{background:n.brand,color:n.white}};r.types=a;var l=n;r.default=l},"./packages/unity-core/lib/utilities/color.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.opacify=r.desaturate=r.saturate=r.lighten=r.darken=void 0;var n,a=(n=t("./node_modules/color/index.js"))&&n.__esModule?n:{default:n};var l={},o=function(e,r,t){var n="".concat(e,":").concat(r,":").concat(t);if(l[n])return l[n];var o=(0,a.default)(r)[e](t).rgb().string();return l[n]=o,o};r.darken=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("darken",e,r)};r.lighten=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("lighten",e,r)};r.saturate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("saturate",e,r)};r.desaturate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("desaturate",e,r)};r.opacify=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(r);if(l[t])return l[t];var n=(0,a.default)(e).rgb().array();n.push(r);var o="rgba(".concat(n.join(","),")");return l[t]=o,o}},"./packages/unity-web/src/forms/Input/Input.mdx":function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return g});var n=t("./node_modules/react/index.js"),a=t.n(n),l=t("./node_modules/@mdx-js/tag/dist/index.js"),o=t("./node_modules/docz/dist/index.m.js"),c=t("./node_modules/@material-ui/icons/Search.js"),u=t.n(c),i=t("./packages/unity-web/src/forms/Input/Input.js"),d=t("./packages/unity-web/src/scaffolding/Box/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function f(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,r){return!r||"object"!==p(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,r){return(h=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var g=function(e){function r(e){var t;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),(t=b(this,m(r).call(this,e))).layout=null,t}var t,n,c;return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&h(e,r)}(r,a.a.Component),t=r,(n=[{key:"render",value:function(){var e=this.props,r=e.components,t=s(e,["components"]);return a.a.createElement(l.MDXTag,{name:"wrapper",components:r},a.a.createElement(l.MDXTag,{name:"h1",components:r,props:{id:"input"}},"Input"),a.a.createElement(l.MDXTag,{name:"h2",components:r,props:{id:"input--component"}},"<Input /",">"," component"),a.a.createElement(l.MDXTag,{name:"pre",components:r},a.a.createElement(l.MDXTag,{name:"code",components:r,parentName:"pre",props:{className:"language-js"}},"import Input from '@clarityhub/unity-web/lib/forms/Input';\n")),a.a.createElement(l.MDXTag,{name:"h2",components:r,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.f,{of:i.b}),a.a.createElement(l.MDXTag,{name:"h2",components:r,props:{id:"examples"}},"Examples"),a.a.createElement(o.e,{__position:1,__code:'<Input value="Hello world" />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" error />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" disabled />',__scope:{props:this?this.props:t,SearchIcon:u.a,Input:i.b,Box:d.a}},a.a.createElement(i.b,{value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{placeholder:"Hello world placeholder",disabled:!0})),a.a.createElement(l.MDXTag,{name:"h2",components:r,props:{id:"with-icon"}},"With Icon"),a.a.createElement(o.e,{__position:2,__code:'<Input prefixIcon={<SearchIcon />} value="Hello world" />\n<br />\n<br />\n<Input prefixIcon={<SearchIcon />} placeholder="Hello world placeholder" />\n<br />\n<br />\n<Input\n  prefixIcon={<SearchIcon />}\n  placeholder="Hello world placeholder"\n  error\n/>\n<br />\n<br />\n<Input\n  prefixIcon={<SearchIcon />}\n  placeholder="Hello world placeholder"\n  disabled\n/>',__scope:{props:this?this.props:t,SearchIcon:u.a,Input:i.b,Box:d.a}},a.a.createElement(i.b,{prefixIcon:a.a.createElement(u.a,null),value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{prefixIcon:a.a.createElement(u.a,null),placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{prefixIcon:a.a.createElement(u.a,null),placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{prefixIcon:a.a.createElement(u.a,null),placeholder:"Hello world placeholder",disabled:!0})),a.a.createElement(l.MDXTag,{name:"h2",components:r,props:{id:"white-variant"}},"White Variant"),a.a.createElement(o.e,{__position:3,__code:'<Box style={{ backgroundColor: \'red\', padding: \'20px\' }}>\n  <Input variant="white" value="Hello world" />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" error />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" disabled />\n</Box>',__scope:{props:this?this.props:t,SearchIcon:u.a,Input:i.b,Box:d.a}},a.a.createElement(d.a,{style:{backgroundColor:"red",padding:"20px"}},a.a.createElement(i.b,{variant:"white",value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{variant:"white",placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{variant:"white",placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(i.b,{variant:"white",placeholder:"Hello world placeholder",disabled:!0}))))}}])&&f(t.prototype,n),c&&f(t,c),r}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/scaffolding/Box/index.js":function(e,r,t){"use strict";var n=t("./packages/unity-web/src/scaffolding/Box/Box.js");t.d(r,"a",function(){return n.b})}}]);
//# sourceMappingURL=packages-unity-web-src-forms-input-input.d93812c072344a2254b1.js.map