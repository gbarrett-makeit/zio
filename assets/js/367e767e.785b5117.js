"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[47408],{95788:(e,r,t)=>{t.d(r,{Iu:()=>y,yg:()=>g});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},y=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,g=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return t?n.createElement(g,l(l({ref:r},y),{},{components:t})):n.createElement(g,l({ref:r},y))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13276:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=t(45072),a=(t(11504),t(95788));const i={id:"retrying",title:"Retrying",sidebar_label:"4. Retrying"},l=void 0,o={unversionedId:"reference/error-management/recovering/retrying",id:"reference/error-management/recovering/retrying",title:"Retrying",description:"When we are building applications we want to be resilient in the face of a transient failure. This is where we need to retry to overcome these failures.",source:"@site/docs/reference/error-management/recovering/retrying.md",sourceDirName:"reference/error-management/recovering",slug:"/reference/error-management/recovering/retrying",permalink:"/reference/error-management/recovering/retrying",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/recovering/retrying.md",tags:[],version:"current",frontMatter:{id:"retrying",title:"Retrying",sidebar_label:"4. Retrying"},sidebar:"reference-sidebar",previous:{title:"3. Folding",permalink:"/reference/error-management/recovering/folding"},next:{title:"5. Timing out",permalink:"/reference/error-management/recovering/timing-out"}},c={},s=[{value:"<code>ZIO#retry</code>",id:"zioretry",level:2},{value:"<code>ZIO#retryN</code>",id:"zioretryn",level:2},{value:"<code>ZIO#retryOrElse</code>",id:"zioretryorelse",level:2},{value:"<code>ZIO#retryOrElseEither</code>",id:"zioretryorelseeither",level:2},{value:"<code>ZIO#retryUntil</code>/<code>ZIO#retryUntilZIO</code>",id:"zioretryuntilzioretryuntilzio",level:2},{value:"<code>ZIO#retryUntilEqual</code>",id:"zioretryuntilequal",level:2},{value:"<code>ZIO#retryWhile</code>/<code>ZIO#retryWhileZIO</code>",id:"zioretrywhilezioretrywhilezio",level:2},{value:"<code>ZIO#retryWhileEquals</code>",id:"zioretrywhileequals",level:2}],y={toc:s},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"When we are building applications we want to be resilient in the face of a transient failure. This is where we need to retry to overcome these failures."),(0,a.yg)("p",null,"There are a number of useful methods on the ZIO data type for retrying failed effects:"),(0,a.yg)("h2",{id:"zioretry"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retry")),(0,a.yg)("p",null,"The most basic of these is ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#retry"),", which takes a ",(0,a.yg)("inlineCode",{parentName:"p"},"Schedule")," and returns a new effect that will retry the first effect if it fails, according to the specified policy:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def retry[R1 <: R, S](policy: => Schedule[R1, E, S]): ZIO[R1, E, A]\n}\n")),(0,a.yg)("p",null,"In this example, we try to read from a file. If we fail to do that, it will try five more times:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval retriedOpenFile: ZIO[Any, IOException, Array[Byte]] =\n  readFile("primary.data").retry(Schedule.recurs(5))\n')),(0,a.yg)("h2",{id:"zioretryn"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryN")),(0,a.yg)("p",null,"In case of failure, a ZIO effect can be retried as many times as specified:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval file = readFile("primary.data").retryN(5)\n')),(0,a.yg)("h2",{id:"zioretryorelse"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryOrElse")),(0,a.yg)("p",null,"The next most powerful function is ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#retryOrElse"),", which allows specification of a fallback to use, if the effect does not succeed with the specified policy:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def retryOrElse[R1 <: R, A1 >: A, S, E1](\n    policy: => Schedule[R1, E, S],\n    orElse: (E, S) => ZIO[R1, E1, A1]\n  ): ZIO[R1, E1, A1] =\n}\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"orElse")," is the recovery function that has two inputs:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The last error message"),(0,a.yg)("li",{parentName:"ol"},"Schedule output")),(0,a.yg)("p",null,"So based on these two values, we can decide what to do as the fallback operation. Let's try an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    Random\n      .nextIntBounded(11)\n      .flatMap { n =>\n        if (n < 9)\n          ZIO.fail(s"$n is less than 9!").debug("failed")\n        else\n          ZIO.succeed(n).debug("succeeded")\n      }\n      .retryOrElse(\n        policy = Schedule.recurs(5),\n        orElse = (lastError, scheduleOutput: Long) =>\n          ZIO.debug(s"after $scheduleOutput retries, we couldn\'t succeed!") *>\n            ZIO.debug(s"the last error message we received was: $lastError") *>\n            ZIO.succeed(-1)\n      )\n      .debug("the final result")\n}\n')),(0,a.yg)("h2",{id:"zioretryorelseeither"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryOrElseEither")),(0,a.yg)("p",null,"This operator is almost the same as the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"ZIO#retryOrElse"))," except it will return either result of the original or the fallback operation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait LocalConfig\ntrait RemoteConfig\n\ndef readLocalConfig: ZIO[Any, Throwable, LocalConfig] = ???\ndef readRemoteConfig: ZIO[Any, Throwable, RemoteConfig] = ???\n\nval result: ZIO[Any, Throwable, Either[RemoteConfig, LocalConfig]] =\n  readLocalConfig.retryOrElseEither(\n    schedule0 = Schedule.fibonacci(1.seconds),\n    orElse = (_, _: Duration) => readRemoteConfig\n  )\n")),(0,a.yg)("h2",{id:"zioretryuntilzioretryuntilzio"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryUntil"),"/",(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryUntilZIO")),(0,a.yg)("p",null,"We can retry an effect until a condition on the error channel is satisfied:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def retryUntil(f: E => Boolean): ZIO[R, E, A]\n  def retryUntilZIO[R1 <: R](f: E => URIO[R1, Boolean]): ZIO[R1, E, A]\n}\n")),(0,a.yg)("p",null,"Assume we have defined the following remote service call:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait  ServiceError extends Exception\ncase object TemporarilyUnavailable extends ServiceError\ncase object DataCorrupted          extends ServiceError\n\ndef remoteService: ZIO[Any, ServiceError, Unit] = ???\n")),(0,a.yg)("p",null,"In the following example, we repeat the failed remote service call until we reach the ",(0,a.yg)("inlineCode",{parentName:"p"},"DataCorrupted")," error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"remoteService.retryUntil(_ == DataCorrupted)\n")),(0,a.yg)("p",null,"To provide an effectful predicate we use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#retryUntilZIO")," operator."),(0,a.yg)("h2",{id:"zioretryuntilequal"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryUntilEqual")),(0,a.yg)("p",null,"Like the previous operator, it tries until its error is equal to the specified error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"remoteService.retryUntilEquals(DataCorrupted)\n")),(0,a.yg)("h2",{id:"zioretrywhilezioretrywhilezio"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryWhile"),"/",(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryWhileZIO")),(0,a.yg)("p",null,"Unlike the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#retryUntil")," it will retry the effect while its error satisfies the specified predicate:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def retryWhile(f: E => Boolean): ZIO[R, E, A]\n  def retryWhileZIO[R1 <: R](f: E => URIO[R1, Boolean]): ZIO[R1, E, A]\n}\n")),(0,a.yg)("p",null,"In the following example, we repeat the failed remote service call while we have the ",(0,a.yg)("inlineCode",{parentName:"p"},"TemporarilyUnavailable")," error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"remoteService.retryWhile(_ == TemporarilyUnavailable)\n")),(0,a.yg)("p",null,"To provide an effectful predicate we use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#retryWhileZIO")," operator."),(0,a.yg)("h2",{id:"zioretrywhileequals"},(0,a.yg)("inlineCode",{parentName:"h2"},"ZIO#retryWhileEquals")),(0,a.yg)("p",null,"Like the previous operator, it tries while its error is equal to the specified error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"remoteService.retryWhileEquals(TemporarilyUnavailable)\n")))}d.isMDXComponent=!0}}]);