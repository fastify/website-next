"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[3247],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2758:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={title:"Middleware"},p=void 0,l={unversionedId:"Middleware",id:"version-v2/Middleware",isDocsHomePage:!1,title:"Middleware",description:"Fastify provides an asynchronous middleware engine out-of-the-box, which is compatible with Express and Restify middleware.",source:"@site/versioned_docs/version-v2/Middleware.md",sourceDirName:".",slug:"/Middleware",permalink:"/website-next/docs/v2/Middleware",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v2/Middleware.md",tags:[],version:"v2",frontMatter:{title:"Middleware"},sidebar:"version-v2/tutorialSidebar",previous:{title:"Logging",permalink:"/website-next/docs/v2/Logging"},next:{title:"Plugins Guide",permalink:"/website-next/docs/v2/Plugins-Guide"}},d=[{value:"Restrict middleware execution to a certain path(s)",id:"restrict-middleware-execution-to-a-certain-paths",children:[],level:4},{value:"Express middleware compatibility",id:"express-middleware-compatibility",children:[],level:4}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Fastify provides an asynchronous ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},"middleware engine")," out-of-the-box, which is compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," and ",(0,i.kt)("a",{parentName:"p",href:"http://restify.com/"},"Restify")," middleware."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For help with understanding when middleware is executed, take a look at the ",(0,i.kt)("a",{parentName:"em",href:"/website-next/docs/v2/Lifecycle"},"lifecycle")," page.")),(0,i.kt)("p",null,"Fastify middleware don't support the full syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"middleware(err, req, res, next)"),", because error handling is done inside Fastify.\nFurthermore, methods added by Express and Restify to the enhanced versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," are not supported in Fastify middlewares."),(0,i.kt)("p",null,"Also, if you are using middleware that bundles different, smaller middleware, such as ",(0,i.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},(0,i.kt)("em",{parentName:"a"},"helmet")),", we recommend using the single modules for better performance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fastify.use(require('cors')())\nfastify.use(require('dns-prefetch-control')())\nfastify.use(require('frameguard')())\nfastify.use(require('hide-powered-by')())\nfastify.use(require('hsts')())\nfastify.use(require('ienoopen')())\nfastify.use(require('x-xss-protection')())\n")),(0,i.kt)("p",null,"or, in the specific case of ",(0,i.kt)("em",{parentName:"p"},"helmet"),", you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-helmet"},(0,i.kt)("em",{parentName:"a"},"fastify-helmet"))," ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Plugins"},"plugin"),", which is an optimized helmet integration for fastify:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fastify = require('fastify')()\nconst helmet = require('fastify-helmet')\n\nfastify.register(helmet)\n")),(0,i.kt)("p",null,"Remember that middleware can be encapsulated, this means that you can decide where your middleware should run by using ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," as explained in the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Plugins-Guide"},"plugins guide"),"."),(0,i.kt)("p",null,"Fastify middleware also do not expose the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method or other methods specific to the Fastify ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Reply#reply"},"Reply")," instance. This is because Fastify wraps the incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," Node instances using the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Request#request"},"Request")," and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Reply#reply"},"Reply")," objects internally, but this is done after the middleware phase. If you need to create middleware, you have to use the Node ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," instances. Otherwise, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"preHandler")," hook which already has the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Request#request"},"Request")," and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Reply#reply"},"Reply")," Fastify instances. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v2/Hooks#hooks"},"Hooks"),"."),(0,i.kt)("h4",{id:"restrict-middleware-execution-to-a-certain-paths"},"Restrict middleware execution to a certain path(s)"),(0,i.kt)("a",{id:"restrict-usage"}),(0,i.kt)("p",null,"If you need to run a middleware only under certain path(s), just pass the path as first parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," and you are done!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that this does not support routes with parameters, (eg: ",(0,i.kt)("inlineCode",{parentName:"em"},"/user/:id/comments"),") and wildcards are not supported in multiple paths.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst serveStatic = require('serve-static')\n\n// Single path\nfastify.use('/css', serveStatic(path.join(__dirname, '/assets')))\n\n// Wildcard path\nfastify.use('/css/*', serveStatic(path.join(__dirname, '/assets')))\n\n// Multiple paths\nfastify.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))\n")),(0,i.kt)("h4",{id:"express-middleware-compatibility"},"Express middleware compatibility"),(0,i.kt)("a",{id:"express-middleware"}),(0,i.kt)("p",null,"Express modifies the prototype of the node core Request and Response objects heavily so Fastify cannot guarantee full middleware compatibility. Express specific functionality such as ",(0,i.kt)("inlineCode",{parentName:"p"},"res.sendFile()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"res.send()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"express.Router()")," instances will not work with Fastify. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors"},"cors")," is compatible while ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jaredhanson/passport"},"passport")," is not."))}u.isMDXComponent=!0}}]);