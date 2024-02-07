"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[21354],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>g});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(p,".").concat(m)]||d[m]||y[m]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(45072),o=(r(11504),r(95788));const i={id:"index",title:"Introduction to ZIO Crypto",sidebar_label:"ZIO Crypto"},a=void 0,s={unversionedId:"zio-crypto/index",id:"zio-crypto/index",title:"Introduction to ZIO Crypto",description:"Fast, secure cryptographic primitives in a ZIO & ZIO Streams friendly package. ZIO Crypto is a ZIO-idiomatic wrapper over Java's basic cryptographic functions. It provides hashing, secure random generation, and HMAC signatures and verifications.",source:"@site/docs/zio-crypto/index.md",sourceDirName:"zio-crypto",slug:"/zio-crypto/",permalink:"/zio-crypto/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-crypto/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Crypto",sidebar_label:"ZIO Crypto"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Constraintless",permalink:"/zio-constraintless/"},next:{title:"Secure Random",permalink:"/zio-crypto/secure-random"}},p={},c=[{value:"Project Goals",id:"project-goals",level:2},{value:"Cryptographic Implementations and Dependencies",id:"cryptographic-implementations-and-dependencies",level:3},{value:"NIST-Recommendations and Correctness",id:"nist-recommendations-and-correctness",level:3},{value:"Installation",id:"installation",level:2}],l={toc:c},d="wrapper";function y(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Fast, secure cryptographic primitives in a ZIO & ZIO Streams friendly package. ZIO Crypto is a ZIO-idiomatic wrapper over Java's basic cryptographic functions. It provides hashing, secure random generation, and HMAC signatures and verifications."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Experimental-yellowgreen.svg",alt:"Experimental"}))," ",(0,o.yg)("img",{parentName:"p",src:"https://github.com/zio/zio-crypto/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,o.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-crypto_2.12/"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-crypto_2.12.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,o.yg)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-crypto_2.12/"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-crypto_2.12.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-crypto"},(0,o.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-crypto?style=social",alt:"ZIO Crypto"}))),(0,o.yg)("h2",{id:"project-goals"},"Project Goals"),(0,o.yg)("h3",{id:"cryptographic-implementations-and-dependencies"},"Cryptographic Implementations and Dependencies"),(0,o.yg)("p",null,"We wish to have as few dependencies as possible this project. So, when cryptographic primitives are available via Java built-ins, we opt to use them."),(0,o.yg)("p",null,"However, more than not having dependencies, we do not want to offer implementations of any cryptographic primitives. So, when a new primitive is required and not available via a Java built-in, we use a package. Services using these new packages should be added under new ",(0,o.yg)("inlineCode",{parentName:"p"},"zio.crypto")," Maven packages. "),(0,o.yg)("h3",{id:"nist-recommendations-and-correctness"},"NIST-Recommendations and Correctness"),(0,o.yg)("p",null,"We wish to offer the best-practice algorithms according to National Institute of Standards and Technology (NIST)."),(0,o.yg)("p",null,"One common form of error in security is using a non-recommended algorithm with the correct interface. In an effort to keep our library easy-to-use, we try to limit the number of algorithms offered to NIST-recommended algorithms and limit less well-known and less well-used algorithms."),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-crypto" % "0.0.0+120-8d0af0b1-SNAPSHOT"\n')))}y.isMDXComponent=!0}}]);