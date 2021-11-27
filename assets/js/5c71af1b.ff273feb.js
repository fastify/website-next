"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[7609],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,y=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Plugins Guide",sidebar_label:"Plugins Guide",hide_title:!1},s="The hitchhiker's guide to plugins",u={unversionedId:"Plugins-Guide",id:"version-v1/Plugins-Guide",isDocsHomePage:!1,title:"Plugins Guide",description:"First of all, DON'T PANIC!",source:"@site/versioned_docs/version-v1/Plugins-Guide.md",sourceDirName:".",slug:"/Plugins-Guide",permalink:"/website-next/docs/v1/Plugins-Guide",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Plugins-Guide.md",tags:[],version:"v1",frontMatter:{title:"Plugins Guide",sidebar_label:"Plugins Guide",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Middlewares",permalink:"/website-next/docs/v1/Middlewares"},next:{title:"Plugins",permalink:"/website-next/docs/v1/Plugins"}},p=[{value:"Register",id:"register",children:[],level:2},{value:"Decorators",id:"decorators",children:[],level:2},{value:"Hooks",id:"hooks",children:[],level:2},{value:"Middlewares",id:"middlewares",children:[],level:2},{value:"How to handle encapsulation and distribution",id:"how-to-handle-encapsulation-and-distribution",children:[],level:2},{value:"Handle errors",id:"handle-errors",children:[],level:2},{value:"Let&#39;s start!",id:"lets-start",children:[],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-hitchhikers-guide-to-plugins"},"The hitchhiker's guide to plugins"),(0,i.kt)("p",null,"First of all, ",(0,i.kt)("inlineCode",{parentName:"p"},"DON'T PANIC"),"!"),(0,i.kt)("p",null,"Fastify was built from the beginning to be an extremely modular system. We built a powerful API that allows you to add methods and utilities to Fastify by creating a namespace. We built a system that creates an encapsulation model that allows you to split your application in multiple microservices at any moment, without the need to refactor the entire application."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table of contents")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-hitchhikers-guide-to-plugins"},"The hitchhiker's guide to plugins"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#register"},"Register")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#decorators"},"Decorators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#hooks"},"Hooks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#middlewares"},"Middlewares")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-to-handle-encapsulation-and-distribution"},"How to handle encapsulation and distribution")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handle-errors"},"Handle errors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lets-start"},"Let's start!"))))),(0,i.kt)("h2",{id:"register"},"Register"),(0,i.kt)("a",{name:"register"}),(0,i.kt)("p",null,"As in JavaScript everything is an object, in Fastify everything is a plugin.",(0,i.kt)("br",null),"\nYour routes, your utilities and so on are all plugins. To add a new plugin, whatever its functionality is, in Fastify you have a nice and unique api to use: ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Plugins"},(0,i.kt)("inlineCode",{parentName:"a"},"register")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(\n  require('./my-plugin'),\n  { options }\n)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"register")," creates a new Fastify context, this means that if you do any change to the Fastify instance, those changes will not be reflected in the context's ancestors. In other words, encapsulation!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Why is encapsulation important?"),(0,i.kt)("br",null),"\nWell, let's say you are creating a new disruptive startup, what do you do? You create an api server with all your stuff, everything in the same place, a monolith!",(0,i.kt)("br",null),"\nOk, you are growing very fast and you want to change your architecture and try microservices. Usually this implies a huge amount of work, because of cross dependencies and the lack of separation of concerns.",(0,i.kt)("br",null),"\nFastify helps you a lot in this direction, because thanks to the encapsulation model it will completely avoid cross dependencies, and will help you structure your code in cohesive blocks."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Let's return to how to correctly use ",(0,i.kt)("inlineCode",{parentName:"em"},"register"),"."),(0,i.kt)("br",null),"\nAs you probably know, the required plugins must expose a single function with the following signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, options, next) {}\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify")," is (pretty obvious) the encapsulated Fastify instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," is the options object and ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," is the function you ",(0,i.kt)("strong",{parentName:"p"},"must")," call when you plugin is ready."),(0,i.kt)("p",null,"Fastify's plugin model is fully reentrant and graph-based, it handles without any kind of problem asynchronous code and it guarantees the load order of the plugins, even the close order! ",(0,i.kt)("em",{parentName:"p"},"How?")," Glad you asked, checkout ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mcollina/avvio"},(0,i.kt)("inlineCode",{parentName:"a"},"avvio")),"! Fastify starts loading the plugin ",(0,i.kt)("strong",{parentName:"p"},"after")," ",(0,i.kt)("inlineCode",{parentName:"p"},".listen()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".inject()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".ready()")," are called."),(0,i.kt)("p",null,"Inside a plugin you can do whatever you want, register routes, utilities (we'll see this in a moment) and do nested registers, just remember to call ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," when everything is set up!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, options, next) {\n  fastify.get('/plugin', (request, reply) => {\n    reply.send({ hello: 'world' })\n  })\n\n  next()\n}\n")),(0,i.kt)("p",null,"Well, now you know how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," api and how it works, but how do we add new functionality to Fastify and even better, share them with other developers?"),(0,i.kt)("h2",{id:"decorators"},"Decorators"),(0,i.kt)("a",{name:"decorators"}),(0,i.kt)("p",null,"Okay, let's say that you wrote an utility that is so good that you decided to make it available along all your code. How would you do it? Probably something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// your-awesome-utility.js\nmodule.exports = function (a, b) {\n  return a + b\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const util = require('./your-awesome-utility')\nconsole.log(util('that is ', ' awesome'))\n")),(0,i.kt)("p",null,"And now you will import your utility in every file you need it. (And don't forget that you will probably also need it in your test)."),(0,i.kt)("p",null,"Fastify offers you a way nicer and elegant way to do this, ",(0,i.kt)("em",{parentName:"p"},"decorators"),".\nCreate a decorator is extremely easy, just use the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Decorators"},(0,i.kt)("inlineCode",{parentName:"a"},"decorate"))," api:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('util', (a, b) => a + b)\n")),(0,i.kt)("p",null,"Now you can access your utility just by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify.util")," whenever you need it, even inside your test.",(0,i.kt)("br",null),"\nAnd here's starts the magic; do you remember that few lines above we talked about encapsulation? Well, using ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"decorate")," in conjunction enable exactly that, let me show you an example to clarify this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, next) => {\n  instance.decorate('util', (a, b) => a + b)\n  console.log(instance.util('that is ', ' awesome'))\n\n  next()\n})\n\nfastify.register((instance, opts, next) => {\n  console.log(instance.util('that is ', ' awesome')) // this will throw an error\n\n  next()\n})\n")),(0,i.kt)("p",null,"Inside the second register call ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.util")," will throw an error, because ",(0,i.kt)("inlineCode",{parentName:"p"},"util")," exists only inside the first register context.",(0,i.kt)("br",null),"\nLet's step back for a moment and get deeper on this: when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," api you will create a new context every time and this avoids situations like the one mentioned few line above. But pay attention, the encapsulation works only for the ancestors and the brothers, but not for the sons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, next) => {\n  instance.decorate('util', (a, b) => a + b)\n  console.log(instance.util('that is ', ' awesome'))\n\n  fastify.register((instance, opts, next) => {\n    console.log(instance.util('that is ', ' awesome')) // this will not throw an error\n    next()\n  })\n\n  next()\n})\n\nfastify.register((instance, opts, next) => {\n  console.log(instance.util('that is ', ' awesome')) // this will throw an error\n\n  next()\n})\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Take home message: if you need that an utility is available in every part of your application, pay attention that is declared at the root scope of your application. Otherwise you can use ",(0,i.kt)("inlineCode",{parentName:"em"},"fastify-plugin")," utility as described ",(0,i.kt)("a",{parentName:"em",href:"#distribution"},"here"),".")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"decorate")," is not the unique api that you can use to extend the server functionalities, you can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"decorateRequest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"decorateReply"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"em"},"decorateRequest")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"decorateReply"),"? Why do we need them if we already have ",(0,i.kt)("inlineCode",{parentName:"em"},"decorate"),"?"),(0,i.kt)("br",null),"\nGood question, we added them to make Fastify more developer-friendly. Let's see an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('html', payload => {\n  return generateHtml(payload)\n})\n\nfastify.get('/html', (request, reply) => {\n  reply\n    .type('text/html')\n    .send(fastify.html({ hello: 'world' }))\n})\n")),(0,i.kt)("p",null,"It works, but it can be way better!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateReply('html', function (payload) {\n  this.type('text/html') // this is the 'Reply' object\n  this.send(generateHtml(payload))\n})\n\nfastify.get('/html', (request, reply) => {\n  reply.html({ hello: 'world' })\n})\n")),(0,i.kt)("p",null,"And in the same way you can do this for the ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('getHeader', (req, header) => {\n  return req.headers[header]\n})\n\nfastify.addHook('preHandler', (request, reply, done) => {\n  request.isHappy = fastify.getHeader(request.raw, 'happy')\n  done()\n})\n\nfastify.get('/happiness', (request, reply) => {\n  reply.send({ happy: request.isHappy })\n})\n")),(0,i.kt)("p",null,"Again, it works, but it can be way better!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateRequest('setHeader', function (header) {\n  this.isHappy = this.headers[header]\n})\n\nfastify.decorateRequest('isHappy', false) // this will be added to the Request object prototype, yay speed!\n\nfastify.addHook('preHandler', (request, reply, done) => {\n  request.setHeader('happy')\n  done()\n})\n\nfastify.get('/happiness', (request, reply) => {\n  reply.send({ happy: request.isHappy })\n})\n")),(0,i.kt)("p",null,"We've seen how to extend server functionality and how handle the encapsulation system, but what if you need to add a function that must be executed every time that the server \"",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Lifecycle"},"emits"),'" an event?'),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("a",{name:"hooks"}),(0,i.kt)("p",null,"You just built an amazing utility, but now you need to execute that for every request, this is what you will likely do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('util', (request, key, value) => { request.key = value })\n\nfastify.get('/plugin1', (request, reply) => {\n  fastify.util(request, 'timestamp', new Date())\n  reply.send(request)\n})\n\nfastify.get('/plugin2', (request, reply) => {\n  fastify.util(request, 'timestamp', new Date())\n  reply.send(request)\n})\n")),(0,i.kt)("p",null,"I think we all agree that this is terrible. Code repeat, awful readability and it cannot scale."),(0,i.kt)("p",null,"So what can you do to avoid this annoying issue? Yes, you are right, use an ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Hooks"},"hook"),"!",(0,i.kt)("br",null)),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('util', (request, key, value) => { request[key] = value })\n\nfastify.addHook('preHandler', (request, reply, done) => {\n  fastify.util(request, 'timestamp', new Date())\n  done()\n})\n\nfastify.get('/plugin1', (request, reply) => {\n  reply.send(request)\n})\n\nfastify.get('/plugin2', (request, reply) => {\n  reply.send(request)\n})\n")),(0,i.kt)("p",null,"Now for every request you will run your utility, it is obvious that you can register as many hooks as you need.",(0,i.kt)("br",null),"\nIt can happen that you want a hook that must be executed just for a subset of routes, how can you do that?  Yep, encapsulation!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register((instance, opts, next) => {\n  instance.decorate('util', (request, key, value) => { request[key] = value })\n\n  instance.addHook('preHandler', (request, reply, done) => {\n    instance.util(request, 'timestamp', new Date())\n    done()\n  })\n\n  instance.get('/plugin1', (request, reply) => {\n    reply.send(request)\n  })\n\n  next()\n})\n\nfastify.get('/plugin2', (request, reply) => {\n  reply.send(request)\n})\n")),(0,i.kt)("p",null,"Now your hook will run just for the first route!"),(0,i.kt)("p",null,"As you probably noticed at this time, ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reply")," are not the standard Nodejs ",(0,i.kt)("em",{parentName:"p"},"request")," and ",(0,i.kt)("em",{parentName:"p"},"response")," objects, but Fastify's objects.",(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"middlewares"},"Middlewares"),(0,i.kt)("a",{name:"middlewares"}),(0,i.kt)("p",null,"Fastify ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Middlewares"},"supports")," out of the box Express/Restify/Connect middlewares, this means that you can just drop-in your old code and it will work! ",(0,i.kt)("em",{parentName:"p"},"(faster, by the way)"),(0,i.kt)("br",null),"\nLet's say that you are arriving from Express, and you already have some Middleware that does exactly what you need, and you don't want to redo all the work.\nHow we can do that? Checkout our middlewares engine, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},"middie"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const yourMiddleware = require('your-middleware')\nfastify.use(yourMiddleware)\n")),(0,i.kt)("h2",{id:"how-to-handle-encapsulation-and-distribution"},"How to handle encapsulation and distribution"),(0,i.kt)("a",{name:"distribution"}),(0,i.kt)("p",null,"Perfect, now you know (almost) all the tools that you can use to extend Fastify. But probably there is something you noted when trying out your code.",(0,i.kt)("br",null),"\nHow can you distribute your code?"),(0,i.kt)("p",null,"The preferred way to distribute a utility is to wrap all your code inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),", in this way your plugin can support an asynchronous bootstrap ",(0,i.kt)("em",{parentName:"p"},"(since ",(0,i.kt)("inlineCode",{parentName:"em"},"decorate")," is a synchronous api)"),", in the case of a database connection for example."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Wait, what? Didn't you tell me that ",(0,i.kt)("inlineCode",{parentName:"em"},"register")," creates an encapsulation and that what I create inside there will not be available outside?"),(0,i.kt)("br",null),"\nYes, I said that. But what I didn't tell you, is that you can tell to Fastify to avoid this behavior, with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," module."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\nconst dbClient = require('db-client')\n\nfunction dbPlugin (fastify, opts, next) {\n  dbClient.connect(opts.url, (err, conn) => {\n    fastify.decorate('db', conn)\n    next()\n  })\n}\n\nmodule.exports = fp(dbPlugin)\n")),(0,i.kt)("p",null,"You can also tell to ",(0,i.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," to check the installed version of Fastify, in case of you need a specific api."),(0,i.kt)("h2",{id:"handle-errors"},"Handle errors"),(0,i.kt)("a",{name:"handle-errors"}),(0,i.kt)("p",null,"It can happen that one of your plugins could fail during the startup. Maybe you expect it and you have a custom logic that will be triggered in that case. How can you do this?\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," api is what you need. ",(0,i.kt)("inlineCode",{parentName:"p"},"after")," simply registers a callback that will be executed just after a register, and it can take up to three parameters.",(0,i.kt)("br",null),"\nThe callback changes based on the parameters your are giving:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If no parameter is given to the callback and there is an error, that error will be passed to the next error handler."),(0,i.kt)("li",{parentName:"ol"},"If one parameter is given to the callback, that parameter will be the error object."),(0,i.kt)("li",{parentName:"ol"},"If two parameters are given to the callback, the first will be the error object, the second will be the done callback."),(0,i.kt)("li",{parentName:"ol"},"If three parameters are given to the callback, the first will be the error object, the second will be the top level context unless you have specified both server and override, in that case the context will be what the override returns, and the third the done callback.")),(0,i.kt)("p",null,"Let's see how to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .register(require('./database-connector'))\n  .after(err => {\n    if (err) throw err\n  })\n")),(0,i.kt)("h2",{id:"lets-start"},"Let's start!"),(0,i.kt)("a",{name:"start"}),(0,i.kt)("p",null,"Awesome, now you know everything you need to know about Fastify and its plugin system to start building your first plugin, and please if you do, tell us! We will add it to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify#ecosystem"},(0,i.kt)("em",{parentName:"a"},"ecosystem"))," section of our documentation!"),(0,i.kt)("p",null,"If you want to see some real world example, checkout:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/point-of-view"},(0,i.kt)("inlineCode",{parentName:"a"},"point-of-view")),"\nTemplates rendering (",(0,i.kt)("em",{parentName:"li"},"ejs, pug, handlebars, marko"),") plugin support for Fastify."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-mongodb"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-mongodb")),"\nFastify MongoDB connection plugin, with this you can share the same MongoDb connection pool in every part of your server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-multipart"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-multipart")),"\nMultipart support for Fastify"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-helmet"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-helmet"))," Important security headers for Fastify")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Do you feel it's missing something here? Let us know! :)")))}c.isMDXComponent=!0}}]);