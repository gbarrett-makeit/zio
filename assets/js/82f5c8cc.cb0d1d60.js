"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[37797],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={id:"with-javascript",title:"How to Interop with JavaScript?",sidebar_label:"JavaScript"},o=void 0,p={unversionedId:"guides/interop/with-javascript",id:"guides/interop/with-javascript",title:"How to Interop with JavaScript?",description:"Include ZIO in your Scala.js project by adding the following to your build.sbt:",source:"@site/docs/guides/interop/with-javascript.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-javascript",permalink:"/guides/interop/with-javascript",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/interop/with-javascript.md",tags:[],version:"current",frontMatter:{id:"with-javascript",title:"How to Interop with JavaScript?",sidebar_label:"JavaScript"},sidebar:"guides-sidebar",previous:{title:"Java",permalink:"/guides/interop/with-java"},next:{title:"Monix",permalink:"/guides/interop/with-monix"}},l={},c=[{value:"Example",id:"example",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Include ZIO in your Scala.js project by adding the following to your ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'scalaJSUseMainModuleInitializer := true\nresolvers += Resolver.sonatypeRepo("snapshots")\nlibraryDependencies += "dev.zio" %%% "zio" % "2.1-RC1+91-f3ad39d9-SNAPSHOT"\n')),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"Your main function can extend ",(0,i.yg)("a",{parentName:"p",href:"../../core/zioapp.md"},(0,i.yg)("inlineCode",{parentName:"a"},"ZIOAppDefault"))," as follows."),(0,i.yg)("p",null,"This example uses ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/scala-js/scala-js-dom"},"scala-js-dom")," to access the DOM; to run the example you\nwill need to add that library as a dependency to your ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,i.yg)("p",null,"It assumes you have a ",(0,i.yg)("inlineCode",{parentName:"p"},'<div id="app">'),"  somewhere in your HTML, into which the ZIO output is written."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.TimeUnit\nimport org.scalajs.dom.{document,Element}\nimport zio._\nimport zio.Clock._\n\nobject Main extends ZIOAppDefault {\n\n  override def run = {\n    // The node into which we write our ZIO program output\n    val node: Element = dom.document.querySelector("#app")\n    for {\n      _      <- Console.printLine("Starting progress bar demo.")  // Outputs on browser console log.\n      _      <- IO.succeed(node.appendChild(target)) // "node" might provided in this page by mdoc.\n      target <- IO.succeed(document.createElement("pre"))\n      _      <- update(target).repeat(Schedule.spaced(1.seconds))\n    } yield ExitCode.success\n  }\n\n  def update(target: Element) = {\n      for {\n        time   <- currentTime(TimeUnit.SECONDS)\n        output <- ZIO.succeed(progress((time % 11).toInt, 10))\n        _      <- ZIO.succeed(target.innerHTML = output)\n      } yield ()\n  }\n\n  def progress(tick: Int, size: Int) = {\n      val bar_length = tick\n      val empty_length = size - tick\n      val bar = "#" * bar_length + " " * empty_length\n      s"$bar $bar_length%"\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);