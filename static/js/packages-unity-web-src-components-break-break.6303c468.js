(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var i={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},a={primary:{background:i.primary,color:i.white},danger:{background:i.danger,color:i.white},success:{background:i.success,color:i.white},brand:{background:i.brand,color:i.white}};t.types=a;var o=i;t.default=o},"./packages/unity-core/lib/typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sizes=t.variants=t.fontFamilies=void 0;var i,a=(i=n("./packages/unity-core/lib/utilities/rem.js"))&&i.__esModule?i:{default:i};t.fontFamilies={"Crimson Text":"300,400,600,700",Roboto:"400,800","Open Sans":"300,400,600,700"};t.variants={heading:{fontFamily:"Futura, 'Trebuchet MS', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},secondary:{fontFamily:"'Roboto', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Roboto', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},text:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:400,string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 400;\n\t\t"},readable:{fontFamily:'\'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontWeight:400,string:'\n\t\t\tfont-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\t\t\tfont-weight: 400;\n\t\t'},button:{fontFamily:"'Open Sans', Arial, sans-serif",fontWeight:600,letterSpacing:"0.35px",string:"\n\t\t\tfont-family: 'Open Sans', Arial, sans-serif;\n\t\t\tfont-weight: 600;\n\t\t\tletter-spacing: 0.35px;\n\t\t"}};var o={h1:{px:32,rem:(0,a.default)(32),lineHeight:{px:44.8,unitless:1.4}},h2:{px:26,rem:(0,a.default)(26),lineHeight:{px:36.4,unitless:1.4}},h3:{px:21,rem:(0,a.default)(21),lineHeight:{px:25.2,unitless:1.2}},h4:{px:19,rem:(0,a.default)(19),lineHeight:{px:22.8,unitless:1.2}},h5:{px:16,rem:(0,a.default)(16),lineHeight:{px:19.2,unitless:1.2}},h6:{px:14,rem:(0,a.default)(14),lineHeight:{px:16.8,unitless:1.2}},p:{px:21,rem:(0,a.default)(21),lineHeight:{px:33.6,unitless:1.6}},text:{px:16,rem:(0,a.default)(16),lineHeight:{px:24,unitless:1.5}},text2:{px:16,rem:(0,a.default)(16),lineHeight:{px:25.6,unitless:1.6}},subtext:{px:14.4,rem:(0,a.default)(14.4),lineHeight:{px:19.6,unitless:1.4}}};t.sizes=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.saturate=t.lighten=t.darken=void 0;var i,a=(i=n("./node_modules/color/index.js"))&&i.__esModule?i:{default:i};var o={},r=function(e,t,n){var i="".concat(e,":").concat(t,":").concat(n);if(o[i])return o[i];var r=(0,a.default)(t)[e](n).rgb().string();return o[i]=r,r};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return r("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return r("lighten",e,t)};t.saturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return r("saturate",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return r("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(o[n])return o[n];var i=(0,a.default)(e).rgb().array();i.push(t);var r="rgba(".concat(i.join(","),")");return o[n]=r,r}},"./packages/unity-core/lib/utilities/rem.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return e/t}},"./packages/unity-web/src/components/Break/Break.mdx":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/react/index.js"),a=n.n(i),o=n("./node_modules/@mdx-js/tag/dist/index.js"),r=n("./node_modules/docz/dist/index.m.js"),s=n("./packages/unity-web/src/components/Typography/Typography.js"),c=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),l=n("./packages/unity-core/lib/colors.js"),u=n.n(l),p=Object(c.default)("div",{target:"e181nq4s0"})('margin:5rem 0;text-align:center;position:relative;&::after{content:"";position:absolute;width:.2rem;height:.2rem;border-radius:50%;background:',u.a.dark.default,";bottom:0;left:50%;margin-bottom:1rem;transform:translateX(-50%);box-shadow:1.6rem 0px 0px ",u.a.dark.default,",-1.6rem 0px 0px ",u.a.dark.default,";}");function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"default",(function(){return v}));var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(l,e);var t,n,i,c=b(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).layout=null,t}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.components,n=m(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"break"}},"Break"),a.a.createElement(o.MDXTag,{name:"p",components:t},"A simple visual break between content sections."),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Break from '@clarityhub/unity-web/lib/components/Break';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),a.a.createElement(r.e,{__position:0,__code:'<Typography type="p">\n  Vestibulum quis facilisis dolor, <strong>a faucibus urna</strong>.\n  Vestibulum lobortis massa in <b>lacus semper</b>, sit amet ultrices eros\n  lacinia. Aenean consectetur luctus est, ut tincidunt arcu hendrerit eu.\n  Aliquam orci dui, iaculis vitae vestibulum sed, ullamcorper ut odio.\n  Maecenas ut mattis nisi. Fusce in ante sit amet magna ullamcorper euismod id\n  ut lacus. Duis eget auctor velit.\n</Typography>\n<Break />\n<Typography type="p">\n  Vestibulum quis facilisis dolor, <strong>a faucibus urna</strong>.\n  Vestibulum lobortis massa in <b>lacus semper</b>, sit amet ultrices eros\n  lacinia. Aenean consectetur luctus est, ut tincidunt arcu hendrerit eu.\n  Aliquam orci dui, iaculis vitae vestibulum sed, ullamcorper ut odio.\n  Maecenas ut mattis nisi. Fusce in ante sit amet magna ullamcorper euismod id\n  ut lacus. Duis eget auctor velit.\n</Typography>',__scope:{props:this?this.props:n,Typography:s.a,Break:p}},a.a.createElement(s.a,{type:"p"},"Vestibulum quis facilisis dolor, ",a.a.createElement("strong",null,"a faucibus urna"),". Vestibulum lobortis massa in ",a.a.createElement("b",null,"lacus semper"),", sit amet ultrices eros lacinia. Aenean consectetur luctus est, ut tincidunt arcu hendrerit eu. Aliquam orci dui, iaculis vitae vestibulum sed, ullamcorper ut odio. Maecenas ut mattis nisi. Fusce in ante sit amet magna ullamcorper euismod id ut lacus. Duis eget auctor velit."),a.a.createElement(p,null),a.a.createElement(s.a,{type:"p"},"Vestibulum quis facilisis dolor, ",a.a.createElement("strong",null,"a faucibus urna"),". Vestibulum lobortis massa in ",a.a.createElement("b",null,"lacus semper"),", sit amet ultrices eros lacinia. Aenean consectetur luctus est, ut tincidunt arcu hendrerit eu. Aliquam orci dui, iaculis vitae vestibulum sed, ullamcorper ut odio. Maecenas ut mattis nisi. Fusce in ante sit amet magna ullamcorper euismod id ut lacus. Duis eget auctor velit.")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.MDXTag,{name:"p",components:t},"The Break component does not take any props."),a.a.createElement(r.f,{of:p}))}}])&&f(t.prototype,n),i&&f(t,i),l}(a.a.Component);v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,t,n){"use strict";var i=n("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=n("./packages/unity-core/lib/colors.js"),r=n.n(o),s=n("./packages/unity-core/lib/typography.js"),c=n("./packages/unity-web/src/theme/fonts.js");function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=function(e){var t=e.type,n=void 0===t?"text":t,o=e.variant,u=e.color,p=void 0===u?"dark":u,d=e.children,m=e.component,f=void 0===m?"p":m,g=e.noMargin,b=void 0!==g&&g,h=e.noPadding,y=void 0!==h&&h,v=e.inline,x=void 0!==v&&v,k=e.css,j=e.center,w=void 0!==j&&j,O=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),_=[Boolean(n)?c.a[n]:{},Boolean(o)?s.variants[o]:{},Boolean(p)?{color:r.a[p].default}:{},Boolean(y)?"\n    padding: 0;\n":{},Boolean(b)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(k)?k:{},Boolean(x)?{display:"inline-block"}:{},Boolean(w)?{textAlign:"center"}:{}];if("string"===typeof f){var z=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(n)&&(z=n);var S=i.default[z](_,"");return Object(a.jsx)(S,O,d)}var E=f;return Object(a.jsx)(E,Object.assign({},O,{css:_}),d)};t.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/theme/fonts.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("./packages/unity-core/lib/typography.js"),a=n("./packages/unity-core/lib/colors.js"),o=n.n(a),r=n("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(i.variants.heading.string,"\n\n        font-size: ").concat(i.sizes.h1.rem,"rem;\n        line-height: ").concat(i.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(i.variants.heading.string,"\n\n        font-size: ").concat(i.sizes.h2.rem,"rem;\n        line-height: ").concat(i.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(i.variants.heading.string,"\n\n        font-size: ").concat(i.sizes.h3.rem,"rem;\n        line-height: ").concat(i.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(i.variants.secondary.string,"\n\n        font-size: ").concat(i.sizes.h4.rem,"rem;\n        line-height: ").concat(i.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(i.variants.secondary.string,"\n\n        font-size: ").concat(i.sizes.h5.rem,"rem;\n        line-height: ").concat(i.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(i.variants.secondary.string,"\n\n        font-size: ").concat(i.sizes.h6.rem,"rem;\n        line-height: ").concat(i.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(i.variants.readable.string,"\n\n        font-size: ").concat(i.sizes.p.rem,"rem;\n        line-height: ").concat(i.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(i.variants.text.string,"\n\n        font-size: ").concat(i.sizes.text.rem,"rem;\n        line-height: ").concat(i.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(i.variants.text.string,"\n\n        font-size: ").concat(i.sizes.text2.rem,"rem;\n        line-height: ").concat(i.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(i.variants.text.string,"\n\n        color: ").concat(o.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(i.sizes.subtext.rem,"rem;\n        line-height: ").concat(i.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(o.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(o.a.primary.default,";\n        color: ").concat(o.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(o.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(o.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(r.darken)(o.a.primary.default,.2),";\n            color: ").concat(Object(r.darken)(o.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(o.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(o.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(o.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-break-break.6534160d806d367c91ad.js.map