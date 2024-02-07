"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3208],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>f});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(r),d=a,f=y["".concat(l,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const o={id:"rio",title:"RIO"},i=void 0,p={unversionedId:"reference/core/zio/rio",id:"reference/core/zio/rio",title:"RIO",description:"RIO[R, A] is a type alias for ZIO[R, Throwable, A], which represents an effect that requires an R, and may fail with a Throwable value, or succeed with an A.",source:"@site/docs/reference/core/zio/rio.md",sourceDirName:"reference/core/zio",slug:"/reference/core/zio/rio",permalink:"/reference/core/zio/rio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/zio/rio.md",tags:[],version:"current",frontMatter:{id:"rio",title:"RIO"},sidebar:"reference-sidebar",previous:{title:"Task",permalink:"/reference/core/zio/task"},next:{title:"IO",permalink:"/reference/core/zio/io"}},l={},c=[],s={toc:c},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"RIO[R, A]")," is a type alias for ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[R, Throwable, A]"),", which represents an effect that requires an ",(0,a.yg)("inlineCode",{parentName:"p"},"R"),", and may fail with a ",(0,a.yg)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"In Scala, the ",(0,a.yg)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.yg)("p",null,"Let's see how ",(0,a.yg)("inlineCode",{parentName:"p"},"RIO")," is defined:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"type RIO[-R, +A]  = ZIO[R, Throwable, A]\n")),(0,a.yg)("p",null,"So ",(0,a.yg)("inlineCode",{parentName:"p"},"RIO")," is equal to a ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," that requires ",(0,a.yg)("inlineCode",{parentName:"p"},"R"),", and whose error channel is ",(0,a.yg)("inlineCode",{parentName:"p"},"Throwable"),". It succeeds with ",(0,a.yg)("inlineCode",{parentName:"p"},"A"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.yg)("em",{parentName:"mdxAdmonitionTitle"},"Principle of Least Power")),(0,a.yg)("p",{parentName:"admonition"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On the other hand, the type aliases are a way of specializing the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," type for less powerful workflows. "),(0,a.yg)("p",{parentName:"admonition"},"Often, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the appropriate specialized type alias."),(0,a.yg)("p",{parentName:"admonition"},"So there is no need to convert type aliases to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);