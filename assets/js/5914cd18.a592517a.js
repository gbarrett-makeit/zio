"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[23100],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>f});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(t),d=n,f=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return t?a.createElement(f,o(o({ref:r},p),{},{components:t})):a.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11256:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(45072),n=(t(11504),t(95788));const i={id:"cyclicbarrier",title:"CyclicBarrier"},o=void 0,l={unversionedId:"reference/sync/cyclicbarrier",id:"version-1.0.18/reference/sync/cyclicbarrier",title:"CyclicBarrier",description:"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point.",source:"@site/versioned_docs/version-1.0.18/reference/sync/cyclicbarrier.md",sourceDirName:"reference/sync",slug:"/reference/sync/cyclicbarrier",permalink:"/1.0.18/reference/sync/cyclicbarrier",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/sync/cyclicbarrier.md",tags:[],version:"1.0.18",frontMatter:{id:"cyclicbarrier",title:"CyclicBarrier"}},s={},c=[{value:"Operations",id:"operations",level:2},{value:"Creation",id:"creation",level:3},{value:"Use",id:"use",level:3},{value:"Example Usage",id:"example-usage",level:2}],p={toc:c},y="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(y,(0,a.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point."),(0,n.yg)("p",null,"CyclicBarriers are useful in programs involving a fixed sized party of fibers that must occasionally wait for each\nother. The barrier is called cyclic because it can be re-used after the waiting fibers are released."),(0,n.yg)("p",null,"A CyclicBarrier supports an optional action command that is run once per barrier point, after the last fiber in the\nparty arrives, but before any fibers are released. This barrier action is useful for updating shared-state before any of\nthe parties continue."),(0,n.yg)("h2",{id:"operations"},"Operations"),(0,n.yg)("h3",{id:"creation"},"Creation"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Method"),(0,n.yg)("th",{parentName:"tr",align:null},"Definition"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"make(parties: Int): UIO[CyclicBarrier]")),(0,n.yg)("td",{parentName:"tr",align:null},"Makes an ",(0,n.yg)("inlineCode",{parentName:"td"},"CyclicBarrier")," with n parties")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"make(parties: Int, action: UIO[Any]): UIO[CyclicBarrier]")),(0,n.yg)("td",{parentName:"tr",align:null},"Makes an ",(0,n.yg)("inlineCode",{parentName:"td"},"CyclicBarrier")," with parties and action")))),(0,n.yg)("h3",{id:"use"},"Use"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Method"),(0,n.yg)("th",{parentName:"tr",align:null},"Definition"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"parties: Int")),(0,n.yg)("td",{parentName:"tr",align:null},"The number of parties required to trip this barrier.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"waiting: UIO[Int]")),(0,n.yg)("td",{parentName:"tr",align:null},"The number of parties currently waiting at the barrier.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"await: IO[Unit, Int]")),(0,n.yg)("td",{parentName:"tr",align:null},"Waits until all parties have invoked await on this barrier. Fails if the barrier is broken.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"reset: UIO[Unit]")),(0,n.yg)("td",{parentName:"tr",align:null},"Resets the barrier to its initial state. Breaks any waiting party.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"isBroken: UIO[Boolean]")),(0,n.yg)("td",{parentName:"tr",align:null},"Queries if this barrier is in a broken state.")))),(0,n.yg)("h2",{id:"example-usage"},"Example Usage"),(0,n.yg)("p",null,"Construction:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier  <- CyclicBarrier.make(100)\n  isBroken <- barrier.isBroken  \n  waiting  <- barrier.waiting\n} yield assert(!isBroken && waiting == 0)\n")),(0,n.yg)("p",null,"Releasing the barrier:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\n\nfor {\n  barrier <- CyclicBarrier.make(2)\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  ticket1 <- f1.join\n  ticket2 <- f2.join\n} yield assert(ticket1 == 1 && ticket2 == 0)\n")),(0,n.yg)("p",null,"Releasing the barrier and performing the action:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\n\nfor {\n  promise <- Promise.make[Nothing, Unit]\n  barrier <- CyclicBarrier.make(2, promise.succeed(()))\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  _       <- f1.join\n  _       <- f2.join\n  isComplete <- promise.isDone\n} yield assert(isComplete)\n")),(0,n.yg)("p",null,"Releases the barrier and cycles:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier <- CyclicBarrier.make(2)\n  f1      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f2      <- barrier.await.fork\n  ticket1 <- f1.join\n  ticket2 <- f2.join\n  f3      <- barrier.await.fork\n  _       <- f3.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  f4      <- barrier.await.fork\n  ticket3 <- f3.join\n  ticket4 <- f4.join\n} yield assert(ticket1 == 1 && ticket2 == 0 && ticket3 == 1 && ticket4 == 0)\n")),(0,n.yg)("p",null,"Breaks on reset:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\n\nfor {\n  barrier <- CyclicBarrier.make(100)\n  f1      <- barrier.await.fork\n  f2      <- barrier.await.fork\n  _       <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _       <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _       <- barrier.reset\n  res1    <- f1.await\n  res2    <- f2.await\n} yield ()\n")),(0,n.yg)("p",null,"Breaks on party interruption:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.CyclicBarrier\nimport zio._\nimport zio.duration._\nimport zio.test.environment.TestClock\n\nfor {\n  barrier   <- CyclicBarrier.make(100)\n  f1        <- barrier.await.timeout(1.second).fork\n  f2        <- barrier.await.fork\n  _         <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _         <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  isBroken1 <- barrier.isBroken\n  _         <- TestClock.adjust(1.second)\n  isBroken2 <- barrier.isBroken\n  res1      <- f1.await\n  res2      <- f2.await\n} yield assert(!isBroken1 && isBroken2)\n")))}u.isMDXComponent=!0}}]);