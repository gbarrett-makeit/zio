"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[35220],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),y=o,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},33368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(45072),o=(n(11504),n(95788));const i={id:"zio-arrow",title:"ZIO Arrow"},a=void 0,p={unversionedId:"ecosystem/community/zio-arrow",id:"ecosystem/community/zio-arrow",title:"ZIO Arrow",description:"ZIO Arrow provides the ZArrow effect, which is a high-performance composition effect for the ZIO ecosystem.",source:"@site/docs/ecosystem/community/zio-arrow.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/zio-arrow",permalink:"/ecosystem/community/zio-arrow",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/zio-arrow.md",tags:[],version:"current",frontMatter:{id:"zio-arrow",title:"ZIO Arrow"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO AMQP",permalink:"/ecosystem/community/zio-amqp"},next:{title:"ZIO AWS S3",permalink:"/ecosystem/community/zio-aws-s3"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(m,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/zio-mesh/zio-arrow/"},"ZIO Arrow")," provides the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," effect, which is a high-performance composition effect for the ZIO ecosystem."),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow[E, A, B]")," is an effect representing a computation parametrized over the input (",(0,o.yg)("inlineCode",{parentName:"p"},"A"),"), and the output (",(0,o.yg)("inlineCode",{parentName:"p"},"B"),") that may fail with an ",(0,o.yg)("inlineCode",{parentName:"p"},"E"),". Arrows focus on ",(0,o.yg)("strong",{parentName:"p"},"composition")," and ",(0,o.yg)("strong",{parentName:"p"},"high-performance computation"),". They are like simple functions, but they are lifted into the ",(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," context."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," delivers three main capabilities:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"}," High-Performance")," \u2014 ",(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," exploits ",(0,o.yg)("inlineCode",{parentName:"p"},"JVM")," internals to dramatically decrease the number of allocations and dispatches, yielding an unprecedented runtime performance.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Abstract interface")," \u2014 ",(0,o.yg)("inlineCode",{parentName:"p"},"Arrow")," is a more abstract data type, than ZIO Monad. It's more abstract than ZIO Streams. In a nutshell, ",(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," allows a function-like interface that can have both different inputs and different outputs.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Easy Integration")," \u2014 ",(0,o.yg)("inlineCode",{parentName:"p"},"ZArrow")," can both input and output ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO Monad")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO Stream"),", simplifying application development with different ZIO Effect types."))),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.github.neurodyne" %% "zio-arrow" % "0.2.1"\n')),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"In this example we are going to write a repetitive task of reading a number from standard input and then power by 2 and then print the result:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.arrow.ZArrow\nimport zio.arrow.ZArrow._\nimport zio.console._\nimport zio.{ExitCode, URIO}\n\nimport java.io.IOException\n\nobject ArrowExample extends zio.App {\n\n  val isPositive : ZArrow[Nothing, Int, Boolean]     = ZArrow((_: Int) > 0)\n  val toStr      : ZArrow[Nothing, Any, String]      = ZArrow((i: Any) => i.toString)\n  val toInt      : ZArrow[Nothing, String, Int]      = ZArrow((i: String) => i.toInt)\n  val getLine    : ZArrow[IOException, Any, String]  = ZArrow.liftM((_: Any) => getStrLn.provide(Console.live))\n  val printStr   : ZArrow[IOException, String, Unit] = ZArrow.liftM((line: String) => putStr(line).provide(Console.live))\n  val printLine  : ZArrow[IOException, String, Unit] = ZArrow.liftM((line: String) => putStrLn(line).provide(Console.live))\n  val power2     : ZArrow[Nothing, Int, Double]      = ZArrow((i: Int) => Math.pow(i, 2))\n  val enterNumber: ZArrow[Nothing, Unit, String]     = ZArrow((_: Unit) => "Enter positive number (-1 to exit): ")\n  val goodbye    : ZArrow[Nothing, Any, String]      = ZArrow((_: Any) => "Goodbye!")\n\n  val app: ZArrow[IOException, Unit, Boolean] =\n    enterNumber >>> printStr >>> getLine >>> toInt >>>\n      ifThenElse(isPositive)(\n        power2 >>> toStr >>> printLine >>> ZArrow((_: Any) => true)\n      )(\n        ZArrow((_: Any) => false)\n      )\n\n  val myApp = whileDo(app)(ZArrow(_ => ())) >>> goodbye >>> printLine\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.run(()).exitCode\n}\n')),(0,o.yg)("p",null,"Let's see an example of running this program:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Enter positive number (-1 to exit): 25\n625.0\nEnter positive number (-1 to exit): 8\n64.0\nEnter positive number (-1 to exit): -1\nGoodbye!\n")),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=L8AEj6IRNEE"},"Blazing Fast, Pure Effects without Monads")," by John De Goes (Dec 2018)")))}u.isMDXComponent=!0}}]);