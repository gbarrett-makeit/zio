"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59233],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(58168),r=(t(96540),t(15680));const o={id:"random",title:"TestRandom"},i=void 0,s={unversionedId:"reference/test/services/random",id:"reference/test/services/random",title:"TestRandom",description:"When working with randomness, testing might be hard because the inputs to the tested function change on every invocation. So our code behaves in an indeterministic way.",source:"@site/docs/reference/test/services/random.md",sourceDirName:"reference/test/services",slug:"/reference/test/services/random",permalink:"/reference/test/services/random",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/services/random.md",tags:[],version:"current",frontMatter:{id:"random",title:"TestRandom"},sidebar:"reference-sidebar",previous:{title:"TestClock",permalink:"/reference/test/services/clock"},next:{title:"TestSystem",permalink:"/reference/test/services/system"}},d={},l=[{value:"Initial Seed with Series of Internal State Transition",id:"initial-seed-with-series-of-internal-state-transition",level:2},{value:"Feeding Predefined Random Values",id:"feeding-predefined-random-values",level:2}],c={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When working with randomness, testing might be hard because the inputs to the tested function change on every invocation. So our code behaves in an indeterministic way."),(0,r.yg)("p",null,"Precisely because of this reason ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," exposes ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," module which allows for fully deterministic testing of code that deals with Randomness. ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," can operate in two modes based on the needed use-case. It can generate a sequence of psudeo-random values using an initial seed with series of internal state transition or by feeding predefined random values."),(0,r.yg)("h2",{id:"initial-seed-with-series-of-internal-state-transition"},"Initial Seed with Series of Internal State Transition"),(0,r.yg)("p",null,"In the first mode, the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," is a purely functional pseudo-random number generator. It will generate pseudo-random values just like ",(0,r.yg)("inlineCode",{parentName:"p"},"scala.util.Random"),". While the ",(0,r.yg)("inlineCode",{parentName:"p"},"scala.util.Random")," doesn't have internal state, the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," has an internal state. Instead, methods like ",(0,r.yg)("inlineCode",{parentName:"p"},"nextInt")," describe state transitions from one random state to another that are automatically composed together through methods like ",(0,r.yg)("inlineCode",{parentName:"p"},"flatMap"),". "),(0,r.yg)("p",null,"The random seed can be set using ",(0,r.yg)("inlineCode",{parentName:"p"},"setSeed")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," is guaranteed to return the same sequence of values for any given seed. This is useful for deterministically generating a sequence of pseudo-random values and powers the property based testing functionality in ZIO Test:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("Use setSeed to generate stable values") {\n  for {\n    _ <- TestRandom.setSeed(27)\n    r1 <- Random.nextLong\n    r2 <- Random.nextLong\n    r3 <- Random.nextLong\n  } yield\n    assertTrue(\n      List(r1, r2, r3) == List[Long](\n        -4947896108136290151L,\n        -5264020926839611059L,\n        -9135922664019402287L\n      )\n    )\n}\n// res0: Spec[Any, Nothing] = Spec(\n//   caseValue = LabeledCase(\n//     label = "Use setSeed to generate stable values",\n//     spec = Spec(\n//       caseValue = TestCase(\n//         test = FlatMap(\n//           trace = "repl.MdocSession.MdocApp.res0(random.md:17)",\n//           first = Stateful(\n//             trace = "repl.MdocSession.MdocApp.res0(random.md:17)",\n//             onState = zio.ZIO$$$Lambda$18725/0x00007faa6def0000@1358294c\n//           ),\n//           successK = zio.test.package$ZTest$$$Lambda$18733/0x00007faa6df51e40@565aa543\n//         ),\n//         annotations = Map(zio.test.TestAnnotation@b4aaf9ee -> List(SourceLocation(random.md,17)))\n//       )\n//     )\n//   )\n// )\n')),(0,r.yg)("h2",{id:"feeding-predefined-random-values"},"Feeding Predefined Random Values"),(0,r.yg)("p",null,"In the second mode, ",(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," maintains an internal buffer of values that can be ",(0,r.yg)("em",{parentName:"p"},"fed")," with methods such as ",(0,r.yg)("inlineCode",{parentName:"p"},"feedInts")," and then when random values of that type are generated they will first be taken from the buffer. This is useful for verifying that functions produce the expected output for a given sequence of ",(0,r.yg)("em",{parentName:"p"},"random")," inputs."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TestRandom")," will automatically take values from the buffer if a value of the appropriate type is available and otherwise generate a pseudo-random value, so there is nothing we need to do to switch between the two modes. Just generate random values as we normally would to get pseudo-random values, or feed in values of our own to get those values back."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion._\n\ntest("One can provide its own list of ints") {\n  for {\n    _ <- TestRandom.feedInts(1, 9, 2, 8, 3, 7, 4, 6, 5)\n    r1 <- Random.nextInt\n    r2 <- Random.nextInt\n    r3 <- Random.nextInt\n    r4 <- Random.nextInt\n    r5 <- Random.nextInt\n    r6 <- Random.nextInt\n    r7 <- Random.nextInt\n    r8 <- Random.nextInt\n    r9 <- Random.nextInt\n  } yield assertTrue(\n    List(1, 9, 2, 8, 3, 7, 4, 6, 5) == List(r1, r2, r3, r4, r5, r6, r7, r8, r9)\n  )\n}\n')),(0,r.yg)("p",null,"We can also use methods like ",(0,r.yg)("inlineCode",{parentName:"p"},"clearInts")," to clear the buffer of values of a given type, so we can fill the buffer with new values or go back to pseudo-random number generation."))}m.isMDXComponent=!0}}]);