"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[95372],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(45072),o=(n(11504),n(95788));const i={id:"writing-our-first-test",title:"Writing Our First Test"},a=void 0,s={unversionedId:"reference/test/writing-our-first-test",id:"reference/test/writing-our-first-test",title:"Writing Our First Test",description:"Any object that implements the ZIOSpecDefault trait is a runnable test. So to start writing tests we need to extend ZIOSpecDefault, which requires a Spec:",source:"@site/docs/reference/test/writing-our-first-test.md",sourceDirName:"reference/test",slug:"/reference/test/writing-our-first-test",permalink:"/reference/test/writing-our-first-test",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/writing-our-first-test.md",tags:[],version:"current",frontMatter:{id:"writing-our-first-test",title:"Writing Our First Test"},sidebar:"reference-sidebar",previous:{title:"Installation",permalink:"/reference/test/installation"},next:{title:"Running Tests",permalink:"/reference/test/running-tests"}},l={},p=[],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Any object that implements the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," trait is a runnable test. So to start writing tests we need to extend ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIOSpecDefault"),", which requires a ",(0,o.yg)("inlineCode",{parentName:"p"},"Spec"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\nobject HelloWorldSpec extends ZIOSpecDefault {\n  def spec = \n    suite("HelloWorldSpec")(\n      ??? // all tests go here\n    )\n}\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"In order to have runnable tests, the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," trait must be extended by an ",(0,o.yg)("strong",{parentName:"p"},"object")," that implements the ",(0,o.yg)("inlineCode",{parentName:"p"},"spec")," method. If we extend this trait in a class, the test runner will not be able to find the tests.")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"ZIOSpecDefault")," is very similar in its logic of operations to ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIOAppDefault"),". Instead of providing one ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO")," application at the end of the world, we provide a suite that can be a tree of other suites and tests. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\nimport zio.test.Assertion._\n\nimport java.io.IOException\n\nimport HelloWorld._\n\nobject HelloWorld {\n  def sayHello: ZIO[Any, IOException, Unit] =\n    Console.printLine("Hello, World!")\n}\n\nobject HelloWorldSpec extends ZIOSpecDefault {\n  def spec = suite("HelloWorldSpec")(\n    test("sayHello correctly displays output") {\n      for {\n        _      <- sayHello\n        output <- TestConsole.output\n      } yield assertTrue(output == Vector("Hello, World!\\n"))\n    }\n  )\n}\n')),(0,o.yg)("p",null,"In the example above, our test involved the effect of printing to the console, but we didn't have to do anything differently in our test. Also note that the ",(0,o.yg)("inlineCode",{parentName:"p"},"helloWorld")," method in the above program does not actually print a string to the console instead writes it to a buffer for testing."))}f.isMDXComponent=!0}}]);