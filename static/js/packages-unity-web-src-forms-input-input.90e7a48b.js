(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={borderRadius:{default:4,rem:(0,((r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r}).default)(4)}};t.default=a},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};t.types=a;var l=r;t.default=l},"./packages/unity-core/lib/typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var r,a=(r=n("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var l={h1:{px:32,rem:(0,a.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,a.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,a.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,a.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,a.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,a.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,a.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,a.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,a.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,a.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=l},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var r,a=(r=n("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var l={},o=function(e,t,n){var r="".concat(e,":").concat(t,":").concat(n);if(l[r])return l[r];var o=(0,a.default)(t)[e](n).rgb().string();return l[r]=o,o};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return o("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(l[n])return l[n];var r=(0,a.default)(e).rgb().array();r.push(t);var o="rgba(".concat(r.join(","),")");return l[n]=o,o}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/forms/Input/Input.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n("./node_modules/react/index.js"),a=n.n(r),l=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./node_modules/docz/dist/index.m.js"),i=n("./node_modules/@material-ui/icons/Search.js"),c=n.n(i),u=n("./packages/unity-web/src/forms/Input/Input.js"),s=n("./packages/unity-web/src/scaffolding/Box/Box.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(p,e);var t,n,r,i=b(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=i.call(this,e)).layout=null,t}return t=p,(n=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return a.a.createElement(l.MDXTag,{name:"wrapper",components:t},a.a.createElement(l.MDXTag,{name:"h1",components:t,props:{id:"input"}},"Input"),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"input--component"}},"<Input /",">"," component"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Input from '@clarityhub/unity-web/lib/forms/Input';\n")),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.f,{of:u.b}),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(o.e,{__position:1,__code:'<Input value="Hello world" />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" error />\n<br />\n<br />\n<Input placeholder="Hello world placeholder" disabled />',__scope:{props:this?this.props:n,SearchIcon:c.a,Input:u.b,Box:s.b}},a.a.createElement(u.b,{value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{placeholder:"Hello world placeholder",disabled:!0})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"with-icon"}},"With Icon"),a.a.createElement(o.e,{__position:2,__code:'<Input prefixIcon={<SearchIcon />} value="Hello world" />\n<br />\n<br />\n<Input prefixIcon={<SearchIcon />} placeholder="Hello world placeholder" />\n<br />\n<br />\n<Input\n  prefixIcon={<SearchIcon />}\n  placeholder="Hello world placeholder"\n  error\n/>\n<br />\n<br />\n<Input\n  prefixIcon={<SearchIcon />}\n  placeholder="Hello world placeholder"\n  disabled\n/>',__scope:{props:this?this.props:n,SearchIcon:c.a,Input:u.b,Box:s.b}},a.a.createElement(u.b,{prefixIcon:a.a.createElement(c.a,null),value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{prefixIcon:a.a.createElement(c.a,null),placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{prefixIcon:a.a.createElement(c.a,null),placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{prefixIcon:a.a.createElement(c.a,null),placeholder:"Hello world placeholder",disabled:!0})),a.a.createElement(l.MDXTag,{name:"h2",components:t,props:{id:"white-variant"}},"White Variant"),a.a.createElement(o.e,{__position:3,__code:'<Box style={{ backgroundColor: \'red\', padding: \'20px\' }}>\n  <Input variant="white" value="Hello world" />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" error />\n  <br />\n  <br />\n  <Input variant="white" placeholder="Hello world placeholder" disabled />\n</Box>',__scope:{props:this?this.props:n,SearchIcon:c.a,Input:u.b,Box:s.b}},a.a.createElement(s.b,{style:{backgroundColor:"red",padding:"20px"}},a.a.createElement(u.b,{variant:"white",value:"Hello world"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{variant:"white",placeholder:"Hello world placeholder"}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{variant:"white",placeholder:"Hello world placeholder",error:!0}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(u.b,{variant:"white",placeholder:"Hello world placeholder",disabled:!0}))))}}])&&f(t.prototype,n),r&&f(t,r),p}(a.a.Component);y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-unity-web-src-forms-input-input.6534160d806d367c91ad.js.map