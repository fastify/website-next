"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[6911],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1025:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"Testing"},p=void 0,l={unversionedId:"Testing",id:"version-v1/Testing",isDocsHomePage:!1,title:"Testing",description:"Testing is one of the most important parts of developing an application. Fastify is very flexible when it comes to testing and is compatible with most testing frameworks (such as Tap, which is used in the examples below).",source:"@site/versioned_docs/version-v1/Testing.md",sourceDirName:".",slug:"/Testing",permalink:"/website-next/docs/v1/Testing",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Testing.md",tags:[],version:"v1",frontMatter:{title:"Testing"},sidebar:"version-v1/sidebar",previous:{title:"Server",permalink:"/website-next/docs/v1/Server"},next:{title:"TypeScript",permalink:"/website-next/docs/v1/TypeScript"}},c=[{value:"Testing with http injection",id:"testing-with-http-injection",children:[{value:"Example:",id:"example",children:[],level:4}],level:3},{value:"Testing with a running server",id:"testing-with-a-running-server",children:[{value:"Example:",id:"example-1",children:[],level:4}],level:3}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Testing is one of the most important parts of developing an application. Fastify is very flexible when it comes to testing and is compatible with most testing frameworks (such as ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tap"},"Tap"),", which is used in the examples below)."),(0,s.kt)("h3",{id:"testing-with-http-injection"},"Testing with http injection"),(0,s.kt)("a",{id:"inject"}),(0,s.kt)("p",null,"Fastify comes with built-in support for fake http injection thanks to ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fastify/light-my-request"},(0,s.kt)("inlineCode",{parentName:"a"},"light-my-request")),"."),(0,s.kt)("p",null,"To inject a fake http request, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"inject")," method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"fastify.inject({\n  method: String,\n  url: String,\n  payload: Object,\n  headers: Object\n}, (error, response) => {\n  // your tests\n})\n")),(0,s.kt)("p",null,"or in the promisified version"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"fastify\n  .inject({\n    method: String,\n    url: String,\n    payload: Object,\n    headers: Object\n  })\n  .then(response => {\n    // your tests\n  })\n  .catch(err => {\n    // handle error\n  })\n")),(0,s.kt)("p",null,"Async await is supported as well!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const res = await fastify.inject({ method: String, url: String, payload: Object, headers: Object })\n  // your tests\n} catch (err) {\n  // handle error\n}\n")),(0,s.kt)("h4",{id:"example"},"Example:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"app.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const Fastify = require('fastify')\n\nfunction buildFastify () {\n  const fastify = Fastify()\n\n  fastify.get('/', function (request, reply) {\n    reply.send({ hello: 'world' })\n  })\n  \n  return fastify\n}\n\nmodule.exports = buildFastify\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"test.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(4)\n  \n  const fastify = buildFastify()\n  \n  // At the end of your tests it is highly recommended to call `.close()`\n  // to ensure that all connections to external services get closed.\n  t.tearDown(() => fastify.close())\n\n  fastify.inject({\n    method: 'GET',\n    url: '/'\n  }, (err, response) => {\n    t.error(err)\n    t.strictEqual(response.statusCode, 200)\n    t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')\n    t.deepEqual(JSON.parse(response.payload), { hello: 'world' })\n  })\n})\n")),(0,s.kt)("h3",{id:"testing-with-a-running-server"},"Testing with a running server"),(0,s.kt)("p",null,"Fastify can also be tested after starting the server with ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify.listen()")," or after initializing routes and plugins with ",(0,s.kt)("inlineCode",{parentName:"p"},"fastify.ready()"),"."),(0,s.kt)("h4",{id:"example-1"},"Example:"),(0,s.kt)("p",null,"Uses ",(0,s.kt)("strong",{parentName:"p"},"app.js")," from the previous example."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"test-listen.js")," (testing with ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/request"},(0,s.kt)("inlineCode",{parentName:"a"},"Request")),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst request = require('request')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', t => {\n  t.plan(5)\n  \n  const fastify = buildFastify()\n  \n  t.tearDown(() => fastify.close())\n  \n  fastify.listen(0, (err) => {\n    t.error(err)\n    \n    request({\n      method: 'GET',\n      url: 'http://localhost:' + fastify.server.address().port\n    }, (err, response, body) => {\n      t.error(err)\n      t.strictEqual(response.statusCode, 200)\n      t.strictEqual(response.headers['content-type'], 'application/json; charset=utf-8')\n      t.deepEqual(JSON.parse(body), { hello: 'world' })\n    })\n  })\n})\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"test-ready.js")," (testing with ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},(0,s.kt)("inlineCode",{parentName:"a"},"SuperTest")),")"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const tap = require('tap')\nconst supertest = require('supertest')\nconst buildFastify = require('./app')\n\ntap.test('GET `/` route', async (t) => {\n  const fastify = buildFastify()\n\n  t.tearDown(() => fastify.close())\n  \n  await fastify.ready()\n  \n  const response = await supertest(fastify.server)\n    .get('/')\n    .expect(200)\n    .expect('Content-Type', 'application/json; charset=utf-8')\n  t.deepEqual(response.body, { hello: 'world' })\n})\n")))}f.isMDXComponent=!0}}]);