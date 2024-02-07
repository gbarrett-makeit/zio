"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[56456],{95788:(e,r,a)=>{a.d(r,{Iu:()=>c,yg:()=>d});var n=a(11504);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),p=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(a),m=t,d=y["".concat(s,".").concat(m)]||y[m]||g[m]||i;return a?n.createElement(d,l(l({ref:r},c),{},{components:a})):n.createElement(d,l({ref:r},c))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[y]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74432:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(45072),t=(a(11504),a(95788));const i={id:"cyclicbarrier",title:"CyclicBarrier"},l=void 0,o={unversionedId:"reference/sync/cyclicbarrier",id:"reference/sync/cyclicbarrier",title:"CyclicBarrier",description:"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point.",source:"@site/docs/reference/sync/cyclicbarrier.md",sourceDirName:"reference/sync",slug:"/reference/sync/cyclicbarrier",permalink:"/reference/sync/cyclicbarrier",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/sync/cyclicbarrier.md",tags:[],version:"current",frontMatter:{id:"cyclicbarrier",title:"CyclicBarrier"},sidebar:"reference-sidebar",previous:{title:"CountdownLatch",permalink:"/reference/sync/countdownlatch"},next:{title:"ConcurrentMap",permalink:"/reference/sync/concurrentmap"}},s={},p=[{value:"Creation",id:"creation",level:2},{value:"Simple Example",id:"simple-example",level:2},{value:"Cyclic Example",id:"cyclic-example",level:2},{value:"Internals",id:"internals",level:2},{value:"Operations",id:"operations",level:2},{value:"reset",id:"reset",level:3},{value:"await",id:"await",level:3},{value:"Barrier Breakage Model",id:"barrier-breakage-model",level:3}],c={toc:p},y="wrapper";function g(e){let{components:r,...a}=e;return(0,t.yg)(y,(0,n.c)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"A synchronization aid that allows a set of fibers to all wait for each other to reach a common barrier point."),(0,t.yg)("p",null,"CyclicBarriers are useful in programs involving a fixed sized party of fibers that must occasionally wait for each other. The barrier is called cyclic because it can be re-used after the waiting fibers are released."),(0,t.yg)("h2",{id:"creation"},"Creation"),(0,t.yg)("p",null,"To create a ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier")," we must provide the number of parties, and we can also provide an optional action:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"number of parties"),"\u2014 The fibers that need to synchronize their execution are called ",(0,t.yg)("em",{parentName:"li"},"parties"),". This number denotes how many parties must occasionally wait for each other. In other words, it specifies the number of parties required to trip the barrier."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"action"),"\u2014 An optional command that is run once per barrier point, after the last fiber in the party arrives, but before any fibers are resumed. This action is useful for updating the shared state before any of the parties continue.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object CyclicBarrier {\n  def make(parties: Int)                  : UIO[CyclicBarrier] = ???\n  def make(parties: Int, action: UIO[Any]): UIO[CyclicBarrier] = ???\n}\n")),(0,t.yg)("p",null,"If we create a barrier and don't call ",(0,t.yg)("inlineCode",{parentName:"p"},"await")," on that, the barrier is not going to be released and the number of ",(0,t.yg)("inlineCode",{parentName:"p"},"waiting")," fibers remains zero:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent.CyclicBarrier\n\nfor {\n  barrier  <- CyclicBarrier.make(100, ZIO.debug("This is a release action!"))\n  isBroken <- barrier.isBroken  \n  waiting  <- barrier.waiting\n} yield assert(!isBroken && waiting == 0)\n')),(0,t.yg)("h2",{id:"simple-example"},"Simple Example"),(0,t.yg)("p",null,"In the following example, we started three tasks, each one has a different working time, but they won't return until the other parties finished their jobs:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent.CyclicBarrier\n\nobject MainApp extends ZIOAppDefault {\n  def task(name: String) =\n    for {\n      b <- ZIO.service[CyclicBarrier]\n      _ <- ZIO.debug(s"task-$name: started my job right now!")\n      d <- Random.nextLongBetween(1000, 10000)\n      _ <- ZIO.sleep(Duration.fromMillis(d))\n      _ <- ZIO.debug(s"task-$name: finished my job and waiting for other parties to finish their jobs")\n      _ <- b.await \n      _ <- ZIO.debug(s"task-$name: the barrier is now broken, so I\'m going to exit immediately!")\n    } yield ()\n\n  def run =\n    for {\n      b    <- CyclicBarrier.make(3)\n      tasks = task("1") <&> task("2") <&> task("3")\n      _    <- tasks.provide(ZLayer.succeed(b))\n    } yield ()\n}\n')),(0,t.yg)("h2",{id:"cyclic-example"},"Cyclic Example"),(0,t.yg)("p",null,"\u0651If we change the previous example and add more than three tasks, the first three arriving tasks will be blocked and wait for synchronization. After the barrier is broken, the next three tasks will be blocked on the next barrier. ",(0,t.yg)("strong",{parentName:"p"},"This process will be executed again and again for further tasks. This is why we say that the barrier is cyclic"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent.CyclicBarrier\n\nobject MainApp extends ZIOAppDefault {\n\n  def task(name: String) =\n    for {\n      b <- ZIO.service[CyclicBarrier]\n      _ <- ZIO.debug(s"task-$name: started my job right now!")\n      d <- Random.nextLongBetween(1000, 10000)\n      _ <- ZIO.sleep(Duration.fromMillis(d))\n      _ <- ZIO.debug(s"task-$name: finished my job and waiting for other parties to finish their jobs")\n      _ <- b.await\n      _ <- ZIO.debug(s"task-$name: the barrier is now broken, so I\'m going to exit immediately!")\n    } yield ()\n\n  def run =\n    for {\n      b <- CyclicBarrier.make(\n             parties = 3,\n             action = ZIO.debug(\n               "The barrier is released right now!" +\n                 "I can do some effectful actions on release of barrier."\n             )\n           )\n      tasks = task("1") <&>\n                task("2") <&>\n                task("3") <&>\n                task("4") <&>\n                task("5")\n      _ <- tasks.provide(ZLayer.succeed(b))\n    } yield ()\n}\n')),(0,t.yg)("p",null,"In this example after breakage of the barrier by proceeding with ",(0,t.yg)("inlineCode",{parentName:"p"},"task 1"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"task 2"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"task 3"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier")," will be reset to the initial state, so other tasks can come in and ",(0,t.yg)("inlineCode",{parentName:"p"},"await")," on the barrier. So here, ",(0,t.yg)("inlineCode",{parentName:"p"},"task 4")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"task 5"),", proceed with their job and finally wait for all parties to come into the barrier point, but in this example, as we didn't provide ",(0,t.yg)("inlineCode",{parentName:"p"},"task 6"),", the remaining tasks will block the execution of the whole program, infinitely; because the number of waiting fibers are not equal to ",(0,t.yg)("inlineCode",{parentName:"p"},"parties"),"."),(0,t.yg)("p",null,"If we add another concurrent task (e.g. ",(0,t.yg)("inlineCode",{parentName:"p"},'task("6")'),") to our list of tasks, finally the next group of jobs that are waiting for each other will trip the barrier."),(0,t.yg)("h2",{id:"internals"},"Internals"),(0,t.yg)("p",null,"Each ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier")," has the following internal ",(0,t.yg)("em",{parentName:"p"},"private")," properties, knowing them helps us to have a deep understanding of how ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier")," works:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"class CyclicBarrier private (\n  private val _parties: Int,\n  private val _waiting: Ref[Int],\n  private val _lock: Ref[Promise[Unit, Unit]],\n  private val _action: UIO[Any],\n  private val _broken: Ref[Boolean]\n)\n")),(0,t.yg)("p",null,"Let's introduce each one:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"_parties"),"\u2014 The fibers that need to synchronize their execution are called ",(0,t.yg)("em",{parentName:"li"},"parties"),". It is an immutable property and will be assigned when we create a ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier")," using one of the ",(0,t.yg)("inlineCode",{parentName:"li"},"make")," constructors of the ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier"),"."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"_waiting"),"\u2014 This is a mutable property that denotes the number of already fibers waiting for the release of the barrier. These fibers are waiting together for synchronization purpose. To access this property, we can use the ",(0,t.yg)("inlineCode",{parentName:"li"},"waiting")," member of a ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier")," which returns ",(0,t.yg)("inlineCode",{parentName:"li"},"UIO[Int]"),"."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"_lock"),"\u2014 This is a mutable property that contains a ",(0,t.yg)("inlineCode",{parentName:"li"},"Promise[Unit, Unit]"),":")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"When a barrier is ",(0,t.yg)("em",{parentName:"li"},"released"),", the value of this promise internally will be succeeded with a ",(0,t.yg)("inlineCode",{parentName:"li"},"Unit")," value."),(0,t.yg)("li",{parentName:"ul"},"When a barrier is ",(0,t.yg)("em",{parentName:"li"},"broken"),", the value of this promise internally will be failed with a ",(0,t.yg)("inlineCode",{parentName:"li"},"Unit")," value."),(0,t.yg)("li",{parentName:"ul"},"There is no public API for changing the value of this property.")),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"_action"),"\u2014 When we create a ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier")," we can provide an effectful ",(0,t.yg)("em",{parentName:"li"},"action")," of type ",(0,t.yg)("inlineCode",{parentName:"li"},"UIO[Any]")," which will be executed when the barrier is released before any of the parties continue."),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"_broken"),"\u2014 This is a mutable property which denotes that whether the barrier is broken or not:")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The default value of ",(0,t.yg)("inlineCode",{parentName:"li"},"_broken")," is ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),"."),(0,t.yg)("li",{parentName:"ul"},"When one of the ",(0,t.yg)("inlineCode",{parentName:"li"},"_waiting")," fibers is interrupted, the barrier will be broken and the value of ",(0,t.yg)("inlineCode",{parentName:"li"},"_broken")," will be changed to ",(0,t.yg)("inlineCode",{parentName:"li"},"true"),"."),(0,t.yg)("li",{parentName:"ul"},"We can access this value using ",(0,t.yg)("inlineCode",{parentName:"li"},"isBroken")," method on a ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier"),".")),(0,t.yg)("h2",{id:"operations"},"Operations"),(0,t.yg)("p",null,"Let's take a look at the operations defined on a ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier"),", then we'll drill down to the important ones:"),(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Method"),(0,t.yg)("th",{parentName:"tr",align:null},"Definition"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"parties: Int")),(0,t.yg)("td",{parentName:"tr",align:null},"The number of parties required to trip this barrier.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"waiting: UIO[Int]")),(0,t.yg)("td",{parentName:"tr",align:null},"The number of parties currently waiting at the barrier.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"await: IO[Unit, Int]")),(0,t.yg)("td",{parentName:"tr",align:null},"Waits until all parties have invoked await on this barrier. Fails if the barrier is broken.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"reset: UIO[Unit]")),(0,t.yg)("td",{parentName:"tr",align:null},"Resets the barrier to its initial state. Breaks any waiting party.")),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"isBroken: UIO[Boolean]")),(0,t.yg)("td",{parentName:"tr",align:null},"Queries if this barrier is in a broken state.")))),(0,t.yg)("h3",{id:"reset"},"reset"),(0,t.yg)("p",null,"When we reset a barrier, the barrier will be reset to its ",(0,t.yg)("em",{parentName:"p"},"initial state")," through the following uninterruptible steps:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"It breaks any waiting party. So all ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers will be interrupted correspondingly."),(0,t.yg)("li",{parentName:"ul"},"The barrier will be ready to synchronize the next groups of parties. So further ",(0,t.yg)("inlineCode",{parentName:"li"},"await")," calls will be accepted for synchronization. This is why we say that the barrier is cyclic."),(0,t.yg)("li",{parentName:"ul"},"Number of ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers will be reset to zero, so there is no fiber in a ",(0,t.yg)("em",{parentName:"li"},"waiting")," state."),(0,t.yg)("li",{parentName:"ul"},"If the barrier is broken, it will set its ",(0,t.yg)("em",{parentName:"li"},"broken status")," to ",(0,t.yg)("inlineCode",{parentName:"li"},"false"),".")),(0,t.yg)("p",null,"Here is an example shows the mechanism of ",(0,t.yg)("inlineCode",{parentName:"p"},"reset")," method:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent.CyclicBarrier\n\nobject MainApp extends ZIOAppDefault {\n  def task(name: String, b: CyclicBarrier) =\n    for {\n      _ <- ZIO.debug(s"task-$name: started my job right now!")\n      _ <- b.await\n      _ <- ZIO.debug(\n             s"task-$name: the barrier is now released, " +\n               s"so I\'m going to exit immediately!"\n           )\n    } yield ()\n\n  def run =\n    for {\n      b  <- CyclicBarrier.make(3)\n      f1 <- task("1", b).fork\n      f2 <- task("2", b).fork\n      f3 <-\n        (ZIO.sleep(1.second) *> task("3", b))\n          .onInterrupt(\n            ZIO.debug(\n              "task-3: I started my job with some delay! " +\n                "so before getting the chance to await on the barrier, " +\n                "the reset operation interrupted me!"\n            )\n          )\n          .fork\n      _ <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n      _ <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n      _ <- b.waiting.debug("waiting fibers before reset")\n      _ <- ZIO.whenZIO(f3.status.map(_.isInstanceOf[Fiber.Status.Running]))(b.reset)\n      _ <- b.waiting.debug("waiting fibers after reset")\n      _ <- f1.join\n      _ <- f2.join\n      _ <- f3.join\n    } yield ()\n}\n')),(0,t.yg)("h3",{id:"await"},"await"),(0,t.yg)("p",null,"When we call ",(0,t.yg)("inlineCode",{parentName:"p"},"await")," on a ",(0,t.yg)("inlineCode",{parentName:"p"},"CyclicBarrier"),", it will return a value of type ",(0,t.yg)("inlineCode",{parentName:"p"},"IO[Unit, Int]")," through the following uninterruptible steps:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"If the barrier is broken, it will fail with the type of ",(0,t.yg)("inlineCode",{parentName:"li"},"Unit"),"."),(0,t.yg)("li",{parentName:"ul"},"Then, it will wait until all parties have invoked ",(0,t.yg)("inlineCode",{parentName:"li"},"await")," on this barrier:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"If the number of ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers reaches the number of ",(0,t.yg)("em",{parentName:"li"},"parties"),":",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"First, the optional ",(0,t.yg)("em",{parentName:"li"},"action")," effect will be performed."),(0,t.yg)("li",{parentName:"ul"},"Before resuming all ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers, the barrier will be reset to its ",(0,t.yg)("em",{parentName:"li"},"initial state")," using the ",(0,t.yg)("inlineCode",{parentName:"li"},"reset")," method."),(0,t.yg)("li",{parentName:"ul"},"Accordingly, all parties that are in ",(0,t.yg)("em",{parentName:"li"},"waiting")," state due to the call to ",(0,t.yg)("inlineCode",{parentName:"li"},"await")," method will resume and continue processing."))),(0,t.yg)("li",{parentName:"ul"},"If the number of ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers is not reached the number of ",(0,t.yg)("em",{parentName:"li"},"parties"),", it will suspend the fiber (and that fiber will become one of the ",(0,t.yg)("em",{parentName:"li"},"waiting")," fibers) until all parties have invoked ",(0,t.yg)("inlineCode",{parentName:"li"},"await")," on this barrier. During this process, if any waiting fibers are interrupted, ",(0,t.yg)("a",{parentName:"li",href:"#barrier-breakage-model"},"the barrier will be broken"),".")))),(0,t.yg)("h3",{id:"barrier-breakage-model"},"Barrier Breakage Model"),(0,t.yg)("p",null,"A barrier can be broken in one of the following cases:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"The ",(0,t.yg)("inlineCode",{parentName:"li"},"CyclicBarrier")," uses an ",(0,t.yg)("em",{parentName:"li"},"all-or-none breakage model")," for failed synchronization attempts: If a fiber leaves a barrier point prematurely because of interruption, failure, or timeout, all other fibers waiting at that barrier point will break other parties."),(0,t.yg)("li",{parentName:"ol"},"Manual reset of a barrier will break all waiting parties.")),(0,t.yg)("p",null,"An example:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.concurrent.CyclicBarrier\nimport zio.test.TestClock\n\nfor {\n  barrier   <- CyclicBarrier.make(100)\n  f1        <- barrier.await.timeout(1.second).fork\n  f2        <- barrier.await.fork\n  _         <- f1.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  _         <- f2.status.repeatWhile(!_.isInstanceOf[Fiber.Status.Suspended])\n  isBroken1 <- barrier.isBroken\n  _         <- TestClock.adjust(1.second)\n  isBroken2 <- barrier.isBroken\n  res1      <- f1.await\n  res2      <- f2.await\n} yield assert(!isBroken1 && isBroken2)\n")))}g.isMDXComponent=!0}}]);