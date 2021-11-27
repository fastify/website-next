"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[1635],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9709:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=["components"],s={title:"Write Plugin",sidebar_label:"Write Plugin",hide_title:!1},l="How to write a good plugin",u={unversionedId:"Write-Plugin",id:"version-v1/Write-Plugin",isDocsHomePage:!1,title:"Write Plugin",description:"First, thank you for deciding to write a plugin for Fastify. Fastify is a minimal framework and plugins are its strength, so thank you.",source:"@site/versioned_docs/version-v1/Write-Plugin.md",sourceDirName:".",slug:"/Write-Plugin",permalink:"/website-next/docs/v1/Write-Plugin",editUrl:"https://github.com/fastify/website-next/edit/main/docs/versioned_docs/version-v1/Write-Plugin.md",tags:[],version:"v1",frontMatter:{title:"Write Plugin",sidebar_label:"Write Plugin",hide_title:!1},sidebar:"version-v1/sidebar",previous:{title:"Validation and Serialization",permalink:"/website-next/docs/v1/Validation-and-Serialization"}},p=[{value:"Code",id:"code",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"License",id:"license",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Test",id:"test",children:[],level:2},{value:"Code Linter",id:"code-linter",children:[],level:2},{value:"Continuous Integration",id:"continuous-integration",children:[],level:2},{value:"Let&#39;s start!",id:"lets-start",children:[],level:2}],c={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-write-a-good-plugin"},"How to write a good plugin"),(0,r.kt)("p",null,"First, thank you for deciding to write a plugin for Fastify. Fastify is a minimal framework and plugins are its strength, so thank you.",(0,r.kt)("br",null),"\nThe core principles of Fastify are performance, low overhead and providing a good experience to our users. When writing a plugin, it is important to keep these principles in mind. Therefore, in this document we will analyze what characterizes a quality plugin."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Need some inspiration? You can use the label ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/fastify/fastify/issues?q=is%3Aissue+is%3Aopen+label%3A%22plugin+suggestion%22"},'"plugin suggestion"')," in our issue tracker!")),(0,r.kt)("h2",{id:"code"},"Code"),(0,r.kt)("p",null,"Fastify uses different techniques to optimize its code, many of them are documented in our Guides. We highly recommend you read ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Plugins-Guide"},"the hitchhiker's guide to plugins")," to discover all the APIs you can use to build your plugin and learn how use them."),(0,r.kt)("p",null,"Have you got some question or are you seeking for a suggestion? We are more than happy to help you! Just open an issue in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/help"},"help repository"),"."),(0,r.kt)("p",null,"Once you submit a plugin to our ",(0,r.kt)("a",{parentName:"p",href:"/website-next/docs/v1/Ecosystem"},"ecosystem list"),", we will review your code and help you improve it if necessary."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"Documentation is extremely important. If your plugin is not well documented we will not accept it to the ecosystem list. Lack of quality documentation makes it more difficult for people to use your plugin, and will likely result in it going unused.",(0,r.kt)("br",null),"\nIf you want to see some good examples on how to document a plugin take a look at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-caching"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-caching"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-compress"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-compress"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-cookie"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-cookie"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/point-of-view"},(0,r.kt)("inlineCode",{parentName:"a"},"point-of-view"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/under-pressure"},(0,r.kt)("inlineCode",{parentName:"a"},"under-pressure")))),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"You can license your plugin as you prefer, we do not enforce any kind of license.",(0,r.kt)("br",null),"\nWe prefer the ",(0,r.kt)("a",{parentName:"p",href:"https://choosealicense.com/licenses/mit/"},"MIT license")," because we think it allows more people to use the code freely. For a list of alternative licenses see the ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses"},"OSI list")," or GitHub's ",(0,r.kt)("a",{parentName:"p",href:"https://choosealicense.com/"},"choosealicense.com"),"."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Always put an example file in your repository. Examples are very helpful for users and give a very fast way to test your plugin. Your users will be grateful."),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("p",null,"It is extremely important that a plugin is thoroughly tested to verify that is working properly.",(0,r.kt)("br",null),"\nA plugin without tests will not be accepted to the ecosystem list. A lack of tests does not inspire trust nor guarantee that the code will continue to work among different versions of its dependencies."),(0,r.kt)("p",null,"We do not enforce any testing library. We use ",(0,r.kt)("a",{parentName:"p",href:"http://www.node-tap.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"tap"))," since it offers out of the box parallel testing and code coverage, but it is up to you to choose your library of preference."),(0,r.kt)("h2",{id:"code-linter"},"Code Linter"),(0,r.kt)("p",null,"It is not mandatory, but we highly recommend you use a code linter in your plugin. It will ensure a consistent code style and help you to avoid many errors."),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://standardjs.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"standard"))," since it works without the need to configure it and is very easy integrate in a test suite."),(0,r.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,r.kt)("p",null,"It is not mandatory, but if you release your code as open source it helps to use Continuous Integration to ensure contributions do not break your plugin and to show that the plugin works as intended. ",(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis")," is free for open source projects and easy to setup.",(0,r.kt)("br",null),"\nIn addition you can enable services like ",(0,r.kt)("a",{parentName:"p",href:"https://greenkeeper.io/"},"Greenkeeper"),", that will help you keep your dependencies up to date and discover if a new release of Fastify has some issues with your plugin."),(0,r.kt)("h2",{id:"lets-start"},"Let's start!"),(0,r.kt)("p",null,"Awesome, now you know everything you need to know about how to write a good plugin for Fastify!\nAfter you've built one (or more!) let us know! We will add it to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify#ecosystem"},"ecosystem")," section of our documentation!"),(0,r.kt)("p",null,"If you want to see some real world examples, checkout:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/point-of-view"},(0,r.kt)("inlineCode",{parentName:"a"},"point-of-view")),"\nTemplates rendering (",(0,r.kt)("em",{parentName:"li"},"ejs, pug, handlebars, marko"),") plugin support for Fastify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-mongodb"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-mongodb")),"\nFastify MongoDB connection plugin, with this you can share the same MongoDb connection pool in every part of your server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-multipart"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-multipart")),"\nMultipart support for Fastify."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify-helmet"},(0,r.kt)("inlineCode",{parentName:"a"},"fastify-helmet"))," Important security headers for Fastify.")))}f.isMDXComponent=!0}}]);