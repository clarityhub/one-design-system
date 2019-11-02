(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"b",function(){return u});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/react/index.js"),a=n.n(r),i=n("./packages/unity-core/lib/colors.js"),s=n.n(i),c=n("./packages/unity-web/src/components/Buttons/Button.js");function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=Object(o.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",c.a,"{box-shadow:none;}",c.a," + ",c.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",c.a,":not(:last-child):not(:first-of-type){border-radius:0;}",c.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",c.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),u=function(e){var t=e.selected,n=l(e,["selected"]);return a.a.createElement(c.b,Object.assign({type:t?"primary":"default"},n))};u.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),a=n("./packages/unity-web/src/components/Buttons/Button.js"),i=Object(o.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(r.css)("display:flex;align-items:center;justify-content:flex-end;",a.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),s=function(){return React.createElement("div",null)};i.propTypes=s.propTypes,t.b=i,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var o=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return o.b});var r=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return r.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Modals/Modal.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),c=(n("./node_modules/@emotion/core/dist/core.browser.esm.js"),n("./packages/unity-core/lib/utilities/color.js")),l=n("./packages/unity-core/lib/colors.js"),p=n.n(l),u=n("./packages/unity-web/src/components/Card/index.js"),d=n("./packages/unity-web/src/components/Modals/ModalPortal.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"1hyfx7x",styles:"display:none;"},v=Object(s.default)("div",{target:"e1bxx9lo0"})("position:fixed;top:0;bottom:0;left:0;right:0;background-color:",Object(c.opacify)(p.a.dark.default,.6),";display:flex;z-index:",9999,";",function(e){return!e.open&&w},""),k={name:"13rxuka",styles:"opacity:1;transform:translate(0,0);"},C=Object(s.default)("div",{target:"e1bxx9lo1"})("transition:all .3s ease-out;transition-property:opacity,transform;transform:translate(0,-25%);display:flex;min-height:calc(100% - (.5rem * 2));opacity:0;align-items:center;max-width:500px;margin:1.75rem auto;position:relative;width:100%;@media screen and (prefers-reduced-motion:reduce){transition:none;}",function(e){return e.open&&k}," ",u.f,"{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;}"),O=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return o=this,r=(e=y(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==m(r)&&"function"!==typeof r?b(o):r,g(b(n),"state",{delayedOpen:!1}),g(b(n),"setup",function(){n._onClickOutside=n.onClickOutside.bind(b(n)),n._onKeyUp=n.onKeyUp.bind(b(n)),document.addEventListener("click",n._onClickOutside),window.addEventListener("keyup",n._onKeyUp),n.checkOpen()}),g(b(n),"teardown",function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];n.openTimer&&clearTimeout(n.openTimer),document.removeEventListener("click",n._onClickOutside),window.removeEventListener("keyup",n._onKeyUp),n.setState({delayedOpen:!1}),e||(n.closeTimer=setTimeout(function(){n.setState({delayedClose:!1})},100))}),g(b(n),"checkOpen",function(){n.props.open&&!n.state.delayedOpen&&(n.doneOpening=!1,n.openTimer&&clearTimeout(n.openTimer),n.setState({delayedClose:!0}),n.openTimer=setTimeout(function(){n.doneOpening=!0,n.setState({delayedOpen:!0})},100))}),g(b(n),"onClickOutside",function(e){if(n.modal&&n.doneOpening&&n.props.open){var t=e.target;n.modal!==t&&!n.modal.contains(t)&&n.close()}}),g(b(n),"onKeyUp",function(e){n.props.open&&"Escape"===e.key&&n.close()}),g(b(n),"close",function(){var e=n.props.onClose;e&&e()}),n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){this.setup()}},{key:"componentDidUpdate",value:function(e){!e.open&&this.props.open&&this.setup(),e.open&&!this.props.open&&this.teardown()}},{key:"componentWillUnmount",value:function(){this.teardown(!0)}},{key:"render",value:function(){var e=this,t=this.props,n=t.center,o=t.children,a=t.type,i=this.state,s=i.delayedOpen,c=i.delayedClose;return r.a.createElement(d.a,null,r.a.createElement(v,{open:c},r.a.createElement(C,{open:s},r.a.createElement(u.f,{ref:function(t){return e.modal=t},type:a,center:n},o))))}}])&&f(n.prototype,a),i&&f(n,i),t}();O.__docgenInfo={description:"",methods:[{name:"setup",docblock:null,modifiers:[],params:[],returns:null},{name:"teardown",docblock:null,modifiers:[],params:[{name:"immediate",type:null}],returns:null},{name:"checkOpen",docblock:null,modifiers:[],params:[],returns:null},{name:"onClickOutside",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"onKeyUp",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Modal",props:{center:{type:{name:"bool"},required:!1,description:"Passthrough to Card"},children:{type:{name:"node"},required:!1,description:"Passthrough to Card"},onClose:{type:{name:"func"},required:!1,description:""},open:{type:{name:"bool"},required:!0,description:""},type:{type:{name:"string"},required:!1,description:""}}};var j=n("./packages/unity-web/src/components/Buttons/index.js"),E=n("./packages/unity-web/src/components/Typography/index.js");function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t,n){return t&&M(e.prototype,t),n&&M(e,n),e}function B(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return F});var F=function(e){function t(e){var n;return S(this,t),(n=B(this,P(t).call(this,e))).layout=null,n}return D(t,r.a.Component),T(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=x(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"modal"}},"Modal"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Modals use cards to display their content, so check out the Card component\nfor what is allowed in Card content."),r.a.createElement(a.MDXTag,{name:"p",components:t},"You can make a modal not respond to clicks outside the modal or ESC keys\nby not handling the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onClose")," prop."),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"modal--component"}},"<Modal /",">"," component"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Modal from '@clarityhub/unity-web/lib/components/Modal';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"modal-1"}},"Modal"),r.a.createElement(i.f,{of:O}),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"simple-modal"}},"Simple Modal"),r.a.createElement(i.e,{__position:1,__code:'() => {\n  class ModalExample extends Component {\n    constructor(props) {\n      super(props)\n      this.state = { open: false }\n    }\n    render() {\n      const { open } = this.state\n\n      return (\n        <Fragment>\n          <Button onClick={() => this.setState({ open: true })}>\n            Open Modal\n          </Button>\n\n          <Modal open={open} onClose={() => this.setState({ open: false })}>\n            <CardBody>\n              <Typography type="h3">Card title</Typography>\n              <Typography type="h4">Card subtitle</Typography>\n              <Typography type="text">Meow Mix</Typography>\n\n              <CardActions>\n                <ButtonSet>\n                  <Button text onClick={() => this.setState({ open: false })}>\n                    Close\n                  </Button>\n                  <Button\n                    type="danger"\n                    onClick={() => this.setState({ open: false })}\n                  >\n                    Delete\n                  </Button>\n                </ButtonSet>\n              </CardActions>\n            </CardBody>\n          </Modal>\n        </Fragment>\n      )\n    }\n  }\n\n  return <ModalExample />\n}',__scope:{props:this?this.props:n,Component:o.Component,Fragment:o.Fragment,Modal:O,Button:j.b,ButtonSet:j.a,Typography:E.a,CardHeader:u.d,CardBody:u.b,CardActions:u.a,CardFooter:u.c}},function(){var e=function(e){function t(e){var n;return S(this,t),(n=B(this,P(t).call(this,e))).state={open:!1},n}return D(t,o["Component"]),T(t,[{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement(o.Fragment,null,r.a.createElement(j.b,{onClick:function(){return e.setState({open:!0})}},"Open Modal"),r.a.createElement(O,{open:t,onClose:function(){return e.setState({open:!1})}},r.a.createElement(u.b,null,r.a.createElement(E.a,{type:"h3"},"Card title"),r.a.createElement(E.a,{type:"h4"},"Card subtitle"),r.a.createElement(E.a,{type:"text"},"Meow Mix"),r.a.createElement(u.a,null,r.a.createElement(j.a,null,r.a.createElement(j.b,{text:!0,onClick:function(){return e.setState({open:!1})}},"Close"),r.a.createElement(j.b,{type:"danger",onClick:function(){return e.setState({open:!1})}},"Delete"))))))}}]),t}();return r.a.createElement(e,null)}),r.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"notification-modal"}},"Notification Modal"),r.a.createElement(i.e,{__position:2,__code:'() => {\n  class ModalExample extends Component {\n    constructor(props) {\n      super(props)\n      this.state = { open: false }\n    }\n    render() {\n      const { open } = this.state\n\n      return (\n        <Fragment>\n          <Button onClick={() => this.setState({ open: true })}>\n            Open Modal\n          </Button>\n\n          <Modal\n            open={open}\n            onClose={() => this.setState({ open: false })}\n            type="notification"\n            center\n          >\n            <CardBody>\n              <Typography noMargin noPadding center color="white" type="h2">\n                Join our newsletter\n              </Typography>\n              <Typography center color="white" type="text">\n                Get updates on Clarity Hub, open source, and more by signing\n                up for our newsletter.\n              </Typography>\n              <CardActions>\n                <ButtonSet spread>\n                  <Button\n                    text\n                    type="white"\n                    onClick={() => this.setState({ open: false })}\n                  >\n                    No Thanks\n                  </Button>\n                  <Button\n                    type="white"\n                    onClick={() => this.setState({ open: false })}\n                  >\n                    Sign Up\n                  </Button>\n                </ButtonSet>\n              </CardActions>\n            </CardBody>\n          </Modal>\n        </Fragment>\n      )\n    }\n  }\n\n  return <ModalExample />\n}',__scope:{props:this?this.props:n,Component:o.Component,Fragment:o.Fragment,Modal:O,Button:j.b,ButtonSet:j.a,Typography:E.a,CardHeader:u.d,CardBody:u.b,CardActions:u.a,CardFooter:u.c}},function(){var e=function(e){function t(e){var n;return S(this,t),(n=B(this,P(t).call(this,e))).state={open:!1},n}return D(t,o["Component"]),T(t,[{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement(o.Fragment,null,r.a.createElement(j.b,{onClick:function(){return e.setState({open:!0})}},"Open Modal"),r.a.createElement(O,{open:t,onClose:function(){return e.setState({open:!1})},type:"notification",center:!0},r.a.createElement(u.b,null,r.a.createElement(E.a,{noMargin:!0,noPadding:!0,center:!0,color:"white",type:"h2"},"Join our newsletter"),r.a.createElement(E.a,{center:!0,color:"white",type:"text"},"Get updates on Clarity Hub, open source, and more by signing up for our newsletter."),r.a.createElement(u.a,null,r.a.createElement(j.a,{spread:!0},r.a.createElement(j.b,{text:!0,type:"white",onClick:function(){return e.setState({open:!1})}},"No Thanks"),r.a.createElement(j.b,{type:"white",onClick:function(){return e.setState({open:!1})}},"Sign Up"))))))}}]),t}();return r.a.createElement(e,null)}))}}]),t}();F.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Modals/ModalPortal.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-dom/index.js"),a=n.n(r);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){var e,n,o,r,a,s,p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,d=new Array(u),m=0;m<u;m++)d[m]=arguments[m];return o=this,n=!(r=(e=c(t)).call.apply(e,[this].concat(d)))||"object"!==i(r)&&"function"!==typeof r?l(o):r,a=l(n),p={ready:!1},(s="state")in a?Object.defineProperty(a,s,{value:p,enumerable:!0,configurable:!0,writable:!0}):a[s]=p,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),document.body.appendChild(this.el),this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.el&&document.body.removeChild(this.el)}},{key:"render",value:function(){return this.state.ready?a.a.createPortal(this.props.children,this.el):null}}])&&s(n.prototype,r),u&&s(n,u),t}();u.__docgenInfo={description:"",methods:[],displayName:"ModalPortal"}}}]);
//# sourceMappingURL=packages-unity-web-src-components-modals-modal.4094b9e49a2194823e73.js.map