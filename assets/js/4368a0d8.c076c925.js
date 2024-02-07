"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[57664],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>g});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=i,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(45072),i=(r(11504),r(95788));const o={id:"with-twitter",title:"How to Interop with Twitter?"},a=void 0,p={unversionedId:"guides/interop/with-twitter",id:"version-1.0.18/guides/interop/with-twitter",title:"How to Interop with Twitter?",description:"interop-twitter module provides capability to convert Twitter Future into ZIO Task.",source:"@site/versioned_docs/version-1.0.18/guides/interop/with-twitter.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-twitter",permalink:"/1.0.18/guides/interop/with-twitter",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/guides/interop/with-twitter.md",tags:[],version:"1.0.18",frontMatter:{id:"with-twitter",title:"How to Interop with Twitter?"},sidebar:"overview_sidebar",previous:{title:"How to Interop with Reactive Streams?",permalink:"/1.0.18/guides/interop/with-reactive-streams"},next:{title:"How to Interop with Guava?",permalink:"/1.0.18/guides/interop/with-guava"}},u={},l=[{value:"Example",id:"example",level:3}],s={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(c,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/zio/interop-twitter"},(0,i.yg)("inlineCode",{parentName:"a"},"interop-twitter"))," module provides capability to convert ",(0,i.yg)("a",{parentName:"p",href:"https://twitter.github.io/util/docs/com/twitter/util/Future.html"},"Twitter ",(0,i.yg)("inlineCode",{parentName:"a"},"Future"))," into ZIO ",(0,i.yg)("inlineCode",{parentName:"p"},"Task"),"."),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import com.twitter.util.Future\nimport zio.{ App, Task }\nimport zio.console._\nimport zio.interop.twitter._\n\nobject Example extends App {\n  def run(args: List[String]) = {\n    val program =\n      for {\n        _        <- putStrLn("Hello! What is your name?")\n        name     <- getStrLn\n        greeting <- Task.fromTwitterFuture(Task(greet(name)))\n        _        <- putStrLn(greeting)\n      } yield ()\n\n    program.exitCode\n  }\n\n  private def greet(name: String): Future[String] = Future.value(s"Hello, $name!")\n}\n')))}m.isMDXComponent=!0}}]);