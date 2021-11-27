"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[7977],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Content-Type Parser",sidebar_label:"Content-Type Parser",hide_title:!1},l=void 0,p={unversionedId:"ContentTypeParser",id:"version-v1/ContentTypeParser",isDocsHomePage:!1,title:"Content-Type Parser",description:"Natively, Fastify only supports the 'application/json' content type. The default charset is utf-8. If you need to support different content types, you can use the addContentTypeParser API. The default JSON parser can be changed.",source:"@site/versioned_docs/version-v1/ContentTypeParser.md",sourceDirName:".",slug:"/ContentTypeParser",permalink:"/website-next/docs/v1/ContentTypeParser",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/ContentTypeParser.md",tags:[],version:"v1",frontMatter:{title:"Content-Type Parser",sidebar_label:"Content-Type Parser",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Benchmarking",permalink:"/website-next/docs/v1/Benchmarking"},next:{title:"Decorators",permalink:"/website-next/docs/v1/Decorators"}},c=[{value:"Usage",id:"usage",children:[{value:"Body Parser",id:"body-parser",children:[{value:"Custom Parser Options",id:"custom-parser-options",children:[],level:5}],level:4},{value:"Catch All",id:"catch-all",children:[],level:4}],level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Natively, Fastify only supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"'application/json'")," content type. The default charset is ",(0,o.kt)("inlineCode",{parentName:"p"},"utf-8"),". If you need to support different content types, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," API. ",(0,o.kt)("em",{parentName:"p"},"The default JSON parser can be changed.")),(0,o.kt)("p",null,"As with the other APIs, ",(0,o.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," is encapsulated in the scope in which it is declared. This means that if you declare it in the root scope it will be available everywhere, while if you declare it inside a register it will be available only in that scope and its children."),(0,o.kt)("p",null,"Fastify adds automatically the parsed request payload to the ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Request"},"Fastify request")," object, you can reach it with ",(0,o.kt)("inlineCode",{parentName:"p"},"request.body"),"."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/jsoff', function (req, done) {\n  jsoffParser(req, function (err, body) {\n    done(err, body)\n  })\n})\n// handle multiple content types as the same\nfastify.addContentTypeParser(['text/xml', 'application/xml'], function (req, done) {\n  xmlParser(req, function (err, body) {\n    done(err, body)\n  })\n})\n// async also supported in Node versions >= 8.0.0\nfastify.addContentTypeParser('application/jsoff', async function (req) {\n  var res = await new Promise((resolve, reject) => resolve(req))\n  return res\n})\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"hasContentTypeParser")," API to find if a specific content type parser already exists."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"if (!fastify.hasContentTypeParser('application/jsoff')){\n  fastify.addContentTypeParser('application/jsoff', function (req, done) {\n    //code to parse request body /payload for given content type\n  })\n}\n")),(0,o.kt)("h4",{id:"body-parser"},"Body Parser"),(0,o.kt)("p",null,"You can parse the body of the request in two ways. The first one is shown above: you add a custom content type parser and handle the request stream. In the second one you should pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"parseAs")," option to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addContentTypeParser")," API, where you declare how you want to get the body, it could be ",(0,o.kt)("inlineCode",{parentName:"p"},"'string'")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'buffer'"),". If you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"parseAs")," option Fastify will internally handle the stream and perform some checks, such as the ",(0,o.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Server#factory-body-limit"},"maximum size")," of the body and the content length. If the limit is exceeded the custom parser will not be invoked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {\n  try {\n    var json = JSON.parse(body)\n    done(null, json)\n  } catch (err) {\n    err.statusCode = 400\n    done(err, undefined)\n  }\n})\n")),(0,o.kt)("p",null,"As you can see, now the function signature is ",(0,o.kt)("inlineCode",{parentName:"p"},"(req, body, done)")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"(req, done)"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/master/examples/parser.js"},(0,o.kt)("inlineCode",{parentName:"a"},"example/parser.js"))," for an example."),(0,o.kt)("h5",{id:"custom-parser-options"},"Custom Parser Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"parseAs")," (string): Either ",(0,o.kt)("inlineCode",{parentName:"li"},"'string'")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"'buffer'")," to designate how the incoming data should be collected. Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"'buffer'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bodyLimit")," (number): The maximum payload size, in bytes, that the custom parser will accept. Defaults to the global body limit passed to the ",(0,o.kt)("a",{parentName:"li",href:"/website-next/docs/v1/Server#bodylimit"},(0,o.kt)("inlineCode",{parentName:"a"},"Fastify factory function")),".")),(0,o.kt)("h4",{id:"catch-all"},"Catch All"),(0,o.kt)("p",null,"There are some cases where you need to catch all requests regardless of their content type. With Fastify, you just need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"'*'")," content type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('*', function (req, done) {\n  var data = ''\n  req.on('data', chunk => { data += chunk })\n  req.on('end', () => {\n    done(null, data)\n  })\n})\n")),(0,o.kt)("p",null,"In this way, all of the requests that do not have a corresponding content type parser will be handled by the specified function."),(0,o.kt)("p",null,"This is also useful for piping the request stream. You can define a content parser like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"fastify.addContentTypeParser('*', function (req, done) {\n  done()\n})\n")),(0,o.kt)("p",null,"and then access the core HTTP request directly for piping it where you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/hello', (request, reply) => {\n  reply.send(request.req)\n})\n")),(0,o.kt)("p",null,"Here is a complete example that logs incoming ",(0,o.kt)("a",{parentName:"p",href:"http://jsonlines.org/"},"json line")," objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const split2 = require('split2')\nconst pump = require('pump')\n\nfastify.addContentTypeParser('*', (req, done) => {\n  done(null, pump(req, split2(JSON.parse)))\n})\n\nfastify.route({\n  method: 'POST',\n  url: '/api/log/jsons',\n  handler: (req, res) => {\n    req.body.on('data', d => console.log(d)) // log every incoming object\n  }\n})\n")),(0,o.kt)("p",null,"For piping file uploads you may want to checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-multipart"},"this plugin"),"."))}u.isMDXComponent=!0}}]);