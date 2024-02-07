"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[34308],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(45072),i=(r(11504),r(95788));const o={id:"index",title:"Introduction to ZIO Keeper",sidebar_label:"Introduction"},a=void 0,l={unversionedId:"zio-keeper/index",id:"zio-keeper/index",title:"Introduction to ZIO Keeper",description:"ZIO Keeper is a purely-functional, type-safe library for building distributed",source:"@site/docs/zio-keeper/index.md",sourceDirName:"zio-keeper",slug:"/zio-keeper/",permalink:"/zio-keeper/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-keeper/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Keeper",sidebar_label:"Introduction"},sidebar:"ecosystem-sidebar",previous:{title:"Writing Tests with the `zio-kafka-testkit` library",permalink:"/zio-kafka/writing-tests"},next:{title:"Meetings",permalink:"/zio-keeper/meetings"}},p={},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"ZIO Keeper is a purely-functional, type-safe library for building distributed\nsystems."),(0,i.yg)("p",null,'From the high-level perspective, the library can be separated into the following\n"modules":'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"transport"),(0,i.yg)("li",{parentName:"ul"},"membership"),(0,i.yg)("li",{parentName:"ul"},"consensus")),(0,i.yg)("p",null,"This section provides an in-depth treatment of each of the aforementioned modules,\nexplaining their design and demonstrating their usage."))}d.isMDXComponent=!0}}]);