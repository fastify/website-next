"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[3903],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Decorators"},l=void 0,c={unversionedId:"Decorators",id:"version-v1/Decorators",isDocsHomePage:!1,title:"Decorators",description:"If you need to add functionality to the Fastify instance, the decorate API is what you need.",source:"@site/versioned_docs/version-v1/Decorators.md",sourceDirName:".",slug:"/Decorators",permalink:"/website-next/docs/v1/Decorators",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Decorators.md",tags:[],version:"v1",frontMatter:{title:"Decorators"},sidebar:"version-v1/sidebar",previous:{title:"Content-Type Parser",permalink:"/website-next/docs/v1/ContentTypeParser"},next:{title:"Ecosystem",permalink:"/website-next/docs/v1/Ecosystem"}},p=[{value:"Usage",id:"usage",children:[{value:"Decorators and encapsulation",id:"decorators-and-encapsulation",children:[],level:4},{value:"Getters and Setters",id:"getters-and-setters",children:[],level:4},{value:"Usage Notes",id:"usage-notes",children:[],level:4},{value:"Sync and Async",id:"sync-and-async",children:[],level:4},{value:"Dependencies",id:"dependencies",children:[],level:4},{value:"hasDecorator",id:"hasdecorator",children:[],level:4},{value:"hasRequestDecorator",id:"hasrequestdecorator",children:[],level:4},{value:"hasReplyDecorator",id:"hasreplydecorator",children:[],level:4}],level:3}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you need to add functionality to the Fastify instance, the ",(0,o.kt)("inlineCode",{parentName:"p"},"decorate")," API is what you need."),(0,o.kt)("p",null,"The API allows you to add new properties to the Fastify instance. A value is not restricted to a function and could also be an object or a string, for example."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("a",{id:"usage"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"decorate")),(0,o.kt)("a",{id:"decorate"}),(0,o.kt)("p",null,"Just call the ",(0,o.kt)("inlineCode",{parentName:"p"},"decorate")," API and pass the name of the new property and its value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('utility', () => {\n  // something very useful\n})\n")),(0,o.kt)("p",null,"As said above, you can also decorate the instance with non-function values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('conf', {\n  db: 'some.db',\n  port: 3000\n})\n")),(0,o.kt)("p",null,"Once you decorate the instance, you can access the value by using the name you passed as a parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.utility()\n\nconsole.log(fastify.conf.db)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"decorateReply")),(0,o.kt)("a",{id:"decorate-reply"}),(0,o.kt)("p",null,"As the name suggests, this API is needed if you want to add new methods to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," core object. Just call the ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateReply")," API and pass the name of the new property and its value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateReply('utility', function () {\n  // something very useful\n})\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify ",(0,o.kt)("inlineCode",{parentName:"p"},"reply")," instance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"decorateRequest")),(0,o.kt)("a",{id:"decorate-request"}),(0,o.kt)("p",null,"As above, this API is needed if you want to add new methods to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," core object. Just call the ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateRequest")," API and pass the name of the new property and its value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorateRequest('utility', function () {\n  // something very useful\n})\n")),(0,o.kt)("p",null,"Note: using an arrow function will break the binding of ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," to the Fastify ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," instance."),(0,o.kt)("h4",{id:"decorators-and-encapsulation"},"Decorators and encapsulation"),(0,o.kt)("a",{id:"decorators-encapsulation"}),(0,o.kt)("p",null,"If you define a decorator (using decorate, decorateRequest or decorateReply) with the same name more than once in the same ",(0,o.kt)("strong",{parentName:"p"},"encapsulated")," plugin, fastify will throw an exception."),(0,o.kt)("p",null,"As an example, the following will throw:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing vew rendering engine.\n})\n\nserver.get('/', (req, reply) => {\n  reply.view('/index.html', { hello: 'world' })\n})\n\n// Somewhere else in our codebase, we define another\n// view decorator. This throws.\nserver.decorateReply('view', function (template, args) {\n  // another rendering engine\n})\n\nserver.listen(3000)\n")),(0,o.kt)("p",null,"But this will not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const server = require('fastify')()\n\nserver.decorateReply('view', function (template, args) {\n  // Amazing vew rendering engine.\n})\n\nserver.register(async function (server, opts) {\n  // We add a view decorator to the current encapsulated\n  // plugin. This will not throw as outside of this encapsulated\n  // plugin view is the old one, while inside it is the new one.\n  server.decorateReply('view', function (template, args) {\n    // another rendering engine\n  })\n\n  server.get('/', (req, reply) => {\n    reply.view('/index.page', { hello: 'world' })\n  })\n}, { prefix: '/bar' })\n\nserver.listen(3000)\n")),(0,o.kt)("h4",{id:"getters-and-setters"},"Getters and Setters"),(0,o.kt)("a",{id:"getters-setters"}),(0,o.kt)("p",null,'Decorators accept special "getter/setter" objects. These objects have functions named ',(0,o.kt)("inlineCode",{parentName:"p"},"getter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setter")," (though, the ",(0,o.kt)("inlineCode",{parentName:"p"},"setter")," function is optional). This allows defining properties via decorators. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('foo', {\n  getter () {\n    return 'a getter'\n  }\n})\n")),(0,o.kt)("p",null,"Will define the ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," property on the ",(0,o.kt)("em",{parentName:"p"},"Fastify")," instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(fastify.foo) // 'a getter'\n")),(0,o.kt)("h4",{id:"usage-notes"},"Usage Notes"),(0,o.kt)("a",{id:"usage_notes"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decorateReply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateRequest")," are used to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," constructors respectively by adding methods or properties. To update these properties you should directly access the desired property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," object."),(0,o.kt)("p",null,"As an example let's add a user property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Decorate request with a 'user' property\nfastify.decorateRequest('user', '')\n\n// Update our property\nfastify.addHook('preHandler', (req, reply, next) => {\n  req.user = 'Bob Dylan'\n  next()\n})\n// And finally access it\nfastify.get('/', (req, reply) => {\n  reply.send(`Hello ${req.user}!`)\n})\n")),(0,o.kt)("p",null,"Note: The usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateReply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"decorateRequest")," is optional in this case but will allow Fastify to optimize for performance."),(0,o.kt)("h4",{id:"sync-and-async"},"Sync and Async"),(0,o.kt)("a",{id:"sync-async"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decorate")," is a ",(0,o.kt)("em",{parentName:"p"},"synchronous")," API. If you need to add a decorator that has an ",(0,o.kt)("em",{parentName:"p"},"asynchronous")," bootstrap, Fastify could boot up before your decorator is ready. To avoid this issue, you must use the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," API in combination with ",(0,o.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),". To learn more, check out the ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Plugins"},"Plugins")," documentation as well."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies"),(0,o.kt)("a",{id:"dependencies"}),(0,o.kt)("p",null,"If your decorator depends on another decorator, you can easily declare the other decorator as a dependency. You just need to add an array of strings (representing the names of the decorators on which yours depends) as the third parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.decorate('utility', fn, ['greet', 'log'])\n")),(0,o.kt)("p",null,"If a dependency is not satisfied, ",(0,o.kt)("inlineCode",{parentName:"p"},"decorate")," will throw an exception, but don't worry: the dependency check is executed before the server boots up, so it won't ever happen at runtime."),(0,o.kt)("h4",{id:"hasdecorator"},"hasDecorator"),(0,o.kt)("a",{id:"has-decorator"}),(0,o.kt)("p",null,"You can check for the presence of a decorator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hasDecorator")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasDecorator('utility')\n")),(0,o.kt)("h4",{id:"hasrequestdecorator"},"hasRequestDecorator"),(0,o.kt)("a",{id:"has-request-decorator"}),(0,o.kt)("p",null,"You can check for the presence of a Request decorator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hasRequestDecorator")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasRequestDecorator('utility')\n")),(0,o.kt)("h4",{id:"hasreplydecorator"},"hasReplyDecorator"),(0,o.kt)("a",{id:"has-reply-decorator"}),(0,o.kt)("p",null,"You can check for the presence of a Reply decorator with the ",(0,o.kt)("inlineCode",{parentName:"p"},"hasReplyDecorator")," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.hasReplyDecorator('utility')\n")))}u.isMDXComponent=!0}}]);