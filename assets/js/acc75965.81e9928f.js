"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[73796],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>v});var n=t(96540);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,v=u["".concat(l,".").concat(m)]||u[m]||y[m]||o;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function v(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=m;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12348:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=t(58168),s=(t(96540),t(15680));const o={id:"system",title:"System"},i=void 0,a={unversionedId:"reference/services/system",id:"version-1.0.18/reference/services/system",title:"System",description:"System service contains several useful functions related to system environments and properties. Both of system environments and system properties are key/value pairs. They used to pass user-defined information to our application.",source:"@site/versioned_docs/version-1.0.18/reference/services/system.md",sourceDirName:"reference/services",slug:"/reference/services/system",permalink:"/1.0.18/reference/services/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.0.18/reference/services/system.md",tags:[],version:"1.0.18",frontMatter:{id:"system",title:"System"},sidebar:"overview_sidebar",previous:{title:"Blocking",permalink:"/1.0.18/reference/services/blocking"},next:{title:"Guides",permalink:"/1.0.18/guides/"}},l={},p=[{value:"System Environment",id:"system-environment",level:2},{value:"System Property",id:"system-property",level:2}],c={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,s.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"System service contains several useful functions related to system environments and properties. Both of ",(0,s.yg)("strong",{parentName:"p"},"system environments")," and ",(0,s.yg)("strong",{parentName:"p"},"system properties")," are key/value pairs. They used to pass user-defined information to our application."),(0,s.yg)("p",null,"Environment variables are global operating system level variables available to all applications running on the same machine while the properties are application-level variables provided to our application."),(0,s.yg)("h2",{id:"system-environment"},"System Environment"),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"env")," function retrieve the value of an environment variable:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.console._\nimport zio.system._\nfor {\n  user <- env("USER")\n  _ <- user match {\n    case Some(value) => putStr(s"The USER env is: $value")\n    case None => putStr("Oops! The USER env is not set")\n  }\n} yield ()\n')),(0,s.yg)("h2",{id:"system-property"},"System Property"),(0,s.yg)("p",null,"Also, the System service has a `property function to retrieve the value of a system property:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  user <- property("LOG_LEVEL")\n  _ <- user match {\n    case Some(value) => putStr(s"The LOG_LEVEL property is: $value")\n    case None => putStr("Oops! The LOG_LEVEL property is not set")\n  }\n} yield ()\n')))}y.isMDXComponent=!0}}]);