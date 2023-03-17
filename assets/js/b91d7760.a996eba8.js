"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[98164],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?i.createElement(f,l(l({ref:t},c),{},{components:a})):i.createElement(f,l({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57873:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(87462),r=(a(67294),a(3905));const n={id:"index",title:"Introduction to izumi-reflect",sidebar_label:"izmumi-reflect"},l="izumi-reflect",o={unversionedId:"izumi-reflect/index",id:"izumi-reflect/index",title:"Introduction to izumi-reflect",description:"@quote: Looks a bit similar to TypeTag",source:"@site/docs/izumi-reflect/index.md",sourceDirName:"izumi-reflect",slug:"/izumi-reflect/",permalink:"/izumi-reflect/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/izumi-reflect/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to izumi-reflect",sidebar_label:"izmumi-reflect"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Interop Twitter",permalink:"/zio-interop-twitter/"},next:{title:"Overview",permalink:"/zio-jdbc/"}},s={},p=[{value:"Why <code>izumi-reflect</code>",id:"why-izumi-reflect",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Build",id:"build",level:2},{value:"See also",id:"see-also",level:2},{value:"<code>gzoller/scala-reflection</code>",id:"gzollerscala-reflection",level:3},{value:"<code>airframe-surface</code>",id:"airframe-surface",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"izumi-reflect"},"izumi-reflect"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"@quote: Looks a bit similar to TypeTag")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"izumi-reflect")," is a fast, lightweight, portable and efficient alternative for ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeTag")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-reflect"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"izumi-reflect")," is a lightweight model of Scala type system and provides a simulator of the important parts of the Scala typechecker."),(0,r.kt)("h2",{id:"why-izumi-reflect"},"Why ",(0,r.kt)("inlineCode",{parentName:"h2"},"izumi-reflect")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," compiles faster, runs a lot faster than ",(0,r.kt)("inlineCode",{parentName:"li"},"scala-reflect")," and is fully immutable and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala/bug/issues/10766"},"thread-safe"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," supports Scala 2.11, 2.12, 2.13 and ",(0,r.kt)("strong",{parentName:"li"},"Scala 3"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," supports Scala.js and Scala Native,"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," works well with ",(0,r.kt)("a",{parentName:"li",href:"https://www.graalvm.org/reference-manual/native-image/"},"GraalVM Native Image"),","),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," allows you to obtain tags for unapplied type constructors (",(0,r.kt)("inlineCode",{parentName:"li"},"F[_]"),") and combine them at runtime.")),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"izumi-reflect"),' model of the Scala type system is not 100% precise, but "good enough" for the vast majority of the usecases.'),(0,r.kt)("p",null,"Known limitations are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Recursive type bounds (F-bounded types) are not preserved and may produce false positives,"),(0,r.kt)("li",{parentName:"ol"},"Existential types, both written with wildcards and ",(0,r.kt)("inlineCode",{parentName:"li"},"forSome")," may produce unexpected results, the support is limited,"),(0,r.kt)("li",{parentName:"ol"},"Path-Dependent Types are based on variable names and may cause unexpected results when variables with different names have the same type or vice-versa (vs. Scala compiler)"),(0,r.kt)("li",{parentName:"ol"},"This-Types such as ",(0,r.kt)("inlineCode",{parentName:"li"},"X.this.type")," are ignored and identical to ",(0,r.kt)("inlineCode",{parentName:"li"},"X")),(0,r.kt)("li",{parentName:"ol"},"At the moment Scala 3 port does not support Path-Dependent Types, and Structural Refinements. This will be fixed in the future."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"izumi-reflect")," is less powerful than ",(0,r.kt)("inlineCode",{parentName:"li"},"scala-reflect"),": it does not preserve fields and methods when it's not necessary for equality and subtype checks, it does not preserve code trees, internal compiler data structures, etc.")),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Set ",(0,r.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/izumi-reflect_2.13/latest/izumi/reflect/DebugProperties$.html#izumi.reflect.debug.macro.rtti:String(%22izumi.reflect.debug.macro.rtti%22)"},(0,r.kt)("inlineCode",{parentName:"a"},"-Dizumi.reflect.debug.macro.rtti=true"))," to enable debug output during compilation when tags are constructed and at runtime when they are compared."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sbt -Dizumi.reflect.debug.macro.rtti=true\n")),(0,r.kt)("p",null,"To see debug output when compiling in Intellij, add the above flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"VM options")," in ",(0,r.kt)("a",{parentName:"p",href:"jetbrains://idea/settings?name=Build%2C+Execution%2C+Deployment--Compiler--Scala+Compiler--Scala+Compile+Server"},"Preferences -> Build, Execution, Deployment -> Compiler -> Scala Compiler -> Scala Compile Server")),(0,r.kt)("p",null,"You may also set it in ",(0,r.kt)("inlineCode",{parentName:"p"},".jvmopts")," file during development. (",(0,r.kt)("inlineCode",{parentName:"p"},".jvmopts")," properties will not apply to Intellij compile server, only to sbt)"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dizumi.reflect.debug.macro.rtti.assertions=true")," to enable additional assertions."),(0,r.kt)("p",null,"Other useful system properties are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/dev.zio/izumi-reflect_2.13/latest/izumi/reflect/DebugProperties$.html#izumi.reflect.rtti.optimized.equals:String(%22izumi.reflect.rtti.optimized.equals%22)"},(0,r.kt)("inlineCode",{parentName:"a"},"izumi.reflect.rtti.optimized.equals"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javadoc.io/doc/dev.zio/izumi-reflect_2.13/latest/izumi/reflect/DebugProperties$.html#izumi.reflect.rtti.cache.compile:String(%22izumi.reflect.rtti.cache.compile%22)"},(0,r.kt)("inlineCode",{parentName:"a"},"izumi.reflect.rtti.cache.compile")))),(0,r.kt)("h2",{id:"build"},"Build"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," is generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/7mind/sbtgen"},"sbtgen"),". During development you may not want to mess with ScalaJS and ScalaNative, you may generate a pure-JVM Scala project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./sbtgen.sc\n")),(0,r.kt)("p",null,"Once you finished tinkering with the code you may want to generate full project and test it for all the platforms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./sbtgen.sc --js --native\nsbt +test\n")),(0,r.kt)("p",null,"To develop using Scala 2 invoke sbtgen with a scala version argument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./sbtgen.sc 2 // 2.13\n./sbtgen.sc 2.12 // 2.12\n")),(0,r.kt)("p",null,"Likewise with Scala 3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./sbtgen.sc 3\n")),(0,r.kt)("p",null,"In Intellij, you may also set Scala version by changing the option ",(0,r.kt)("inlineCode",{parentName:"p"},"sbt -> sbt settings -> Open cross-compiled projects Scala 3 / Scala 2 projects as:")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("h3",{id:"gzollerscala-reflection"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/gzoller/scala-reflection"},(0,r.kt)("inlineCode",{parentName:"a"},"gzoller/scala-reflection"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scala 3 only"),(0,r.kt)("li",{parentName:"ul"},"No support for subtype checks"),(0,r.kt)("li",{parentName:"ul"},"Requires compiler plugin"),(0,r.kt)("li",{parentName:"ul"},"Type lambdas are not supported"),(0,r.kt)("li",{parentName:"ul"},"Preserves field information")),(0,r.kt)("h3",{id:"airframe-surface"},(0,r.kt)("a",{parentName:"h3",href:"https://wvlet.org/airframe/docs/airframe-surface"},(0,r.kt)("inlineCode",{parentName:"a"},"airframe-surface"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scala 2 and Scala 3"),(0,r.kt)("li",{parentName:"ul"},"No support for subtype checks"),(0,r.kt)("li",{parentName:"ul"},"Preserves field information")))}m.isMDXComponent=!0}}]);