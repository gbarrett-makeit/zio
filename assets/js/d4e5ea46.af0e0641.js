"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[17733],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={id:"examples",title:"Examples"},i=void 0,p={unversionedId:"reference/error-management/examples",id:"reference/error-management/examples",title:"Examples",description:"Let's write an application that takes numerator and denominator from the user and then print the result back to the user:",source:"@site/docs/reference/error-management/examples.md",sourceDirName:"reference/error-management",slug:"/reference/error-management/examples",permalink:"/reference/error-management/examples",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/examples.md",tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"reference-sidebar",previous:{title:"Don't Reflexively Log Errors",permalink:"/reference/error-management/best-practices/logging-errors"},next:{title:"Interruption Model",permalink:"/reference/interruption/"}},l={},s=[],c={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Let's write an application that takes numerator and denominator from the user and then print the result back to the user:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      a <- readNumber("Enter the first number  (a): ")\n      b <- readNumber("Enter the second number (b): ")\n      r <- divide(a, b)\n      _ <- Console.printLine(s"a / b: $r")\n    } yield ()\n\n  def readNumber(msg: String): ZIO[Any, IOException, Int] =\n    Console.print(msg) *> Console.readLine.map(_.toInt)\n\n  def divide(a: Int, b: Int): ZIO[Any, Nothing, Int] =\n    if (b == 0)\n      ZIO.die(new ArithmeticException("divide by zero")) // unexpected error\n    else\n      ZIO.succeed(a / b)\n}\n')),(0,a.yg)("p",null,"Now let's try to enter the zero for the second number and see what happens:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'Please enter the first number  (a): 5\nPlease enter the second number (b): 0\ntimestamp=2022-02-14T09:39:53.981143209Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.ArithmeticException: divide by zero\nat MainApp$.$anonfun$divide$1(MainApp.scala:16)\nat zio.ZIO$.$anonfun$die$1(ZIO.scala:3384)\nat zio.internal.FiberContext.runUntil(FiberContext.scala:255)\nat zio.internal.FiberContext.run(FiberContext.scala:115)\nat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1130)\nat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:630)\nat java.base/java.lang.Thread.run(Thread.java:831)\nat <empty>.MainApp.divide(MainApp.scala:16)"\n')),(0,a.yg)("p",null,"As we see, because we entered the zero for the denominator, the ",(0,a.yg)("inlineCode",{parentName:"p"},"ArithmeticException")," defect, makes the application crash."),(0,a.yg)("p",null,"Defects are any ",(0,a.yg)("em",{parentName:"p"},"unexpected errors")," that we are not going to handle. They will propagate through our application stack until they crash the whole."),(0,a.yg)("p",null,"Defects have many roots, most of them are from a programming error. Errors will happen when we haven't written the application with best practices. For example, one of these practices is that we should validate the inputs before providing them to the ",(0,a.yg)("inlineCode",{parentName:"p"},"divide")," function. So if the user entered the zero as the denominator, we can retry and ask the user to return another number:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      a <- readNumber("Enter the first number  (a): ")\n      b <- readNumber("Enter the second number (b): ").repeatUntil(_ != 0)\n      r <- divide(a, b)\n      _ <- Console.printLine(s"a / b: $r")\n    } yield ()\n\n  def readNumber(msg: String): ZIO[Any, IOException, Int] =\n    Console.print(msg) *> Console.readLine.map(_.toInt)\n\n  def divide(a: Int, b: Int): ZIO[Any, Nothing, Int] = ZIO.succeed(a / b)\n}\n')),(0,a.yg)("p",null,"Another note about defects is that they are invisible, and they are not typed. We cannot expect what defects will happen by observing the typed error channel. In the above example, when we run the application and enter noninteger input, another defect, which is called ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException")," will crash the application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'Enter the first number  (a): five\ntimestamp=2022-02-18T06:36:25.984665171Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.NumberFormatException: For input string: "five"\n    at java.base/java.lang.NumberFormatException.forInputString(NumberFormatException.java:67)\n    at java.base/java.lang.Integer.parseInt(Integer.java:660)\n    at java.base/java.lang.Integer.parseInt(Integer.java:778)\n    at scala.collection.StringOps$.toInt$extension(StringOps.scala:910)\n    at MainApp$.$anonfun$readNumber$3(MainApp.scala:16)\n    at MainApp$.$anonfun$readNumber$3$adapted(MainApp.scala:16)\n  ...\n    at <empty>.MainApp.run(MainApp.scala:9)"\n')),(0,a.yg)("p",null,"The cause of this defect is also a programming error, which means we haven't validated input when parsing it. So let's try to validate the input, and make sure that it is a number. We know that if the entered input does not contain a parsable ",(0,a.yg)("inlineCode",{parentName:"p"},"Int")," the ",(0,a.yg)("inlineCode",{parentName:"p"},"String#toInt")," throws the ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException")," exception. As we want this exception to be typed, we import the ",(0,a.yg)("inlineCode",{parentName:"p"},"String#toInt")," function using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO.attempt")," constructor. Using this constructor the function signature would be as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef parseInput(input: String): ZIO[Any, Throwable, Int] =\n  ZIO.attempt(input.toInt)\n")),(0,a.yg)("p",null,"Since the ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException")," is an expected error, and we want to handle it. So we type the error channel as ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException"),"."),(0,a.yg)("p",null,"To be more specific, we would like to narrow down the error channel to the ",(0,a.yg)("inlineCode",{parentName:"p"},"NumberFormatException"),", so we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"refineToOrDie")," operator:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef parseInput(input: String): ZIO[Any, NumberFormatException, Int] =\n  ZIO.attempt(input.toInt)                 // ZIO[Any, Throwable, Int]\n    .refineToOrDie[NumberFormatException]  // ZIO[Any, NumberFormatException, Int]\n")),(0,a.yg)("p",null,"The same result can be achieved by succeeding the ",(0,a.yg)("inlineCode",{parentName:"p"},"String#toInt")," and then widening the error channel using the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#unrefineTo")," operator:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef parseInput(input: String): ZIO[Any, NumberFormatException, Int] =\n  ZIO.succeed(input.toInt)                 // ZIO[Any, Nothing, Int]\n    .unrefineTo[NumberFormatException]     // ZIO[Any, NumberFormatException, Int]\n")),(0,a.yg)("p",null,"Now, let's refactor the example with recent changes:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      a <- readNumber("Enter the first number  (a): ")\n      b <- readNumber("Enter the second number (b): ").repeatUntil(_ != 0)\n      r <- divide(a, b)\n      _ <- Console.printLine(s"a / b: $r")\n    } yield ()\n\n  def parseInput(input: String): ZIO[Any, NumberFormatException, Int] =\n    ZIO.attempt(input.toInt).refineToOrDie[NumberFormatException]\n\n  def readNumber(msg: String): ZIO[Any, IOException, Int] =\n    (Console.print(msg) *> Console.readLine.flatMap(parseInput))\n      .retryUntil(!_.isInstanceOf[NumberFormatException])\n      .refineToOrDie[IOException]\n\n  def divide(a: Int, b: Int): ZIO[Any, Nothing, Int] = ZIO.succeed(a / b)\n}\n')))}u.isMDXComponent=!0}}]);