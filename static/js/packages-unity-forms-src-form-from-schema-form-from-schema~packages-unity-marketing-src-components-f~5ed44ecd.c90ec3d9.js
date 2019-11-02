(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/unity-core/lib/borders.js":function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={borderRadius:{default:4,rem:(0,((a=n("./packages/unity-core/lib/utilities/rem.js"))&&a.__esModule?a:{default:a}).default)(4)}};t.default=r},"./packages/unity-core/lib/colors.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.types=void 0;var a={primary:{default:"#566ad2"},danger:{default:"#f5365c"},success:{default:"#46C161"},focused:{default:"rgba(0, 123, 255, .25)"},highlight:{default:"#fff0cc"},notification:{default:"#FF6A5C"},brand:{default:"#FF6A5C"},white:{default:"#FFF"},dove:{default:"#FDFDFD"},muted:{default:"#F1F1F1"},gray:{default:"#C2C2C2"},darkGray:{default:"#999"},dark:{default:"#322439"},black:{default:"#333"},gradient:{default:"linear-gradient(-104deg,#dd2476 16%,#ff512f 95%)"},shadow:{default:"0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)"},outlineShadow:{default:"0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02)"}},r={primary:{background:a.primary,color:a.white},danger:{background:a.danger,color:a.white},success:{background:a.success,color:a.white},brand:{background:a.brand,color:a.white}};t.types=r;var o=a;t.default=o},"./packages/unity-core/lib/utilities/color.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.opacify=t.desaturate=t.lighten=t.darken=void 0;var a,r=(a=n("./node_modules/color/index.js"))&&a.__esModule?a:{default:a};var o={},l=function(e,t,n){var a="".concat(e,":").concat(t,":").concat(n);if(o[a])return o[a];var l=(0,r.default)(t)[e](n).rgb().string();return o[a]=l,l};t.darken=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("darken",e,t)};t.lighten=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("lighten",e,t)};t.desaturate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1;return l("desaturate",e,t)};t.opacify=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,n="opacify:".concat(e,":").concat(t);if(o[n])return o[n];var a=(0,r.default)(e).rgb().array();a.push(t);var l="rgba(".concat(a.join(","),")");return o[n]=l,l}},"./packages/unity-web/lib/components/Buttons/Button.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.EmotionButton=void 0;var a=f(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),r=f(n("./node_modules/react/index.js")),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=n("./node_modules/prop-types/index.js"),d=n("./packages/unity-core/lib/typography.js"),i=f(n("./packages/unity-core/lib/borders.js")),c=f(n("./packages/unity-core/lib/colors.js")),s=n("./packages/unity-core/lib/utilities/color.js"),u=f(n("./packages/unity-web/lib/components/svgs/Loading.js"));function f(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={name:"1rw0eyo-Button",styles:"background-color:transparent;border:1px solid inherit;box-shadow:none;label:Button;"},h={name:"px7m10-Button",styles:"box-shadow:none;label:Button;"},m={name:"ebx6b0-Button",styles:"font-size:0.9rem;padding:.2rem 1rem;label:Button;"},y={name:"3r8h6k-Button",styles:"font-size:1.2rem;padding:0.8rem 1.4rem;label:Button;"},v={name:"v08fzn-Button",styles:"display:block;width:100%;label:Button;"},k={name:"1t5184f-Button",styles:"color:transparent !important;&:hover{color:transparent !important;}label:Button;"},x=(0,a.default)("button",{target:"e1hgvqz30",label:"Button"})((0,o.css)("overflow:visible;display:inline-block;",d.variants.button.string," box-shadow:",c.default.shadow.default,";cursor:pointer;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;padding:.5rem 1.25rem;font-size:1rem;line-height:1.5;border-radius:",i.default.borderRadius.rem,"rem;position:relative;text-decoration:none;text-transform:uppercase;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;&:focus,&:hover{text-decoration:none;}&:focus,&.focused{outline:0;box-shadow:0 0 0 .2rem ",c.default.focused.default,";}&:disabled,&.disabled{cursor:not-allowed;pointer-events:none;}&:not(:disabled):not(.disabled){cursor:pointer;}svg{height:1rem;width:1rem;}label:Button;"),function(e){var t=e.type,n=e.outline,a=e.text;switch(t){case"primary":return(0,o.css)("color:",c.default.white.default,";background-color:",c.default.primary.default,";border-color:",c.default.primary.default,";",n&&"\n                        background-color: transparent;\n                        border: 1px solid inherit;\n                        color: ".concat(c.default.primary.default,";\n                    ")," ",a&&"\n                        background-color: transparent;\n                        border: 1px solid transparent;\n                        color: ".concat(c.default.primary.default,";\n                    ")," &:hover,&.active{background-color:",(0,s.desaturate)((0,s.darken)(c.default.primary.default)),";border-color:",(0,s.desaturate)((0,s.darken)(c.default.primary.default)),";",n&&"\n                            background-color: ".concat(c.default.primary.default,";\n                            border: 1px solid ").concat(c.default.primary.default,";\n                            color: ").concat(c.default.white.default,";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.darken)(c.default.primary.default)),";\n                        "),"}&:disabled,&.disabled{background-color:",(0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";border-color:",(0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";",n&&"\n                            background-color: transparent;\n                            border: 1px solid ".concat(c.default.primary.default,";\n                            color: ").concat((0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";\n                        "),"}label:Button;");case"danger":return(0,o.css)("color:",c.default.white.default,";background-color:",c.default.danger.default,";border-color:",c.default.danger.default,";",n&&"\n                        background-color: transparent;\n                        border: 1px solid inherit;\n                        color: ".concat(c.default.danger.default,";\n                    ")," ",a&&"\n                        background-color: transparent;\n                        border: 1px solid transparent;\n                        color: ".concat(c.default.danger.default,";\n                    ")," &:hover,&.active{background-color:",(0,s.desaturate)((0,s.darken)(c.default.danger.default)),";border-color:",(0,s.desaturate)((0,s.darken)(c.default.danger.default)),";",n&&"\n                            background-color: ".concat(c.default.danger.default,";\n                            border: 1px solid ").concat(c.default.danger.default,";\n                            color: ").concat(c.default.white.default,";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.darken)(c.default.danger.default)),";\n                        "),"}&:disabled,&.disabled{background-color:",(0,s.lighten)(c.default.danger.default,.3),";border-color:",(0,s.lighten)(c.default.danger.default,.3),";",n&&"\n                            background-color: transparent;\n                            border: 1px solid ".concat(c.default.danger.default,";\n                            color: ").concat((0,s.desaturate)((0,s.lighten)(c.default.danger.default,.3)),";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.lighten)(c.default.danger.default,.3)),";\n                        "),"}label:Button;");case"white":return(0,o.css)("background-color:",c.default.white.default,";border-color:transparent;color:",c.default.primary.default,";",n&&"\n                    background-color: transparent;\n                    border: 1px solid inherit;\n                    color: ".concat(c.default.white.default,";\n                ")," ",a&&"\n                    background-color: transparent;\n                    border: 1px solid transparent;\n                    color: ".concat(c.default.white.default,";\n                ")," &:hover,&.active{background-color:",c.default.dove.default,";border-color:transparent;color:",c.default.dark.default,";",n&&"\n                        background-color: ".concat(c.default.dove.default,";\n                        border: 1px solid ").concat(c.default.dove.default,";\n                        color: ").concat(c.default.black.default,";\n                    ")," ",a&&"\n                        background-color: transparent;\n                        border: 1px solid transparent;\n                        color: ".concat(c.default.dove.default,";\n                    "),"}&:disabled,&.disabled{color:",(0,s.darken)(c.default.gray.default,.1),";background-color:",(0,s.lighten)(c.default.muted.default,.01),";border-color:transparent;",n&&"\n                        background-color: transparent;\n                        border: 1px solid ".concat(c.default.gray.default,";\n                        color: ").concat((0,s.lighten)(c.default.gray.default,.01),";\n                    ")," ",a&&"\n                        background-color: transparent;\n                        border: 1px solid transparent;\n                        color: ".concat((0,s.desaturate)((0,s.lighten)(c.default.black.default)),";\n                    "),"}label:Button;");case"default":default:return(0,o.css)("background-color:rgba(255,255,255,1);border-color:transparent;color:",c.default.primary.default,";",n&&"\n                        background-color: transparent;\n                        border: 1px solid inherit;\n                        color: ".concat(c.default.black.default,";\n                    ")," ",a&&"\n                        background-color: transparent;\n                        border: 1px solid transparent;\n                        color: ".concat(c.default.black.default,";\n                    ")," &:hover,&.active{background-color:",c.default.dove.default,";border-color:transparent;color:",c.default.dark.default,";",n&&"\n                            background-color: ".concat(c.default.muted.default,";\n                            border: 1px solid ").concat(c.default.muted.default,";\n                            color: ").concat(c.default.black.default,";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.lighten)(c.default.black.default,.5)),";\n                        "),"}&:disabled,&.disabled{color:",(0,s.darken)(c.default.gray.default,.1),";background-color:",(0,s.lighten)(c.default.muted.default,.01),";border-color:transparent;",n&&"\n                            background-color: transparent;\n                            border: 1px solid ".concat(c.default.gray.default,";\n                            color: ").concat((0,s.lighten)(c.default.gray.default,.01),";\n                        ")," ",a&&"\n                            background-color: transparent;\n                            border: 1px solid transparent;\n                            color: ".concat((0,s.desaturate)((0,s.lighten)(c.default.black.default)),";\n                        "),"}label:Button;")}},function(e){return e.outline&&b},function(e){return e.text&&h},function(e){switch(e.size){case"small":return m;case"large":return y;case"default":default:return""}},function(e){return e.block&&v},function(e){return e.loading&&k},"");t.EmotionButton=x;var w={name:"1211elo-IconWrapper",styles:"height:0.9rem;width:0.9rem;label:IconWrapper;"},j={name:"1k67gn7-IconWrapper",styles:"height:1.2rem;width:1.2rem;label:IconWrapper;"},z=(0,a.default)("span",{target:"e1hgvqz31",label:"IconWrapper"})("font-size:inherit;margin-right:0.3rem;vertical-align:middle;svg{height:1rem;width:1rem;",function(e){switch(e.size){case"small":return w;case"large":return j;case"default":default:return""}},"}"),O={name:"zl357o-LoadingWrapper",styles:"height:1.2rem;width:1.2rem;label:LoadingWrapper;"},_={name:"1wcoz6b-LoadingWrapper",styles:"height:2.4rem;width:2.4rem;label:LoadingWrapper;"},B=(0,a.default)("div",{target:"e1hgvqz32",label:"LoadingWrapper"})("position:absolute;left:50%;transform:translate(-50%,-50%);top:50%;align-content:center;justify-content:center;display:flex;svg{height:1.4rem;width:1.4rem;",function(e){switch(e.size){case"small":return O;case"large":return _;case"default":default:return""}}," path{",function(e){var t=e.type,n=e.outline,a=e.text;switch(t){case"primary":return(0,o.css)("fill:",c.default.white.default,";",n&&(0,o.css)("fill:",c.default.primary.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",c.default.primary.default,";label:LoadingWrapper;")," &:hover,&.active{",n&&(0,o.css)("fill:",c.default.white.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.darken)(c.default.primary.default)),";label:LoadingWrapper;"),"}&:disabled,&.disabled{",n&&(0,o.css)("fill:",(0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.lighten)(c.default.primary.default)),";label:LoadingWrapper;"),"}label:LoadingWrapper;");case"danger":return(0,o.css)("fill:",c.default.white.default,";",n&&(0,o.css)("fill:",c.default.danger.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",c.default.danger.default,";label:LoadingWrapper;")," &:hover,&.active{",n&&(0,o.css)("fill:",c.default.white.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.darken)(c.default.danger.default)),";label:LoadingWrapper;"),"}&:disabled,&.disabled{",n&&(0,o.css)("fill:",(0,s.desaturate)((0,s.lighten)(c.default.danger.default,.3)),";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.lighten)(c.default.danger.default,.3)),";label:LoadingWrapper;"),"}label:LoadingWrapper;");case"default":default:return(0,o.css)("fill:",c.default.black.default,";",n&&(0,o.css)("fill:",c.default.black.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",c.default.black.default,";label:LoadingWrapper;")," &:hover,&.active{",n&&(0,o.css)("fill:",c.default.black.default,";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.darken)(c.default.black.default)),";label:LoadingWrapper;"),"}&:disabled,&.disabled{fill:",(0,s.darken)(c.default.gray.default,.1),";",n&&(0,o.css)("fill:",(0,s.lighten)(c.default.gray.default,.01),";label:LoadingWrapper;")," ",a&&(0,o.css)("fill:",(0,s.desaturate)((0,s.lighten)(c.default.black.default)),";label:LoadingWrapper;"),"}label:LoadingWrapper;")}},"}}"),W=function(e){var t,n=e.icon,a=e.children,o=e.component,l=e.size,d=e.loading,i=e.buttonType,c=void 0===i?"button":i,s=g(e,["icon","children","component","size","loading","buttonType"]),f=x;return o&&(f=x.withComponent(o,{target:"e1hgvqz33",label:"ButtonWrapper",target:"ekesu3g0"})),r.default.createElement(f,p({size:l,loading:d,type:c},s),n&&r.default.createElement(z,{size:l},"function"===typeof(t=n)?r.default.createElement(t,null):t),d&&r.default.createElement(B,p({size:l},s),r.default.createElement(u.default,null)),a)};W.propTypes={block:l.bool,buttonType:l.string,component:(0,l.oneOfType)([l.string,l.func]),icon:(0,l.oneOfType)([l.node,l.func]),loading:l.bool,outline:l.bool,size:(0,l.oneOf)(["small","default","large"]),text:l.bool,type:(0,l.oneOf)(["default","white","primary","danger","success"])};var L=W;t.default=L},"./packages/unity-web/lib/components/Typography/Typography.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("./node_modules/@emotion/styled/dist/styled.browser.esm.js")),r=n("./node_modules/prop-types/index.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),l=c(n("./packages/unity-core/lib/colors.js")),d=n("./packages/unity-core/lib/typography.js"),i=n("./packages/unity-web/lib/theme/fonts.js");function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=function(e){var t=e.type,n=void 0===t?"text":t,r=e.variant,c=e.color,f=void 0===c?"dark":c,p=e.children,g=e.component,b=void 0===g?"p":g,h=e.noMargin,m=void 0!==h&&h,y=e.noPadding,v=void 0!==y&&y,k=e.inline,x=void 0!==k&&k,w=e.css,j=e.center,z=void 0!==j&&j,O=u(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),_=[Boolean(n)?i.types[n]:{},Boolean(r)?d.variants[r]:{},Boolean(f)?{color:l.default[f].default}:{},Boolean(v)?"\n    padding: 0;\n":{},Boolean(m)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(w)?w:{},Boolean(x)?{display:"inline-block"}:{},Boolean(z)?{textAlign:"center"}:{}];if("string"===typeof b){var B=b;"p"===b&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(n)&&(B=n);var W=a.default[B](_,"");return(0,o.jsx)(W,O,p)}var L=b;return(0,o.jsx)(L,s({},O,{css:_}),p)};f.propTypes={center:r.bool,children:r.node,color:(0,r.oneOf)(Object.keys(l.default)),component:(0,r.oneOfType)([r.string,r.node]),css:r.string,inline:r.bool,noMargin:r.bool,noPadding:r.bool,type:(0,r.oneOf)(Object.keys(i.types)),variant:(0,r.oneOf)(Object.keys(d.variants))};var p=f;t.default=p},"./packages/unity-web/lib/components/Typography/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var a,r=(a=n("./packages/unity-web/lib/components/Typography/Typography.js"))&&a.__esModule?a:{default:a}},"./packages/unity-web/lib/components/svgs/Loading.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n("./node_modules/react/index.js"))&&a.__esModule?a:{default:a};var o=function(){return r.default.createElement("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"50px",height:"50px",viewBox:"0 0 50 50",style:{enableBackground:"new 0 0 50 50"}},r.default.createElement("path",{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"},r.default.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})))};t.default=o},"./packages/unity-web/lib/theme/fonts.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.types=void 0;var a,r=n("./packages/unity-core/lib/typography.js"),o=(a=n("./packages/unity-core/lib/colors.js"))&&a.__esModule?a:{default:a},l=n("./packages/unity-core/lib/utilities/color.js");var d={h1:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h1.rem,"rem;\n        line-height: ").concat(r.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h2.rem,"rem;\n        line-height: ").concat(r.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h3.rem,"rem;\n        line-height: ").concat(r.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h4.rem,"rem;\n        line-height: ").concat(r.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h5.rem,"rem;\n        line-height: ").concat(r.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h6.rem,"rem;\n        line-height: ").concat(r.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(r.variants.readable.string,"\n\n        font-size: ").concat(r.sizes.p.rem,"rem;\n        line-height: ").concat(r.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text.rem,"rem;\n        line-height: ").concat(r.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text2.rem,"rem;\n        line-height: ").concat(r.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(r.variants.text.string,"\n\n        color: ").concat(o.default.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(r.sizes.subtext.rem,"rem;\n        line-height: ").concat(r.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(o.default.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(o.default.primary.default,";\n        color: ").concat(o.default.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(o.default.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(o.default.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat((0,l.darken)(o.default.primary.default,.2),";\n            color: ").concat((0,l.darken)(o.default.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(o.default.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(o.default.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(o.default.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")};t.types=d}}]);
//# sourceMappingURL=packages-unity-forms-src-form-from-schema-form-from-schema~packages-unity-marketing-src-components-f~5ed44ecd.bba84be144a550594f03.js.map