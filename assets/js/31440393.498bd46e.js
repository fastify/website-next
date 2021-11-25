"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[9360],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?a.createElement(m,s(s({ref:t},d),{},{components:r})):a.createElement(m,s({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3998:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),s=["components"],o={title:"Middleware",sidebar_label:"Middleware",hide_title:!1},p=void 0,l={unversionedId:"Middleware",id:"Middleware",isDocsHomePage:!1,title:"Middleware",description:"Starting with Fastify v3.0.0, middleware is not supported out of the box and requires an external plugin such as fastify-express or middie.",source:"@site/docs/Middleware.md",sourceDirName:".",slug:"/Middleware",permalink:"/website-next/docs/v3/Middleware",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/Middleware.md",tags:[],version:"current",frontMatter:{title:"Middleware",sidebar_label:"Middleware",hide_title:!1},sidebar:"sidebar",previous:{title:"Logging",permalink:"/website-next/docs/v3/Logging"},next:{title:"V3 Migration Guide",permalink:"/website-next/docs/v3/Migration-Guide-V3"}},d=[{value:"Alternatives",id:"alternatives",children:[],level:3}],u={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starting with Fastify v3.0.0, middleware is not supported out of the box and requires an external plugin such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-express"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,i.kt)("inlineCode",{parentName:"a"},"middie")),"."),(0,i.kt)("p",null,"An example of registering the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-express"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-express"))," plugin to ",(0,i.kt)("inlineCode",{parentName:"p"},"use")," Express middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register(require('fastify-express'))\nfastify.use(require('cors')())\nfastify.use(require('dns-prefetch-control')())\nfastify.use(require('frameguard')())\nfastify.use(require('hsts')())\nfastify.use(require('ienoopen')())\nfastify.use(require('x-xss-protection')())\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/middie"},(0,i.kt)("inlineCode",{parentName:"a"},"middie")),", which provides support for simple Express-style middleware but with improved performance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await fastify.register(require('middie'))\nfastify.use(require('cors')())\n")),(0,i.kt)("p",null,"Remember that middleware can be encapsulated; this means that you can decide where your middleware should run by using ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," as explained in the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins-Guide"},"plugins guide"),"."),(0,i.kt)("p",null,"Fastify middleware do not expose the ",(0,i.kt)("inlineCode",{parentName:"p"},"send")," method or other methods specific to the Fastify ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reply#reply"},"Reply")," instance. This is because Fastify wraps the incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," Node instances using the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Request#request"},"Request")," and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reply#reply"},"Reply")," objects internally, but this is done after the middleware phase. If you need to create middleware, you have to use the Node ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"res")," instances. Otherwise, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"preHandler")," hook that already has the ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Request#request"},"Request")," and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Reply#reply"},"Reply")," Fastify instances. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Hooks#hooks"},"Hooks"),"."),(0,i.kt)("a",{name:"restrict-usage"}),"#### Restrict middleware execution to certain paths If you need to only run middleware under certain paths, just pass the path as the first parameter to `use` and you are done!",(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that this does not support routes with parameters, (e.g. ",(0,i.kt)("inlineCode",{parentName:"em"},"/user/:id/comments"),") and wildcards are not supported in multiple paths.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path')\nconst serveStatic = require('serve-static')\n\n// Single path\nfastify.use('/css', serveStatic(path.join(__dirname, '/assets')))\n\n// Wildcard path\nfastify.use('/css/(.*)', serveStatic(path.join(__dirname, '/assets')))\n\n// Multiple paths\nfastify.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))\n")),(0,i.kt)("h3",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"Fastify offers some alternatives to the most commonly used middleware, such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-helmet"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-helmet"))," in case of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helmetjs/helmet"},(0,i.kt)("inlineCode",{parentName:"a"},"helmet")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-cors"))," for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors"},(0,i.kt)("inlineCode",{parentName:"a"},"cors")),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-static"},(0,i.kt)("inlineCode",{parentName:"a"},"fastify-static"))," for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/serve-static"},(0,i.kt)("inlineCode",{parentName:"a"},"serve-static")),"."))}c.isMDXComponent=!0}}]);