"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[57820],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=m(t),c=r,d=g["".concat(s,".").concat(c)]||g[c]||u[c]||o;return t?n.createElement(d,l(l({ref:a},p),{},{components:t})):n.createElement(d,l({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=t[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},80978:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(58168),r=(t(96540),t(15680));const o={id:"creating-zio-streams",title:"Creating ZIO Streams"},l=void 0,i={unversionedId:"reference/stream/zstream/creating-zio-streams",id:"reference/stream/zstream/creating-zio-streams",title:"Creating ZIO Streams",description:"There are several ways to create ZIO Stream. In this section, we are going to enumerate some of the important ways of creating ZStream.",source:"@site/docs/reference/stream/zstream/creating-zio-streams.md",sourceDirName:"reference/stream/zstream",slug:"/reference/stream/zstream/creating-zio-streams",permalink:"/reference/stream/zstream/creating-zio-streams",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zstream/creating-zio-streams.md",tags:[],version:"current",frontMatter:{id:"creating-zio-streams",title:"Creating ZIO Streams"},sidebar:"reference-sidebar",previous:{title:"Chunked Streams",permalink:"/reference/stream/zstream/streams-are-chunked-by-default"},next:{title:"Resourceful Streams",permalink:"/reference/stream/zstream/resourceful-streams"}},s={},m=[{value:"Common Constructors",id:"common-constructors",level:2},{value:"From Success and Failure",id:"from-success-and-failure",level:2},{value:"From Chunks",id:"from-chunks",level:2},{value:"From ZIO",id:"from-zio",level:2},{value:"From Asynchronous Callback",id:"from-asynchronous-callback",level:2},{value:"From Iterators",id:"from-iterators",level:2},{value:"From Iterables",id:"from-iterables",level:2},{value:"From Repetition",id:"from-repetition",level:2},{value:"From Unfolding/Pagination",id:"from-unfoldingpagination",level:2},{value:"Unfold",id:"unfold",level:3},{value:"Pagination",id:"pagination",level:3},{value:"Unfolding vs. Pagination",id:"unfolding-vs-pagination",level:3},{value:"From Wrapped Streams",id:"from-wrapped-streams",level:2},{value:"From Java IO",id:"from-java-io",level:2},{value:"From Java Stream",id:"from-java-stream",level:2},{value:"From Queue and Hub",id:"from-queue-and-hub",level:2},{value:"From Schedule",id:"from-schedule",level:2}],p={toc:m},g="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"There are several ways to create ZIO Stream. In this section, we are going to enumerate some of the important ways of creating ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream"),"."),(0,r.yg)("h2",{id:"common-constructors"},"Common Constructors"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.apply")," \u2014 Creates a pure stream from a variable list of values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Nothing, Int] = ZStream(1, 2, 3)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.unit")," \u2014 A stream that contains a single ",(0,r.yg)("inlineCode",{parentName:"p"},"Unit")," value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val unit: ZStream[Any, Nothing, Unit] = ZStream.unit\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.never")," \u2014 A stream that produces no value or fails with an error:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val never: ZStream[Any, Nothing, Nothing] = ZStream.never\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.repeat")," \u2014 A stream that repeats using the specified schedule:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val repeat: ZStream[Any, Nothing, Int] = \n  ZStream(1).repeat(Schedule.forever)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.iterate")," \u2014 Takes an initial value and applies the given function to the initial value iteratively. The initial value is the first value produced by the stream, followed by f(init), f(f(init)), ..."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val nats: ZStream[Any, Nothing, Int] = \n  ZStream.iterate(1)(_ + 1) // 1, 2, 3, ...\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.range")," \u2014 A stream from a range of integers ",(0,r.yg)("inlineCode",{parentName:"p"},"[min, max)"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val range: ZStream[Any, Nothing, Int] = ZStream.range(1, 5) // 1, 2, 3, 4\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.service","[R]")," \u2014 Create a stream that extract the requested service from the environment:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait Foo\n\nval fooStream: ZStream[Foo, Nothing, Foo] = ZStream.service[Foo]\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.scoped")," \u2014 Creates a single-valued stream from a scoped resource:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val scopedStream: ZStream[Any, Throwable, BufferedReader] =\n  ZStream.scoped(\n    ZIO.fromAutoCloseable(\n      ZIO.attemptBlocking(\n        Files.newBufferedReader(java.nio.file.Paths.get("file.txt"))\n      )\n    )\n  )\n')),(0,r.yg)("h2",{id:"from-success-and-failure"},"From Success and Failure"),(0,r.yg)("p",null,"Similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, we can create a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"fail")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"succeed")," methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val s1: ZStream[Any, String, Nothing] = ZStream.fail("Uh oh!")\nval s2: ZStream[Any, Nothing, Int]    = ZStream.succeed(5)\n')),(0,r.yg)("h2",{id:"from-chunks"},"From Chunks"),(0,r.yg)("p",null,"We can create a stream from a ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val s1 = ZStream.fromChunk(Chunk(1, 2, 3))\n// s1: ZStream[Any, Nothing, Int] = zio.stream.ZStream@65f6498a\n")),(0,r.yg)("p",null,"Or from multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunks"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val s2 = ZStream.fromChunks(Chunk(1, 2, 3), Chunk(4, 5, 6))\n// s2: ZStream[Any, Nothing, Int] = zio.stream.ZStream@46be4a03\n")),(0,r.yg)("h2",{id:"from-zio"},"From ZIO"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromZIO")," \u2014 We can create a stream from a ZIO workflow by using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromZIO")," constructor. For example, the following stream is a stream that reads a line from a user:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val readline: ZStream[Any, IOException, String] = \n  ZStream.fromZIO(Console.readLine)\n")),(0,r.yg)("p",null,"A stream that produces one random number:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val randomInt: ZStream[Any, Nothing, Int] = \n  ZStream.fromZIO(Random.nextInt)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromZIOOption")," \u2014 In some cases, depending on the result of the ZIO workflow, we should decide to emit an element or return an empty stream. In these cases, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"fromZIOOption")," constructor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def fromZIOOption[R, E, A](fa: ZIO[R, Option[E], A]): ZStream[R, E, A] = ???\n}\n")),(0,r.yg)("p",null,"Let's see an example of using this constructor. In this example, we read a string from user input, and then decide to emit that or not; If the user enters an ",(0,r.yg)("inlineCode",{parentName:"p"},"EOF")," string, we emit an empty stream, otherwise we emit the user input:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val userInput: ZStream[Any, IOException, String] = \n  ZStream.fromZIOOption(\n    Console.readLine.mapError(Option(_)).flatMap {\n      case "EOF" => ZIO.fail[Option[IOException]](None)\n      case o     => ZIO.succeed(o)\n    }\n  ) \n')),(0,r.yg)("h2",{id:"from-asynchronous-callback"},"From Asynchronous Callback"),(0,r.yg)("p",null,"Assume we have an asynchronous function that is based on callbacks. We would like to register a callbacks on that function and get back a stream of the results emitted by those callbacks. We have ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.async")," which can adapt functions that call their callbacks multiple times and emit the results over a stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Asynchronous Callback-based API\ndef registerCallback(\n    name: String,\n    onEvent: Int => Unit,\n    onError: Throwable => Unit\n): Unit = ???\n\n// Lifting an Asynchronous API to ZStream\nval stream = ZStream.async[Any, Throwable, Int] { cb =>\n  registerCallback(\n    "foo",\n    event => cb(ZIO.succeed(Chunk(event))),\n    error => cb(ZIO.fail(error).mapError(Some(_)))\n  )\n}\n')),(0,r.yg)("p",null,"The error type of the ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," function is optional, so by setting the error to the ",(0,r.yg)("inlineCode",{parentName:"p"},"None")," we can use it to signal the end of the stream."),(0,r.yg)("h2",{id:"from-iterators"},"From Iterators"),(0,r.yg)("p",null,"Iterators are data structures that allow us to iterate over a sequence of elements. Similarly, we can think of ZIO Streams as effectual Iterators; every ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," represents a collection of one or more, but effectful values."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromIteratorSucceed")," \u2014 We can convert an iterator that does not throw exception to ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," by using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromIteratorSucceed"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val s1: ZStream[Any, Throwable, Int] = ZStream.fromIterator(Iterator(1, 2, 3))\nval s2: ZStream[Any, Throwable, Int] = ZStream.fromIterator(Iterator.range(1, 4))\nval s3: ZStream[Any, Throwable, Int] = ZStream.fromIterator(Iterator.continually(0))\n")),(0,r.yg)("p",null,"Also, there is another constructor called ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"ZStream.fromIterator"))," that creates a stream from an iterator which may throw an exception."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromIteratorZIO")," \u2014 If we have an effectful Iterator that may throw Exception, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"fromIteratorZIO")," to convert that to the ZIO Stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import scala.io.Source\nval lines: ZStream[Any, Throwable, String] = \n  ZStream.fromIteratorZIO(ZIO.attempt(Source.fromFile("file.txt").getLines()))\n')),(0,r.yg)("p",null,"Using this method is not good for resourceful effects like above, so it's better to rewrite that using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromIteratorScoped")," function."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromIteratorScoped")," \u2014 Using this constructor we can convert a scoped iterator to ZIO Stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val lines: ZStream[Any, Throwable, String] = \n  ZStream.fromIteratorScoped(\n    ZIO.fromAutoCloseable(\n      ZIO.attempt(scala.io.Source.fromFile("file.txt"))\n    ).map(_.getLines())\n  )\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromJavaIterator")," \u2014 It is the Java version of these constructors which create a stream from Java iterator that may throw an exception. We can convert any Java collection to an iterator and then lift them to the ZIO Stream."),(0,r.yg)("p",null,"For example, to convert the Java Stream to the ZIO Stream, ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," has a ",(0,r.yg)("inlineCode",{parentName:"p"},"fromJavaStream")," constructor which convert the Java Stream to the Java Iterator and then convert that to the ZIO Stream using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaIterator")," constructor:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def fromJavaStream[A](stream: => java.util.stream.Stream[A]): ZStream[Any, Throwable, A] =\n  ZStream.fromJavaIterator(stream.iterator())\n")),(0,r.yg)("p",null,"Similarly, ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," has ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaIteratorSucceed"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaIteratorZIO")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaIteratorScoped")," constructors."),(0,r.yg)("h2",{id:"from-iterables"},"From Iterables"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromIterable")," \u2014 We can create a stream from ",(0,r.yg)("inlineCode",{parentName:"p"},"Iterable")," collection of values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val list = ZStream.fromIterable(List(1, 2, 3))\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromIterableZIO")," \u2014 If we have an effect producing a value of type ",(0,r.yg)("inlineCode",{parentName:"p"},"Iterable")," we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"fromIterableZIO")," constructor to create a stream of that effect."),(0,r.yg)("p",null,"Assume we have a database that returns a list of users using ",(0,r.yg)("inlineCode",{parentName:"p"},"Task"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait Database {\n  def getUsers: Task[List[User]]\n}\n\nobject Database {\n  def getUsers: ZIO[Database, Throwable, List[User]] = \n    ZIO.serviceWithZIO[Database](_.getUsers)\n}\n")),(0,r.yg)("p",null,"As this operation is effectful, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromIterableZIO")," to convert the result to the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val users: ZStream[Database, Throwable, User] = \n  ZStream.fromIterableZIO(Database.getUsers)\n")),(0,r.yg)("h2",{id:"from-repetition"},"From Repetition"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.repeat")," \u2014 Repeats the provided value infinitely:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val repeatZero: ZStream[Any, Nothing, Int] = ZStream.repeat(0)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.repeatWith")," \u2014 This is another variant of ",(0,r.yg)("inlineCode",{parentName:"p"},"repeat"),", which repeats according to the provided schedule. For example, the following stream produce zero value every second:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.Clock._\nimport zio.Duration._\nimport zio.Random._\nimport zio.Schedule\nval repeatZeroEverySecond: ZStream[Any, Nothing, Int] = \n  ZStream.repeatWithSchedule(0, Schedule.spaced(1.seconds))\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.repeatZIO")," \u2014 Assume we have an effectful API, and we need to call that API and create a stream from the result of that. We can create a stream from that effect that repeats forever."),(0,r.yg)("p",null,"Let's see an example of creating a stream of random numbers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val randomInts: ZStream[Any, Nothing, Int] =\n  ZStream.repeatZIO(Random.nextInt)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.repeatZIOOption")," \u2014 We can repeatedly evaluate the given effect and terminate the stream based on some conditions."),(0,r.yg)("p",null,'Let\'s create a stream repeatedly from user inputs until user enter "EOF" string:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val userInputs: ZStream[Any, IOException, String] = \n  ZStream.repeatZIOOption(\n    Console.readLine.mapError(Option(_)).flatMap {\n      case "EOF" => ZIO.fail[Option[IOException]](None)\n      case o     => ZIO.succeed(o)\n    }\n  )\n')),(0,r.yg)("p",null,"Here is another interesting example of using ",(0,r.yg)("inlineCode",{parentName:"p"},"repeatZIOOption"),"; In this example, we are draining an ",(0,r.yg)("inlineCode",{parentName:"p"},"Iterator")," to create a stream of that iterator:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def drainIterator[A](it: Iterator[A]): ZStream[Any, Throwable, A] =\n  ZStream.repeatZIOOption {\n    ZIO.attempt(it.hasNext).mapError(Some(_)).flatMap { hasNext =>\n      if (hasNext) ZIO.attempt(it.next()).mapError(Some(_))\n      else ZIO.fail(None)\n    }\n  }\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.tick")," \u2014  A stream that emits Unit values spaced by the specified duration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Nothing, Unit] = \n  ZStream.tick(1.seconds)\n")),(0,r.yg)("p",null,"There are some other variant of repetition API like ",(0,r.yg)("inlineCode",{parentName:"p"},"repeatZIOWith"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"repeatZIOOption"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"repeatZIOChunk")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"repeatZIOChunkOption"),"."),(0,r.yg)("h2",{id:"from-unfoldingpagination"},"From Unfolding/Pagination"),(0,r.yg)("p",null,"In functional programming, ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," is dual to ",(0,r.yg)("inlineCode",{parentName:"p"},"fold"),"."),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"fold")," we can process a data structure and build a return value. For example, we can process a ",(0,r.yg)("inlineCode",{parentName:"p"},"List[Int]")," and return the sum of all its elements."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," represents an operation that takes an initial value and generates a recursive data structure, one-piece element at a time by using a given state function. For example, we can create a natural number by using ",(0,r.yg)("inlineCode",{parentName:"p"},"one")," as the initial element and the ",(0,r.yg)("inlineCode",{parentName:"p"},"inc")," function as the state function."),(0,r.yg)("h3",{id:"unfold"},"Unfold"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.unfold")," \u2014 ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," has ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," function, which is defined as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def unfold[S, A](s: S)(f: S => Option[(A, S)]): ZStream[Any, Nothing, A] = ???\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"s")," \u2014 An initial state value"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"f")," \u2014 A state function ",(0,r.yg)("inlineCode",{parentName:"li"},"f")," that will be applied to the initial state ",(0,r.yg)("inlineCode",{parentName:"li"},"s"),". If the result of this application is ",(0,r.yg)("inlineCode",{parentName:"li"},"None")," the stream will end, otherwise the result is ",(0,r.yg)("inlineCode",{parentName:"li"},"Some"),", so the next element in the stream would be ",(0,r.yg)("inlineCode",{parentName:"li"},"A")," and the current state of transformation changed to the new ",(0,r.yg)("inlineCode",{parentName:"li"},"S"),", this new state is the basis of the next unfold process.")),(0,r.yg)("p",null,"For example, we can a stream of natural numbers using ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.unfold"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val nats: ZStream[Any, Nothing, Int] = ZStream.unfold(1)(n => Some((n, n + 1)))\n")),(0,r.yg)("p",null,"We can write ",(0,r.yg)("inlineCode",{parentName:"p"},"countdown")," function using ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def countdown(n: Int) = ZStream.unfold(n) {\n  case 0 => None\n  case s => Some((s, s - 1))\n}\n")),(0,r.yg)("p",null,"Running this function with an input value of 3 returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," which contains 3, 2, 1 values."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.unfoldZIO")," \u2014 ",(0,r.yg)("inlineCode",{parentName:"p"},"unfoldZIO")," is an effectful version of ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold"),". It helps us to perform ",(0,r.yg)("em",{parentName:"p"},"effectful state transformation")," when doing unfold operation."),(0,r.yg)("p",null,"Let's write a stream of lines of input from a user until the user enters the ",(0,r.yg)("inlineCode",{parentName:"p"},"exit")," command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val inputs: ZStream[Any, IOException, String] = ZStream.unfoldZIO(()) { _ =>\n  Console.readLine.map {\n    case "exit"  => None\n    case i => Some((i, ()))\n  } \n}   \n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.unfoldChunk"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.unfoldChunkZIO")," are other variants of ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," operations but for ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," data type."),(0,r.yg)("h3",{id:"pagination"},"Pagination"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.paginate")," \u2014 This is similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold"),", but allows the emission of values to end one step further. For example the following stream emits ",(0,r.yg)("inlineCode",{parentName:"p"},"0, 1, 2, 3")," elements:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream = ZStream.paginate(0) { s =>\n  s -> (if (s < 3) Some(s + 1) else None)\n}\n")),(0,r.yg)("p",null,"Similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," API, ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream")," has various other forms as well as ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.paginateZIO"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.paginateChunk")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.paginateChunkZIO"),"."),(0,r.yg)("h3",{id:"unfolding-vs-pagination"},"Unfolding vs. Pagination"),(0,r.yg)("p",null,"One might ask what is the difference between ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"paginate")," combinators? When we should prefer one over another? So, let's find the answer to this question by doing another example."),(0,r.yg)("p",null,"Assume we have a paginated API that returns an enormous amount of data in a paginated fashion. When we call that API, it returns a data type ",(0,r.yg)("inlineCode",{parentName:"p"},"ResultPage")," which contains the first-page result and, it also contains a flag indicating whether that result is the last one, or we have more data on the next page:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class PageResult(results: Chunk[RowData], isLast: Boolean)\n\ndef listPaginated(pageNumber: Int): ZIO[Any, Throwable, PageResult] = ZIO.fail(???)\n")),(0,r.yg)("p",null,"We want to convert this API to a stream of ",(0,r.yg)("inlineCode",{parentName:"p"},"RowData")," events. For the first attempt, we might think we can do it by using ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," operation as below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val firstAttempt: ZStream[Any, Throwable, RowData] = \n  ZStream.unfoldChunkZIO(0) { pageNumber =>\n    for {\n      page <- listPaginated(pageNumber)\n    } yield\n      if (page.isLast) None\n      else Some((page.results, pageNumber + 1))\n  }\n")),(0,r.yg)("p",null,"But it doesn't work properly; it doesn't include the last page result. So let's do a trick and to perform another API call to include the last page results:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val secondAttempt: ZStream[Any, Throwable, RowData] = \n  ZStream.unfoldChunkZIO(Option[Int](0)) {\n    case None => ZIO.none // We already hit the last page\n    case Some(pageNumber) => // We did not hit the last page yet\n     for {\n        page <- listPaginated(pageNumber)\n      } yield Some(page.results, if (page.isLast) None else Some(pageNumber + 1))\n  }\n")),(0,r.yg)("p",null,"This works and contains all the results of returned pages. It works but as we saw, ",(0,r.yg)("inlineCode",{parentName:"p"},"unfold")," is not friendliness to retrieve data from paginated APIs."),(0,r.yg)("p",null,"We need to do some hacks and extra works to include results from the last page. This is where ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.paginate")," operation comes to play, it helps us to convert a paginated API to ZIO stream in a more ergonomic way. Let's rewrite this solution by using ",(0,r.yg)("inlineCode",{parentName:"p"},"paginate"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val finalAttempt: ZStream[Any, Throwable, RowData] = \n  ZStream.paginateChunkZIO(0) { pageNumber =>\n    for {\n      page <- listPaginated(pageNumber)\n    } yield page.results -> (if (!page.isLast) Some(pageNumber + 1) else None)\n  }\n")),(0,r.yg)("h2",{id:"from-wrapped-streams"},"From Wrapped Streams"),(0,r.yg)("p",null,"Sometimes we have an effect that contains a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream"),", we can unwrap the embedded stream and produce a stream from those effects. If the stream is wrapped with the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," effect, we use ",(0,r.yg)("inlineCode",{parentName:"p"},"unwrap"),", and if it is wrapped with scoped ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," we use ",(0,r.yg)("inlineCode",{parentName:"p"},"unwrapScoped"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val wrappedWithZIO: UIO[ZStream[Any, Nothing, Int]] = \n  ZIO.succeed(ZStream(1, 2, 3))\nval s1: ZStream[Any, Nothing, Int] = \n  ZStream.unwrap(wrappedWithZIO)\n\nval wrappedWithZIOScoped = ZIO.succeed(ZStream(1, 2, 3))\nval s2: ZStream[Any, Nothing, Int] = \n  ZStream.unwrapScoped(wrappedWithZIOScoped)\n")),(0,r.yg)("h2",{id:"from-java-io"},"From Java IO"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromPath")," \u2014 Create ZIO Stream from a file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import java.nio.file.Paths\nval file: ZStream[Any, Throwable, Byte] = \n  ZStream.fromPath(Paths.get("file.txt"))\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromInputStream")," \u2014 Creates a stream from a ",(0,r.yg)("inlineCode",{parentName:"p"},"java.io.InputStream"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val stream: ZStream[Any, IOException, Byte] = \n  ZStream.fromInputStream(new FileInputStream("file.txt"))\n')),(0,r.yg)("p",null,"Note that the InputStream will not be explicitly closed after it is exhausted. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromInputStreamZIO"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromInputStreamScoped")," instead."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromInputStreamZIO")," \u2014 Creates a stream from a ",(0,r.yg)("inlineCode",{parentName:"p"},"java.io.InputStream"),". Ensures that the InputStream is closed after it is exhausted:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val stream: ZStream[Any, IOException, Byte] = \n  ZStream.fromInputStreamZIO(\n    ZIO.attempt(new FileInputStream("file.txt"))\n      .refineToOrDie[IOException]\n  )\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromInputStreamScoped")," \u2014 Creates a stream from a scoped ",(0,r.yg)("inlineCode",{parentName:"p"},"java.io.InputStream")," value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val scoped: ZIO[Scope, IOException, FileInputStream] =\n  ZIO.fromAutoCloseable(\n    ZIO.attempt(new FileInputStream("file.txt"))\n  ).refineToOrDie[IOException]\n\nval stream: ZStream[Any, IOException, Byte] = \n  ZStream.fromInputStreamScoped(scoped)\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromResource")," \u2014 Create a stream from resource file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val stream: ZStream[Any, IOException, Byte] =\n  ZStream.fromResource("file.txt")\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ZStream.fromReader")," \u2014 Creates a stream from a ",(0,r.yg)("inlineCode",{parentName:"p"},"java.io.Reader"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val stream: ZStream[Any, IOException, Char] = \n   ZStream.fromReader(new FileReader("file.txt"))\n')),(0,r.yg)("p",null,"ZIO Stream also has ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromReaderZIO")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromReaderScoped")," variants."),(0,r.yg)("h2",{id:"from-java-stream"},"From Java Stream"),(0,r.yg)("p",null,"We can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaStreamTotal")," to convert a Java Stream to ZIO Stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Throwable, Int] = \n  ZStream.fromJavaStream(java.util.stream.Stream.of(1, 2, 3))\n")),(0,r.yg)("p",null,"ZIO Stream also has ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaStream"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaStreamZIO")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromJavaStreamScoped")," variants."),(0,r.yg)("h2",{id:"from-queue-and-hub"},"From Queue and Hub"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Queue")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Hub")," are two asynchronous messaging data types in ZIO that can be converted into the ZIO Stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def fromQueue[O](\n    queue: Dequeue[O],\n    maxChunkSize: Int = DefaultChunkSize\n  ): ZStream[Any, Nothing, O] = ???\n\n  def fromHub[A](\n    hub: Hub[A]\n  ): ZStream[Any, Nothing, A] = ???\n}\n")),(0,r.yg)("p",null,"If they contain ",(0,r.yg)("inlineCode",{parentName:"p"},"Chunk")," of elements, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromChunk...")," constructors to create a stream from those elements (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromChunkQueue"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"for {\n  promise <- Promise.make[Nothing, Unit]\n  hub     <- Hub.unbounded[Chunk[Int]]\n  scoped = ZStream.fromChunkHubScoped(hub).tap(_ => promise.succeed(()))\n  stream  = ZStream.unwrapScoped(scoped)\n  fiber   <- stream.foreach(printLine(_)).fork\n  _       <- promise.await\n  _       <- hub.publish(Chunk(1, 2, 3))\n  _       <- fiber.join\n} yield ()\n")),(0,r.yg)("p",null,"Also, If we need to shutdown a ",(0,r.yg)("inlineCode",{parentName:"p"},"Queue")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"Hub"),", once the stream is closed, we should use ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.from..Shutdown")," constructors (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"ZStream.fromQueueWithShutdown"),")."),(0,r.yg)("p",null,"Also, we can lift a ",(0,r.yg)("inlineCode",{parentName:"p"},"TQueue")," to the ZIO Stream:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"for {\n  q <- STM.atomically(TQueue.unbounded[Int])\n  stream = ZStream.fromTQueue(q)\n  fiber <- stream.foreach(printLine(_)).fork\n  _     <- STM.atomically(q.offer(1))\n  _     <- STM.atomically(q.offer(2))\n  _     <- fiber.join\n} yield ()\n")),(0,r.yg)("h2",{id:"from-schedule"},"From Schedule"),(0,r.yg)("p",null,"We can create a stream from a ",(0,r.yg)("inlineCode",{parentName:"p"},"Schedule")," that does not require any further input. The stream will emit an element for each value output from the schedule, continuing for as long as the schedule continues:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val stream: ZStream[Any, Nothing, Long] =\n  ZStream.fromSchedule(Schedule.spaced(1.second) >>> Schedule.recurs(10))\n")))}u.isMDXComponent=!0}}]);