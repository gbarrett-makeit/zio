"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5588],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(45072),r=(a(11504),a(95788));const i={id:"the-default-value",title:"Getting The Default Value",sidebar_label:"The Default Value"},o=void 0,l={unversionedId:"zio-schema/operations/the-default-value",id:"zio-schema/operations/the-default-value",title:"Getting The Default Value",description:"ZIO Schema provides a method called defaultValue that returns the default value of the underlying type described by the schema. This method returns a scala.util.Either[String, A] value, where A is the type described by the schema. If the schema does not have a default value, the method returns a Left value containing an error message. Otherwise, it returns a Right value containing the default value:",source:"@site/docs/zio-schema/operations/the-default-value.md",sourceDirName:"zio-schema/operations",slug:"/zio-schema/operations/the-default-value",permalink:"/zio-schema/operations/the-default-value",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/operations/the-default-value.md",tags:[],version:"current",frontMatter:{id:"the-default-value",title:"Getting The Default Value",sidebar_label:"The Default Value"},sidebar:"ecosystem-sidebar",previous:{title:"Operations",permalink:"/zio-schema/operations/"},next:{title:"Transforming Schemas",permalink:"/zio-schema/operations/transforming-schemas"}},u={},s=[],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"ZIO Schema provides a method called ",(0,r.yg)("inlineCode",{parentName:"p"},"defaultValue")," that returns the default value of the underlying type described by the schema. This method returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"scala.util.Either[String, A]")," value, where ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," is the type described by the schema. If the schema does not have a default value, the method returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"Left")," value containing an error message. Otherwise, it returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"Right")," value containing the default value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Schema[A] {\n  def defaultValue: scala.util.Either[String, A]\n}\n")),(0,r.yg)("p",null,"ZIO Schema have out of the box default values for all standard types, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"String"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Int"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Boolean"),", ..., ",(0,r.yg)("inlineCode",{parentName:"p"},"LocalDateTime")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"UUID"),". For example, the default value of a schema for ",(0,r.yg)("inlineCode",{parentName:"p"},"String")," is the empty string, and the default value of a schema for ",(0,r.yg)("inlineCode",{parentName:"p"},"Int")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),"."))}d.isMDXComponent=!0}}]);