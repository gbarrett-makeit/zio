"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return t?a.createElement(d,i(i({ref:n},p),{},{components:t})):a.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=k;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},30155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(87462),r=(t(67294),t(3905));const l={id:"creating-sinks",title:"Creating Sinks"},i=void 0,o={unversionedId:"reference/stream/zsink/creating-sinks",id:"reference/stream/zsink/creating-sinks",title:"Creating Sinks",description:"The zio.stream provides numerous kinds of sinks to use.",source:"@site/docs/reference/stream/zsink/creating-sinks.md",sourceDirName:"reference/stream/zsink",slug:"/reference/stream/zsink/creating-sinks",permalink:"/reference/stream/zsink/creating-sinks",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zsink/creating-sinks.md",tags:[],version:"current",frontMatter:{id:"creating-sinks",title:"Creating Sinks"},sidebar:"reference-sidebar",previous:{title:"Introduction to ZSink",permalink:"/reference/stream/zsink/"},next:{title:"Sink Operations",permalink:"/reference/stream/zsink/operations"}},s={},u=[{value:"Common Constructors",id:"common-constructors",level:3},{value:"From Success and Failure",id:"from-success-and-failure",level:3},{value:"Collecting",id:"collecting",level:3},{value:"Folding",id:"folding",level:3},{value:"From ZIO",id:"from-zio",level:3},{value:"From File",id:"from-file",level:3},{value:"From OutputStream",id:"from-outputstream",level:3},{value:"From Queue",id:"from-queue",level:3},{value:"From Hub",id:"from-hub",level:3}],p={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.stream")," provides numerous kinds of sinks to use."),(0,r.kt)("h3",{id:"common-constructors"},"Common Constructors"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.head")," \u2014 It creates a sink containing the first element, returns ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," for empty streams:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Int, Option[Int]] = ZSink.head[Int]\nval head: ZIO[Any, Nothing, Option[Int]]             = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(1)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.last")," \u2014 It consumes all elements of a stream and returns the last element of the stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink: ZSink[Any, Nothing, Int, Int, Option[Int]] = ZSink.last[Int]\nval last: ZIO[Any, Nothing, Option[Int]]                 = ZStream(1, 2, 3, 4).run(sink)\n// Result: Some(4)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.count")," \u2014 A sink that consumes all elements of the stream and counts the number of elements fed to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Long] = ZSink.count\nval count: ZIO[Any, Nothing, Long]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 5\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.sum")," \u2014 A sink that consumes all elements of the stream and sums incoming numeric values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink : ZSink[Any, Nothing, Int, Nothing, Int] = ZSink.sum[Int]\nval sum: ZIO[Any, Nothing, Int]                 = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: 15\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.take")," \u2014 A sink that takes the specified number of values and result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk")," data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink  : ZSink[Any, Nothing, Int, Int, Chunk[Int]] = ZSink.take[Int](3)\nval stream: ZIO[Any, Nothing, Chunk[Int]]             = ZStream(1, 2, 3, 4, 5).run(sink)\n// Result: Chunk(1, 2, 3)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.drain")," \u2014 A sink that ignores its inputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val drain: ZSink[Any, Nothing, Any, Nothing, Unit] = ZSink.drain\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.timed")," \u2014 A sink that executes the stream and times its execution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val timed: ZSink[Any, Nothing, Any, Nothing, Duration] = ZSink.timed\nval stream: ZIO[Any, Nothing, Long] =\n  ZStream(1, 2, 3, 4, 5)\n    .schedule(Schedule.fixed(2.seconds))\n    .run(timed)\n    .map(_.getSeconds)\n// Result: 10\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.foreach")," \u2014 A sink that executes the provided effectful function for every element fed to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val printer: ZSink[Any, IOException, Int, Int, Unit] =\n  ZSink.foreach((i: Int) => printLine(i))\nval stream : ZIO[Any, IOException, Unit]             =\n  ZStream(1, 2, 3, 4, 5).run(printer)\n")),(0,r.kt)("h3",{id:"from-success-and-failure"},"From Success and Failure"),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," data type, we can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"fail")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"succeed")," methods."),(0,r.kt)("p",null,"A sink that doesn't consume any element from its upstream and succeeds with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"Int")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val succeed: ZSink[Any, Any, Any, Nothing, Int] = ZSink.succeed(5)\n")),(0,r.kt)("p",null,"A sink that doesn't consume any element from its upstream and intentionally fails with a message of ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val failed : ZSink[Any, String, Any, Nothing, Nothing] = ZSink.fail("fail!")\n')),(0,r.kt)("h3",{id:"collecting"},"Collecting"),(0,r.kt)("p",null,"To create a sink that collects all elements of a stream into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk[A]"),", we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.collectAll"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val stream    : UStream[Int]    = ZStream(1, 2, 3, 4, 5)\nval collection: UIO[Chunk[Int]] = stream.run(ZSink.collectAll[Int])\n// Output: Chunk(1, 2, 3, 4, 5)\n")),(0,r.kt)("p",null,"We can collect all elements into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToSet: ZSink[Any, Nothing, Int, Nothing, Set[Int]] = ZSink.collectAllToSet[Int]\nval stream: ZIO[Any, Nothing, Set[Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToSet)\n// Output: Set(1, 3, 2, 5)\n")),(0,r.kt)("p",null,"Or we can collect and merge them into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map[K, A]")," using a merge function. In the following example, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"(_:Int) % 3")," to determine map keys and, we provide ",(0,r.kt)("inlineCode",{parentName:"p"},"_ + _")," function to merge multiple elements with the same key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val collectAllToMap: ZSink[Any, Nothing, Int, Nothing, Map[Int, Int]] = ZSink.collectAllToMap((_: Int) % 3)(_ + _)\nval stream: ZIO[Any, Nothing, Map[Int, Int]] = ZStream(1, 3, 2, 3, 1, 5, 1).run(collectAllToMap)\n// Output: Map(1 -> 3, 0 -> 6, 2 -> 7)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.collectAllN")," \u2014 Collects incoming values into chunk of maximum size of ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5).run(\n  ZSink.collectAllN(3)\n)\n// Output: Chunk(1,2,3), Chunk(4,5)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.collectAllWhile")," \u2014 Accumulates incoming elements into a chunk as long as they verify the given predicate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 0, 6, 7).run(\n  ZSink.collectAllWhile(_ != 0)\n)\n// Output: Chunk(1,2), Chunk(4), Chunk(6,7)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.collectAllToMapN")," \u2014 Creates a sink accumulating incoming values into maps of up to ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," keys. Elements are mapped to keys using the function ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"; elements mapped to the same key will be merged with the function ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def collectAllToMapN[Err, In, K](\n    n: Long\n  )(key: In => K)(f: (In, In) => In): ZSink[Any, Err, In, Err, In, Map[K, In]]\n}\n")),(0,r.kt)("p",null,"Let's do an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 0, 4, 5).run(\n  ZSink.collectAllToMapN[Nothing, Int, Int](10)(_ % 3)(_ + _)\n)\n// Output: Map(1 -> 5, 2 -> 7, 0 -> 0)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.collectAllToSetN")," \u2014 Creates a sink accumulating incoming values into sets of maximum size ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 1, 2, 1, 3, 0, 5, 0, 2).run(\n  ZSink.collectAllToSetN(3)\n)\n// Output: Set(1,2,3), Set(0,5,2), Set(1)\n")),(0,r.kt)("h3",{id:"folding"},"Folding"),(0,r.kt)("p",null,"Basic fold accumulation of received elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZSink.foldLeft[Int, Int](0)(_ + _)\n")),(0,r.kt)("p",null,"A fold with short-circuiting has a termination predicate that determines the end of the folding process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream.iterate(0)(_ + 1).run(\n  ZSink.fold(0)(sum => sum <= 10)((acc, n: Int) => acc + n)\n)\n// Output: 15\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.foldWeighted")," \u2014 Creates a sink that folds incoming elements until reaches the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," worth of elements determined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"costFn"),", then the pipeline emits the computed value and restarts the folding process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def foldWeighted[Err, In, S](z: S)(costFn: (S, In) => Long, max: Long)(\n    f: (S, In) => S\n  ): ZSink[Any, Err, In, Err, In, S] = ???\n}\n")),(0,r.kt)("p",null,"In the following example, each time we consume a new element we return one as the weight of that element using cost function. After three times, the sum of the weights reaches to the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," number, and the folding process restarted. So we expect this pipeline to group each three elements in one ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(3, 2, 4, 1, 5, 6, 2, 1, 3, 5, 6)\n  .transduce(\n    ZSink\n      .foldWeighted(Chunk[Int]())(\n        (_, _: Int) => 1,\n        3\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(3,2,4),Chunk(1,5,6),Chunk(2,1,3),Chunk(5,6)\n")),(0,r.kt)("p",null,"Another example is when we want to group element which sum of them equal or less than a specific number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 4, 2, 1, 1, 1, 0, 2, 1, 2)\n  .transduce(\n    ZSink\n      .foldWeighted(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5\n      ) { (acc, el) =>\n        acc ++ Chunk(el)\n      }\n  )\n// Output: Chunk(1,2,2),Chunk(4),Chunk(2,1,1,1,0),Chunk(2,1,2)\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.foldWeighted")," cannot decompose elements whose weight is more than the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," number. So elements that have an individual cost larger than ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," will force the pipeline to cross the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," cost. In the last example, if the source stream was ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream(1, 2, 2, 4, 2, 1, 6, 1, 0, 2, 1, 2)")," the output would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk(1,2,2),Chunk(4),Chunk(2,1),Chunk(6),Chunk(1,0,2,1),Chunk(2)"),". As we see, the ",(0,r.kt)("inlineCode",{parentName:"p"},"6")," element crossed the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," cost."),(0,r.kt)("p",{parentName:"admonition"},"To decompose these elements, we should use ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.foldWeightedDecompose")," function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.foldWeightedDecompose")," \u2014 As we saw in the previous section, we need a way to decompose elements \u2014 whose cause the output aggregate cross the ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," \u2014 into smaller elements. This version of fold takes ",(0,r.kt)("inlineCode",{parentName:"p"},"decompose")," function and enables us to do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def foldWeightedDecompose[Err, In, S](\n     z: S\n   )(costFn: (S, In) => Long, max: Long, decompose: In => Chunk[In])(\n     f: (S, In) => S\n   ): ZSink[Any, Err, In, Err, In, S] = ???\n}\n")),(0,r.kt)("p",null,"In the following example, we are break down elements that are bigger than 5, using ",(0,r.kt)("inlineCode",{parentName:"p"},"decompose")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 2, 2, 1, 6, 1, 7, 2, 1, 2)\n  .transduce(\n    ZSink\n      .foldWeightedDecompose(Chunk[Int]())(\n        (_, i: Int) => i.toLong,\n        5,\n        (i: Int) =>\n          if (i > 5) Chunk(i - 1, 1) else Chunk(i)\n      )((acc, el) => acc ++ Chunk.succeed(el))\n  )\n// Ouput: Chunk(1,2,2),Chunk(2,1),Chunk(5),Chunk(1,1),Chunk(5),Chunk(1,1,2,1),Chunk(2)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.foldUntil")," \u2014 Creates a sink that folds incoming element until specific ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," elements have been folded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"ZStream(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)\n  .run(ZSink.foldUntil(0, 3)(_ + _))\n// Output: 6, 15, 24, 10\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZSink.foldLeft")," \u2014 This sink will fold the inputs until the stream ends, resulting in one element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val stream: ZIO[Any, Nothing, Int] = \n  ZStream(1, 2, 3, 4).run(ZSink.foldLeft[Int, Int](0)(_ + _))\n// Output: 10\n")),(0,r.kt)("h3",{id:"from-zio"},"From ZIO"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.fromZIO")," creates a single-value sink produced from a ZIO workflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val sink = ZSink.fromZIO(ZIO.succeed(1))\n")),(0,r.kt)("h3",{id:"from-file"},"From File"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.fromPath")," creates a file sink that consumes byte chunks and writes them to the specified file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'def fileSink(path: Path): ZSink[Any, Throwable, String, Byte, Long] =\n  ZSink\n    .fromPath(path)\n    .contramapChunks[String](_.flatMap(_.getBytes))\n\nval result = ZStream("Hello", "ZIO", "World!")\n  .intersperse("\\n")\n  .run(fileSink(Paths.get("file.txt")))\n')),(0,r.kt)("h3",{id:"from-outputstream"},"From OutputStream"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.fromOutputStream")," creates a sink that consumes byte chunks and write them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"OutputStream"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZStream("Application", "Error", "Logs")\n  .intersperse("\\n")\n  .run(\n    ZSink\n      .fromOutputStream(java.lang.System.err)\n      .contramapChunks[String](_.flatMap(_.getBytes))\n  )\n')),(0,r.kt)("h3",{id:"from-queue"},"From Queue"),(0,r.kt)("p",null,"A queue has a finite or infinite buffer size, so they are useful in situations where we need to consume streams as fast as we can, and then do some batching operations on consumed messages. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.fromQueue")," we can create a sink that is backed by a queue; it enqueues each element into the specified queue:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp: IO[IOException, Unit] =\n  for {\n    queue    <- Queue.bounded[Int](32)\n    producer <- ZStream\n      .iterate(1)(_ + 1)\n      .schedule(Schedule.fixed(200.millis))\n      .run(ZSink.fromQueue(queue))\n      .fork\n    consumer <- queue.take.flatMap(printLine(_)).forever\n    _        <- producer.zip(consumer).join\n  } yield ()\n")),(0,r.kt)("h3",{id:"from-hub"},"From Hub"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous data type in which publisher can publish their messages to that and subscribers can subscribe to take messages from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink.fromHub")," takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub")," and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZSink")," which publishes each element to that ",(0,r.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,r.kt)("p",null,"In the following example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"sink")," consumes elements of the ",(0,r.kt)("inlineCode",{parentName:"p"},"producer")," stream and publishes them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hub"),". We have two consumers that are subscribed to that hub and they are taking its elements forever:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val myApp: ZIO[Any, IOException, Unit] =\n  for {\n    promise <- Promise.make[Nothing, Unit]\n    hub <- Hub.bounded[Int](1)\n    sink <- ZIO.succeed(ZSink.fromHub(hub))\n    producer <- ZStream\n      .iterate(0)(_ + 1)\n      .schedule(Schedule.fixed(1.seconds))\n      .run(sink)\n      .fork\n    consumers <- ZIO.scoped {\n      hub.subscribe.zip(hub.subscribe).flatMap { case (left, right) =>\n        for {\n          _ <- promise.succeed(())\n          f1 <- left.take.flatMap(e => printLine(s"Left Queue: $e")).forever.fork\n          f2 <- right.take.flatMap(e => printLine(s"Right Queue: $e")).forever.fork\n          _ <- f1.zip(f2).join\n        } yield ()\n      }\n    }.fork\n    _ <- promise.await\n    _ <- producer.zip(consumers).join\n  } yield ()\n')))}c.isMDXComponent=!0}}]);