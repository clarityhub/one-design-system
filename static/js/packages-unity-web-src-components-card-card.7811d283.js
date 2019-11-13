(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./packages/unity-web/src/components/Buttons/ButtonGroup.js":function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var n=a("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=a("./node_modules/react/index.js"),o=a.n(r),p=a("./packages/unity-core/lib/colors.js"),i=a.n(p),s=a("./packages/unity-web/src/components/Buttons/Button.js");function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.default)("div",{target:"e1cjzffo0"})("box-shadow:",i.a.shadow.default,";display:inline-block;",s.a,"{box-shadow:none;}",s.a," + ",s.a,"{border-left-width:0;border-left:1px solid ",i.a.muted.default,";}",s.a,":not(:last-child):not(:first-of-type){border-radius:0;}",s.a,":first-of-type{border-top-right-radius:0;border-bottom-right-radius:0;}",s.a,":last-child{border-top-left-radius:0;border-bottom-left-radius:0;}"),d=function(e){var t=e.selected,a=c(e,["selected"]);return o.a.createElement(s.b,Object.assign({type:t?"primary":"default"},a))};d.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupItem",props:{selected:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/ButtonSet.js":function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=a("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=a("./packages/unity-web/src/components/Buttons/Button.js"),p=Object(n.default)("div",{target:"e1sq8kqm0"})(function(e){return e.spread&&Object(r.css)("display:flex;align-items:center;justify-content:flex-end;",o.a,"{&:not(:first-of-type){margin-left:auto!important;}}")}," button + button,a + a,a + button,button + a{margin-left:0.4rem;}"),i=function(){return React.createElement("div",null)};p.propTypes=i.propTypes,t.b=p,i.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ButtonSetPropTypes",props:{spread:{type:{name:"bool"},required:!1,description:""}}}},"./packages/unity-web/src/components/Buttons/index.js":function(e,t,a){"use strict";var n=a("./packages/unity-web/src/components/Buttons/Button.js");a.d(t,"b",function(){return n.b});var r=a("./packages/unity-web/src/components/Buttons/ButtonSet.js");a.d(t,"a",function(){return r.b});a("./packages/unity-web/src/components/Buttons/ButtonGroup.js")},"./packages/unity-web/src/components/Card/Card.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});var n=a("./node_modules/react/index.js"),r=a.n(n),o=a("./node_modules/@mdx-js/tag/dist/index.js"),p=a("./node_modules/docz/dist/index.m.js"),i=a("./packages/unity-web/src/components/Card/index.js"),s=a("./packages/unity-web/src/components/Card/Card.js"),c=a("./packages/unity-web/src/components/Typography/index.js"),l=a("./packages/unity-web/src/components/Buttons/index.js"),d=a("./packages/unity-web/src/components/Image/index.js");function y(e){return(y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==y(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=g(this,h(t).call(this,e))).layout=null,a}var a,n,y;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r.a.Component),a=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,a=u(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"card"}},"Card"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Cards provide a content container that you can use to display grouped content."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import Card, {\n    CardHeader,\n    CardFooter,\n    CardImage,\n    CardBody,\n    CardActions,\n} from '@clarityhub/unity-web/lib/components/Card';\n")),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"simple-card"}},"Simple Card"),r.a.createElement(o.MDXTag,{name:"p",components:t},"In all examples, the headings and text use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Typography")," components."),r.a.createElement(p.e,{__position:0,__code:'<Card>\n  <CardBody>\n    <Typography type="text">Default</Typography>\n  </CardBody>\n</Card>\n<Card type="notification" style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="text" color="white">\n      Notification\n    </Typography>\n  </CardBody>\n</Card>\n<Card flat type="highlight" style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="text" color="dark">\n      Highlight\n    </Typography>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,null,r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text"},"Default"))),r.a.createElement(i.f,{type:"notification",style:{marginTop:"1rem"}},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text",color:"white"},"Notification"))),r.a.createElement(i.f,{flat:!0,type:"highlight",style:{marginTop:"1rem"}},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text",color:"dark"},"Highlight")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-image"}},"Card with Image"),r.a.createElement(p.e,{__position:1,__code:'<Card style={{ width: \'16rem\' }}>\n  <CardImage src="https://placehold.it/300x150" />\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="text">Meow Mix</Typography>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,{style:{width:"16rem"}},r.a.createElement(i.e,{src:"https://placehold.it/300x150"}),r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"text"},"Meow Mix")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-actions"}},"Card with Actions"),r.a.createElement(p.e,{__position:2,__code:'<Card>\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="h4">Card subtitle</Typography>\n    <Typography type="text">Meow Mix</Typography>\n    <CardActions>\n      <ButtonSet>\n        <Button>Cancel</Button>\n        <Button type="danger">Delete</Button>\n      </ButtonSet>\n    </CardActions>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,null,r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"h4"},"Card subtitle"),r.a.createElement(c.a,{type:"text"},"Meow Mix"),r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(l.b,null,"Cancel"),r.a.createElement(l.b,{type:"danger"},"Delete")))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"hoverable"}},"Hoverable"),r.a.createElement(o.MDXTag,{name:"p",components:t},"Useful if you want to turn the Card into a link"),r.a.createElement(p.e,{__position:3,__code:'<Card hoverable>\n  <CardBody>\n    <Typography type="text">Default</Typography>\n  </CardBody>\n</Card>\n<Card hoverable type="notification" style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="text" color="white">\n      Notification\n    </Typography>\n  </CardBody>\n</Card>\n<Card flat hoverable type="highlight" style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="text" color="dark">\n      Highlight\n    </Typography>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,{hoverable:!0},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text"},"Default"))),r.a.createElement(i.f,{hoverable:!0,type:"notification",style:{marginTop:"1rem"}},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text",color:"white"},"Notification"))),r.a.createElement(i.f,{flat:!0,hoverable:!0,type:"highlight",style:{marginTop:"1rem"}},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"text",color:"dark"},"Highlight")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"card-with-header-and-footer"}},"Card with Header and Footer"),r.a.createElement(p.e,{__position:4,__code:'<Card>\n  <CardHeader>Featured</CardHeader>\n  <CardBody>\n    <Typography type="h3">Card title</Typography>\n    <Typography type="h4">Card subtitle</Typography>\n    <Typography type="text">Meow Mix</Typography>\n    <CardActions>\n      <ButtonSet>\n        <Button>Cancel</Button>\n        <Button type="danger">Delete</Button>\n      </ButtonSet>\n    </CardActions>\n  </CardBody>\n  <CardFooter>2 days ago</CardFooter>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,null,r.a.createElement(i.d,null,"Featured"),r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"h3"},"Card title"),r.a.createElement(c.a,{type:"h4"},"Card subtitle"),r.a.createElement(c.a,{type:"text"},"Meow Mix"),r.a.createElement(i.a,null,r.a.createElement(l.a,null,r.a.createElement(l.b,null,"Cancel"),r.a.createElement(l.b,{type:"danger"},"Delete")))),r.a.createElement(i.c,null,"2 days ago"))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example-cards"}},"Example Cards"),r.a.createElement(p.e,{__position:5,__code:'<Card center>\n  <CardBody>\n    <Typography type="h3">Welcome to Clarity Hub!</Typography>\n    <Typography type="text">\n      To get started, install the extension and use Intercom like you normally\n      would. We\u2019ll let you know when we have suggestions for you by providing\n      a prompt in the place you normally work.\n    </Typography>\n    <Image\n      center\n      withMargin\n      src="/public/get-started.png"\n      alt="Get started with Clarity Hub"\n      style={{ width: \'80%\' }}\n    />\n\n    <CardActions>\n      <Button type="primary">Install the Extension</Button>\n    </CardActions>\n  </CardBody>\n</Card>\n<Card center style={{ marginTop: \'1rem\' }}>\n  <CardBody>\n    <Typography type="h3">Get Started</Typography>\n    <Typography type="text">\n      Send email invites to the rest of your team to get them onboarded! We\u2019ll\n      send them instructions on how to get started using Clarity Hub.\n    </Typography>\n\n    <CardActions>\n      <Button type="primary">Invite Your Team</Button>\n    </CardActions>\n  </CardBody>\n</Card>',__scope:{props:this?this.props:a,Card:i.f,CardHeader:i.d,CardFooter:i.c,CardImage:i.e,CardBody:i.b,CardActions:i.a,CardPropTypes:s.a,Typography:c.a,Button:l.b,ButtonSet:l.a,Image:d.a}},r.a.createElement(i.f,{center:!0},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"h3"},"Welcome to Clarity Hub!"),r.a.createElement(c.a,{type:"text"},"To get started, install the extension and use Intercom like you normally would. We\u2019ll let you know when we have suggestions for you by providing a prompt in the place you normally work."),r.a.createElement(d.a,{center:!0,withMargin:!0,src:"/public/get-started.png",alt:"Get started with Clarity Hub",style:{width:"80%"}}),r.a.createElement(i.a,null,r.a.createElement(l.b,{type:"primary"},"Install the Extension")))),r.a.createElement(i.f,{center:!0,style:{marginTop:"1rem"}},r.a.createElement(i.b,null,r.a.createElement(c.a,{type:"h3"},"Get Started"),r.a.createElement(c.a,{type:"text"},"Send email invites to the rest of your team to get them onboarded! We\u2019ll send them instructions on how to get started using Clarity Hub."),r.a.createElement(i.a,null,r.a.createElement(l.b,{type:"primary"},"Invite Your Team"))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The following prop types are available for the Card component."),r.a.createElement(p.f,{of:s.a}))}}])&&m(a.prototype,n),y&&m(a,y),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/src/components/Image/Image.js":function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"),r=a("./node_modules/react/index.js"),o=a.n(r),p=(a("./node_modules/@emotion/core/dist/core.browser.esm.js"),a("./node_modules/react-image/umd/index.js")),i=a.n(p);function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c={name:"q5fqw0",styles:"padding:1rem;"},l={name:"1lab8ko",styles:"margin-left:auto;margin-right:auto;text-align:center;"},d=Object(n.default)("div",{target:"e1h9019k0"})("img{box-shadow:0 2px 4px 0 rgba(0,0,0,.1);max-width:100%;}",function(e){return e.withSpacing&&c}," ",function(e){return e.center&&l},""),y=function(e){var t=e.alt,a=e.withSpacing,n=e.center,r=e.wrapperProps,p=void 0===r?{}:r,c=e.src,l=e.fallbackUrl,y=s(e,["alt","withSpacing","center","wrapperProps","src","fallbackUrl"]);return o.a.createElement(d,Object.assign({},p,{withSpacing:a,center:n}),o.a.createElement(i.a,Object.assign({src:[c,l].filter(Boolean),loader:l&&o.a.createElement("img",{alt:t,src:l}),alt:t},y)))},u=function(){return o.a.createElement("div",null)};t.b=y,u.__docgenInfo={description:"Hack for docz and react-docgen",methods:[],displayName:"ImagePropTypes",props:{alt:{type:{name:"string"},required:!0,description:""},center:{type:{name:"bool"},required:!1,description:""},fallbackUrl:{type:{name:"string"},required:!1,description:""},src:{type:{name:"string"},required:!0,description:""},withSpacing:{type:{name:"bool"},required:!1,description:""},wrapperProps:{type:{name:"object"},required:!1,description:""}}},y.__docgenInfo={description:"",methods:[],displayName:"Image",props:{wrapperProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/unity-web/src/components/Image/index.js":function(e,t,a){"use strict";var n=a("./packages/unity-web/src/components/Image/Image.js");a.d(t,"a",function(){return n.b})}}]);
//# sourceMappingURL=packages-unity-web-src-components-card-card.062bed49f1782a8d865a.js.map