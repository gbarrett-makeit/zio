"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[56292],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>f});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||y[d]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(45072),a=(r(11504),r(95788));const s={id:"repeat-and-retry",title:"Repeat and Retry"},i=void 0,o={unversionedId:"reference/test/aspects/repeat-and-retry",id:"reference/test/aspects/repeat-and-retry",title:"Repeat and Retry",description:"There are some situations where we need to repeat a test with a specific schedule, or our tests might fail, and we need to retry them until we make sure that our tests pass. ZIO Test has the following test aspects for these scenarios:",source:"@site/docs/reference/test/aspects/repeat-and-retry.md",sourceDirName:"reference/test/aspects",slug:"/reference/test/aspects/repeat-and-retry",permalink:"/reference/test/aspects/repeat-and-retry",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/aspects/repeat-and-retry.md",tags:[],version:"current",frontMatter:{id:"repeat-and-retry",title:"Repeat and Retry"},sidebar:"reference-sidebar",previous:{title:"Passing Failed Tests",permalink:"/reference/test/aspects/passing-failed-tests"},next:{title:"Restoring State of Test Services",permalink:"/reference/test/aspects/restoring-state-of-test-services"}},l={},p=[{value:"Repeat",id:"repeat",level:2},{value:"Retry",id:"retry",level:2},{value:"Eventually",id:"eventually",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"There are some situations where we need to repeat a test with a specific schedule, or our tests might fail, and we need to retry them until we make sure that our tests pass. ZIO Test has the following test aspects for these scenarios:"),(0,a.yg)("h2",{id:"repeat"},"Repeat"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"repeat")," test aspect takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule")," and repeats a test based on it. The test passes if it passes every time:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("repeating a test based on the scheduler to ensure it passes every time") {\n  ZIO.debug("repeating successful tests")\n    .map(_ => assertTrue(true))\n} @@ TestAspect.repeat(Schedule.recurs(5))\n')),(0,a.yg)("h2",{id:"retry"},"Retry"),(0,a.yg)("p",null,"If our test fails occasionally, we can retry failed tests by providing a ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"retry")," test aspect:"),(0,a.yg)("p",null,"For example, the following test retries a maximum of five times. Once a successful assertion is made, the test passes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("retrying a failing test based on the schedule until it succeeds") {\n  ZIO.debug("retrying a failing test")\n    .map(_ => assertTrue(true))\n} @@ TestAspect.retry(Schedule.recurs(5))\n')),(0,a.yg)("h2",{id:"eventually"},"Eventually"),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"eventually")," test aspect keeps retrying a test until it passes, regardless of how many times it fails:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("retrying a failing test until it succeeds") {\n  ZIO.debug("retrying a failing test")\n    .map(_ => assertTrue(true))\n} @@ TestAspect.eventually\n')))}y.isMDXComponent=!0}}]);