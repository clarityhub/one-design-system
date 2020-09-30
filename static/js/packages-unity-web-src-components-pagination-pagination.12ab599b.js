(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"./packages/unity-web/src/components/Link/Link.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("./node_modules/react/index.js"),a=t.n(r),i=t("./packages/unity-web/src/components/Typography/Typography.js");function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=function(e){var n=e.component,t=void 0===n?"a":n,r=e.children,s=e.variant,l=void 0===s?"text":s,c=e.color,u=void 0===c?"primary":c,p=e.type,d=o(e,["component","children","variant","color","type"]);return a.a.createElement(i.a,Object.assign({type:p||"link",variant:l,color:u,component:t},d),r)},l=function(){return a.a.createElement("div",null)};n.b=s,l.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"LinkPropTypes",props:{children:{type:{name:"node"},required:!1,description:""},color:{type:{name:"string"},required:!1,description:""},component:{type:{name:"union",value:[{name:"string"},{name:"func"}]},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},variant:{type:{name:"string"},required:!1,description:""}}},s.__docgenInfo={description:"",methods:[],displayName:"Link",props:{component:{defaultValue:{value:"'a'",computed:!1},required:!1},variant:{defaultValue:{value:"'text'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Pagination/Pagination.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),a=t.n(r),i=t("./node_modules/@mdx-js/tag/dist/index.js"),o=t("./node_modules/docz/dist/index.m.js"),s=t("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),l=t("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"),c=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),u=t("./packages/unity-core/lib/colors.js"),p=t.n(u),d=t("./packages/unity-web/src/theme/breakpoints.js"),m=t("./packages/unity-web/src/components/Link/Link.js");function f(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=function(e){var n=e.pageRenderer,t=f(e,["pageRenderer"]),r=t.pageClassName,i=t.pageLinkClassName,o=t.page,s=t.onClick,l=t.href,c="Page "+t.page+(t.extraAriaContext?" "+t.extraAriaContext:""),u=null;return t.selected&&(u="page",c="Page "+t.page+" is your current page",r="undefined"!==typeof r?r+" "+t.activeClassName:t.activeClassName,"undefined"!==typeof i?"undefined"!==typeof t.activeLinkClassName&&(i=i+" "+t.activeLinkClassName):i=t.activeLinkClassName),a.a.createElement("li",{className:r},n({onClick:s,className:i,href:l,ariaLabel:c,ariaCurrent:u,onKeyPress:s,page:o}))},y=g;g.__docgenInfo={description:"",methods:[],displayName:"PageView",props:{activeClassName:{type:{name:"string"},required:!1,description:""},activeLinkClassName:{type:{name:"string"},required:!1,description:""},extraAriaContext:{type:{name:"string"},required:!1,description:""},onClick:{type:{name:"func"},required:!0,description:""},page:{type:{name:"number"},required:!0,description:""},pageClassName:{type:{name:"string"},required:!1,description:""},pageLinkClassName:{type:{name:"string"},required:!1,description:""},pageRenderer:{type:{name:"func"},required:!0,description:""},selected:{type:{name:"bool"},required:!0,description:""}}};var b=function(e){var n=e.breakLabel;return a.a.createElement("li",null,n)},v=b;function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,n){return(C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function P(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=w(e);if(n){var a=w(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return N(this,t)}}function N(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?j(e):n}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}b.__docgenInfo={description:"",methods:[],displayName:"BreakView",props:{breakLabel:{type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""}}};var q=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&C(e,n)}(o,e);var n,t,r,i=P(o);function o(){var e;k(this,o);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return O(j(e=i.call.apply(i,[this].concat(t))),"handlePreviousPage",(function(n){var t=e.props.selected;n.preventDefault?n.preventDefault():n.returnValue=!1,t>0&&e.handlePageSelected(t-1,n)})),O(j(e),"handleNextPage",(function(n){var t=e.props,r=t.selected,a=t.pageCount;n.preventDefault?n.preventDefault():n.returnValue=!1,r<a-1&&e.handlePageSelected(r+1,n)})),O(j(e),"handlePageSelected",(function(n,t){t.preventDefault?t.preventDefault():t.returnValue=!1,e.props.selected!==n&&(e.setState({selected:n}),e.callCallback(n))})),O(j(e),"handleBreakClick",(function(n,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=e.props.selected;e.handlePageSelected(r<n?e.getForwardJump():e.getBackwardJump(),t)})),O(j(e),"callCallback",(function(n){"undefined"!==typeof e.props.onPageChange&&"function"===typeof e.props.onPageChange&&e.props.onPageChange({selected:n})})),O(j(e),"pageRenderer",(function(n){var t=e.props.pageRenderer,r=n.page,i=n.onClick,o=n.className,s=n.ariaLabel,l=n.ariaCurrent;return t?t(n):a.a.createElement("a",{onClick:i,role:"button",className:o,href:"/#",tabIndex:"0","aria-label":s,"aria-current":l,onKeyPress:i},r)})),O(j(e),"previousRenderer",(function(n){var t=e.props.previousRenderer,r=n.onClick,i=n.className,o=n.onKeyPress,s=n.ariaDisabled,l=n.children;return t?t(n):a.a.createElement("a",{onClick:r,className:i,tabIndex:"0",href:"/#",role:"button",onKeyPress:o,"aria-disabled":s},l)})),O(j(e),"nextRenderer",(function(n){var t=e.props.nextRenderer,r=n.onClick,i=n.className,o=n.onKeyPress,s=n.ariaDisabled,l=n.children;return t?t(n):a.a.createElement("a",{onClick:r,className:i,tabIndex:"0",href:"/#",role:"button",onKeyPress:o,"aria-disabled":s},l)})),O(j(e),"pagination",(function(){var n=[],t=e.props,r=t.pageRangeDisplayed,i=t.pageCount,o=t.marginPagesDisplayed,s=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=t.selected;if(i<=r)for(var p=0;p<i;p++)n.push(e.getPageElement(p));else{var d,m,f,g=r/2,y=r-g;u>i-r/2?g=r-(y=i-u):u<r/2&&(y=r-(g=u));var b=function(n){return e.getPageElement(n)};for(d=0;d<i;d++)(m=d+1)<=o||m>i-o||d>=u-g&&d<=u+y?n.push(b(d)):s&&n[n.length-1]!==f&&(f=a.a.createElement(v,{key:d,breakLabel:s,breakClassName:l,breakLinkClassName:c,onClick:e.handleBreakClick.bind(null,d)}),n.push(f))}return n})),e}return n=o,(t=[{key:"componentDidMount",value:function(){var e=this.props,n=e.initialPage,t=e.disableInitialCallback;"undefined"===typeof n||t||this.callCallback(n)}},{key:"getForwardJump",value:function(){var e=this.props,n=e.selected,t=e.pageCount,r=n+e.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.props,n=e.selected-e.pageRangeDisplayed;return n<0?0:n}},{key:"getPageElement",value:function(e){var n=this.props,t=n.pageClassName,r=n.pageLinkClassName,i=n.activeClassName,o=n.activeLinkClassName,s=n.extraAriaContext,l=n.selected;return a.a.createElement(y,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:l===e,pageClassName:t,pageLinkClassName:r,activeClassName:i,activeLinkClassName:o,extraAriaContext:s,pageRenderer:this.pageRenderer,page:e+1})}},{key:"render",value:function(){var e=this.props,n=e.disabledClassName,t=e.previousClassName,r=e.nextClassName,i=e.pageCount,o=e.containerClassName,s=e.previousLinkClassName,l=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,p=e.selected,d=t+(0===p?" ".concat(n):""),m=r+(p===i-1?" ".concat(n):""),f=0===p,g=p===i-1;return a.a.createElement("ul",{className:o},a.a.createElement("li",{className:d},this.previousRenderer({onClick:this.handlePreviousPage,className:s,onKeyPress:this.handlePreviousPage,disabled:f,ariaDisabled:String(f),children:l})),this.pagination(),a.a.createElement("li",{className:m},this.nextRenderer({onClick:this.handleNextPage,className:c,onKeyPress:this.handleNextPage,disabled:g,ariaDisabled:String(g),children:u})))}}])&&x(n.prototype,t),r&&x(n,r),o}(r.Component);O(q,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1}),q.__docgenInfo={description:"",methods:[{name:"handlePreviousPage",docblock:null,modifiers:[],params:[{name:"evt",type:null}],returns:null},{name:"handleNextPage",docblock:null,modifiers:[],params:[{name:"evt",type:null}],returns:null},{name:"handlePageSelected",docblock:null,modifiers:[],params:[{name:"selected",type:null},{name:"evt",type:null}],returns:null},{name:"getForwardJump",docblock:null,modifiers:[],params:[],returns:null},{name:"getBackwardJump",docblock:null,modifiers:[],params:[],returns:null},{name:"handleBreakClick",docblock:null,modifiers:[],params:[{name:"index",type:null},{name:"evt",type:null}],returns:null},{name:"callCallback",docblock:null,modifiers:[],params:[{name:"selectedItem",type:null}],returns:null},{name:"pageRenderer",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null},{name:"previousRenderer",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null},{name:"nextRenderer",docblock:null,modifiers:[],params:[{name:"props",type:null}],returns:null},{name:"getPageElement",docblock:null,modifiers:[],params:[{name:"index",type:null}],returns:null},{name:"pagination",docblock:null,modifiers:[],params:[],returns:null}],displayName:"PaginationBoxView",props:{pageCount:{defaultValue:{value:"10",computed:!1},type:{name:"number"},required:!1,description:""},pageRangeDisplayed:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""},marginPagesDisplayed:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},activeClassName:{defaultValue:{value:"'selected'",computed:!1},type:{name:"string"},required:!1,description:""},previousClassName:{defaultValue:{value:"'previous'",computed:!1},type:{name:"string"},required:!1,description:""},nextClassName:{defaultValue:{value:"'next'",computed:!1},type:{name:"string"},required:!1,description:""},previousLabel:{defaultValue:{value:"'Previous'",computed:!1},type:{name:"node"},required:!1,description:""},nextLabel:{defaultValue:{value:"'Next'",computed:!1},type:{name:"node"},required:!1,description:""},breakLabel:{defaultValue:{value:"'...'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},disabledClassName:{defaultValue:{value:"'disabled'",computed:!1},type:{name:"string"},required:!1,description:""},disableInitialCallback:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},activeLinkClassName:{type:{name:"string"},required:!1,description:""},breakClassName:{type:{name:"string"},required:!1,description:""},breakLinkClassName:{type:{name:"string"},required:!1,description:""},containerClassName:{type:{name:"string"},required:!1,description:""},extraAriaContext:{type:{name:"string"},required:!1,description:""},nextLinkClassName:{type:{name:"string"},required:!1,description:""},nextRenderer:{type:{name:"func"},required:!1,description:""},onPageChange:{type:{name:"func"},required:!1,description:""},pageClassName:{type:{name:"string"},required:!1,description:""},pageLinkClassName:{type:{name:"string"},required:!1,description:""},pageRenderer:{type:{name:"func"},required:!1,description:""},previousLinkClassName:{type:{name:"string"},required:!1,description:""},previousRenderer:{type:{name:"func"},required:!1,description:""},selected:{type:{name:"number"},required:!1,description:""}}};var E=Object(s.default)("div",{target:"e171o4c40"})("margin:3rem 1rem;text-align:center;li{display:inline-block;}li + li{margin-left:1rem;}@media (max-width:",d.a.smallMaxWidth,"px){li:first-of-type,li:last-of-type{display:block;margin:1rem;}}"),R=Object(s.default)("div",{shouldForwardProp:function(e){return Object(l.default)(e)&&!["selected"].includes(e)},target:"e171o4c41"})("a{border:1px solid ",p.a.gray.default,";border-radius:50%;color:",p.a.primary.default,";font-size:0.9rem;text-align:center;height:2.25rem;width:2.25rem;display:flex;align-items:center;justify-content:center;&:hover{background-color:",p.a.muted.default,";border:1px solid ",p.a.gray.default,";}&:visited{border:1px solid ",p.a.gray.default,";color:",p.a.primary.default,";}",(function(e){return e.selected&&Object(c.css)("background-color:",p.a.primary.default,";color:",p.a.white.default," !important;border:1px solid ",p.a.primary.default,";box-shadow:",p.a.shadow.default,";&:hover{background-color:",p.a.primary.default,";border:1px solid ",p.a.primary.default,";}&:visited{color:",p.a.white.default," !important;}")}),"}"),_=function(e){var n=e.index,t=e.pageCount,r=e.nextRenderer,i=void 0===r?function(e){var n=e.index,t=(e.disabled,(n+1).toString());return a.a.createElement(m.b,{href:"/".concat(t)},">")}:r,o=e.previousRenderer,s=void 0===o?function(e){var n=e.index,t=(e.disabled,n-1===1?"":(n-1).toString());return a.a.createElement(m.b,{href:"/".concat(t)},"<")}:o,l=e.pageRenderer,c=void 0===l?function(e){var n=e.page,t=1===n?"":n;return a.a.createElement(m.b,{href:"/".concat(t)},n)}:l;return 1===t?null:a.a.createElement(E,null,a.a.createElement(q,{pageCount:t,pageRangeDisplayed:3,marginPagesDisplayed:1,selected:n-1,nextRenderer:function(e){var t=e.disabled;return t?null:a.a.createElement(R,null,i({index:n,disabled:t}))},previousRenderer:function(e){var t=e.disabled;return t?null:a.a.createElement(R,null,s({index:n,disabled:t}))},pageRenderer:function(e){var t=e.page;return a.a.createElement(R,{selected:String(t)===String(n)},c({page:t}))}}))},L=_;_.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{nextRenderer:{defaultValue:{value:"({ index, disabled }) => {\n    const nextUrl = (index + 1).toString();\n\n    return (\n        <Link href={`/${nextUrl}`}>\n            &gt;\n        </Link>\n    );\n}",computed:!1},type:{name:"func"},required:!1,description:""},previousRenderer:{defaultValue:{value:"({ index, disabled }) => {\n    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();\n\n    return (\n        <Link href={`/${previousUrl}`}>\n            &lt;\n        </Link>\n    );\n}",computed:!1},type:{name:"func"},required:!1,description:""},pageRenderer:{defaultValue:{value:"({ page }) => {\n    const url = page === 1 ? '' : page;\n\n    return (\n        <Link href={`/${url}`}>\n            {page}\n        </Link>\n    );\n}",computed:!1},type:{name:"func"},required:!1,description:""},first:{type:{name:"number"},required:!1,description:""},index:{type:{name:"number"},required:!0,description:""},last:{type:{name:"number"},required:!1,description:""},pageCount:{type:{name:"number"},required:!0,description:""}}};var S=t("./packages/unity-web/src/components/Button/Button.js");function z(e){return(z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function V(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,n){return(B=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=M(e);if(n){var a=M(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return T(this,t)}}function T(e,n){return!n||"object"!==z(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.d(n,"default",(function(){return H}));var H=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&B(e,n)}(l,e);var n,t,r,s=I(l);function l(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(n=s.call(this,e)).layout=null,n}return n=l,(t=[{key:"render",value:function(){var e=this.props,n=e.components,t=D(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:n},a.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"pagination"}},"Pagination"),a.a.createElement(i.MDXTag,{name:"p",components:n},"A component for displaying a page navigator."),a.a.createElement(i.MDXTag,{name:"pre",components:n},a.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import Pagination from '@clarityhub/unity-web/lib/components/Pagination';\n")),a.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.f,{of:L}),a.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"examples"}},"Examples"),a.a.createElement(o.e,{__position:1,__code:"<Pagination index={4} first={1} last={120} pageCount={120} />\n<Pagination index={1} first={1} last={120} pageCount={120} />",__scope:{props:this?this.props:t,Pagination:L,Link:m.b,Button:S.b}},a.a.createElement(L,{index:4,first:1,last:120,pageCount:120}),a.a.createElement(L,{index:1,first:1,last:120,pageCount:120})),a.a.createElement(i.MDXTag,{name:"h3",components:n,props:{id:"override-the-link-renderers"}},"Override the link renderers"),a.a.createElement(o.e,{__position:2,__code:"<Pagination\n  index={1}\n  pageCount={120}\n  nextRenderer={({ index, disabled }) => {\n    const nextUrl = (index + 1).toString()\n\n    return <Button>Next &raquo;</Button>\n  }}\n  previousRenderer={({ index, disabled }) => {\n    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()\n\n    return <Button>&laquo; Previous</Button>\n  }}\n  pageRenderer={({ page }) => {\n    const url = page === 1 ? '' : page\n\n    return <Link href={`#/${url}`}>{page}</Link>\n  }}\n/>",__scope:{props:this?this.props:t,Pagination:L,Link:m.b,Button:S.b}},a.a.createElement(L,{index:1,pageCount:120,nextRenderer:function(e){var n=e.index;return e.disabled,(n+1).toString(),a.a.createElement(S.b,null,"Next \xbb")},previousRenderer:function(e){var n=e.index;return e.disabled,n-1===1||(n-1).toString(),a.a.createElement(S.b,null,"\xab Previous")},pageRenderer:function(e){var n=e.page,t=1===n?"":n;return a.a.createElement(m.b,{href:"#/".concat(t)},n)}})))}}])&&V(n.prototype,t),r&&V(n,r),l}(a.a.Component);H.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Typography/Typography.js":function(e,n,t){"use strict";var r=t("./node_modules/@emotion/styled/dist/styled.browser.esm.js"),a=t("./node_modules/@emotion/core/dist/core.browser.esm.js"),i=t("./packages/unity-core/lib/colors.js"),o=t.n(i),s=t("./packages/unity-core/lib/typography.js"),l=t("./packages/unity-web/src/theme/fonts.js");function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=function(e){var n=e.type,t=void 0===n?"text":n,i=e.variant,u=e.color,p=void 0===u?"dark":u,d=e.children,m=e.component,f=void 0===m?"p":m,g=e.noMargin,y=void 0!==g&&g,b=e.noPadding,v=void 0!==b&&b,h=e.inline,k=void 0!==h&&h,x=e.css,C=e.center,P=void 0!==C&&C,N=c(e,["type","variant","color","children","component","noMargin","noPadding","inline","css","center"]),j=[Boolean(t)?l.a[t]:{},Boolean(i)?s.variants[i]:{},Boolean(p)?{color:o.a[p].default}:{},Boolean(v)?"\n    padding: 0;\n":{},Boolean(y)?"\n    margin-bottom: 0;\n    margin-top: 0;\n\n    & + & {\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n":{},Boolean(x)?x:{},Boolean(k)?{display:"inline-block"}:{},Boolean(P)?{textAlign:"center"}:{}];if("string"===typeof f){var w=f;"p"===f&&-1!==["h1","h2","h3","h4","h5","h6"].indexOf(t)&&(w=t);var O=r.default[w](j,"");return Object(a.jsx)(O,N,d)}var q=f;return Object(a.jsx)(q,Object.assign({},N,{css:j}),d)};n.a=u,u.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{type:{defaultValue:{value:"'text'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(types)"},required:!1,description:""},color:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",computed:!0,value:"Object.keys(colors)"},required:!1,description:""},component:{defaultValue:{value:"'p'",computed:!1},type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},noMargin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},noPadding:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},inline:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},center:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},css:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},variant:{type:{name:"enum",computed:!0,value:"Object.keys(variants)"},required:!1,description:""}}}},"./packages/unity-web/src/theme/breakpoints.js":function(e,n,t){"use strict";n.a={mobile:"575.98px",smartphone:"767.98px",tablet:"991.98px",xsmallMaxWidth:620,smallMaxWidth:820,maxWidth:1250}},"./packages/unity-web/src/theme/fonts.js":function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("./packages/unity-core/lib/typography.js"),a=t("./packages/unity-core/lib/colors.js"),i=t.n(a),o=t("./packages/unity-core/lib/utilities/color.js"),s={h1:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h1.rem,"rem;\n        line-height: ").concat(r.sizes.h1.lineHeight.unitless,";\n    "),h2:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h2.rem,"rem;\n        line-height: ").concat(r.sizes.h2.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h3:"\n        ".concat(r.variants.heading.string,"\n\n        font-size: ").concat(r.sizes.h3.rem,"rem;\n        line-height: ").concat(r.sizes.h3.lineHeight.unitless,";\n        padding-bottom: 1rem;\n        padding-top: 3rem;\n    "),h4:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h4.rem,"rem;\n        line-height: ").concat(r.sizes.h4.lineHeight.unitless,";\n    "),h5:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h5.rem,"rem;\n        line-height: ").concat(r.sizes.h5.lineHeight.unitless,";\n    "),h6:"\n        ".concat(r.variants.secondary.string,"\n\n        font-size: ").concat(r.sizes.h6.rem,"rem;\n        line-height: ").concat(r.sizes.h6.lineHeight.unitless,";\n    "),p:"\n        ".concat(r.variants.readable.string,"\n\n        font-size: ").concat(r.sizes.p.rem,"rem;\n        line-height: ").concat(r.sizes.p.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text.rem,"rem;\n        line-height: ").concat(r.sizes.text.lineHeight.unitless,";\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),text2:"\n        ".concat(r.variants.text.string,"\n\n        font-size: ").concat(r.sizes.text2.rem,"rem;\n        line-height: ").concat(r.sizes.text2.lineHeight.unitless,";\n        font-weight: 400;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n\n        strong,\n        b {\n            font-weight: 800;\n        }\n\n        i,\n        em {\n            font-style: italic;\n        }\n    "),sectionLabel:"\n        ".concat(r.variants.text.string,"\n\n        color: ").concat(i.a.darkGray.default,";\n        font-size: 1rem;\n        line-height: 1.4;\n    "),subtext:'\n        font-family: \'Crimson Text\', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n        font-size: '.concat(r.sizes.subtext.rem,"rem;\n        line-height: ").concat(r.sizes.subtext.lineHeight.unitless,";\n        color: ").concat(i.a.darkGray.default,";\n        font-style: italic;\n\n        & + & {\n            margin-top: 1.6rem;\n        }\n    "),link:"\n        border-bottom: 1px solid ".concat(i.a.primary.default,";\n        color: ").concat(i.a.primary.default,";\n        display: inline-block;\n        text-decoration: none;\n\n        &:hover,\n        &:active {\n            border-bottom: 2px solid ").concat(i.a.primary.default,";\n            border-bottom-width: 2px;\n            color: ").concat(i.a.primary.default,";\n            margin-bottom: -1px;\n            text-decoration: none;\n        }\n\n        &:visited {\n            border-bottom: 1px solid ").concat(Object(o.darken)(i.a.primary.default,.2),";\n            color: ").concat(Object(o.darken)(i.a.primary.default,.2),";\n            text-decoration: none;\n\n            &:hover,\n            &:active {\n                margin-bottom: 0;\n            }\n        }\n    "),blockLink:"\n        -khtml-user-select: none;\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-touch-callout: none;\n        border: 0 !important;\n        color: ".concat(i.a.dove.default,";\n        cursor: pointer;\n        display: block;\n        font-size: ").concat(.875,"rem;\n        line-height: ").concat(1.625,"rem;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        transition: color 0.3s;\n        transition-property: color;\n        letter-spacing: 0.8px !important;\n\n        &:visited {\n            color: ").concat(i.a.dove.default," !important;\n        }\n\n        &::before {\n            background: ").concat(i.a.dove.default,";\n            bottom: -6px;\n            content: '';\n            height: 2px;\n            left: 0;\n            position: absolute;\n            transform: scale3d(0, 0.4, 1);\n            transition: transform 0.1s;\n            width: 100%;\n        }\n\n        &.active,\n        &:hover,\n        &:focus {\n            &::before {\n                transform: scale3d(0.8, 0.4, 1);\n                transition-duration: 0.3s;\n                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n            }\n        }\n    ")}}}]);
//# sourceMappingURL=packages-unity-web-src-components-pagination-pagination.6534160d806d367c91ad.js.map