"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28768],{95788:(e,n,r)=>{r.d(n,{Iu:()=>p,yg:()=>y});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?t.createElement(y,o(o({ref:n},p),{},{components:r})):t.createElement(y,o({ref:n},p))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41660:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(45072),i=(r(11504),r(95788));const a={id:"overview_handling_resources",title:"Handling Resources"},o=void 0,l={unversionedId:"overview/overview_handling_resources",id:"version-1.0.18/overview/overview_handling_resources",title:"Handling Resources",description:"This section looks at some of the common ways to safely handle resources using ZIO.",source:"@site/versioned_docs/version-1.0.18/overview/handling_resources.md",sourceDirName:"overview",slug:"/overview/overview_handling_resources",permalink:"/1.0.18/overview/overview_handling_resources",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/overview/handling_resources.md",tags:[],version:"1.0.18",frontMatter:{id:"overview_handling_resources",title:"Handling Resources"},sidebar:"overview_sidebar",previous:{title:"Handling Errors",permalink:"/1.0.18/overview/overview_handling_errors"},next:{title:"Basic Concurrency",permalink:"/1.0.18/overview/overview_basic_concurrency"}},s={},c=[{value:"Finalizing",id:"finalizing",level:2},{value:"Bracket",id:"bracket",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This section looks at some of the common ways to safely handle resources using ZIO."),(0,i.yg)("p",null,"ZIO's resource management features work across synchronous, asynchronous, concurrent, and other effect types, and provide strong guarantees even in the presence of failure, interruption, or defects in the application."),(0,i.yg)("h2",{id:"finalizing"},"Finalizing"),(0,i.yg)("p",null,"ZIO provides similar functionality to ",(0,i.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"finally")," with the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO#ensuring")," method. "),(0,i.yg)("p",null,"Like ",(0,i.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"finally"),", the ",(0,i.yg)("inlineCode",{parentName:"p"},"ensuring")," operation guarantees that if an effect begins executing and then terminates (for whatever reason), then the finalizer will begin executing."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val finalizer = \n  UIO.effectTotal(println("Finalizing!"))\n// finalizer: UIO[Unit] = zio.ZIO$EffectTotal@65ccae4c\n\nval finalized: IO[String, Unit] = \n  IO.fail("Failed!").ensuring(finalizer)\n// finalized: IO[String, Unit] = zio.ZIO$CheckInterrupt@5071b0bd\n')),(0,i.yg)("p",null,"The finalizer is not allowed to fail, which means that it must handle any errors internally."),(0,i.yg)("p",null,"Like ",(0,i.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"finally"),", finalizers can be nested, and the failure of any inner finalizer will not affect outer finalizers. Nested finalizers will be executed in reverse order, and linearly (not in parallel)."),(0,i.yg)("p",null,"Unlike ",(0,i.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"finally"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"ensuring")," works across all types of effects, including asynchronous and concurrent effects."),(0,i.yg)("h2",{id:"bracket"},"Bracket"),(0,i.yg)("p",null,"A common use for ",(0,i.yg)("inlineCode",{parentName:"p"},"try")," / ",(0,i.yg)("inlineCode",{parentName:"p"},"finally")," is safely acquiring and releasing resources, such as new socket connections or opened files:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val handle = openFile(name)\n\ntry {\n  processFile(handle)\n} finally closeFile(handle)\n")),(0,i.yg)("p",null,"ZIO encapsulates this common pattern with ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO#bracket"),", which allows you to specify an ",(0,i.yg)("em",{parentName:"p"},"acquire")," effect, which acquires a resource; a ",(0,i.yg)("em",{parentName:"p"},"release")," effect, which releases it; and a ",(0,i.yg)("em",{parentName:"p"},"use")," effect, which uses the resource."),(0,i.yg)("p",null,"The release effect is guaranteed to be executed by the runtime system, even in the presence of errors or interruption."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val groupedFileData: IO[IOException, Unit] = \n  openFile("data.json").bracket(closeFile(_)) { file =>\n    for {\n      data    <- decodeData(file)\n      grouped <- groupData(data)\n    } yield grouped\n  }\n')),(0,i.yg)("p",null,"Like ",(0,i.yg)("inlineCode",{parentName:"p"},"ensuring"),", brackets have compositional semantics, so if one bracket is nested inside another bracket, and the outer bracket acquires a resource, then the outer bracket's release will always be called, even if, for example, the inner bracket's release fails."),(0,i.yg)("h2",{id:"next-steps"},"Next Steps"),(0,i.yg)("p",null,"If you are comfortable with resource handling, then the next step is to learn about ",(0,i.yg)("a",{parentName:"p",href:"/1.0.18/overview/overview_basic_concurrency"},"basic concurrency"),"."))}d.isMDXComponent=!0}}]);