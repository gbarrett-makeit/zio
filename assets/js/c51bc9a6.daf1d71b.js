"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[31528],{95788:(e,n,r)=>{r.d(n,{Iu:()=>d,yg:()=>y});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(r),g=i,y=s["".concat(p,".").concat(g)]||s[g]||f[g]||o;return r?t.createElement(y,a(a({ref:n},d),{},{components:r})):t.createElement(y,a({ref:n},d))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54848:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(45072),i=(r(11504),r(95788));const o={id:"overriding-dependency-graph",title:"Overriding Dependency Graph"},a=void 0,l={unversionedId:"reference/di/overriding-dependency-graph",id:"reference/di/overriding-dependency-graph",title:"Overriding Dependency Graph",description:"We can create a ZIO application by providing a local or a global environment, or a combination:",source:"@site/docs/reference/di/overriding-dependency-graph.md",sourceDirName:"reference/di",slug:"/reference/di/overriding-dependency-graph",permalink:"/reference/di/overriding-dependency-graph",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/overriding-dependency-graph.md",tags:[],version:"current",frontMatter:{id:"overriding-dependency-graph",title:"Overriding Dependency Graph"},sidebar:"reference-sidebar",previous:{title:"Dependency Memoization",permalink:"/reference/di/dependency-memoization"},next:{title:"Examples",permalink:"/reference/di/examples"}},p={},c=[{value:"Global Environment",id:"global-environment",level:2},{value:"Local Environment",id:"local-environment",level:2}],d={toc:c},s="wrapper";function f(e){let{components:n,...r}=e;return(0,i.yg)(s,(0,t.c)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"We can create a ZIO application by providing a local or a global environment, or a combination:"),(0,i.yg)("h2",{id:"global-environment"},"Global Environment"),(0,i.yg)("p",null,"It is usual when writing ZIO applications to provide layers at the end of the world. Then we provide layers to the whole ZIO application all at once. This pattern uses a single global environment for all ZIO applications:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val myApp: ZIO[ServiceA & ServiceB & ServiceC & ServiceD, Throwable, Unit] = ???\n    \n  def run = myApp.provide(a, b, c, d)\n}\n")),(0,i.yg)("h2",{id:"local-environment"},"Local Environment"),(0,i.yg)("p",null,"Occasionally, we may need to provide different environments for different parts of our application, or it may be necessary to provide a single global environment for the entire application except for some inner layers."),(0,i.yg)("p",null,"Providing a layer locally is analogous to overriding a method in an object-oriented paradigm. So we can think of that as overriding the global environment:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def myApp: ZIO[A & B & C, Throwable, Unit] = {\n    def innerApp1: ZIO[A & B & C, Throwable, Unit] = ???\n    def innerApp2: ZIO[A & C,     Throwable, Unit] = ???\n\n    innerApp1.provideSomeLayer[A & B](localC) *> innerApp2\n  }\n\n  def run = myApp.provide(globalA, globalB, globalC)\n}\n")),(0,i.yg)("p",null,"ZIO Test's ",(0,i.yg)("a",{parentName:"p",href:"/reference/test/services/live"},"Live service")," uses this pattern to provide real environment to a single part of an effect."))}f.isMDXComponent=!0}}]);