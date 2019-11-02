(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/react/index.js"),r=n.n(o),l=n("./packages/unity-core/lib/colors.js"),s=n.n(l),i=n("./packages/unity-web/src/components/Buttons/Button.js");function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=Object(a.default)("div",{target:"e1cjzffo0"})("box-shadow:",s.a.shadow.default,";display:inline-block;",i.a,"{box-shadow:none;}",i.a," + ",i.a,"{border-left-width:0;border-left:1px solid ",s.a.muted.default,";}",i.a,":not(:last-child):not(:first-of-type){border-radius:0;}",i.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",i.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),p=function(e){var t=e.selected,n=c(e,["selected"]);return r.a.createElement(i.b,Object.assign({type:t?"primary":"default"},n))};p.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),o=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),r=n("./packages/unity-web/src/components/Buttons/Button.js"),l=Object(a.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(o.css)("display:flex;align-items:center;justify-content:flex-end;",r.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),s=function(){return React.createElement("div",null)};l.propTypes=s.propTypes,t.b=l,s.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/Buttons.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n("./node_modules/react/index.js"),o=n.n(a),r=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),s=n("./node_modules/@material-ui/icons/Delete.js"),i=n.n(s),c=n("./node_modules/@material-ui/icons/CheckCircle.js"),u=n.n(c),p=n("./packages/unity-web/src/components/Buttons/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,g(t).call(this,e))).layout=null,n}var n,a,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=d(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:t},o.a.createElement(r.MDXTag,{name:"h1",components:t,props:{id:"buttons"}},"Buttons"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Buttons are used for triggering various actions."),o.a.createElement(r.MDXTag,{name:"pre",components:t},o.a.createElement(r.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Button from '@clarityhub/unity-web/lib/components/Buttons';\n")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"button-types"}},"Button Types"),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are 4 main button types: default, white, primary, and danger."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"Default buttons")," should be used for actions that will not cause any changes to happen. For example, a Cancel button may close a modal, but it will not cause any changes to happen."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"White buttons")," are used when you have a non-white background color and you need to use a default button that may have variants. A white button should normally be used the same way a default button would be used."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"Primary buttons")," are for the primary action you would like a user to take. These buttons should not have any destructive consequence to clicking them."),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"strong",components:t,parentName:"li"},"Danger buttons")," are for actions that would cause destructive consequences to occur; like deleting an item or unscheduling a campaign.")),o.a.createElement(l.e,{__position:0,__code:'<Button>Default</Button> <Button type="white">White</Button>{\' \'}\n<Button type="primary">Primary</Button> <Button type="danger">Danger</Button>',__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,null,"Default")," ",o.a.createElement(p.b,{type:"white"},"White")," ",o.a.createElement(p.b,{type:"primary"},"Primary")," ",o.a.createElement(p.b,{type:"danger"},"Danger")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"as-a-link"}},"As a Link"),o.a.createElement(r.MDXTag,{name:"p",components:t},"If you need a React Router Link, use ",o.a.createElement(r.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"./packages-unity-web-src-components-link-linkbutton"}},"LinkButton"),"."),o.a.createElement(r.MDXTag,{name:"p",components:t},"Otherwise, you can have buttons become anchor tags."),o.a.createElement(l.e,{__position:1,__code:'<Button component="a" href="#">\n  Cancel\n</Button>{\' \'}\n<Button component="a" href="#" type="white">\n  Cancel\n</Button>{\' \'}\n<Button component="a" href="#" type="primary">\n  Create\n</Button>{\' \'}\n<Button component="a" href="#" type="danger">\n  Delete\n</Button>',__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{component:"a",href:"#"},"Cancel")," ",o.a.createElement(p.b,{component:"a",href:"#",type:"white"},"Cancel")," ",o.a.createElement(p.b,{component:"a",href:"#",type:"primary"},"Create")," ",o.a.createElement(p.b,{component:"a",href:"#",type:"danger"},"Delete")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"states"}},"States"),o.a.createElement(l.e,{__position:2,__code:'<Button className="focused">Focused</Button>{\' \'}\n<Button className="focused" type="white">\n  Focused\n</Button>{\' \'}\n<Button className="focused" type="primary">\n  Focused\n</Button>{\' \'}\n<Button className="focused" type="danger">\n  Focused\n</Button>\n<br />\n<br />\n<Button className="active">Active</Button>{\' \'}\n<Button className="active" type="white">\n  Active\n</Button>{\' \'}\n<Button className="active" type="primary">\n  Active\n</Button>{\' \'}\n<Button className="active" type="danger">\n  Active\n</Button>\n<br />\n<br />\n<Button className="disabled">Disabled</Button>{\' \'}\n<Button className="disabled" type="white">\n  Disabled\n</Button>{\' \'}\n<Button className="disabled" type="primary">\n  Disabled\n</Button>{\' \'}\n<Button className="disabled" type="danger">\n  Disabled\n</Button>',__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{className:"focused"},"Focused")," ",o.a.createElement(p.b,{className:"focused",type:"white"},"Focused")," ",o.a.createElement(p.b,{className:"focused",type:"primary"},"Focused")," ",o.a.createElement(p.b,{className:"focused",type:"danger"},"Focused"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{className:"active"},"Active")," ",o.a.createElement(p.b,{className:"active",type:"white"},"Active")," ",o.a.createElement(p.b,{className:"active",type:"primary"},"Active")," ",o.a.createElement(p.b,{className:"active",type:"danger"},"Active"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{className:"disabled"},"Disabled")," ",o.a.createElement(p.b,{className:"disabled",type:"white"},"Disabled")," ",o.a.createElement(p.b,{className:"disabled",type:"primary"},"Disabled")," ",o.a.createElement(p.b,{className:"disabled",type:"danger"},"Disabled")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"loading"}},"Loading"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"loading")," property should be used with the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"disabled")," property."),o.a.createElement(l.e,{__position:3,__code:'<Button size="small" loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="small" loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="small" loading disabled type="danger">\n  Text that is pretty long\n</Button>\n<br />\n<br />\n<Button loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button loading disabled type="danger">\n  Text that is pretty long\n</Button>\n<br />\n<br />\n<Button size="large" loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="large" loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="large" loading disabled type="danger">\n  Text that is pretty long\n</Button>\n<br />\n<br />\n<Button size="small" outline loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="small" outline loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="small" outline loading disabled type="danger">\n  Text that is pretty long\n</Button>\n<br />\n<br />\n<Button outline loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button outline loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button outline loading disabled type="danger">\n  Text that is pretty long\n</Button>\n<br />\n<br />\n<Button size="large" outline loading disabled>\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="large" outline loading disabled type="primary">\n  Text that is pretty long\n</Button>{\' \'}\n<Button size="large" outline loading disabled type="danger">\n  Text that is pretty long\n</Button>',__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{size:"small",loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"small",loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"small",loading:!0,disabled:!0,type:"danger"},"Text that is pretty long"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{loading:!0,disabled:!0,type:"danger"},"Text that is pretty long"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{size:"large",loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"large",loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"large",loading:!0,disabled:!0,type:"danger"},"Text that is pretty long"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{size:"small",outline:!0,loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"small",outline:!0,loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"small",outline:!0,loading:!0,disabled:!0,type:"danger"},"Text that is pretty long"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{outline:!0,loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{outline:!0,loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{outline:!0,loading:!0,disabled:!0,type:"danger"},"Text that is pretty long"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{size:"large",outline:!0,loading:!0,disabled:!0},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"large",outline:!0,loading:!0,disabled:!0,type:"primary"},"Text that is pretty long")," ",o.a.createElement(p.b,{size:"large",outline:!0,loading:!0,disabled:!0,type:"danger"},"Text that is pretty long")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"sizes"}},"Sizes"),o.a.createElement(r.MDXTag,{name:"p",components:t},"You can change the size of buttons for use in different contexts."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Small buttons may be used in table views"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"The default size of buttons should be used in most cases"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Large buttons can be used for calls to action")),o.a.createElement(l.e,{__position:4,__code:'<Button size="small">Small</Button>{\' \'}\n<Button size="small" type="primary">\n  Small\n</Button>{\' \'}\n<Button size="small" type="danger">\n  Small\n</Button>\n<br />\n<br />\n<Button size="default">Default</Button>{\' \'}\n<Button size="default" type="primary">\n  Default\n</Button>{\' \'}\n<Button size="default" type="danger">\n  Default\n</Button>\n<br />\n<br />\n<Button size="large">Large</Button>{\' \'}\n<Button size="large" type="primary">\n  Large\n</Button>{\' \'}\n<Button size="large" type="danger">\n  Large\n</Button>',__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{size:"small"},"Small")," ",o.a.createElement(p.b,{size:"small",type:"primary"},"Small")," ",o.a.createElement(p.b,{size:"small",type:"danger"},"Small"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{size:"default"},"Default")," ",o.a.createElement(p.b,{size:"default",type:"primary"},"Default")," ",o.a.createElement(p.b,{size:"default",type:"danger"},"Default"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{size:"large"},"Large")," ",o.a.createElement(p.b,{size:"large",type:"primary"},"Large")," ",o.a.createElement(p.b,{size:"large",type:"danger"},"Large")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"icon-buttons"}},"Icon Buttons"),o.a.createElement(r.MDXTag,{name:"p",components:t},"Specifying the icon prop will space out the icon appropriately when used with text."),o.a.createElement(l.e,{__position:5,__code:"<Button icon={DeleteIcon}>With Icon</Button>{' '}\n<Button icon={<DeleteIcon />} type=\"primary\">\n  With Icon\n</Button>{' '}\n<Button icon={<DeleteIcon />} type=\"danger\">\n  With Icon\n</Button>{' '}\n<Button size=\"large\" icon={<DeleteIcon />}>\n  With Icon\n</Button>",__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{icon:i.a},"With Icon")," ",o.a.createElement(p.b,{icon:o.a.createElement(i.a,null),type:"primary"},"With Icon")," ",o.a.createElement(p.b,{icon:o.a.createElement(i.a,null),type:"danger"},"With Icon")," ",o.a.createElement(p.b,{size:"large",icon:o.a.createElement(i.a,null)},"With Icon")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"other-variants"}},"Other Variants"),o.a.createElement(r.MDXTag,{name:"p",components:t},"There are outline and text variants that can be used in different scenarios."),o.a.createElement(r.MDXTag,{name:"ul",components:t},o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Outline buttons should only be used for secondary actions"),o.a.createElement(r.MDXTag,{name:"li",components:t,parentName:"ul"},"Text buttons can be used to de-emphasis an action")),o.a.createElement(l.e,{__position:6,__code:"<Button outline>Outline</Button>{' '}\n<Button outline type=\"primary\">\n  Outline\n</Button>{' '}\n<Button outline type=\"danger\">\n  Outline\n</Button>{' '}\n<Button disabled outline>\n  Outline\n</Button>{' '}\n<Button disabled outline type=\"primary\">\n  Outline\n</Button>{' '}\n<Button disabled outline type=\"danger\">\n  Outline\n</Button>\n<br />\n<br />\n<Button text>text</Button>{' '}\n<Button text type=\"primary\">\n  text\n</Button>{' '}\n<Button text type=\"danger\">\n  text\n</Button>{' '}\n<Button disabled text>\n  text\n</Button>{' '}\n<Button disabled text type=\"primary\">\n  text\n</Button>{' '}\n<Button disabled text type=\"danger\">\n  text\n</Button>\n<br />\n<br />\n<Button block>Button Block</Button>{' '}\n<Button block type=\"primary\">\n  Button Block\n</Button>{' '}\n<Button block type=\"danger\">\n  Button Block\n</Button>",__scope:{props:this?this.props:n,DeleteIcon:i.a,CheckIcon:u.a,Button:p.b}},o.a.createElement(p.b,{outline:!0},"Outline")," ",o.a.createElement(p.b,{outline:!0,type:"primary"},"Outline")," ",o.a.createElement(p.b,{outline:!0,type:"danger"},"Outline")," ",o.a.createElement(p.b,{disabled:!0,outline:!0},"Outline")," ",o.a.createElement(p.b,{disabled:!0,outline:!0,type:"primary"},"Outline")," ",o.a.createElement(p.b,{disabled:!0,outline:!0,type:"danger"},"Outline"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{text:!0},"text")," ",o.a.createElement(p.b,{text:!0,type:"primary"},"text")," ",o.a.createElement(p.b,{text:!0,type:"danger"},"text")," ",o.a.createElement(p.b,{disabled:!0,text:!0},"text")," ",o.a.createElement(p.b,{disabled:!0,text:!0,type:"primary"},"text")," ",o.a.createElement(p.b,{disabled:!0,text:!0,type:"danger"},"text"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.b,{block:!0},"Button Block")," ",o.a.createElement(p.b,{block:!0,type:"primary"},"Button Block")," ",o.a.createElement(p.b,{block:!0,type:"danger"},"Button Block")),o.a.createElement(r.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),o.a.createElement(r.MDXTag,{name:"p",components:t},"The following prop types are available for Buttons."),o.a.createElement(l.f,{of:p.b}))}}])&&b(n.prototype,a),s&&b(n,s),t}();h.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,n){"use strict";var a=n("./packages/unity-web/src/components/Buttons/Button.js");n.d(t,"b",function(){return a.b});var o=n("./packages/unity-web/src/components/Buttons/ButtonSet.js");n.d(t,"a",function(){return o.b});n("./packages/unity-web/src/components/Buttons/ButtonGroup.js")}}]);
//# sourceMappingURL=packages-unity-web-src-components-buttons-buttons.bba84be144a550594f03.js.map