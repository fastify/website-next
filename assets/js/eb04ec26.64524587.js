"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[8330],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),k=a,h=c["".concat(i,".").concat(k)]||c[k]||u[k]||r;return t?o.createElement(h,l(l({ref:n},d),{},{components:t})):o.createElement(h,l({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},732:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],s={title:"Hooks",sidebar_label:"Hooks",hide_title:!1},i=void 0,p={unversionedId:"Hooks",id:"version-v1/Hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks are registered with the fastify.addHook method and allow you to listen to specific events in the application or request/response lifecycle. You have to register a hook before the event is triggered otherwise the event is lost.",source:"@site/versioned_docs/version-v1/Hooks.md",sourceDirName:".",slug:"/Hooks",permalink:"/website-next/docs/v1/Hooks",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Hooks.md",tags:[],version:"v1",frontMatter:{title:"Hooks",sidebar_label:"Hooks",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"HTTP2",permalink:"/website-next/docs/v1/HTTP2"},next:{title:"Long Term Support",permalink:"/website-next/docs/v1/LTS"}},d=[{value:"Request/Response Hooks",id:"requestresponse-hooks",children:[{value:"The <code>onSend</code> Hook",id:"the-onsend-hook",children:[],level:4},{value:"Respond to a request from a hook",id:"respond-to-a-request-from-a-hook",children:[],level:3}],level:2},{value:"Application Hooks",id:"application-hooks",children:[{value:"onClose",id:"onclose",children:[],level:3},{value:"onRoute",id:"onroute",children:[],level:3},{value:"Scope",id:"scope",children:[],level:3},{value:"beforeHandler",id:"beforehandler",children:[],level:3}],level:2}],u={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hooks are registered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.addHook")," method and allow you to listen to specific events in the application or request/response lifecycle. You have to register a hook before the event is triggered otherwise the event is lost."),(0,r.kt)("h2",{id:"requestresponse-hooks"},"Request/Response Hooks"),(0,r.kt)("p",null,"By using the hooks you can interact directly inside the lifecycle of Fastify. There are four different Hooks that you can use ",(0,r.kt)("em",{parentName:"p"},"(in order of execution)"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'onRequest'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'preHandler'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'onSend'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'onResponse'"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (req, res, next) => {\n  // some code\n  next()\n})\n\nfastify.addHook('preHandler', (request, reply, next) => {\n  // some code\n  next()\n})\n\nfastify.addHook('onSend', (request, reply, payload, next) => {\n  // some code\n  next()\n})\n\nfastify.addHook('onResponse', (res, next) => {\n  // some code\n  next()\n})\n")),(0,r.kt)("p",null,"Or ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', async (req, res) => {\n  // some code\n  await asyncMethod()\n  // error occurred\n  if (err) {\n    throw new Error('some errors occurred.')\n  }\n  return\n})\n\nfastify.addHook('preHandler', async (request, reply) => {\n  // some code\n  await asyncMethod()\n  // error occurred\n  if (err) {\n    throw new Error('some errors occurred.')\n  }\n  return\n})\n\nfastify.addHook('onSend', async (request, reply, payload) => {\n  // some code\n  await asyncMethod()\n  // error occurred\n  if (err) {\n    throw new Error('some errors occurred.')\n  }\n  return\n})\n\nfastify.addHook('onResponse', async (res) => {\n  // some code\n  await asyncMethod()\n  // error occurred\n  if (err) {\n    throw new Error('some errors occurred.')\n  }\n  return\n})\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notice:")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," callback is not available when using ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"await")," or returning a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),". If you do invoke a ",(0,r.kt)("inlineCode",{parentName:"p"},"next")," callback in this situation unexpected behavior may occur, e.g. duplicate invocation of handlers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"req"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/http.html#http_class_http_incomingmessage"},"IncomingMessage"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"res"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},"ServerResponse"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request"),(0,r.kt)("td",{parentName:"tr",align:null},"Fastify ",(0,r.kt)("a",{parentName:"td",href:"/website-next/docs/v1/Request"},"Request")," interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reply"),(0,r.kt)("td",{parentName:"tr",align:null},"Fastify ",(0,r.kt)("a",{parentName:"td",href:"/website-next/docs/v1/Reply"},"Reply")," interface")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload"),(0,r.kt)("td",{parentName:"tr",align:null},"The serialized payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"next"),(0,r.kt)("td",{parentName:"tr",align:null},"Function to continue with the ",(0,r.kt)("a",{parentName:"td",href:"/website-next/docs/v1/Lifecycle"},"lifecycle"))))),(0,r.kt)("p",null,"It is pretty easy to understand where each hook is executed by looking at the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Lifecycle"},"lifecycle page"),".",(0,r.kt)("br",null),"\nHooks are affected by Fastify's encapsulation, and can thus be applied to selected routes. See the ",(0,r.kt)("a",{parentName:"p",href:"#scope"},"Scopes")," section for more information."),(0,r.kt)("p",null,"If you get an error during the execution of your hook, just pass it to ",(0,r.kt)("inlineCode",{parentName:"p"},"next()")," and Fastify will automatically close the request and send the appropriate error code to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (req, res, next) => {\n  next(new Error('some error'))\n})\n")),(0,r.kt)("p",null,"If you want to pass a custom error code to the user, just use ",(0,r.kt)("inlineCode",{parentName:"p"},"reply.code()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', (request, reply, next) => {\n  reply.code(500)\n  next(new Error('some error'))\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The error will be handled by ",(0,r.kt)("a",{parentName:"em",href:"/website-next/docs/v1/Reply#errors"},(0,r.kt)("inlineCode",{parentName:"a"},"Reply")),".")),(0,r.kt)("p",null,"Note that in the ",(0,r.kt)("inlineCode",{parentName:"p"},"'preHandler'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'onSend'")," hook the request and reply objects are different from ",(0,r.kt)("inlineCode",{parentName:"p"},"'onRequest'"),", because the two arguments are ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Request"},(0,r.kt)("inlineCode",{parentName:"a"},"request"))," and ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Reply"},(0,r.kt)("inlineCode",{parentName:"a"},"reply"))," core Fastify objects."),(0,r.kt)("h4",{id:"the-onsend-hook"},"The ",(0,r.kt)("inlineCode",{parentName:"h4"},"onSend")," Hook"),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"onSend")," hook, you can change the payload. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onSend', (request, reply, payload, next) => {\n  var err = null;\n  var newPayload = payload.replace('some-text', 'some-new-text')\n  next(err, newPayload)\n})\n\n// Or async\nfastify.addHook('onSend', async (request, reply, payload) => {\n  var newPayload = payload.replace('some-text', 'some-new-text')\n  return newPayload\n})\n")),(0,r.kt)("p",null,"You can also clear the payload to send a response with an empty body by replacing the payload with ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onSend', (request, reply, payload, next) => {\n  reply.code(304)\n  const newPayload = null\n  next(null, newPayload)\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also send an empty body by replacing the payload with the empty string ",(0,r.kt)("inlineCode",{parentName:"p"},"''"),", but be aware that this will cause the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Length")," header to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", whereas the ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Length")," header will not be set if the payload is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,r.kt)("p",null,"Note: If you change the payload, you may only change it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"stream"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"respond-to-a-request-from-a-hook"},"Respond to a request from a hook"),(0,r.kt)("p",null,"If needed, you can respond to a request before you reach the route handler. An example could be an authentication hook. If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"onRequest")," or a middleware, use ",(0,r.kt)("inlineCode",{parentName:"p"},"res.end"),". If you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"preHandler")," hook, use ",(0,r.kt)("inlineCode",{parentName:"p"},"reply.send"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', (req, res, next) => {\n  res.end('early response')\n})\n\n// Works with async functions too\nfastify.addHook('preHandler', async (request, reply) => {\n  reply.send({ hello: 'world' })\n})\n")),(0,r.kt)("p",null,"If you want to respond with a stream, you should avoid using an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function for the hook. If you must use an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function, your code will need to follow the pattern in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/94ea67ef2d8dce8a955d510cd9081aabd036fa85/test/hooks-async.js#L269-L275"},"test/hooks-async.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const pump = require('pump')\n\nfastify.addHook('onRequest', (req, res, next) => {\n  const stream = fs.createReadStream('some-file', 'utf8')\n  pump(stream, res, err => req.log.error(err))\n})\n")),(0,r.kt)("h2",{id:"application-hooks"},"Application Hooks"),(0,r.kt)("p",null,"You are able to hook into the application-lifecycle as well. It's important to note that these hooks aren't fully encapsulated. The ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," inside the hooks are encapsulated but the handlers can respond to an event outside the encapsulation boundaries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'onClose'")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'onRoute'"))),(0,r.kt)("h3",{id:"onclose"},"onClose"),(0,r.kt)("a",{name:"on-close"}),(0,r.kt)("p",null,"Triggered when ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.close()")," is invoked to stop the server. It is useful when ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Plugins"},"plugins"),' need a "shutdown" event, such as a connection to a database.',(0,r.kt)("br",null),"\nThe first argument is the Fastify instance, the second one the ",(0,r.kt)("inlineCode",{parentName:"p"},"done")," callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onClose', (instance, done) => {\n  // some code\n  done()\n})\n")),(0,r.kt)("h3",{id:"onroute"},"onRoute"),(0,r.kt)("a",{name:"on-route"}),(0,r.kt)("p",null,"Triggered when a new route is registered. Listeners are passed a ",(0,r.kt)("inlineCode",{parentName:"p"},"routeOptions")," object as the sole parameter. The interface is synchronous, and, as such, the listeners do not get passed a callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRoute', (routeOptions) => {\n  // some code\n  routeOptions.method\n  routeOptions.schema\n  routeOptions.url\n  routeOptions.bodyLimit\n  routeOptions.logLevel\n  routeOptions.prefix\n})\n")),(0,r.kt)("h3",{id:"scope"},"Scope"),(0,r.kt)("a",{name:"scope"}),(0,r.kt)("p",null,"Except for ",(0,r.kt)("a",{parentName:"p",href:"#application-hooks"},"Application Hooks"),", all hooks are encapsulated. This means that you can decide where your hooks should run by using ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," as explained in the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Plugins-Guide"},"plugins guide"),". If you pass a function, that function is bound to the right Fastify context and from there you have full access to the Fastify API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('onRequest', function (req, res, next) {\n  const self = this // Fastify context\n  next()\n})\n")),(0,r.kt)("p",null,"Note: using an arrow function will break the binding of this to the Fastify instance."),(0,r.kt)("h3",{id:"beforehandler"},"beforeHandler"),(0,r.kt)("a",{name:"before-handler"}),(0,r.kt)("p",null,"Despite the name, ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeHandler")," is not a standard hook like ",(0,r.kt)("inlineCode",{parentName:"p"},"preHandler"),", but is a function that your register right in the route option that will be executed only in the specified route. Can be useful if you need to handle the authentication at route level instead of at hook level (",(0,r.kt)("inlineCode",{parentName:"p"},"preHandler")," for example), it could also be an array of functions.",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"beforeHandler")," is executed always after the ",(0,r.kt)("inlineCode",{parentName:"strong"},"preHandler")," hook.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addHook('preHandler', (request, reply, done) => {\n  // your code\n  done()\n})\n\nfastify.route({\n  method: 'GET',\n  url: '/',\n  schema: { ... },\n  beforeHandler: function (request, reply, done) {\n    // your code\n    done()\n  },\n  handler: function (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n})\n\nfastify.route({\n  method: 'GET',\n  url: '/',\n  schema: { ... },\n  beforeHandler: [\n    function first (request, reply, done) {\n      // your code\n      done()\n    },\n    function second (request, reply, done) {\n      // your code\n      done()\n    }\n  ],\n  handler: function (request, reply) {\n    reply.send({ hello: 'world' })\n  }\n})\n")))}c.isMDXComponent=!0}}]);