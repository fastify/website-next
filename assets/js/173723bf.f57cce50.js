"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[5371],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3557:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"Error Handling"},c=void 0,l={unversionedId:"Error-Handling",id:"version-v1/Error-Handling",isDocsHomePage:!1,title:"Error Handling",description:"Uncaught errors are likely to cause memory leaks, file descriptor leaks and other major production issues. Domains were introduced to try fixing this issue, but they did not. Given the fact that it is not possible to process all uncaught errors in a sensible way, the best way to deal with them at the moment is to crash. In case of promises, make sure to handle errors correctly.",source:"@site/versioned_docs/version-v1/Error-Handling.md",sourceDirName:".",slug:"/Error-Handling",permalink:"/website-next/docs/v1/Error-Handling",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Error-Handling.md",tags:[],version:"v1",frontMatter:{title:"Error Handling"},sidebar:"version-v1/sidebar",previous:{title:"Ecosystem",permalink:"/website-next/docs/v1/Ecosystem"},next:{title:"Getting Started",permalink:"/website-next/docs/v1/Getting-Started"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uncaught errors are likely to cause memory leaks, file descriptor leaks and other major production issues. ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/docs/guides/domain-postmortem/"},"Domains")," were introduced to try fixing this issue, but they did not. Given the fact that it is not possible to process all uncaught errors in a sensible way, the best way to deal with them at the moment is to ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_warning_using_uncaughtexception_correctly"},"crash"),". In case of promises, make sure to ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v8.x/docs/api/deprecations.html#deprecations_dep0018_unhandled_promise_rejections"},"handle")," errors ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mcollina/make-promises-safe"},"correctly"),"."),(0,a.kt)("p",null,"Fastify follows an all-or-nothing approach and aims to be lean and optimal as much as possible. Thus, the developer is responsible for making sure that the errors are handled properly. Most of the errors are usually a result of unexpected input data, so we recommend specifying a ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Validation-and-Serialization"},"JSON.schema validation")," for your input data."),(0,a.kt)("p",null,"Note that, while Fastify doesn't catch uncaught errors for you, if routes are declared as ",(0,a.kt)("inlineCode",{parentName:"p"},"async"),", the error will safely be caught by the promise and routed to the default error handler of Fastify for a generic ",(0,a.kt)("inlineCode",{parentName:"p"},"Internal Server Error")," response. For customizing this behaviour, you should use ",(0,a.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Server#seterrorhandler"},"setErrorHandler"),"."))}d.isMDXComponent=!0}}]);