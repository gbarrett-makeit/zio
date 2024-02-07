"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28076],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>f});var i=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(45072),r=(n(11504),n(95788));const a={id:"clock",title:"TestClock"},o=void 0,l={unversionedId:"reference/test/services/clock",id:"reference/test/services/clock",title:"TestClock",description:"In most cases we want unit tests to be as fast as possible. Waiting for real time to pass by is a real killer for this.",source:"@site/docs/reference/test/services/clock.md",sourceDirName:"reference/test/services",slug:"/reference/test/services/clock",permalink:"/reference/test/services/clock",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/services/clock.md",tags:[],version:"current",frontMatter:{id:"clock",title:"TestClock"},sidebar:"reference-sidebar",previous:{title:"TestConsole",permalink:"/reference/test/services/console"},next:{title:"TestRandom",permalink:"/reference/test/services/random"}},s={},c=[{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3},{value:"Example 3",id:"example-3",level:3},{value:"Example 4",id:"example-4",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In most cases we want unit tests to be as fast as possible. Waiting for real time to pass by is a real killer for this. "),(0,r.yg)("p",null,"ZIO exposes a ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock")," that can control the time. We can deterministically and efficiently ",(0,r.yg)("strong",{parentName:"p"},"test effects involving the passage of time")," without actually having to wait for the full amount of time to pass."),(0,r.yg)("p",null,"Calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," and methods derived from it will semantically block until the clock time is set/adjusted to on or after the time the effect is scheduled to run."),(0,r.yg)("p",null,"Instead of waiting for actual time to pass, ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," and methods implemented in terms of it schedule effects to take place at a given clock time. Users can adjust the clock time using the ",(0,r.yg)("inlineCode",{parentName:"p"},"adjust")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"setTime")," methods, and all effects scheduled to take place on or before that time will automatically be run in order."),(0,r.yg)("p",null,"For example, here is how we can test ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO#timeout")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.test._\n\nfor {\n  fiber  <- ZIO.sleep(5.minutes).timeout(1.minute).fork\n  _      <- TestClock.adjust(1.minute)\n  result <- fiber.join\n} yield assertTrue(result.isEmpty)\n")),(0,r.yg)("p",null,"Note how we forked the fiber that ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," was invoked on. Calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," and methods derived from it will semantically block until the time is set to on or after the time they are scheduled to run. "),(0,r.yg)("p",null,"If we didn't fork the fiber on which we called sleep we would never get to set the time on the line below. Thus, a useful pattern when using ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock")," is to fork the effect being tested, then adjust the clock time, and finally verify that the expected effects have been performed."),(0,r.yg)("p",null,"Clock time is just like a clock on the wall, except that in our ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock"),", the clock is broken. Instead of moving by itself, the clock time only changes when adjusted or set by the user, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"adjust")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"setTime")," methods. The clock time never changes by itself."),(0,r.yg)("p",null,"When the clock is adjusted, any effects scheduled to run on or before the new clock time will automatically be run, in order."),(0,r.yg)("p",null,"For example, here is how we can test an effect that recurs with a fixed delay:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.Queue\nimport zio.test._\n\nfor {\n  q <- Queue.unbounded[Unit]\n  _ <- q.offer(()).delay(60.minutes).forever.fork\n  a <- q.poll.map(_.isEmpty)\n  _ <- TestClock.adjust(60.minutes)\n  b <- q.take.as(true)\n  c <- q.poll.map(_.isEmpty)\n  _ <- TestClock.adjust(60.minutes)\n  d <- q.take.as(true)\n  e <- q.poll.map(_.isEmpty)\n} yield assertTrue(a && b && c && d && e)\n")),(0,r.yg)("p",null,"Here we verify that no effect is performed before the recurrence period, that an effect is performed after the recurrence period, and that the effect is performed exactly once. "),(0,r.yg)("p",null,"The key thing to note here is that after each recurrence the next recurrence is scheduled to occur at the appropriate time in the future, so when we adjust the clock by 60 minutes exactly one value is placed in the queue, and when we adjust the clock by another 60 minutes exactly one more value is placed in the queue."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"example-1"},"Example 1"),(0,r.yg)("p",null,"Thanks to the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock.adjust(1.minute)")," we moved the time instantly 1 minute."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport java.util.concurrent.TimeUnit\nimport zio.Clock.currentTime\nimport zio.test.Assertion.isGreaterThanEqualTo\n\ntest("One can move time very fast") {\n  for {\n    startTime <- currentTime(TimeUnit.SECONDS)\n    _         <- TestClock.adjust(1.minute)\n    endTime   <- currentTime(TimeUnit.SECONDS)\n  } yield assertTrue((endTime - startTime) >= 60L)\n}\n')),(0,r.yg)("h3",{id:"example-2"},"Example 2"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TestClock")," affects also all code running asynchronously that is scheduled to run after a certain time:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.Assertion.equalTo\n\ntest("One can control time as he see fit") {\n  for {\n    promise <- Promise.make[Unit, Int]\n    _       <- (ZIO.sleep(10.seconds) *> promise.succeed(1)).fork\n    _       <- TestClock.adjust(10.seconds)\n    readRef <- promise.await\n  } yield assertTrue(1 == readRef)\n}\n')),(0,r.yg)("p",null,'The above code creates a write-once cell that will be set to "1" after 10 seconds asynchronously from a different thread thanks to the call to ',(0,r.yg)("inlineCode",{parentName:"p"},"fork"),". In the end, we wait on the promise until it is set."),(0,r.yg)("p",null,"With the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock.adjust(10.seconds)")," we simulate the passing of 10 seconds of time. Because of it, we don't need to wait for the real 10 seconds to pass and thus our unit test can run faster."),(0,r.yg)("p",null,"This is a pattern that will very often be used when ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock")," are being used for testing of effects that are based on time. The fiber that needs to sleep will be forked and ",(0,r.yg)("inlineCode",{parentName:"p"},"TestClock")," will used to adjust the time so that all expected effects are run in the forked fiber."),(0,r.yg)("h3",{id:"example-3"},"Example 3"),(0,r.yg)("p",null,"A more complex example leveraging dependencies and multiple services is shown below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.test.Assertion._\nimport zio.test._\nimport zio.{test => _, _}\n\ntrait SchedulingService {\n  def schedule(promise: Promise[Unit, Int]): ZIO[Any, Exception, Boolean]\n}\n\ntrait LoggingService {\n  def log(msg: String): ZIO[Any, Exception, Unit]\n}\n\nval schedulingLayer: ZLayer[LoggingService, Nothing, SchedulingService] =\n  ZLayer.fromFunction { (loggingService: LoggingService) =>\n    new SchedulingService {\n      def schedule(promise: Promise[Unit, Int]): ZIO[Any, Exception, Boolean] =\n        (ZIO.sleep(10.seconds) *> promise.succeed(1))\n          .tap(b => loggingService.log(b.toString))\n    }\n}\n\ntest("One can control time for failing effects too") {\n  val failingLogger = ZLayer.succeed(new LoggingService {\n    override def log(msg: String): ZIO[Any, Exception, Unit] = ZIO.fail(new Exception("BOOM"))\n  })\n\n  val layer = failingLogger >>> schedulingLayer\n\n  val testCase =\n    for {\n      promise <- Promise.make[Unit, Int]\n      result <- ZIO.serviceWithZIO[SchedulingService](_.schedule(promise)).exit.fork\n      _ <- TestClock.adjust(10.seconds)\n      readRef <- promise.await\n      result <- result.join\n    } yield assertTrue((1 == readRef) && result.isFailure)\n  testCase.provideLayer(layer)\n}\n')),(0,r.yg)("p",null,"In this case, we want to test an effect with dependencies that can potentially fail with an error. To do this we need to run the effect and use assertions that expect an ",(0,r.yg)("inlineCode",{parentName:"p"},"Exit")," value."),(0,r.yg)("h3",{id:"example-4"},"Example 4"),(0,r.yg)("p",null,"The pattern with ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"await")," can be generalized when we need to wait for multiple values using a ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue"),". We simply need to put multiple values into the queue and progress the clock multiple times and there is no need to create multiple promises."),(0,r.yg)("p",null,"Even if you have a non-trivial flow of data from multiple streams that can produce at different intervals and would like to test snapshots of data at a particular point in time ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue")," can help with that."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.stream._\nimport zio.test.Assertion.equalTo\n\ntest("zipLatest") {\n  val s1 = ZStream.iterate(0)(_ + 1).schedule(Schedule.fixed(100.milliseconds))\n  val s2 = ZStream.iterate(0)(_ + 1).schedule(Schedule.fixed(70.milliseconds))\n  val s3 = s1.zipLatest(s2)\n\n  for {\n    q      <- Queue.unbounded[(Int, Int)]\n    _      <- s3.foreach(q.offer).fork\n    fiber  <- ZIO.collectAll(ZIO.replicate(4)(q.take)).fork\n    _      <- TestClock.adjust(1.second)\n    result <- fiber.join\n  } yield assertTrue(result == List(0 -> 0, 0 -> 1, 1 -> 1, 1 -> 2))\n}\n')))}d.isMDXComponent=!0}}]);