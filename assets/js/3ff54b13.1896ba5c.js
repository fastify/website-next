"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[689],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var _=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);t&&(_=_.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,_)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,_,n=function(e,t){if(null==e)return{};var r,_,n={},i=Object.keys(e);for(_=0;_<i.length;_++)r=i[_],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(_=0;_<i.length;_++)r=i[_],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=_.createContext({}),s=function(e){var t=_.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return _.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return _.createElement(_.Fragment,{},t)}},E=_.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),E=s(r),c=n,R=E["".concat(o,".").concat(c)]||E[c]||p[c]||i;return r?_.createElement(R,a(a({ref:t},d),{},{components:r})):_.createElement(R,a({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=E;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return _.createElement.apply(null,a)}return _.createElement.apply(null,r)}E.displayName="MDXCreateElement"},2798:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return E}});var _=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Errors"},o=void 0,s={unversionedId:"Errors",id:"version-v2/Errors",isDocsHomePage:!1,title:"Errors",description:"Error Handling",source:"@site/versioned_docs/version-v2/Errors.md",sourceDirName:".",slug:"/Errors",permalink:"/website-next/docs/v2/Errors",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Errors.md",tags:[],version:"v2",frontMatter:{title:"Errors"},sidebar:"version-v2/tutorialSidebar",previous:{title:"Ecosystem",permalink:"/website-next/docs/v2/Ecosystem"},next:{title:"Fluent Schema",permalink:"/website-next/docs/v2/Fluent-Schema"}},d=[{value:"Error Handling",id:"error-handling",children:[],level:3},{value:"Fastify Error Codes",id:"fastify-error-codes",children:[{value:"FST_ERR_BAD_URL",id:"fst_err_bad_url",children:[],level:4},{value:"FST_ERR_CTP_ALREADY_PRESENT",id:"fst_err_ctp_already_present",children:[],level:4},{value:"FST_ERR_CTP_INVALID_TYPE",id:"fst_err_ctp_invalid_type",children:[],level:4},{value:"FST_ERR_CTP_EMPTY_TYPE",id:"fst_err_ctp_empty_type",children:[],level:4},{value:"FST_ERR_CTP_INVALID_HANDLER",id:"fst_err_ctp_invalid_handler",children:[],level:4},{value:"FST_ERR_CTP_INVALID_PARSE_TYPE",id:"fst_err_ctp_invalid_parse_type",children:[],level:4},{value:"FST_ERR_CTP_BODY_TOO_LARGE",id:"fst_err_ctp_body_too_large",children:[],level:4},{value:"FST_ERR_CTP_INVALID_MEDIA_TYPE",id:"fst_err_ctp_invalid_media_type",children:[],level:4},{value:"FST_ERR_CTP_INVALID_CONTENT_LENGTH",id:"fst_err_ctp_invalid_content_length",children:[],level:4},{value:"FST_ERR_DEC_ALREADY_PRESENT",id:"fst_err_dec_already_present",children:[],level:4},{value:"FST_ERR_DEC_MISSING_DEPENDENCY",id:"fst_err_dec_missing_dependency",children:[],level:4},{value:"FST_ERR_HOOK_INVALID_TYPE",id:"fst_err_hook_invalid_type",children:[],level:4},{value:"FST_ERR_HOOK_INVALID_HANDLER",id:"fst_err_hook_invalid_handler",children:[],level:4},{value:"FST_ERR_LOG_INVALID_DESTINATION",id:"fst_err_log_invalid_destination",children:[],level:4},{value:"FST_ERR_REP_ALREADY_SENT",id:"fst_err_rep_already_sent",children:[],level:4},{value:"FST_ERR_SEND_INSIDE_ONERR",id:"fst_err_send_inside_onerr",children:[],level:4},{value:"FST_ERR_REP_INVALID_PAYLOAD_TYPE",id:"fst_err_rep_invalid_payload_type",children:[],level:4},{value:"FST_ERR_SCH_MISSING_ID",id:"fst_err_sch_missing_id",children:[],level:4},{value:"FST_ERR_SCH_ALREADY_PRESENT",id:"fst_err_sch_already_present",children:[],level:4},{value:"FST_ERR_SCH_NOT_PRESENT",id:"fst_err_sch_not_present",children:[],level:4},{value:"FST_ERR_SCH_BUILD",id:"fst_err_sch_build",children:[],level:4},{value:"FST_ERR_PROMISE_NOT_FULLFILLED",id:"fst_err_promise_not_fullfilled",children:[],level:4},{value:"FST_ERR_SEND_UNDEFINED_ERR",id:"fst_err_send_undefined_err",children:[],level:4}],level:3}],p={toc:d};function E(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,_.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"error-handling"},"Error Handling"),(0,i.kt)("a",{id:"error-handling"}),(0,i.kt)("p",null,"Uncaught errors are likely to cause memory leaks, file descriptor leaks and other major production issues. ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/domain-postmortem/"},"Domains")," were introduced to try fixing this issue, but they did not. Given the fact that it is not possible to process all uncaught errors sensibly, the best way to deal with them at the moment is to ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly"},"crash"),". In case of promises, make sure to ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v8.x/docs/api/deprecations.html#deprecations_dep0018_unhandled_promise_rejections"},"handle")," errors ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcollina/make-promises-safe"},"correctly"),"."),(0,i.kt)("p",null,"Fastify follows an all-or-nothing approach and aims to be lean and optimal as much as possible. Thus, the developer is responsible for making sure that the errors are handled properly. Most of the errors are usually a result of unexpected input data, so we recommend specifying a ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Validation-and-Serialization"},"JSON.schema validation")," for your input data."),(0,i.kt)("p",null,"Note that Fastify doesn't catch uncaught errors within callback-based routes for you, so any uncaught errors will result in a crash.\nIf routes are declared as ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," though - the error will safely be caught by the promise and routed to the default error handler of Fastify for a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," response. For customizing this behaviour, you should use ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Server#seterrorhandler"},"setErrorHandler"),"."),(0,i.kt)("h3",{id:"fastify-error-codes"},"Fastify Error Codes"),(0,i.kt)("a",{id:"fastify-error-codes"}),(0,i.kt)("h4",{id:"fst_err_bad_url"},"FST_ERR_BAD_URL"),(0,i.kt)("a",{id:"FST_ERR_BAD_URL"}),(0,i.kt)("p",null,"The router received an invalid url."),(0,i.kt)("h4",{id:"fst_err_ctp_already_present"},"FST_ERR_CTP_ALREADY_PRESENT"),(0,i.kt)("a",{id:"FST_ERR_CTP_ALREADY_PRESENT"}),(0,i.kt)("p",null,"The parser for this content type was already registered."),(0,i.kt)("h4",{id:"fst_err_ctp_invalid_type"},"FST_ERR_CTP_INVALID_TYPE"),(0,i.kt)("a",{id:"FST_ERR_CTP_INVALID_TYPE"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," should be a string."),(0,i.kt)("h4",{id:"fst_err_ctp_empty_type"},"FST_ERR_CTP_EMPTY_TYPE"),(0,i.kt)("a",{id:"FST_ERR_CTP_EMPTY_TYPE"}),(0,i.kt)("p",null,"The content type cannot be an empty string."),(0,i.kt)("h4",{id:"fst_err_ctp_invalid_handler"},"FST_ERR_CTP_INVALID_HANDLER"),(0,i.kt)("a",{id:"FST_ERR_CTP_INVALID_HANDLER"}),(0,i.kt)("p",null,"An invalid handler was passed for the content type."),(0,i.kt)("h4",{id:"fst_err_ctp_invalid_parse_type"},"FST_ERR_CTP_INVALID_PARSE_TYPE"),(0,i.kt)("a",{id:"FST_ERR_CTP_INVALID_PARSE_TYPE"}),(0,i.kt)("p",null,"The provided parse type is not supported. Accepted values are ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"buffer"),"."),(0,i.kt)("h4",{id:"fst_err_ctp_body_too_large"},"FST_ERR_CTP_BODY_TOO_LARGE"),(0,i.kt)("a",{id:"FST_ERR_CTP_BODY_TOO_LARGE"}),(0,i.kt)("p",null,"The request body is larger than the provided limit."),(0,i.kt)("h4",{id:"fst_err_ctp_invalid_media_type"},"FST_ERR_CTP_INVALID_MEDIA_TYPE"),(0,i.kt)("a",{id:"FST_ERR_CTP_INVALID_MEDIA_TYPE"}),(0,i.kt)("p",null,"The received media type is not supported (i.e. there is no suitable ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," parser for it)."),(0,i.kt)("h4",{id:"fst_err_ctp_invalid_content_length"},"FST_ERR_CTP_INVALID_CONTENT_LENGTH"),(0,i.kt)("a",{id:"FST_ERR_CTP_INVALID_CONTENT_LENGTH"}),(0,i.kt)("p",null,"Request body size did not match Content-Length."),(0,i.kt)("h4",{id:"fst_err_dec_already_present"},"FST_ERR_DEC_ALREADY_PRESENT"),(0,i.kt)("a",{id:"FST_ERR_DEC_ALREADY_PRESENT"}),(0,i.kt)("p",null,"A decorator with the same name is already registered."),(0,i.kt)("h4",{id:"fst_err_dec_missing_dependency"},"FST_ERR_DEC_MISSING_DEPENDENCY"),(0,i.kt)("a",{id:"FST_ERR_DEC_MISSING_DEPENDENCY"}),(0,i.kt)("p",null,"The decorator cannot be registered due to a missing dependency."),(0,i.kt)("h4",{id:"fst_err_hook_invalid_type"},"FST_ERR_HOOK_INVALID_TYPE"),(0,i.kt)("a",{id:"FST_ERR_HOOK_INVALID_TYPE"}),(0,i.kt)("p",null,"The hook name must be a string."),(0,i.kt)("h4",{id:"fst_err_hook_invalid_handler"},"FST_ERR_HOOK_INVALID_HANDLER"),(0,i.kt)("a",{id:"FST_ERR_HOOK_INVALID_HANDLER"}),(0,i.kt)("p",null,"The hook callback must be a function."),(0,i.kt)("h4",{id:"fst_err_log_invalid_destination"},"FST_ERR_LOG_INVALID_DESTINATION"),(0,i.kt)("a",{id:"FST_ERR_LOG_INVALID_DESTINATION"}),(0,i.kt)("p",null,"The logger accepts either a ",(0,i.kt)("inlineCode",{parentName:"p"},"'stream'")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"'file'")," as the destination."),(0,i.kt)("h4",{id:"fst_err_rep_already_sent"},"FST_ERR_REP_ALREADY_SENT"),(0,i.kt)("a",{id:"FST_ERR_REP_ALREADY_SENT"}),(0,i.kt)("p",null,"A response was already sent."),(0,i.kt)("h4",{id:"fst_err_send_inside_onerr"},"FST_ERR_SEND_INSIDE_ONERR"),(0,i.kt)("a",{id:"FST_ERR_SEND_INSIDE_ONERR"}),(0,i.kt)("p",null,"You cannot use ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"onError")," hook."),(0,i.kt)("h4",{id:"fst_err_rep_invalid_payload_type"},"FST_ERR_REP_INVALID_PAYLOAD_TYPE"),(0,i.kt)("a",{id:"FST_ERR_REP_INVALID_PAYLOAD_TYPE"}),(0,i.kt)("p",null,"Reply payload can either be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer"),"."),(0,i.kt)("h4",{id:"fst_err_sch_missing_id"},"FST_ERR_SCH_MISSING_ID"),(0,i.kt)("a",{id:"FST_ERR_SCH_MISSING_ID"}),(0,i.kt)("p",null,"The schema provided does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"$id")," property."),(0,i.kt)("h4",{id:"fst_err_sch_already_present"},"FST_ERR_SCH_ALREADY_PRESENT"),(0,i.kt)("a",{id:"FST_ERR_SCH_ALREADY_PRESENT"}),(0,i.kt)("p",null,"A schema with the same ",(0,i.kt)("inlineCode",{parentName:"p"},"$id")," already exists."),(0,i.kt)("h4",{id:"fst_err_sch_not_present"},"FST_ERR_SCH_NOT_PRESENT"),(0,i.kt)("a",{id:"FST_ERR_SCH_NOT_PRESENT"}),(0,i.kt)("p",null,"No schema with the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"$id")," exists."),(0,i.kt)("h4",{id:"fst_err_sch_build"},"FST_ERR_SCH_BUILD"),(0,i.kt)("a",{id:"FST_ERR_SCH_BUILD"}),(0,i.kt)("p",null,"The JSON schema provided to one route is not valid."),(0,i.kt)("h4",{id:"fst_err_promise_not_fullfilled"},"FST_ERR_PROMISE_NOT_FULLFILLED"),(0,i.kt)("a",{id:"FST_ERR_PROMISE_NOT_FULLFILLED"}),(0,i.kt)("p",null,"A promise may not be fulfilled with 'undefined' when statusCode is not 204."),(0,i.kt)("h4",{id:"fst_err_send_undefined_err"},"FST_ERR_SEND_UNDEFINED_ERR"),(0,i.kt)("a",{id:"FST_ERR_SEND_UNDEFINED_ERR"}),(0,i.kt)("p",null,"Undefined error has occured."))}E.isMDXComponent=!0}}]);