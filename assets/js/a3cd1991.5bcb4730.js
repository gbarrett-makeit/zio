"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98482],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),y=a,g=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={id:"index",title:"Introduction to Concurrent Programming in ZIO"},i=void 0,c={unversionedId:"reference/concurrency/index",id:"reference/concurrency/index",title:"Introduction to Concurrent Programming in ZIO",description:"Overview",source:"@site/docs/reference/concurrency/index.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/",permalink:"/reference/concurrency/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/concurrency/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Concurrent Programming in ZIO"},sidebar:"reference-sidebar",previous:{title:"ZState",permalink:"/reference/state-management/zstate"},next:{title:"Introduction to ZIO Fibers",permalink:"/reference/fiber/"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Implications of Locking Mechanism",id:"implications-of-locking-mechanism",level:2},{value:"Lock-free Concurrency Model",id:"lock-free-concurrency-model",level:2},{value:"Advantage of Using ZIO Concurrency",id:"advantage-of-using-zio-concurrency",level:2},{value:"Concurrency Primitives",id:"concurrency-primitives",level:2},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Others",id:"others",level:3}],p={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"Most of the time in concurrent programming we have a single state that we need to read and update concurrently. When we have multiple fibers reading or writing to the same memory location we encounter the race condition. The main goal in every concurrent program is to have a consistent view of states among all threads."),(0,a.yg)("p",null,"There are two major concurrency models which try to solve this problem:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Shared State")," \u2014 In this model, all threads communicate with each other by sharing the same memory location.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Message Passing (Distributed State)")," \u2014 This model provides primitives for sending and receiving messages, and the state is distributed. Each thread of execution has its own state. "))),(0,a.yg)("p",null,"The ",(0,a.yg)("em",{parentName:"p"},"Shared State")," model has two main solutions:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Lock-based")," \u2014 In the locking model, the general primitives for synchronization are ",(0,a.yg)("em",{parentName:"p"},"locks")," that control access to critical sections. When a thread wants to modify the critical section, it acquires the lock and says ",(0,a.yg)("em",{parentName:"p"},"I'm the only thread that is allowed to modify the state right now"),", and after its work finished it unlocks the critical section and says ",(0,a.yg)("em",{parentName:"p"},"I'm done, any other thread can modify this memory section"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Non-blocking")," \u2014 Non-blocking algorithms usually use hardware-intrinsic atomic operations like ",(0,a.yg)("inlineCode",{parentName:"p"},"compare-and-swap")," (CAS), without using any locks. This method follows an optimistic design with a transactional memory mechanism to roll back in conflict situations."))),(0,a.yg)("h2",{id:"implications-of-locking-mechanism"},"Implications of Locking Mechanism"),(0,a.yg)("p",null,"There are several drawbacks with lock-based concurrency:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Incorrect use of locks can lead to deadlocks. We need to care about the locking orders. If we don't place the locks in the right order, we may encounter a deadlock situation.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Identifying the critical section of code that is vulnerable to race conditions is overwhelming. We should always care about them and remember to lock everywhere it's required.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"It makes our software design very sophisticated to become scalable and reliable. It doesn't scale with program size and complexity.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"To prevent missing the releasing of the acquired locks, we should always care about exceptions and error handling inside locking sections. ")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The locking mechanism violates the encapsulation property of the pieces of our programs. So systems that are built on a locking mechanism are difficult to compose without knowing about their internals."))),(0,a.yg)("h2",{id:"lock-free-concurrency-model"},"Lock-free Concurrency Model"),(0,a.yg)("p",null,"As the lock-oriented programming does not compose and has lots of drawbacks, ZIO uses a ",(0,a.yg)("em",{parentName:"p"},"lock-free concurrency model")," which is a variation of non-blocking algorithms. The magic behind all of ZIO concurrency primitives is that they use the CAS (",(0,a.yg)("em",{parentName:"p"},"compare-and-set"),") operation. "),(0,a.yg)("p",null,"Let's see how the ",(0,a.yg)("inlineCode",{parentName:"p"},"modify")," function of ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," is implemented without any locking mechanism:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"case class Ref[A](value: AtomicReference[A]) { self =>\n  def modify[B](f: A => (B, A)): UIO[B] = ZIO.succeed {\n    var loop = true\n    var b: B = null.asInstanceOf[B]\n    while (loop) {\n      val current = value.get\n      val tuple   = f(current)\n      b = tuple._1\n      loop = !value.compareAndSet(current, tuple._2)\n    }\n    b\n  }\n}\n")),(0,a.yg)("p",null,"The idea behind the ",(0,a.yg)("inlineCode",{parentName:"p"},"modify")," is that a variable is only updated if it still has the same value as the time we had read the value from the original memory location. If the value has changed, it retries in the while loop until it succeeds. "),(0,a.yg)("h2",{id:"advantage-of-using-zio-concurrency"},"Advantage of Using ZIO Concurrency"),(0,a.yg)("p",null,"Let's point out the key properties of the ZIO concurrency model:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Composable")," \u2014 Due to the use of the lock-free concurrency model, ZIO brings us composable concurrency primitives and lots of great combinators in a declarative style.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," and subsequently all other ZIO concurrency primitives that are on top of these two basic primitives ",(0,a.yg)("strong",{parentName:"p"},"are not ",(0,a.yg)("em",{parentName:"strong"},"transactionally")," composable"),"."),(0,a.yg)("p",{parentName:"admonition"},"We cannot do transactional changes across two or more of such concurrency primitives. They are susceptible to race conditions and deadlocks. ",(0,a.yg)("strong",{parentName:"p"},"So don't use them if you need to perform an atomic operation on top of a composed sequence of multiple state-changing operations. In such a case use ",(0,a.yg)("a",{parentName:"strong",href:"/reference/stm/"},(0,a.yg)("inlineCode",{parentName:"a"},"STM"))," instead"),". ")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Non-blocking")," \u2014 All of the ZIO primitives are a hundred percent asynchronous and nonblocking.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Resource Safety")," \u2014 ZIO concurrency model comes with strong guarantees of resource safety. If any interruption occurs in between concurrent operations, it won't leak any resource. So it allows us to write compositional operators like timeout and racing without worrying about any leaks."))),(0,a.yg)("h2",{id:"concurrency-primitives"},"Concurrency Primitives"),(0,a.yg)("p",null,"Let's take a quick look at ZIO concurrency primitives, what they are and why they exist."),(0,a.yg)("h3",{id:"basic-operations"},"Basic Operations"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," are the two simple concurrency primitives which provide an orthogonal basis for building concurrency structures. They are assembly language of other concurrent data structures:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/reference/concurrency/ref"},"Ref"))," \u2014 ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," and all its variant like ",(0,a.yg)("a",{parentName:"p",href:"/reference/concurrency/refsynchronized"},(0,a.yg)("inlineCode",{parentName:"a"},"Ref.Synchronized"))," are building blocks for writing concurrent stateful applications. Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. So all of these ",(0,a.yg)("inlineCode",{parentName:"p"},"Ref")," primitives are atomic and thread-safe. They provide us a reliable foundation for synchronizing concurrent programs.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/reference/concurrency/promise"},"Promise"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers. This primitive is very useful when we need some point of synchronization between two or multiple fibers."))),(0,a.yg)("p",null,"By using these two simple primitives, we can build lots of other asynchronous concurrent data structures like ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Queue")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Hub"),"."),(0,a.yg)("h3",{id:"others"},"Others"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/reference/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption. ",(0,a.yg)("inlineCode",{parentName:"p"},"Semaphore")," is a generalization of a mutex. It has a certain number of permits, which can be held and released concurrently by different parties. Attempts to acquire more permits than available result in the acquiring fiber being suspended until the specified number of permits become available.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/reference/concurrency/queue"},"Queue"))," \u2014 A ",(0,a.yg)("inlineCode",{parentName:"p"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/reference/concurrency/hub"},"Hub"))," - A ",(0,a.yg)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."))))}u.isMDXComponent=!0}}]);