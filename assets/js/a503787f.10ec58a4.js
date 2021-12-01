"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[5625],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||f[d]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"Plugins"},l=void 0,p={unversionedId:"Plugins",id:"version-v2/Plugins",isDocsHomePage:!1,title:"Plugins",description:"Fastify allows the user to extend its functionalities with plugins.",source:"@site/versioned_docs/version-v2/Plugins.md",sourceDirName:".",slug:"/Plugins",permalink:"/website-next/docs/v2/Plugins",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Plugins.md",tags:[],version:"v2",frontMatter:{title:"Plugins"},sidebar:"version-v2/tutorialSidebar",previous:{title:"Plugins Guide",permalink:"/website-next/docs/v2/Plugins-Guide"},next:{title:"Recommendations",permalink:"/website-next/docs/v2/Recommendations"}},u=[{value:"Plugin Options",id:"plugin-options",children:[{value:"Route Prefixing option",id:"route-prefixing-option",children:[],level:4},{value:"Error handling",id:"error-handling",children:[],level:4},{value:"ESM support",id:"esm-support",children:[],level:4}],level:3},{value:"Create a plugin",id:"create-a-plugin",children:[],level:3},{value:"Handle the scope",id:"handle-the-scope",children:[],level:3}],f={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fastify allows the user to extend its functionalities with plugins.\nA plugin can be a set of routes, a server ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Decorators"},"decorator")," or whatever. The API that you will need to use one or more plugins, is ",(0,r.kt)("inlineCode",{parentName:"p"},"register"),"."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," creates a ",(0,r.kt)("em",{parentName:"p"},"new scope"),", this means that if you do some changes to the Fastify instance (via ",(0,r.kt)("inlineCode",{parentName:"p"},"decorate"),"), this change will not be reflected to the current context ancestors, but only to its sons. This feature allows us to achieve plugin ",(0,r.kt)("em",{parentName:"p"},"encapsulation")," and ",(0,r.kt)("em",{parentName:"p"},"inheritance"),", in this way we create a ",(0,r.kt)("em",{parentName:"p"},"direct acyclic graph")," (DAG) and we will not have issues caused by cross dependencies."),(0,r.kt)("p",null,"You already see in the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Getting-Started#register"},"getting started")," section how using this API is pretty straightforward."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fastify.register(plugin, [options])\n")),(0,r.kt)("h3",{id:"plugin-options"},"Plugin Options"),(0,r.kt)("a",{id:"plugin-options"}),(0,r.kt)("p",null,"The optional ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter for ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify.register")," supports a predefined set of options that Fastify itself will use, except when the plugin has been wrapped with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},"fastify-plugin"),". This options object will also be passed to the plugin upon invocation, regardless of whether or not the plugin has been wrapped. The currently supported list of Fastify specific options is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v2/Routes#custom-log-level"},(0,r.kt)("inlineCode",{parentName:"a"},"logLevel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v2/Routes#custom-log-serializer"},(0,r.kt)("inlineCode",{parentName:"a"},"logSerializers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/website-next/docs/v2/Plugins#route-prefixing-options"},(0,r.kt)("inlineCode",{parentName:"a"},"prefix")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: Those options will be ignored when used with fastify-plugin")),(0,r.kt)("p",null,"It is possible that Fastify will directly support other options in the future. Thus, to avoid collisions, a plugin should consider namespacing its options. For example, a plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," might be registered like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('fastify-foo'), {\n  prefix: '/foo',\n  foo: {\n    fooOption1: 'value',\n    fooOption2: 'value'\n  }\n})\n")),(0,r.kt)("p",null,"If collisions are not a concern, the plugin may simply accept the options object as-is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('fastify-foo'), {\n  prefix: '/foo',\n  fooOption1: 'value',\n  fooOption2: 'value'\n})\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," parameter can also be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," which will be evaluated at the time the plugin is registered while giving access to the fastify instance via the first positional argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nfastify.register(fp((fastify, opts, done) => {\n  fastify.decorate('foo_bar', { hello: 'world' })\n\n  done()\n}))\n\n// The opts argument of fastify-foo will be { hello: 'world' }\nfastify.register(require('fastify-foo'), parent => parent.foo_bar)\n")),(0,r.kt)("p",null,"The fastify instance passed on to the function is the latest state of the ",(0,r.kt)("strong",{parentName:"p"},"external fastify instance")," the plugin was declared on, allowing access to variables injected via ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"decorate"))," by preceding plugins according to the ",(0,r.kt)("strong",{parentName:"p"},"order of registration"),". This is useful in case a plugin depends on changes made to the Fastify instance by a preceding plugin f.e. utilizing an existing database connection to wrap around it."),(0,r.kt)("p",null,"Keep in mind that the fastify instance passed on to the function is the same as the one that will be passed in to the plugin, a copy of the external fastify instance rather than a reference. Any usage of the instance will behave the same as it would if called within the plugin's function i.e. if ",(0,r.kt)("inlineCode",{parentName:"p"},"decorate")," is called, the decorated variables will be available within the plugin's function unless it was wrapped with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-plugin")),"."),(0,r.kt)("h4",{id:"route-prefixing-option"},"Route Prefixing option"),(0,r.kt)("a",{id:"route-prefixing-option"}),(0,r.kt)("p",null,"If you pass an option with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value, Fastify will use it to prefix all the routes inside the register, for more info check ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Routes#route-prefixing"},"here"),"."),(0,r.kt)("p",null,"Be aware that if you use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," this option won't work."),(0,r.kt)("h4",{id:"error-handling"},"Error handling"),(0,r.kt)("a",{id:"error-handling"}),(0,r.kt)("p",null,"The error handling is done by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mcollina/avvio#error-handling"},"avvio"),"."),(0,r.kt)("p",null,"As general rule, it is highly recommended that you handle your errors in the next ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ready")," block, otherwise you will get them inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," callback."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('my-plugin'))\n\n// `after` will be executed once\n// the previous declared `register` has finished\nfastify.after(err => console.log(err))\n\n// `ready` will be executed once all the registers declared\n// have finished their execution\nfastify.ready(err => console.log(err))\n\n// `listen` is a special ready,\n// so it behaves in the same way\nfastify.listen(3000, (err, address) => {\n  if (err) console.log(err)\n})\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"async-await")," is supported only by ",(0,r.kt)("inlineCode",{parentName:"p"},"ready")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"listen"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fastify.register(require('my-plugin'))\n\nawait fastify.ready()\n\nawait fastify.listen(3000)\n")),(0,r.kt)("h4",{id:"esm-support"},"ESM support"),(0,r.kt)("a",{id:"esm-support"}),(0,r.kt)("p",null,"ESM is supported as well from ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/esm.html"},"Node.js ",(0,r.kt)("inlineCode",{parentName:"a"},"v13.3.0"))," and above!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// main.mjs\nimport Fastify from 'fastify'\nconst fastify = Fastify()\n\nfastify.register(import('./plugin.mjs'))\n\nfastify.listen(3000, console.log)\n\n\n// plugin.mjs\nasync function plugin (fastify, opts) {\n  fastify.get('/', async (req, reply) => {\n    return { hello: 'world' }\n  })\n}\n\nexport default plugin\n")),(0,r.kt)("h3",{id:"create-a-plugin"},"Create a plugin"),(0,r.kt)("a",{id:"create-plugin"}),(0,r.kt)("p",null,"Creating a plugin is very easy, you just need to create a function that takes three parameters, the ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify")," instance, an ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," object and the ",(0,r.kt)("inlineCode",{parentName:"p"},"done")," callback."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, opts, done) {\n  fastify.decorate('utility', () => {})\n\n  fastify.get('/', handler)\n\n  done()\n}\n")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," inside another ",(0,r.kt)("inlineCode",{parentName:"p"},"register"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (fastify, opts, done) {\n  fastify.decorate('utility', () => {})\n\n  fastify.get('/', handler)\n\n  fastify.register(require('./other-plugin'))\n\n  done()\n}\n")),(0,r.kt)("p",null,"Sometimes, you will need to know when the server is about to close, for example because you must close a connection to a database. To know when this is going to happen, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Hooks#on-close"},(0,r.kt)("inlineCode",{parentName:"a"},"'onClose'"))," hook."),(0,r.kt)("p",null,"Do not forget that ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," will always create a new Fastify scope, if you don't need that, read the following section."),(0,r.kt)("h3",{id:"handle-the-scope"},"Handle the scope"),(0,r.kt)("a",{id:"handle-scope"}),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," only for extending the functionality of the server with  ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Decorators"},(0,r.kt)("inlineCode",{parentName:"a"},"decorate")),", it is your responsibility to tell Fastify to not create a new scope, otherwise your changes will not be accessible by the user in the upper scope."),(0,r.kt)("p",null,"You have two ways to tell Fastify to avoid the creation of a new context:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," module"),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"'skip-override'")," hidden property")),(0,r.kt)("p",null,"We recommend to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," module, because it solves this problem for you, and you can pass a version range of Fastify as a parameter that your plugin will support."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fp = require('fastify-plugin')\n\nmodule.exports = fp(function (fastify, opts, done) {\n  fastify.decorate('utility', () => {})\n  done()\n}, '0.x')\n")),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-plugin"))," documentation to know more about how use this module."),(0,r.kt)("p",null,"If you don't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify-plugin")," module, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"'skip-override'")," hidden property, but we do not recommend it. If in the future the Fastify API changes it will be a your responsibility update the module, while if you use ",(0,r.kt)("inlineCode",{parentName:"p"},"fastify-plugin"),", you can be sure about backwards compatibility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function yourPlugin (fastify, opts, done) {\n  fastify.decorate('utility', () => {})\n  done()\n}\nyourPlugin[Symbol.for('skip-override')] = true\nmodule.exports = yourPlugin\n")))}c.isMDXComponent=!0}}]);