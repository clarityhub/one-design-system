(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"./packages/unity-core/lib/colors.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.types=void 0;var a={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},o={primary:{background:a.primary,color:a.white},danger:{background:a.danger,color:a.white},success:{background:a.success,color:a.white},brand:{background:a.brand,color:a.white}};n.types=o;var r=a;n.default=r},"./packages/unity-core/lib/utilities/color.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.opacify=n.desaturate=n.lighten=n.darken=void 0;var a,o=(a=t("./node_modules/color/index.js"))&&a.__esModule?a:{default:a};var r={},i=function(e,n,t){var a="".concat(e,":").concat(n,":").concat(t);if(r[a])return r[a];var i=(0,o.default)(n)[e](t).rgb().string();return r[a]=i,i};n.darken=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("darken",e,n)};n.lighten=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("lighten",e,n)};n.desaturate=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return i("desaturate",e,n)};n.opacify=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,t="opacify:".concat(e,":").concat(n);if(r[t])return r[t];var a=(0,o.default)(e).rgb().array();a.push(n);var i="rgba(".concat(a.join(","),")");return r[t]=i,i}},"./packages/unity-web/src/theme/Theme.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");t("./packages/unity-web/src/theme/fonts.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function c(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,m(n).call(this,e))).layout=null,t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"utilities"}},"Utilities"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"breakpoints"}},"Breakpoints"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To keep responsive design and behavior consistent, use the theme breakpoints to style to different viewports"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"examples"}},"Examples"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"switch(size) {\n    case 'xsmall':\n        return `max-width: ${breakpoints.xsmallMaxWidth}px;`;\n    case 'small':\n        return `max-width: ${breakpoints.smallMaxWidth}px;`;\n    default:\n        return `max-width: ${breakpoints.maxWidth}px;`;\n}\n")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"@media (max-width: ${mobile}px) {\n    flex-direction: column;\n}\n@media(max-width: ${breakpoints.smartphone}) {\n    display: none;\n}\n@media(max-width: ${breakpoints.tablet}) {\n    flex-wrap: wrap;\n}\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"fonts"}},"Fonts"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To keep behavior and design consistent, use the theme fonts to style components"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { types } from '@clarityhub/unity-web/lib/theme/fonts';\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"list-of-types"}},"List of types"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"h1, h2, h3, h4, h5, h6"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"p"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"text"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"text2"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"sectionLabel"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"subText"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"link"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"blockLink")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"example"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { types } from '@clarityhub/unity-web/lib/theme/fonts';\nimport { variants, sizes } from '@clarityhub/unity-core/lib/typography';\n\nlet styles = [\n    Boolean(type) ? types[type]: {},    \n    Boolean(variant) ? variants[variant]: {},\n    Boolean(color) ? { color: colors[color].default }: {},\n];\n")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"z-indexes"}},"Z-Indexes"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Used for being able to do simple math for z-index-based styling"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import zIndexes from '@clarityhub/unity-web/lib/theme/zIndexes';\n")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"available-z-indexes"}},"Available z-indexes"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"base"),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"modal")),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"example-1"}},"Example"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import zIndexes from '@clarityhub/unity-web/lib/theme/zIndexes';\n\nconst Div = styled.div`\n    z-index: ${zIndexes.base + 10}\n`\n")))}}])&&c(t.prototype,a),i&&c(t,i),n}();u.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t("./packages/unity-core/lib/typography.js"),o=t("./packages/unity-core/lib/colors.js"),r=t.n(o),i=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h1.rem,"rem;\n        line-height: ").concat(a.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h2.rem,"rem;\n        line-height: ").concat(a.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(a.variants.heading.string,"\n\n        font-size: ").concat(a.sizes.h3.rem,"rem;\n        line-height: ").concat(a.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h4.rem,"rem;\n        line-height: ").concat(a.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h5.rem,"rem;\n        line-height: ").concat(a.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(a.variants.secondary.string,"\n\n        font-size: ").concat(a.sizes.h6.rem,"rem;\n        line-height: ").concat(a.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(a.variants.readable.string,"\n\n        font-size: ").concat(a.sizes.p.rem,"rem;\n        line-height: ").concat(a.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(a.variants.text.string,"\n\n        font-size: ").concat(a.sizes.text.rem,"rem;\n        line-height: ").concat(a.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(a.variants.text.string,"\n\n        font-size: ").concat(a.sizes.text2.rem,"rem;\n        line-height: ").concat(a.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(a.variants.text.string,"\n\n        color: ").concat(r.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(a.sizes.subtext.rem,"rem;\n        line-height: ").concat(a.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(r.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(r.a.primary.default,";\n        color: ").concat(r.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(r.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(r.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(r.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(r.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(r.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(r.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-theme-theme.0ad923aad6c52481227a.js.map