"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[1104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7698:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Decorators",sidebar_label:"Decorators",hide_title:!1},l=void 0,c={unversionedId:"Decorators",id:"Decorators",isDocsHomePage:!1,title:"Decorators",description:"The decorators API allows customization of the core Fastify objects, such as",source:"@site/docs/Decorators.md",sourceDirName:".",slug:"/Decorators",permalink:"/website-next/docs/v3/Decorators",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Decorators.md",tags:[],version:"current",frontMatter:{title:"Decorators",sidebar_label:"Decorators",hide_title:!1},sidebar:"sidebar",previous:{title:"Content-Type Parser",permalink:"/website-next/docs/v3/Content-Type-Parser"},next:{title:"Ecosystem",permalink:"/website-next/docs/v3/Ecosystem"}},p=[{value:"Usage",id:"usage",children:[{value:"<code>decorate(name, value, [dependencies])</code>",id:"decoratename-value-dependencies",children:[],level:4},{value:"<code>decorateReply(name, value, [dependencies])</code>",id:"decoratereplyname-value-dependencies",children:[],level:4},{value:"<code>decorateRequest(name, value, [dependencies])</code>",id:"decoraterequestname-value-dependencies",children:[],level:4},{value:"<code>hasDecorator(name)</code>",id:"hasdecoratorname",children:[],level:4},{value:"hasRequestDecorator",id:"hasrequestdecorator",children:[],level:4},{value:"hasReplyDecorator",id:"hasreplydecorator",children:[],level:4}],level:3},{value:"Decorators and Encapsulation",id:"decorators-and-encapsulation",children:[],level:3},{value:"Getters and Setters",id:"getters-and-setters",children:[],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The decorators API allows customization of the core Fastify objects, such as\nthe server instance itself and any request and reply objects used during the\nHTTP request lifecycle. The decorators API can be used to attach any type of\nproperty to the core objects, e.g. functions, plain objects, or native types."),(0,o.kt)("p",null,"This API is ",(0,o.kt)("em",{parentName:"p"},"synchronous"),". Attempting to define a decoration\nasynchronously could result in the Fastify instance booting before the\ndecoration completes its initialization. To avoid this issue, and register an\nasynchronous decoration, the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," API, in combination with\n",(0,o.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),", must be used instead. To learn more, see the\n",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins"},"Plugins")," documentation."),(0,o.kt)("p",null,"Decorating core objects with this API allows the underlying JavaScript engine\nto optimize the handling of server, request, and reply objects. This is\naccomplished by defining the shape of all such object instances before they are\ninstantiated and used. As an example, the following is not recommended because\nit will change the shape of objects during their lifecycle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Bad example! Continue reading.\n\n// Attach a user property to the incoming request before the request\n// handler is invoked.\nfastify.addHook('preHandler', function (req, reply, done) {\n  req.user = 'Bob Dylan'\n  done()\n})\n\n// Use the attached user property in the request handler.\nfastify.get('/', function (req, reply) {\n  reply.send(`Hello, ${req.user}`)\n})\n")),(0,o.kt)("p",null,"Since the above example mutates the request object after it has already\nbeen instantiated, the JavaScript engine must deoptimize access to the request\nobject. By using the decoration API this deoptimization is avoided:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Decorate request with a 'user' property\nfastify.decorateRequest('user', '')\n\n// Update our property\nfastify.addHook('preHandler', (req, reply, done) => {\n  req.user = 'Bob Dylan'\n  done()\n})\n// And finally access it\nfastify.get('/', (req, reply) => {\n  reply.send(`Hello, ${req.user}!`)\n})\n")),(0,o.kt)("p",null,"Note that it is important to keep the initial shape of a decorated field as close as possible to the value intended to be set dynamically in the future. Initialize a decorator as a ",(0,o.kt)("inlineCode",{parentName:"p"},"''")," if the intended value is a string, and as ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," if it will be an object or a function."),(0,o.kt)("p",null,"Remember this example works only with value types as reference types will be shared amongst all requests.\nSee ",(0,o.kt)("a",{parentName:"p",href:"#decorate-request"},"decorateRequest"),"."),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://mathiasbynens.be/notes/shapes-ics"},"JavaScript engine fundamentals: Shapes and Inline Caches"),"\nfor more information on this topic."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("a",{name:"usage"}),(0,o.kt)("h4",{id:"decoratename-value-dependencies"},(0,o.kt)("inlineCode",{parentName:"h4"},"decorate(name, value, [dependencies])")),(0,o.kt)("a",{name:"decorate"}),(0,o.kt)("p",null,"This method is used to customize the Fastify ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Server"},"server")," instance."),(0,o.kt)("p",null,"For example, to attach a new method to the server instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('utility', function () {\n  // Something very useful\n})\n")),(0,o.kt)("p",null,"As mentioned above, non-function values can be attached:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('conf', {\n  db: 'some.db',\n  port: 3000\n})\n")),(0,o.kt)("p",null,"To access decorated properties, use the name provided to the\ndecoration API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.utility()\n\nconsole.log(fastify.conf.db)\n")),(0,o.kt)("p",null,"The decorated ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reference/Server"},"Fastify server")," is bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," in route ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Routes"},"route")," handlers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('db', new DbConnection())\n\nfastify.get('/', async function (request, reply) {\n  reply({hello: await this.db.query('world')})\n})\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies"),' parameter is an optional list of decorators that the\ndecorator being defined relies upon. This list is simply a list of string names\nof other decorators. In the following example, the "utility" decorator depends\nupon "greet" and "log" decorators:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('utility', fn, ['greet', 'log'])\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"FastifyInstance"),"."),(0,o.kt)("p",null,"If a dependency is not satisfied, the ",(0,o.kt)("inlineCode",{parentName:"p"},"decorate")," method will throw an exception.\nThe dependency check is performed before the server instance is booted. Thus,\nit cannot occur during runtime."),(0,o.kt)("h4",{id:"decoratereplyname-value-dependencies"},(0,o.kt)("inlineCode",{parentName:"h4"},"decorateReply(name, value, [dependencies])")),(0,o.kt)("a",{name:"decorate-reply"}),(0,o.kt)("p",null,"As the name suggests, this API is used to add new methods/properties to the core\n",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateReply('utility', function () {\n  // Something very useful\n})\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify\n",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," instance."),(0,o.kt)("p",null,"Note: using ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateReply")," will emit a warning if used with a reference type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nfastify.decorateReply('foo', { bar: 'fizz'})\n")),(0,o.kt)("p",null,"In this example, the reference of the object is shared with all the requests: ",(0,o.kt)("strong",{parentName:"p"},"any\nmutation will impact all requests, potentially creating security vulnerabilities or memory leaks"),".\nTo achieve proper encapsulation across requests configure a new value for each incoming request\nin the ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Hooks#onrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"'onRequest'")," hook"),". Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nasync function myPlugin (app) {\n  app.decorateRequest('foo', null)\n  app.addHook('onRequest', async (req, reply) => {\n    req.foo = { bar: 42 }\n  })\n}\n\nmodule.exports = fp(myPlugin)\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#decorate"},(0,o.kt)("inlineCode",{parentName:"a"},"decorate"))," for information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," parameter."),(0,o.kt)("h4",{id:"decoraterequestname-value-dependencies"},(0,o.kt)("inlineCode",{parentName:"h4"},"decorateRequest(name, value, [dependencies])")),(0,o.kt)("a",{name:"decorate-request"}),(0,o.kt)("p",null,"As above with ",(0,o.kt)("a",{parentName:"p",href:"#decorate-reply"},(0,o.kt)("inlineCode",{parentName:"a"},"decorateReply")),", this API is used add new\nmethods/properties to the core ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateRequest('utility', function () {\n  // something very useful\n})\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify\n",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," instance."),(0,o.kt)("p",null,"Note: using ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateRequest")," will emit a warning if used with a reference type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Don't do this\nfastify.decorateRequest('foo', { bar: 'fizz'})\n")),(0,o.kt)("p",null,"In this example, the reference of the object is shared with all the requests: ",(0,o.kt)("strong",{parentName:"p"},"any\nmutation will impact all requests, potentially creating security vulnerabilities or memory leaks"),"."),(0,o.kt)("p",null,"To achieve proper encapsulation across requests configure a new value for each incoming request\nin the ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Hooks#onrequest"},(0,o.kt)("inlineCode",{parentName:"a"},"'onRequest'")," hook"),". Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nasync function myPlugin (app) {\n  app.decorateRequest('foo', null)\n  app.addHook('onRequest', async (req, reply) => {\n    req.foo = { bar: 42 }\n  })\n}\n\nmodule.exports = fp(myPlugin)\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#decorate"},(0,o.kt)("inlineCode",{parentName:"a"},"decorate"))," for information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," parameter."),(0,o.kt)("h4",{id:"hasdecoratorname"},(0,o.kt)("inlineCode",{parentName:"h4"},"hasDecorator(name)")),(0,o.kt)("a",{name:"has-decorator"}),(0,o.kt)("p",null,"Used to check for the existence of a server instance decoration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasDecorator('utility')\n")),(0,o.kt)("h4",{id:"hasrequestdecorator"},"hasRequestDecorator"),(0,o.kt)("a",{name:"has-request-decorator"}),(0,o.kt)("p",null,"Used to check for the existence of a Request decoration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasRequestDecorator('utility')\n")),(0,o.kt)("h4",{id:"hasreplydecorator"},"hasReplyDecorator"),(0,o.kt)("a",{name:"has-reply-decorator"}),(0,o.kt)("p",null,"Used to check for the existence of a Reply decoration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasReplyDecorator('utility')\n")),(0,o.kt)("h3",{id:"decorators-and-encapsulation"},"Decorators and Encapsulation"),(0,o.kt)("a",{name:"decorators-encapsulation"}),(0,o.kt)("p",null,"Defining a decorator (using ",(0,o.kt)("inlineCode",{parentName:"p"},"decorate"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateRequest"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateReply"),")\nwith the same name more than once in the same ",(0,o.kt)("strong",{parentName:"p"},"encapsulated")," context will\nthrow an exception."),(0,o.kt)("p",null,"As an example, the following will throw:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing view rendering engine\n})\n\nserver.get('/', (req, reply) => {\n  reply.view('/index.html', { hello: 'world' })\n})\n\n// Somewhere else in our codebase, we define another\n// view decorator. This throws.\nserver.decorateReply('view', function (template, args) {\n  // Another rendering engine\n})\n\nserver.listen(3000)\n")),(0,o.kt)("p",null,"But this will not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing view rendering engine.\n})\n\nserver.register(async function (server, opts) {\n  // We add a view decorator to the current encapsulated\n  // plugin. This will not throw as outside of this encapsulated\n  // plugin view is the old one, while inside it is the new one.\n  server.decorateReply('view', function (template, args) {\n    // Another rendering engine\n  })\n\n  server.get('/', (req, reply) => {\n    reply.view('/index.page', { hello: 'world' })\n  })\n}, { prefix: '/bar' })\n\nserver.listen(3000)\n")),(0,o.kt)("h3",{id:"getters-and-setters"},"Getters and Setters"),(0,o.kt)("a",{name:"getters-setters"}),(0,o.kt)("p",null,'Decorators accept special "getter/setter" objects. These objects have functions\nnamed ',(0,o.kt)("inlineCode",{parentName:"p"},"getter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setter")," (though the ",(0,o.kt)("inlineCode",{parentName:"p"},"setter")," function is optional). This\nallows defining properties via decorators, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('foo', {\n  getter () {\n    return 'a getter'\n  }\n})\n")),(0,o.kt)("p",null,"Will define the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," property on the Fastify instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(fastify.foo) // 'a getter'\n")))}u.isMDXComponent=!0}}]);