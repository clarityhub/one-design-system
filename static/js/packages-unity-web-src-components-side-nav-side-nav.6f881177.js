(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./packages/unity-web/src/components/Typography/index.js");function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=function(e){var n=e.component,t=void 0===n?"a":n,o=e.children,c=e.variant,s=void 0===c?"text":c,l=e.color,d=void 0===l?"primary":l,p=e.type,u=i(e,["component","children","variant","color","type"]);return r.a.createElement(a.a,Object.assign({type:p||"link",variant:s,color:d,component:t},u),o)},s=function(){return r.a.createElement("div",null)};n.b=c,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},c.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Link/LinkButton.js":function(e,n,t){"use strict";var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./packages/unity-web/src/components/Buttons/Button.js");function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=function(e){var n=e.history,t=e.to,o=e.onClick,c=i(e,["history","to","onClick"]);return r.a.createElement(a.b,Object.assign({},c,{onClick:function(e){o&&o(e),n.push(t)}}))};n.a=c,c.__docgenInfo={description:"",methods:[],displayName:"LinkButton",props:{children:{type:{name:"node"},required:!0,description:""},history:{type:{name:"shape",value:{push:{name:"func",required:!0}}},required:!0,description:""},to:{type:{name:"string"},required:!0,description:""}}}},"./packages/unity-web/src/components/Link/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Link/Link.js");t.d(n,"a",function(){return o.b});t("./packages/unity-web/src/components/Link/LinkButton.js")},"./packages/unity-web/src/components/SideNav/SideNav.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./packages/unity-web/src/components/SideNav/config.js"),a=Object(o.default)("div",{target:"eh4nhn00"})("box-sizing:border-box;padding:3rem 2rem 3rem 0;width:",r.a,"rem;"),i=function(){return React.createElement("div",null)};a.propTypes=i.propTypes,n.b=a,i.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"SideNavProps",props:{children:{type:{name:"enum",value:[{value:"'SideNavGroup'",computed:!1},{value:"'SideNavItem'",computed:!1}]},required:!1,description:""}}}},"./packages/unity-web/src/components/SideNav/SideNav.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return S});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),c=t("./packages/unity-web/src/components/SideNav/SideNav.js"),s=t("./packages/unity-web/src/components/SideNav/SideNavItem.js"),l=t("./packages/unity-web/src/components/SideNav/SideNavGroup.js"),d=t("./packages/unity-web/src/components/Link/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function m(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,n,t){return n&&f(e.prototype,n),t&&f(e,t),e}function v(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?y(e):n}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var S=function(e){function n(e){var t;return m(this,n),(t=v(this,b(n).call(this,e))).layout=null,t}return g(n,r.a.Component),h(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=u(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"sidenav"}},"SideNav"),r.a.createElement(a.MDXTag,{name:"p",components:n},"The ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SideNav")," (aka Sidebar) of the application.\n",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SideNavGroup")," components will expand when selected."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"sidenav--component"}},"<SideNav /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import SideNav, { SideNavItem, SideNavGroup } from '@clarityhub/unity-web/lib/components/SideNav';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"sidenav-1"}},"SideNav"),r.a.createElement(i.f,{of:c.a}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"sidenavgroup"}},"SideNavGroup"),r.a.createElement(i.f,{of:l.a}),r.a.createElement(a.MDXTag,{name:"h3",components:n,props:{id:"sidenavitem"}},"SideNavItem"),r.a.createElement(i.f,{of:s.a}),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),r.a.createElement(i.e,{__position:3,__code:'() => {\n  class ControlledSideNav extends Component {\n    constructor(props) {\n      super(props)\n      this.state = {\n        selected: 0,\n      }\n\n      this.onSelect = this.onSelect.bind(this)\n    }\n\n    onSelect(i) {\n      const doChange = function(e) {\n        e.preventDefault()\n\n        this.setState({\n          selected: i,\n        })\n      }\n\n      return doChange.bind(this)\n    }\n\n    render() {\n      const { selected } = this.state\n      return (\n        <SideNav>\n          <SideNavItem selected={selected === 0}>\n            <Link href="#" onClick={this.onSelect(0)}>\n              Home\n            </Link>\n          </SideNavItem>\n          <SideNavItem selected={selected === 1}>\n            <Link href="#" onClick={this.onSelect(1)}>\n              Insights\n            </Link>\n          </SideNavItem>\n          <SideNavItem selected={selected === 2}>\n            <Link href="#" onClick={this.onSelect(2)}>\n              Integrations\n            </Link>\n          </SideNavItem>\n          <SideNavItem selected={selected === 3}>\n            <Link href="#" onClick={this.onSelect(3)}>\n              Apps\n            </Link>\n          </SideNavItem>\n          <SideNavItem selected={selected === 4}>\n            <Link href="#" onClick={this.onSelect(4)}>\n              Account\n            </Link>\n\n            <SideNavGroup>\n              <SideNavItem>\n                <Link href="#">Profile</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Billing</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Usage</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Users</Link>\n              </SideNavItem>\n            </SideNavGroup>\n          </SideNavItem>\n          <SideNavItem selected={selected === 5}>\n            <Link href="#" onClick={this.onSelect(5)}>\n              Developers\n            </Link>\n\n            <SideNavGroup>\n              <SideNavItem>\n                <Link href="#">API Keys</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Web Console</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Webhooks</Link>\n              </SideNavItem>\n              <SideNavItem>\n                <Link href="#">Logs</Link>\n              </SideNavItem>\n            </SideNavGroup>\n          </SideNavItem>\n        </SideNav>\n      )\n    }\n  }\n\n  return <ControlledSideNav />\n}',__scope:{props:this?this.props:t,Component:o.Component,SideNav:c.b,SideNavProps:c.a,SideNavItem:s.b,SideNavItemProps:s.a,SideNavGroup:l.b,SideNavGroupProps:l.a,Link:d.a}},function(){var e=function(e){function n(e){var t;return m(this,n),(t=v(this,b(n).call(this,e))).state={selected:0},t.onSelect=t.onSelect.bind(y(t)),t}return g(n,o["Component"]),h(n,[{key:"onSelect",value:function(e){return function(n){n.preventDefault(),this.setState({selected:e})}.bind(this)}},{key:"render",value:function(){var e=this.state.selected;return r.a.createElement(c.b,null,r.a.createElement(s.b,{selected:0===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(0)},"Home")),r.a.createElement(s.b,{selected:1===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(1)},"Insights")),r.a.createElement(s.b,{selected:2===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(2)},"Integrations")),r.a.createElement(s.b,{selected:3===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(3)},"Apps")),r.a.createElement(s.b,{selected:4===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(4)},"Account"),r.a.createElement(l.b,null,r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Profile")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Billing")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Usage")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Users")))),r.a.createElement(s.b,{selected:5===e},r.a.createElement(d.a,{href:"#",onClick:this.onSelect(5)},"Developers"),r.a.createElement(l.b,null,r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"API Keys")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Web Console")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Webhooks")),r.a.createElement(s.b,null,r.a.createElement(d.a,{href:"#"},"Logs")))))}}]),n}();return r.a.createElement(e,null)}))}}]),n}();S.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/SideNav/SideNavGroup.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=Object(o.default)("div",{target:"elxq9rq0"})({name:"h7qudt",styles:"transition:all 0.3s ease-in;a,a:visited{padding-left:1rem !important;}"}),a=function(){return React.createElement("div",null)};r.propTypes=a.propTypes,n.b=r,a.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"SideNavGroupProps",props:{children:{type:{name:"node"},required:!1,description:""}}}},"./packages/unity-web/src/components/SideNav/SideNavItem.js":function(e,n,t){"use strict";t.d(n,"a",function(){return d});var o=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/colors.js"),i=t.n(a),c=t("./packages/unity-web/src/components/SideNav/SideNavGroup.js"),s={name:"qcz9cc",styles:"opacity:1;max-height:400px;"},l=Object(o.default)("div",{target:"ec2haq50"})("width:100%;",c.b,"{opacity:0;max-height:0;overflow:hidden;",function(e){return e.selected&&s},"}> a,> a:visited{border:0 !important;text-decoration:none;color:",i.a.darkGray.default,";display:block;font-size:0.9rem;padding:0.6rem 0;margin-bottom:0;&:hover{border:0 !important;text-decoration:none;color:",i.a.dark.default,";display:block;margin-bottom:0;}",function(e){return e.selected&&Object(r.css)("color:",i.a.primary.default,";font-weight:bold;&:hover{color:",i.a.primary.default,";}")},"}"),d=function(){return React.createElement("div",null)};l.propTypes=d.propTypes,n.b=l,d.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"SideNavItemProps",props:{children:{type:{name:"node"},required:!1,description:""},selected:{type:{name:"bool"},required:!0,description:""}}}},"./packages/unity-web/src/components/SideNav/config.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=14},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var o=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),r=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=t("./packages/unity-core/lib/colors.js"),i=t.n(a),c=t("./packages/unity-core/lib/typography.js"),s=t("./packages/unity-web/src/theme/fonts.js");function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=function(e){var n=e.type,t=void 0===n?"text":n,a=e.variant,d=e.color,p=void 0===d?"dark":d,u=e.children,m=e.component,f=void 0===m?"p":m,h=e.noMargin,v=void 0!==h&&h,y=e.noPadding,b=void 0!==y&&y,g=e.inline,k=void 0!==g&&g,S=e.css,N=e.center,j=void 0!==N&&N,w=l(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),x=[Boolean(t)?s.a[t]:{},Boolean(a)?c.variants[a]:{},Boolean(p)?{color:i.a[p].default}:{},Boolean(b)?"\n    padding: 0;\n":{},Boolean(v)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(S)?S:{},Boolean(k)?{display:"inline-block"}:{},Boolean(j)?{textAlign:"center"}:{}];if("string"===typeof f){var E=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(E=t);var I=o.default[E](x,"");return Object(r.jsx)(I,w,u)}var O=f;return Object(r.jsx)(O,Object.assign({},w,{css:x}),u)};n.a=d,d.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/components/Typography/index.js":function(e,n,t){"use strict";var o=t("./packages/unity-web/src/components/Typography/Typography.js");t.d(n,"a",function(){return o.a})},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",function(){return c});var o=t("./packages/unity-core/lib/typography.js"),r=t("./packages/unity-core/lib/colors.js"),a=t.n(r),i=t("./packages/unity-core/lib/utilities/color.js"),c={h1:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h1.rem,"rem;\n        line-height: ").concat(o.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h2.rem,"rem;\n        line-height: ").concat(o.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(o.variants.heading.string,"\n\n        font-size: ").concat(o.sizes.h3.rem,"rem;\n        line-height: ").concat(o.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h4.rem,"rem;\n        line-height: ").concat(o.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h5.rem,"rem;\n        line-height: ").concat(o.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(o.variants.secondary.string,"\n\n        font-size: ").concat(o.sizes.h6.rem,"rem;\n        line-height: ").concat(o.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(o.variants.readable.string,"\n\n        font-size: ").concat(o.sizes.p.rem,"rem;\n        line-height: ").concat(o.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text.rem,"rem;\n        line-height: ").concat(o.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(o.variants.text.string,"\n\n        font-size: ").concat(o.sizes.text2.rem,"rem;\n        line-height: ").concat(o.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(o.variants.text.string,"\n\n        color: ").concat(a.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(o.sizes.subtext.rem,"rem;\n        line-height: ").concat(o.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(a.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(a.a.primary.default,";\n        color: ").concat(a.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(a.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(a.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            color: ").concat(Object(i.darken)(a.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(a.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(a.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(a.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-side-nav-side-nav.7fcb59b90cc3782a9b4c.js.map