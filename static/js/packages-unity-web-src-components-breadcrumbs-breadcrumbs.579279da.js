(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./packages/unity-core/lib/colors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.types=void 0;var r={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:r.primary,color:r.white},danger:{background:r.danger,color:r.white},success:{background:r.success,color:r.white},brand:{background:r.brand,color:r.white}};n.types=a;var o=r;n.default=o},"./packages/unity-core/lib/typography.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.sizes=n.variants=n.fontFamilies=void 0;var r,a=(r=t("./packages/unity-core/lib/utilities/rem.js"))&&r.__esModule?r:{default:r};n.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};n.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var o={h1:{px:32,rem:(0,a.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,a.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,a.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,a.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,a.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,a.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,a.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,a.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,a.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,a.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};n.sizes=o},"./packages/unity-core/lib/utilities/color.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.opacify=n.desaturate=n.saturate=n.lighten=n.darken=void 0;var r,a=(r=t("./node_modules/color/index.js"))&&r.__esModule?r:{default:r};var o={},i=function(e,n,t){var r="".concat(e,":").concat(n,":").concat(t);if(o[r])return o[r];var i=(0,a.default)(n)[e](t).rgb().string();return o[r]=i,i};n.darken=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,n)};n.lighten=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,n)};n.saturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("saturate",e,n)};n.desaturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,n)};n.opacify=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(n);if(o[t])return o[t];var r=(0,a.default)(e).rgb().array();r.push(n);var i="rgba(".concat(r.join(","),")");return o[t]=i,i}},"./packages/unity-core/lib/utilities/rem.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/n}},"./packages/unity-web/src/components/Breadcrumbs/Breadcrumbs.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=t("./packages/unity-core/lib/typography.js"),l=t("./packages/unity-core/lib/colors.js"),u=t.n(l),d=t("./packages/unity-web/src/components/Link/Link.js");var p=Object(s.default)("nav",{target:"e5d63db0"})(c.variants.text.string," color:",u.a.black.default,";max-width:100%;"),m=Object(s.default)("ol",{target:"e5d63db1"})({name:"eafatv",styles:"display:flex;padding:.75rem 1rem;list-style:none;white-space:nowrap;"}),f=Object(s.default)("li",{target:"e5d63db2"})("display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:3rem;&:first-of-type{overflow:inherit;}& + &:before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:",u.a.gray.default,';content:"/";}a,a:visited{color:',u.a.black.default,";}"),g=function(e){var n=e.path,t=e.children;return a.a.createElement(d.b,{href:n},t)},h=function(e){var n=e.crumbs,t=e.linkRenderer,r=void 0===t?g:t;return a.a.createElement(p,{ariaLabel:"breadcrumb"},a.a.createElement(m,null,n.map((function(e,t){var o=t===n.length-1;return a.a.createElement(f,{key:t,ariaCurrent:!!o&&"page"},e.path?r({path:e.path,children:e.title}):e.title)}))))},b=function(){return a.a.createElement("div",null)},y=h;function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function k(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,n){return(j=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function w(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=_(e);if(n){var a=_(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return O(this,t)}}function O(e,n){return!n||"object"!==v(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}b.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"BreadcrumbsPropTypes",props:{crumbs:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},path:{name:"string",required:!1}}}},required:!1,description:""},linkRenderer:{type:{name:"func"},required:!1,description:""}}},h.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{linkRenderer:{defaultValue:{value:"({ path, children }) => (\n\t<Link href={path}>{children}</Link>\n)",computed:!1},required:!1}}},t.d(n,"default",(function(){return E}));var E=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&j(e,n)}(c,e);var n,t,r,s=w(c);function c(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c),(n=s.call(this,e)).layout=null,n}return n=c,(t=[{key:"render",value:function(){var e=this.props,n=e.components,t=x(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"breadcrumbs"}},"Breadcrumbs"),a.a.createElement(o.MDXTag,{name:"p",components:n},"Use breadcrumbs to show a user where they are in the sitemap."),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Breadcrumbs from '@clarityhub/unity-web/lib/components/Breadcrumbs';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),a.a.createElement(i.e,{__position:0,__code:"<div style={{ width: '400px' }}>\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n      },\n    ]}\n  />\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n        path: '/',\n      },\n      {\n        title: 'Admin',\n      },\n    ]}\n  />\n  <Breadcrumbs\n    crumbs={[\n      {\n        title: 'Home',\n        path: '/',\n      },\n      {\n        title: 'Admin',\n        path: '/admin',\n      },\n      {\n        title: 'Long interview name \u2013\xa0October 3rd, 2019',\n        // no path\n      },\n    ]}\n  />\n</div>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n    },\n  ]}\n/>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n      path: '/',\n    },\n    {\n      title: 'Admin',\n    },\n  ]}\n/>\n<Breadcrumbs\n  crumbs={[\n    {\n      title: 'Home',\n      path: '/',\n    },\n    {\n      title: 'Admin',\n      path: '/admin',\n    },\n    {\n      title: 'Users',\n      // no path\n    },\n  ]}\n/>",__scope:{props:this?this.props:t,Breadcrumbs:y,BreadcrumbsPropTypes:b}},a.a.createElement("div",{style:{width:"400px"}},a.a.createElement(y,{crumbs:[{title:"Home"}]}),a.a.createElement(y,{crumbs:[{title:"Home",path:"/"},{title:"Admin"}]}),a.a.createElement(y,{crumbs:[{title:"Home",path:"/"},{title:"Admin",path:"/admin"},{title:"Long interview name \u2013\xa0October 3rd, 2019"}]})),a.a.createElement(y,{crumbs:[{title:"Home"}]}),a.a.createElement(y,{crumbs:[{title:"Home",path:"/"},{title:"Admin"}]}),a.a.createElement(y,{crumbs:[{title:"Home",path:"/"},{title:"Admin",path:"/admin"},{title:"Users"}]})),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"link-renderer"}},"Link Renderer"),a.a.createElement(o.MDXTag,{name:"p",components:n},"By default, the breadcrumbs will use a Link to render the given path."),a.a.createElement(o.MDXTag,{name:"p",components:n},"You can override how breadcrumbs are rendered (so you can use React Router Links for example) by providing a ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"linkRenderer"),"."),a.a.createElement(o.MDXTag,{name:"p",components:n},"The default renderer looks like:"),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const defaultLinkRenderer = ({ path, children }) => (\n    <Link href={path}>{children}</Link>\n);\n")),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.MDXTag,{name:"p",components:n},"The following prop types are available for the Breadcrumbs component."),a.a.createElement(i.f,{of:b}))}}])&&k(n.prototype,t),r&&k(n,r),c}(a.a.Component);E.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./packages/unity-web/src/components/Typography/Typography.js");function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=function(e){var n=e.component,t=void 0===n?"a":n,r=e.children,s=e.variant,c=void 0===s?"text":s,l=e.color,u=void 0===l?"primary":l,d=e.type,p=i(e,["component","children","variant","color","type"]);return a.a.createElement(o.a,Object.assign({type:d||"link",variant:c,color:u,component:t},p),r)},c=function(){return a.a.createElement("div",null)};n.b=s,c.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=t("./packages/unity-core/lib/colors.js"),i=t.n(o),s=t("./packages/unity-core/lib/typography.js"),c=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=function(e){var n=e.type,t=void 0===n?"text":n,o=e.variant,u=e.color,d=void 0===u?"dark":u,p=e.children,m=e.component,f=void 0===m?"p":m,g=e.noMargin,h=void 0!==g&&g,b=e.noPadding,y=void 0!==b&&b,v=e.inline,x=void 0!==v&&v,k=e.css,j=e.center,w=void 0!==j&&j,O=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),_=[Boolean(t)?c.a[t]:{},Boolean(o)?s.variants[o]:{},Boolean(d)?{color:i.a[d].default}:{},Boolean(y)?"\n    padding: 0;\n":{},Boolean(h)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(k)?k:{},Boolean(x)?{display:"inline-block"}:{},Boolean(w)?{textAlign:"center"}:{}];if("string"===typeof f){var E=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(E=t);var z=r.default[E](_,"");return Object(a.jsx)(z,O,p)}var H=f;return Object(a.jsx)(H,Object.assign({},O,{css:_}),p)};n.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("./packages/unity-core/lib/typography.js"),a=t("./packages/unity-core/lib/colors.js"),o=t.n(a),i=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h1.rem,"rem;\n        line-height: ").concat(r.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h2.rem,"rem;\n        line-height: ").concat(r.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h3.rem,"rem;\n        line-height: ").concat(r.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h4.rem,"rem;\n        line-height: ").concat(r.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h5.rem,"rem;\n        line-height: ").concat(r.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h6.rem,"rem;\n        line-height: ").concat(r.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(r.variants.readable.string,"\n\n        font-size: ").concat(r.sizes.p.rem,"rem;\n        line-height: ").concat(r.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text.rem,"rem;\n        line-height: ").concat(r.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text2.rem,"rem;\n        line-height: ").concat(r.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(r.variants.text.string,"\n\n        color: ").concat(o.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(r.sizes.subtext.rem,"rem;\n        line-height: ").concat(r.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(o.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(o.a.primary.default,";\n        color: ").concat(o.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(o.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(o.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(o.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(o.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(o.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(o.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(o.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-breadcrumbs-breadcrumbs.6534160d806d367c91ad.js.map