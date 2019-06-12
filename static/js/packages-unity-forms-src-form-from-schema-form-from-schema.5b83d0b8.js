(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./packages/unity-forms/src/FormFromSchema/FormFromSchema.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),o=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./packages/unity-forms/node_modules/google-map-react/lib/index.js"),s=n.n(l),c=n("./packages/unity-web/lib/components/Buttons/index.js"),d=n.n(c),u=n("./packages/unity-forms/node_modules/react-jsonschema-form/lib/index.js"),m=n.n(u),p=n("./packages/unity-web/lib/forms/InputGroup/index.js"),f=n.n(p),b=n("./packages/unity-web/lib/forms/LabelledInput/index.js"),y=n.n(b);function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=function(e){var t=e.onChange,n=e.rawErrors,r=g(e,["onChange","rawErrors"]);return a.a.createElement(y.a,Object.assign({},r,{name:r.label,onChange:function(e){t(e.target.value||"")},error:!!n}))},v=h;h.__docgenInfo={description:"",methods:[],displayName:"WrappedLabelledInput"};var j=n("./packages/unity-web/lib/forms/LabelledTextarea/index.js"),w=n.n(j);function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=function(e){var t=e.onChange,n=e.rawErrors,r=_(e,["onChange","rawErrors"]);return a.a.createElement(w.a,Object.assign({},r,{onChange:function(e){t(e.target.value||"")},error:!!n,maxLines:10}))},O=x;x.__docgenInfo={description:"",methods:[],displayName:"WrappedLabelledTextarea"};var E=n("./packages/unity-web/lib/components/Typography/index.js"),C=n.n(E),S=function(e){var t=e.id,n=e.title;return a.a.createElement(C.a,{id:t,noPadding:!0,type:"h2"},n)},k=S;S.__docgenInfo={description:"",methods:[],displayName:"Title"};var M=function(e){var t=e.id,n=e.description;return n?a.a.createElement(C.a,{id:t,type:"sectionLabel",component:"span",style:{fontSize:"0.8rem"}},n):null},T=M;M.__docgenInfo={description:"",methods:[],displayName:"Description"};var P=n("./packages/unity-forms/node_modules/react-jsonschema-form/lib/utils.js"),D=n("./packages/unity-web/lib/components/Notification/index.js"),F=n.n(D);function N(e){var t=e.errors;return a.a.createElement(F.a,{type:"danger",variant:"block"},t.map(function(e,t){return a.a.createElement("div",{key:t},e.stack)}))}function $(e){var t=e.errors,n=void 0===t?[]:t;return 0===n.length?null:a.a.createElement("div",null,n.filter(function(e){return!!e}).map(function(e,t){return a.a.createElement(C.a,{key:t,type:"sectionLabel",color:"danger",component:"div",style:{fontSize:"0.8rem"}},"Validation Error: ",e)}))}function I(e){var t=e.id,n=e.classNames,r=e.children,o=e.disabled,i=e.label,l=e.onKeyChange,s=e.onDropPropertyClick,c=e.readonly,u=e.required;return e.schema.hasOwnProperty(P.ADDITIONAL_PROPERTY_FLAG)?a.a.createElement(f.a,{className:n},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-xs-5 form-additional"},a.a.createElement("div",{className:"form-group"},a.a.createElement(y.a,{label:i,required:u,id:"".concat(t,"-key"),onChange:l}))),a.a.createElement("div",{className:"form-additional form-group col-xs-5"},r),a.a.createElement("div",{className:"col-xs-2"},a.a.createElement(d.a,{type:"danger",icon:"remove",className:"array-item-remove btn-block",tabIndex:"-1",style:{border:"0"},disabled:o||c,onClick:s(i)},"Remove")))):a.a.createElement(f.a,{className:n},r)}function L(e){var t=e.children,n=e.rawErrors,r=e.help,o=e.description,i=e.hidden,l=e.id;return i?a.a.createElement("div",{className:"hidden"},t):a.a.createElement(I,e,t,"root"!==l&&o?o:null,n?a.a.createElement($,{errors:n}):null,r)}N.__docgenInfo={description:"",methods:[],displayName:"FormErrorList"},$.__docgenInfo={description:"",methods:[],displayName:"ErrorList"};var q=L;function A(e){var t=e.TitleField,n=e.DescriptionField;return console.log(e.idSchema.$id,e.uiSchema),a.a.createElement("div",{style:{width:"root"===e.idSchema.$id?"100%":void 0},id:e.idSchema.$id},"root"!==e.idSchema.$id||"root"===e.idSchema.$id&&!e.uiSchema._hideTitle?a.a.createElement(r.Fragment,null,(e.uiSchema["ui:title"]||e.title)&&a.a.createElement(t,{id:"".concat(e.idSchema.$id,"__title"),title:e.title||e.uiSchema["ui:title"],required:e.required,formContext:e.formContext}),e.description&&a.a.createElement(n,{id:"".concat(e.idSchema.$id,"__description"),description:e.description,formContext:e.formContext})):null,e.properties.map(function(e){return e.content}),function(){var t=e.formData,n=e.schema,r=e.uiSchema;if(!n.additionalProperties)return!1;var a=Object(P.getUiOptions)(r).expandable;return!1===a?a:void 0===n.maxProperties||Object.keys(t).length<n.maxProperties}()&&a.a.createElement(d.a,{type:"primary",className:"object-property-expand",onClick:e.onAddClick(e.schema),disabled:e.disabled||e.readonly},"Add"))}L.__docgenInfo={description:"",methods:[],displayName:"FieldTemplate"};var X=A;A.__docgenInfo={description:"",methods:[],displayName:"ObjectFieldTemplate"};var R=n("./node_modules/@material-ui/icons/ArrowUpward.js"),z=n.n(R),H=n("./node_modules/@material-ui/icons/ArrowDownward.js"),B=n.n(H),U=n("./node_modules/@material-ui/icons/Close.js"),G=n.n(U),J=n("./packages/unity-web/lib/components/Card/index.js"),Y=n.n(J);function V(e){var t=e.TitleField,n=e.idSchema,r=e.title,o=e.required;if(!r)return null;var i="".concat(n.$id,"__title");return a.a.createElement(t,{id:i,title:r,required:o})}var W=V;function Z(e){var t=e.DescriptionField,n=e.idSchema,r=e.description;if(!r)return null;var o="".concat(n.$id,"__description");return a.a.createElement(t,{id:o,description:r})}V.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldTitle"};var K=Z;function Q(e){return a.a.createElement("div",{className:e.className,id:e.idSchema.$id},a.a.createElement(W,{key:"array-field-title-".concat(e.idSchema.$id),TitleField:e.TitleField,idSchema:e.idSchema,title:e.uiSchema["ui:title"]||e.title,required:e.required}),(e.uiSchema["ui:description"]||e.schema.description)&&a.a.createElement(K,{key:"array-field-description-".concat(e.idSchema.$id),DescriptionField:e.DescriptionField,idSchema:e.idSchema,description:e.uiSchema["ui:description"]||e.schema.description}),a.a.createElement(Y.a,{className:"row array-item-list",key:"array-item-list-".concat(e.idSchema.$id)},a.a.createElement(J.CardBody,null,e.items&&e.items.map(function(e){return a.a.createElement("div",{key:e.index,className:e.className},a.a.createElement("div",{className:e.hasToolbar?"col-xs-9":"col-xs-12"},e.children),e.hasToolbar&&a.a.createElement("div",{className:"col-xs-3 array-item-toolbox"},a.a.createElement(f.a,null,(e.hasMoveUp||e.hasMoveDown)&&a.a.createElement(d.a,{icon:a.a.createElement(z.a,null),className:"array-item-move-up",tabIndex:"-1",disabled:e.disabled||e.readonly||!e.hasMoveUp,onClick:e.onReorderClick(e.index,e.index-1)}),(e.hasMoveUp||e.hasMoveDown)&&a.a.createElement(d.a,{icon:a.a.createElement(B.a,null),className:"array-item-move-down",tabIndex:"-1",disabled:e.disabled||e.readonly||!e.hasMoveDown,onClick:e.onReorderClick(e.index,e.index+1)}),e.hasRemove&&a.a.createElement(d.a,{type:"danger",icon:a.a.createElement(G.a,null),className:"array-item-remove",tabIndex:"-1",disabled:e.disabled||e.readonly,onClick:e.onDropIndexClick(e.index)}))))}))),e.canAdd&&a.a.createElement(f.a,null,a.a.createElement(d.a,{className:"array-item-add",onClick:e.onAddClick,disabled:e.disabled||e.readonly},"Add Another")))}Z.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldDescription"};var ee=Q;function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ne(e,t,n[t])})}return e}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Q.__docgenInfo={description:"",methods:[],displayName:"ArrayFieldTemplate"};var re={BaseInput:v,TextareaWidget:O},ae={TitleField:k,DescriptionField:T},oe=function(e){var t=e.children,n=e.hideTitle,r=e.additionalButtons,o=void 0===r?function(){return null}:r,i=e.submitText,l=void 0===i?"Submit":i,s=e.submitting,u=e.schema,p=e.uiSchema,b=e.onSubmit,y=e.formData;return a.a.createElement(m.a,{schema:u,fields:ae,uiSchema:te({_hideTitle:n},p),FieldTemplate:q,ErrorList:N,ObjectFieldTemplate:X,ArrayFieldTemplate:ee,widgets:re,formData:y,onSubmit:function(e){var t=e.formData;return b(t)}},t?t({submitting:s,submitText:l}):a.a.createElement(f.a,null,a.a.createElement(c.ButtonSet,null,o(),a.a.createElement(d.a,{type:"primary",buttonType:"submit",disabled:s,loading:s},l))))},ie=oe;function le(e){return(le="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t){return!t||"object"!==le(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}oe.__docgenInfo={description:"",methods:[],displayName:"FormFromSchema",props:{additionalButtons:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""},submitText:{defaultValue:{value:"'Submit'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"func"},required:!1,description:""},formData:{type:{name:"object"},required:!1,description:""},hideTitle:{type:{name:"bool"},required:!1,description:""},onSubmit:{type:{name:"func"},required:!0,description:""},schema:{type:{name:"object"},required:!1,description:""},submitting:{type:{name:"bool"},required:!1,description:""},uiSchema:{type:{name:"object"},required:!1,description:""}}},n.d(t,"default",function(){return pe});var pe=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=de(this,ue(t).call(this,e))).layout=null,n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=se(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"formfromschema"}},"FormFromSchema"),a.a.createElement(o.MDXTag,{name:"p",components:t},"You can use FormFromSchema to automatically generate forms from JSON Schemas."),a.a.createElement(o.MDXTag,{name:"p",components:t},"For more information on how to write and use the FormFromSchema component, see\n",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mozilla-services/react-jsonschema-form"}},"mozilla-services/react-jsonschema-form"),"."),a.a.createElement(o.MDXTag,{name:"p",components:t},"Check out ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jsonschema.net/"}},"JSONschema.net")," to create schemas easily."),a.a.createElement(o.MDXTag,{name:"pre",components:t},a.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import FormFromSchema from '@clarityhub/unity-forms/lib/FormFromSchema';\n")),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"simple-form"}},"Simple Form"),a.a.createElement(i.e,{__position:0,__code:"<FormFromSchema\n  additionalButtons={() => {\n    return <Button>Cancel</Button>\n  }}\n  onSubmit={data => alert(JSON.stringify(data))}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:d.a,FormFromSchema:ie}},a.a.createElement(ie,{additionalButtons:function(){return a.a.createElement(d.a,null,"Cancel")},onSubmit:function(e){return alert(JSON.stringify(e))},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"}}}})),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prefilled-form"}},"Prefilled Form"),a.a.createElement(o.MDXTag,{name:"p",components:t},"You can pass in ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"formData")," to prefill out the form"),a.a.createElement(i.e,{__position:1,__code:"<FormFromSchema\n  onSubmit={data => alert(JSON.stringify(data))}\n  formData={{\n    name: 'Clarity Hub',\n    description: 'Conversational APIs to power your business',\n  }}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:d.a,FormFromSchema:ie}},a.a.createElement(ie,{onSubmit:function(e){return alert(JSON.stringify(e))},formData:{name:"Clarity Hub",description:"Conversational APIs to power your business"},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"}}}})),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"custom-form-fields"}},"Custom Form Fields"),a.a.createElement(o.MDXTag,{name:"p",components:t},"Sometimes you may want to change how a form field is presented. You can use the ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," to change\nfields."),a.a.createElement(o.MDXTag,{name:"p",components:t},"In this example, we use ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/google-map-react/google-map-react"}},"google-map-react/google-map-react"),"\nas an example of a non-standard form component that the UI may want to render when given location objects with lat and lng\nproperties. "),a.a.createElement(o.MDXTag,{name:"p",components:t},"For more information on how to use the ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"uiSchema")," property, see ",a.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://react-jsonschema-form.readthedocs.io/en/latest/advanced-customization/#custom-widget-options"}},"react-jsonschema-form")),a.a.createElement(i.e,{__position:2,__code:"<FormFromSchema\n  hideTitle\n  onSubmit={data => alert(JSON.stringify(data))}\n  formData={{\n    name: 'Clarity Hub',\n    description: 'Conversational APIs to power your business',\n    location: { lat: -34.397, lng: 150.644 },\n  }}\n  uiSchema={{\n    location: {\n      'ui:field': props => {\n        return (\n          <div style={{ height: '300px', width: '100%' }}>\n            <GoogleMapReact\n              bootstrapURLKeys={{\n                key: 'AIzaSyDYNOZYEqYnkX2jyfpnIfJgmiLvuCViULo',\n              }}\n              defaultCenter={props.formData}\n              defaultZoom={8}\n            />\n          </div>\n        )\n      },\n      lat: {\n        'ui:widget': 'hidden',\n      },\n      lng: {\n        'ui:widget': 'hidden',\n      },\n    },\n  }}\n  schema={{\n    definitions: {},\n    $schema: 'http://json-schema.org/draft-07/schema#',\n    $id: 'http://example.com/root.json',\n    type: 'object',\n    title: 'Organization',\n    required: ['name'],\n    properties: {\n      name: {\n        $id: '#/properties/name',\n        type: 'string',\n        title: 'Name',\n        default: '',\n        examples: ['Clarity Hub'],\n        pattern: '^(.*)$',\n      },\n      description: {\n        $id: '#/properties/description',\n        type: 'string',\n        title: 'Description',\n        default: '',\n        pattern: '^(.*)$',\n      },\n      location: {\n        $id: '#/properties/location',\n        type: 'object',\n        title: 'Location',\n        default: '',\n        properties: {\n          lat: {\n            $id: '#/properties/location/latitude',\n            type: 'number',\n            title: 'Latitude',\n            default: '',\n          },\n          lng: {\n            $id: '#/properties/location/longitude',\n            type: 'number',\n            title: 'Longitude',\n            default: '',\n          },\n        },\n      },\n    },\n  }}\n/>",__scope:{props:this?this.props:n,GoogleMapReact:s.a,GoogleMapMarkers:l.GoogleMapMarkers,Button:d.a,FormFromSchema:ie}},a.a.createElement(ie,{hideTitle:!0,onSubmit:function(e){return alert(JSON.stringify(e))},formData:{name:"Clarity Hub",description:"Conversational APIs to power your business",location:{lat:-34.397,lng:150.644}},uiSchema:{location:{"ui:field":function(e){return a.a.createElement("div",{style:{height:"300px",width:"100%"}},a.a.createElement(s.a,{bootstrapURLKeys:{key:"AIzaSyDYNOZYEqYnkX2jyfpnIfJgmiLvuCViULo"},defaultCenter:e.formData,defaultZoom:8}))},lat:{"ui:widget":"hidden"},lng:{"ui:widget":"hidden"}}},schema:{definitions:{},$schema:"http://json-schema.org/draft-07/schema#",$id:"http://example.com/root.json",type:"object",title:"Organization",required:["name"],properties:{name:{$id:"#/properties/name",type:"string",title:"Name",default:"",examples:["Clarity Hub"],pattern:"^(.*)$"},description:{$id:"#/properties/description",type:"string",title:"Description",default:"",pattern:"^(.*)$"},location:{$id:"#/properties/location",type:"object",title:"Location",default:"",properties:{lat:{$id:"#/properties/location/latitude",type:"number",title:"Latitude",default:""},lng:{$id:"#/properties/location/longitude",type:"number",title:"Longitude",default:""}}}}}})),a.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"prop-types"}},"Prop Types"),a.a.createElement(o.MDXTag,{name:"p",components:t},"The following prop types are available for FormFromSchema."),a.a.createElement(i.f,{of:ie}))}}])&&ce(n.prototype,r),c&&ce(n,c),t}();pe.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./packages/unity-web/lib/components/Card/Card.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardPropTypes=void 0;var r=c(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a=n("./node_modules/@emotion/core/dist/core.browser.esm.js"),o=c(n("./packages/unity-core/lib/borders.js")),i=c(n("./packages/unity-core/lib/colors.js")),l=n("./packages/unity-web/lib/components/Card/CardHeader.js"),s=c(n("./packages/unity-web/lib/components/Card/CardBody.js"));function c(e){return e&&e.__esModule?e:{default:e}}var d={name:"pq4n33-Card",styles:"text-align:center;label:Card;"},u=(0,r.default)("div",{target:"e6pferz0",label:"Card"})("position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:",o.default.borderRadius.rem,"rem;box-shadow:",i.default.shadow.default,";",function(e){switch(e.type){case"notification":return(0,a.css)("background:",i.default.gradient.default,";",s.default,"{padding-top:2rem;padding-bottom:2rem;}label:Card;");default:return(0,a.css)("background-color:",i.default.white.default,";label:Card;")}}," >:not(",l.CardHeaderWrapper,"){h3{margin:0;padding:0;}h4{margin-top:0.6rem;}p:only-child{margin:0;}}",function(e){return e.center&&d},""),m=function(){return React.createElement("div",null)};t.CardPropTypes=m,u.propTypes=m.propTypes;var p=u;t.default=p},"./packages/unity-web/lib/components/Card/CardActions.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&r.__esModule?r:{default:r}).default)("div",{target:"eq07m5o0",label:"CardActions"})({name:"15g2oxy",styles:"margin-top:1rem;"});t.default=a},"./packages/unity-web/lib/components/Card/CardBody.js":function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,((r=n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js"))&&r.__esModule?r:{default:r}).default)("div",{target:"em76frp0",label:"CardBody"})({name:"1xljzoe",styles:"flex:1 1 auto;padding:1.25rem;"});t.default=a},"./packages/unity-web/lib/components/Card/CardFooter.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a=n("./packages/unity-core/lib/typography.js"),o=l(n("./packages/unity-core/lib/borders.js")),i=l(n("./packages/unity-core/lib/colors.js"));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("div",{target:"e1xi9xbg0",label:"CardFooter"})(a.variants.text.string," color:",i.default.dark.default,";padding:.75rem 1.25rem;border-top:1px solid ",i.default.muted.default,";&:last-child{border-radius:0 0 calc(",o.default.borderRadius.rem,"rem - 1px) calc(",o.default.borderRadius.rem,"rem - 1px);}");t.default=s},"./packages/unity-web/lib/components/Card/CardHeader.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CardHeaderWrapper=void 0;var r=s(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a=s(n("./node_modules/react/index.js")),o=s(n("./packages/unity-core/lib/borders.js")),i=s(n("./packages/unity-core/lib/colors.js")),l=s(n("./packages/unity-web/lib/components/Typography/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=(0,r.default)("div",{target:"eedi62r0",label:"CardHeaderWrapper"})("padding:.75rem 1.25rem;margin-bottom:0;border-bottom:1px solid ",i.default.muted.default,";&:first-of-type{border-radius:calc(",o.default.borderRadius.rem,"rem - 1px) calc(",o.default.borderRadius.rem,"rem - 1px) 0 0;}");t.CardHeaderWrapper=d;var u=function(e){var t=e.children,n=c(e,["children"]);return a.default.createElement(d,n,a.default.createElement(l.default,{noMargin:!0,noPadding:!0,type:"h3"},t))};t.default=u},"./packages/unity-web/lib/components/Card/CardImage.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),a=o(n("./packages/unity-core/lib/borders.js"));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)("img",{target:"e1d18klp0",label:"CardImage"})("display:block;margin:0 auto;max-width:100%;border-top-left-radius:calc(",a.default.borderRadius.rem,"rem - 1px);border-top-right-radius:calc(",a.default.borderRadius.rem,"rem - 1px);");t.default=i},"./packages/unity-web/lib/components/Card/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"CardActions",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CardBody",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"CardFooter",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"CardHeader",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"CardImage",{enumerable:!0,get:function(){return s.default}});var r=c(n("./packages/unity-web/lib/components/Card/Card.js")),a=c(n("./packages/unity-web/lib/components/Card/CardActions.js")),o=c(n("./packages/unity-web/lib/components/Card/CardBody.js")),i=c(n("./packages/unity-web/lib/components/Card/CardFooter.js")),l=c(n("./packages/unity-web/lib/components/Card/CardHeader.js")),s=c(n("./packages/unity-web/lib/components/Card/CardImage.js"));function c(e){return e&&e.__esModule?e:{default:e}}},"./packages/unity-web/lib/forms/LabelledTextarea/LabelledTextarea.js":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n("./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js")),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n("./node_modules/react/index.js")),i=n("./node_modules/prop-types/index.js"),l=c(n("./packages/unity-web/lib/forms/Textarea/index.js")),s=c(n("./packages/unity-web/lib/forms/Label/index.js"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=(0,a.default)("div",{target:"e1qloykc0",label:"ControlledTextarea"})({name:"8atqhb",styles:"width:100%;"}),v=0,j=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=f(t).call(this,e),n=!a||"object"!==d(a)&&"function"!==typeof a?b(r):a,g(b(n),"calcSize",function(){var e=n.props.maxLines;if(n.textarea){var t=n.textarea.scrollHeight+20,r=20*e+20;e&&t>r?n.setState({height:r}):n.setState({height:n.textarea.scrollHeight+20})}}),g(b(n),"animationFrameCb",function(){n.calcSize(),n.stop||window.requestAnimationFrame(n.animationFrameCb)}),g(b(n),"onMouseDown",function(){n.stop=!1,window.requestAnimationFrame(n.animationFrameCb),window.addEventListener("mouseup",n._onMouseUp)}),g(b(n),"onMouseUp",function(){n.stop=!0,window.removeEventListener("mouseup",n._onMouseUp)}),n.textareaId="textarea-".concat(String(v)),v++,n.state={height:0},n._onMouseUp=n.onMouseUp.bind(b(n)),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.calcSize()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.calcSize()}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.value,a=t.defaultValue,i=m(t,["label","value","defaultValue"]),c=this.state.height,d={};return(a||r)&&(d["data-not-empty"]=!0),o.default.createElement(h,null,o.default.createElement(l.default,u({},i,{id:this.textareaId,targetRef:function(t){return e.textarea=t},defaultValue:a,value:r},d,{onMouseDown:this.onMouseDown,label:n,height:"".concat(c,"px")}),o.default.createElement(s.default,{htmlFor:this.textareaId},n)))}}])&&p(n.prototype,r),a&&p(n,a),t}();t.default=j,g(j,"propTypes",{defaultValue:i.string,label:i.string.isRequired,maxLines:i.number,value:i.string}),g(j,"defaultProps",{maxLines:5,type:"text"})},"./packages/unity-web/lib/forms/LabelledTextarea/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var r,a=(r=n("./packages/unity-web/lib/forms/LabelledTextarea/LabelledTextarea.js"))&&r.__esModule?r:{default:r}},"./packages/unity-web/lib/forms/Textarea/Textarea.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("./node_modules/react/index.js")),a=o(n("./packages/unity-web/lib/forms/Input/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,i({},t,{inputType:"textarea",as:"textarea"}))};t.default=l},"./packages/unity-web/lib/forms/Textarea/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var r,a=(r=n("./packages/unity-web/lib/forms/Textarea/Textarea.js"))&&r.__esModule?r:{default:r}}}]);
//# sourceMappingURL=packages-unity-forms-src-form-from-schema-form-from-schema.6bb55019f71b3ded449a.js.map