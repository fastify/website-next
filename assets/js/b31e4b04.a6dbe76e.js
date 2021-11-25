"use strict";(self.webpackChunkfastify_website=self.webpackChunkfastify_website||[]).push([[7865],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=i,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||a;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={title:"Contributing",sidebar_label:"Contributing",hide_title:!1},l=void 0,u={unversionedId:"Guides/Contributing",id:"Guides/Contributing",isDocsHomePage:!1,title:"Contributing",description:"Thank you for taking an interest in contributing to Fastify. We are excited",source:"@site/docs/01-Guides/Contributing.md",sourceDirName:"01-Guides",slug:"/Guides/Contributing",permalink:"/website-next/docs/v3/Guides/Contributing",editUrl:"https://github.com/fastify/website-next/edit/main/docs/docs/01-Guides/Contributing.md",tags:[],version:"current",frontMatter:{title:"Contributing",sidebar_label:"Contributing",hide_title:!1},sidebar:"sidebar",previous:{title:"Intro",permalink:"/website-next/docs/v3/"},next:{title:"Getting Started",permalink:"/website-next/docs/v3/Guides/Getting-Started"}},p=[{value:"Table Of Contents",id:"table-of-contents",children:[],level:2},{value:"Types Of Contributions We&#39;re Looking For",id:"types-of-contributions-were-looking-for",children:[],level:2},{value:"Ground Rules &amp; Expectations",id:"ground-rules--expectations",children:[],level:2},{value:"How To Contribute",id:"how-to-contribute",children:[],level:2},{value:"Setting Up Your Environment",id:"setting-up-your-environment",children:[{value:"Using Visual Studio Code",id:"using-visual-studio-code",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Thank you for taking an interest in contributing to Fastify. We are excited\nto receive your support and knowledge. This guide is our attempt to help you\nhelp us."),(0,a.kt)("blockquote",null,(0,a.kt)("h2",{parentName:"blockquote",id:"note"},"Note"),(0,a.kt)("p",{parentName:"blockquote"},"This is an informal guide. Please review the formal\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/blob/main/CONTRIBUTING.md"},"CONTRIBUTING document")," for full details and our\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Developer_Certificate_of_Origin"},"Developer Certificate of Origin"),".")),(0,a.kt)("h2",{id:"table-of-contents"},"Table Of Contents"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#contribution-types"},"Types Of Contributions We're Looking For")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#contributing-rules"},"Ground Rules & Expectations")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#contributing-how-to"},"How To Contribute")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#contributing-environment"},"Setting Up Your Environment"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contributing-vscode"},"Using Visual Studio Code"))),(0,a.kt)("h2",{id:"types-of-contributions-were-looking-for"},"Types Of Contributions We're Looking For"),(0,a.kt)("p",null,"In short, we welcome any type of contribution you are willing to provide. No\ncontribution is too small. We gladly accept contributions such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documentation improvements: from small typo corrections to major document reworks"),(0,a.kt)("li",{parentName:"ul"},"Helping others by answering questions in pull requests and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/discussions"},"discussions")),(0,a.kt)("li",{parentName:"ul"},"Fixing ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/issues?q=is%3Aissue+is%3Aopen+label%3Abug"},"known bugs")),(0,a.kt)("li",{parentName:"ul"},"Reporting previously unknown bugs by opening an issue with a minimal reproduction")),(0,a.kt)("h2",{id:"ground-rules--expectations"},"Ground Rules & Expectations"),(0,a.kt)("p",null,"Before we get started, here are a few things we expect from you (and that\nyou should expect from others):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be respectful and thoughtful in your conversations around this project. This\nproject is maintained by a diverse set of people from all across the globe.\nEach person has their own views and opinions about the project. Try to listen\nto each other and reach an agreement or compromise."),(0,a.kt)("li",{parentName:"ul"},"We have a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/fastify/fastify/blob/main/CODE_OF_CONDUCT.md"},"Code of Conduct"),". You must adhere to it to\nparticipate in this project."),(0,a.kt)("li",{parentName:"ul"},"If you open a pull request, please ensure that your contribution passes all\ntests. If there are test failures, you will need to address them before we\ncan merge your contribution.")),(0,a.kt)("h2",{id:"how-to-contribute"},"How To Contribute"),(0,a.kt)("p",null,"If you'd like to contribute, start by searching through the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/issues"},"issues")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fastify/fastify/pulls"},"pull requests")," to see whether\nsomeone else has raised a similar idea or question."),(0,a.kt)("p",null,"If you don't see your idea listed, and you think it fits into the goals of this\nguide, do one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If your contribution is minor,")," such as a typo fix, open a pull request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If your contribution is major,")," such as a new feature, start by opening an\nissue first. That way, other people can weigh in on the discussion before you\ndo any work.")),(0,a.kt)("h2",{id:"setting-up-your-environment"},"Setting Up Your Environment"),(0,a.kt)("p",null,'Please adhere to the project\'s code and documentation style. Some popular tools\nthat automatically "correct" code and documentation do not follow a style that\nconforms to the styles this project uses. Notably, this project uses\n',(0,a.kt)("a",{parentName:"p",href:"https://standardjs.com"},"StandardJS")," for code formatting."),(0,a.kt)("h3",{id:"using-visual-studio-code"},"Using Visual Studio Code"),(0,a.kt)("p",null,"What follows is how to use ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/portable"},"Visual Studio Code (VSCode) portable"),"\nto create a Fastify specific environment. This guide is written as if you are\nsetting up the environment on macOS, but the principles are the same across\nall platforms. See the previously linked VSCode portable guide for help with\nother platforms."),(0,a.kt)("p",null,"First, ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"download VSCode")," and unpackage\nit to ",(0,a.kt)("inlineCode",{parentName:"p"},"/Applications/VSCodeFastify/"),'. Upon doing so, the following should\noutput "found" when run in a terminal:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'[ -d /Applications/VSCodeFastify/Visual\\ Studio\\ Code.app ] && echo "found"\n')),(0,a.kt)("p",null,"As mentioned in the VSCode portable guide, we need to unsandbox the application\nfor the portable mode to work correctly. So issue the following in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"xattr -dr com.apple.quarantine /Applications/VSCodeFastify/Visual\\ Studio\\ Code.app\n")),(0,a.kt)("p",null,"Next, create the required data directories for VSCode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p /Applications/VSCodeFastify/code-portable-data/{user-data,extensions}\n")),(0,a.kt)("p",null,"Before continuing, we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," command to your terminal's\n",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),". To do so, we will ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},"manually add VSCode to the ",(0,a.kt)("inlineCode",{parentName:"a"},"PATH")),". As outlined in that document, the\ninstructions vary depending on your default shell, so you should follow the\ninstructions in that guide as relates to your preferred shell. However, we will\ntweak them slightly by defining an alias instead of a direct reference to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"code")," tool. This is so we do not conflict with any other installation of\nVSCode you may have, and to keep this guide specific to Fastify. So, ultimately,\nwe want the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'alias code-fastify="/Applications/VSCodeFastify/Visual\\ Studio\\ Code.app/Contents/Resources/app/bin/code"\n')),(0,a.kt)("p",null,"The result should be that ",(0,a.kt)("inlineCode",{parentName:"p"},"code-fastify --version")," results in something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f code-fastify --version\n1.50.0\n93c2f0fbf16c5a4b10e4d5f89737d9c2c25488a3\nx64\n")),(0,a.kt)("p",null,"Now that VSCode is installed, and we can work with it via the command line,\nwe need to install an extension that will aid in keeping any JavaScript you\nwrite for the project formatted according to the project's style:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"code-fastify --install-extension dbaeumer.vscode-eslint\n")),(0,a.kt)("p",null,'Upon successful execution of the previous command, the following command should\nresult in "found" being output:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'[ -d /Applications/VSCodeFastify/code-portable-data/extensions/dbaeumer.vscode-eslint-* ] && echo "found"\n')),(0,a.kt)("p",null,"Now, from within the directory of your local clone of the Fastify project, we\ncan open VSCode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"code-fastify .\n")),(0,a.kt)("p",null,"A new VSCode window should open and you should see the Fastify project files\nin the left sidebar. But wait! We are not quite done yet. There are a few more\nbaseline settings that should be set before VSCode is ready."),(0,a.kt)("p",null,"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd+shift+p")," to bring up the VSCode command input prompt. Type\n",(0,a.kt)("inlineCode",{parentName:"p"},"open settings (json)")," and then choose the same item from the filtered menu.\nThis will open a document that is the settings for the editor. Paste\nthe following JSON into this document, overwriting any text already present,\nand save it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "[javascript]": {\n        "editor.defaultFormatter": "dbaeumer.vscode-eslint",\n        "editor.codeActionsOnSave": {\n            "source.fixAll": true\n        }\n    },\n\n    "workbench.colorCustomizations": {\n        "statusBar.background": "#178bb9"\n    }\n}\n')),(0,a.kt)("p",null,'Next, from the menu bar, select "Terminal > New Terminal" to open a new terminal\nin the editor. Run ',(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," to install the Fastify dependencies. Finally,\nwe need to tell the eslint plugin to use the Fastify local install of eslint.\nPress ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd+shift+p")," to bring up the VSCode command input, type\n",(0,a.kt)("inlineCode",{parentName:"p"},"eslint: manage library execution"),' and select it from the filtered menu. On\nthe prompt, click the "Allow" button.'),(0,a.kt)("p",null,"At this point, you are all setup with a custom VSCode instance that can be used\nto work on Fastify contributions. As you edit and save JavaScript files, the\neditor will autocorrect any style issues."))}c.isMDXComponent=!0}}]);