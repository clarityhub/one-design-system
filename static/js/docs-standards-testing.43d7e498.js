(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./docs/StandardsTesting.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,e);var t,n,o,s=p(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=s.call(this,e)).layout=null,t}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.components;return c(e,["components"]),r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"testing-standards"}},"Testing Standards"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Clarity Hub projects should use ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jestjs.io/"}},"jest")," for running unit tests."),r.a.createElement(a.MDXTag,{name:"p",components:t},"Additional types of testing, might use tools outside of jest:"),r.a.createElement(a.MDXTag,{name:"ul",components:t},r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"Mutation testing \u2013\xa0",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://stryker-mutator.io/"}},"Styker")),r.a.createElement(a.MDXTag,{name:"li",components:t,parentName:"ul"},"End-to-End testing - ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/cypress-io/cypress"}},"Cypress"))),r.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"running-tests"}},"Running Tests"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Any Continuous Integration system should always run unit tests on push."),r.a.createElement(a.MDXTag,{name:"p",components:t},"Additionally, projects should use ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.npmjs.com/package/husky"}},"husky")," to run unit tests locally before\npushing to remote."),r.a.createElement(a.MDXTag,{name:"p",components:t},"More complex tests such as End-to-End tests should run on deployment or nightly."))}}])&&u(t.prototype,n),o&&u(t,o),l}(r.a.Component);f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-standards-testing.6534160d806d367c91ad.js.map