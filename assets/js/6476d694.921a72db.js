"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[6623],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7685:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Encapsulation",sidebar_label:"Encapsulation",hide_title:!1},l=void 0,c={unversionedId:"Reference/Encapsulation",id:"Reference/Encapsulation",isDocsHomePage:!1,title:"Encapsulation",description:"Encapsulation",source:"@site/docs/02-Reference/Encapsulation.md",sourceDirName:"02-Reference",slug:"/Reference/Encapsulation",permalink:"/website-next/docs/v3/Reference/Encapsulation",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/02-Reference/Encapsulation.md",tags:[],version:"current",frontMatter:{title:"Encapsulation",sidebar_label:"Encapsulation",hide_title:!1},sidebar:"sidebar",previous:{title:"Guides",permalink:"/website-next/docs/v3/Guides/index"},next:{title:"Server",permalink:"/website-next/docs/v3/Reference/Server"}},p=[{value:"Encapsulation",id:"encapsulation",children:[],level:2},{value:"Sharing Between Contexts",id:"sharing-between-contexts",children:[],level:2}],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"encapsulation"},"Encapsulation"),(0,i.kt)("p",null,'A fundamental feature of Fastify is the "encapsulation context." The\nencapsulation context governs which ',(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Decorators"},"decorators"),", registered\n",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Hooks"},"hooks"),", and ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins"},"plugins")," are available to\n",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Routes"},"routes"),". A visual representation of the encapsulation context\nis shown in the following figure:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 1",src:n(708).Z})),(0,i.kt)("p",null,"In the above figure, there are several entities:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("em",{parentName:"li"},"root context")),(0,i.kt)("li",{parentName:"ol"},"Three ",(0,i.kt)("em",{parentName:"li"},"root plugins")),(0,i.kt)("li",{parentName:"ol"},"Two ",(0,i.kt)("em",{parentName:"li"},"child contexts")," where each ",(0,i.kt)("em",{parentName:"li"},"child context")," has",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Two ",(0,i.kt)("em",{parentName:"li"},"child plugins")),(0,i.kt)("li",{parentName:"ul"},"One ",(0,i.kt)("em",{parentName:"li"},"grandchild context")," where each ",(0,i.kt)("em",{parentName:"li"},"grandchild context")," has",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Three ",(0,i.kt)("em",{parentName:"li"},"child plugins"))))))),(0,i.kt)("p",null,"Every ",(0,i.kt)("em",{parentName:"p"},"child context")," and ",(0,i.kt)("em",{parentName:"p"},"grandchild context")," has access to the ",(0,i.kt)("em",{parentName:"p"},"root plugins"),".\nWithin each ",(0,i.kt)("em",{parentName:"p"},"child context"),", the ",(0,i.kt)("em",{parentName:"p"},"grandchild contexts")," have access to the\n",(0,i.kt)("em",{parentName:"p"},"child plugins")," registered within the containing ",(0,i.kt)("em",{parentName:"p"},"child context"),", but the\ncontaining ",(0,i.kt)("em",{parentName:"p"},"child context")," ",(0,i.kt)("strong",{parentName:"p"},"does not")," have access to the ",(0,i.kt)("em",{parentName:"p"},"child plugins"),"\nregistered within its ",(0,i.kt)("em",{parentName:"p"},"grandchild context"),"."),(0,i.kt)("p",null,"Given that everything in Fastify is a ",(0,i.kt)("a",{parentName:"p",href:"/website-next/docs/v3/Plugins"},"plugin"),", except for the\n",(0,i.kt)("em",{parentName:"p"},"root context"),', every "context" and "plugin" in this example is a plugin\nthat can consist of decorators, hooks, plugins, and routes. Thus, to put\nthis example into concrete terms, consider a basic scenario of a REST API\nserver that has three routes: the first route (',(0,i.kt)("inlineCode",{parentName:"p"},"/one"),") requires authentication,\nthe second route (",(0,i.kt)("inlineCode",{parentName:"p"},"/two"),") does not, and the third route (",(0,i.kt)("inlineCode",{parentName:"p"},"/three"),") has\naccess to the same context as the second route. Using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-bearer-auth"},"fastify-bearer-auth")," to provide the authentication, the code for this\nexample is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fastify = require('fastify')()\n\nfastify.decorateRequest('answer', 42)\n\nfastify.register(async function authenticatedContext (childServer) {\n  childServer.register(require('fastify-bearer-auth'), { keys: ['abc123'] })\n\n  childServer.route({\n    path: '/one',\n    method: 'GET',\n    handler (request, response) {\n      response.send({\n        answer: request.answer,\n        // request.foo will be undefined as it's only defined in publicContext\n        foo: request.foo,\n        // request.bar will be undefined as it's only defined in grandchildContext\n        bar: request.bar\n      })\n    }\n  })\n})\n\nfastify.register(async function publicContext (childServer) {\n  childServer.decorateRequest('foo', 'foo')\n\n  childServer.route({\n    path: '/two',\n    method: 'GET',\n    handler (request, response) {\n      response.send({\n        answer: request.answer,\n        foo: request.foo,\n        // request.bar will be undefined as it's only defined in grandchildContext\n        bar: request.bar\n      })\n    }\n  })\n\n  childServer.register(async function grandchildContext (grandchildServer) {\n    grandchildServer.decorateRequest('bar', 'bar')\n\n    grandchildServer.route({\n      path: '/three',\n      method: 'GET',\n      handler (request, response) {\n        response.send({\n          answer: request.answer,\n          foo: request.foo,\n          bar: request.bar\n        })\n      }\n    })\n  })\n})\n\nfastify.listen(8000)\n")),(0,i.kt)("p",null,"The above server example shows all of the encapsulation concepts outlined in the\noriginal diagram:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each ",(0,i.kt)("em",{parentName:"li"},"child context")," (",(0,i.kt)("inlineCode",{parentName:"li"},"authenticatedContext"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"publicContext"),", and\n",(0,i.kt)("inlineCode",{parentName:"li"},"grandchildContext"),") has access to the ",(0,i.kt)("inlineCode",{parentName:"li"},"answer")," request decorator defined in\nthe ",(0,i.kt)("em",{parentName:"li"},"root context"),"."),(0,i.kt)("li",{parentName:"ol"},"Only the ",(0,i.kt)("inlineCode",{parentName:"li"},"authenticatedContext")," has access to the ",(0,i.kt)("inlineCode",{parentName:"li"},"fastify-bearer-auth"),"\nplugin."),(0,i.kt)("li",{parentName:"ol"},"Both the ",(0,i.kt)("inlineCode",{parentName:"li"},"publicContext")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"grandchildContext")," have access to the ",(0,i.kt)("inlineCode",{parentName:"li"},"foo"),"\nrequest decorator."),(0,i.kt)("li",{parentName:"ol"},"Only the ",(0,i.kt)("inlineCode",{parentName:"li"},"grandchildContext")," has access to the ",(0,i.kt)("inlineCode",{parentName:"li"},"bar")," request decorator.")),(0,i.kt)("p",null,"To see this, start the server and issue requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# curl -H \'authorization: Bearer abc123\' http://127.0.0.1:8000/one\n{"answer":42}\n# curl http://127.0.0.1:8000/two\n{"answer":42,"foo":"foo"}\n# curl http://127.0.0.1:8000/three\n{"answer":42,"foo":"foo","bar":"bar"}\n')),(0,i.kt)("h2",{id:"sharing-between-contexts"},"Sharing Between Contexts"),(0,i.kt)("p",null,"Notice that each context in the prior example inherits ",(0,i.kt)("em",{parentName:"p"},"only")," from the parent\ncontexts. Parent contexts cannot access any entities within their descendent\ncontexts. This default is occasionally not desired. In such cases, the\nencapsulation context can be broken through the usage of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify-plugin"},"fastify-plugin")," such that anything registered in a descendent\ncontext is available to the containing parent context."),(0,i.kt)("p",null,"Assuming the ",(0,i.kt)("inlineCode",{parentName:"p"},"publicContext")," needs access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," decorator defined\nwithin the ",(0,i.kt)("inlineCode",{parentName:"p"},"grandchildContext")," in the previous example, the code can be\nrewritten to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"'use strict'\n\nconst fastify = require('fastify')()\nconst fastifyPlugin = require('fastify-plugin')\n\nfastify.decorateRequest('answer', 42)\n\n// `authenticatedContext` omitted for clarity\n\nfastify.register(async function publicContext (childServer) {\n  childServer.decorateRequest('foo', 'foo')\n\n  childServer.route({\n    path: '/two',\n    method: 'GET',\n    handler (request, response) {\n      response.send({\n        answer: request.answer,\n        foo: request.foo,\n        bar: request.bar\n      })\n    }\n  })\n\n  childServer.register(fastifyPlugin(grandchildContext))\n\n  async function grandchildContext (grandchildServer) {\n    grandchildServer.decorateRequest('bar', 'bar')\n\n    grandchildServer.route({\n      path: '/three',\n      method: 'GET',\n      handler (request, response) {\n        response.send({\n          answer: request.answer,\n          foo: request.foo,\n          bar: request.bar\n        })\n      }\n    })\n  }\n})\n\nfastify.listen(8000)\n")),(0,i.kt)("p",null,"Restarting the server and re-issuing the requests for ",(0,i.kt)("inlineCode",{parentName:"p"},"/two")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/three"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# curl http://127.0.0.1:8000/two\n{"answer":42,"foo":"foo","bar":"bar"}\n# curl http://127.0.0.1:8000/three\n{"answer":42,"foo":"foo","bar":"bar"}\n')))}d.isMDXComponent=!0},708:function(e,t,n){t.Z=n.p+"assets/images/encapsulation_context-e6a156b803389fb785e6d0eab3b3b287.svg"}}]);