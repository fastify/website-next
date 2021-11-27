"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[9390],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=s(t),y=o,d=p["".concat(l,".").concat(y)]||p[y]||u[y]||i;return t?r.createElement(d,c(c({ref:n},f),{},{components:t})):r.createElement(d,c({ref:n},f))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2728:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return f},default:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={title:"Lifecycle",sidebar_label:"Lifecycle",hide_title:!1},l=void 0,s={unversionedId:"Lifecycle",id:"version-v2/Lifecycle",isDocsHomePage:!1,title:"Lifecycle",description:"Following the schema of the internal lifecycle of Fastify.",source:"@site/versioned_docs/version-v2/Lifecycle.md",sourceDirName:".",slug:"/Lifecycle",permalink:"/website-next/docs/v2/Lifecycle",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Lifecycle.md",tags:[],version:"v2",frontMatter:{title:"Lifecycle",sidebar_label:"Lifecycle",hide_title:!1},sidebar:"version-v2/tutorialSidebar",previous:{title:"Long Term Support",permalink:"/website-next/docs/v2/LTS"},next:{title:"Logging",permalink:"/website-next/docs/v2/Logging"}},f=[],u={toc:f};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Following the schema of the internal lifecycle of Fastify."),(0,i.kt)("p",null,"On the right branch of every section there is the next phase of the lifecycle, on the left branch there is the corresponding error code that will be generated if the parent throws an error ",(0,i.kt)("em",{parentName:"p"},"(note that all the errors are automatically handled by Fastify)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Incoming Request\n  \u2502\n  \u2514\u2500\u25b6 Routing\n        \u2502\n        \u2514\u2500\u25b6 Instance Logger\n             \u2502\n       404 \u25c0\u2500\u2534\u2500\u25b6 onRequest Hook\n                  \u2502\n        4**/5** \u25c0\u2500\u2534\u2500\u25b6 run Middlewares\n                        \u2502\n              4**/5** \u25c0\u2500\u2534\u2500\u25b6 preParsing Hook\n                              \u2502\n                    4**/5** \u25c0\u2500\u2534\u2500\u25b6 Parsing\n                                   \u2502\n                         4**/5** \u25c0\u2500\u2534\u2500\u25b6 preValidation Hook\n                                        \u2502\n                                  415 \u25c0\u2500\u2534\u2500\u25b6 Validation\n                                              \u2502\n                                        400 \u25c0\u2500\u2534\u2500\u25b6 preHandler Hook\n                                                    \u2502\n                                          4**/5** \u25c0\u2500\u2534\u2500\u25b6 User Handler\n                                                          \u2502\n                                                          \u2514\u2500\u25b6 Reply\n                                                                \u2502\n                                                      4**/5** \u25c0\u2500\u2534\u2500\u25b6 preSerialization Hook\n                                                                      \u2502\n                                                                      \u2514\u2500\u25b6 onSend Hook\n                                                                            \u2502\n                                                                  4**/5** \u25c0\u2500\u2534\u2500\u25b6 Outgoing Response\n                                                                                  \u2502\n                                                                                  \u2514\u2500\u25b6 onResponse Hook\n")))}p.isMDXComponent=!0}}]);