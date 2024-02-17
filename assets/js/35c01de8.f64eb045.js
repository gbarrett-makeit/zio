"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[87610],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>f});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13333:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),i=r(40870),a=r(81754),o=r(75489),c=r(16654),s=r(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function m(e){let{href:t,children:r}=e;return n.createElement(o.A,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.A)("text--truncate",l.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,a._o)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.$S)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,a.d1)(t);return n.createElement("section",{className:(0,i.A)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},34144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(58168),i=(r(96540),r(15680)),a=r(13333);const o={id:"index",title:"ZIO Ecosystem Official Libraries"},c=void 0,s={unversionedId:"ecosystem/officials/index",id:"ecosystem/officials/index",title:"ZIO Ecosystem Official Libraries",description:"Official ZIO libraries are hosted in the ZIO organization on GitHub, and are generally maintained by core contributors to ZIO.",source:"@site/docs/ecosystem/officials/index.md",sourceDirName:"ecosystem/officials",slug:"/ecosystem/officials/",permalink:"/ecosystem/officials/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/officials/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO Ecosystem Official Libraries"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Ecosystem",permalink:"/ecosystem/"},next:{title:"Caliban Deriving",permalink:"/caliban-deriving/"}},l={},m=[{value:"Development Status",id:"development-status",level:2},{value:"Official Libraries",id:"official-libraries",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Official ZIO libraries are hosted in the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/zio/"},"ZIO organization")," on GitHub, and are generally maintained by core contributors to ZIO."),(0,i.yg)("h2",{id:"development-status"},"Development Status"),(0,i.yg)("p",null,"Each project in the ZIO organization namespace has a ",(0,i.yg)("em",{parentName:"p"},"Stage Badge")," which indicates the current status of that project:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Production Ready")," \u2014 The project is stable and already used in production. We can expect reliability for the implemented use cases."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Development")," \u2014 The project already has RC or milestone releases, but is still under active development. We should not expect full stability yet."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Experimental")," \u2014 The project is not yet released, but an important part of the work is already done."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Research")," \u2014 The project is at the design stage, with some sketches of work but nothing usable yet."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Concept")," \u2014 The project is just an idea, development hasn't started yet."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Deprecated")," \u2014 The project is not maintained anymore, and we don't recommend its usage.")),(0,i.yg)("h2",{id:"official-libraries"},"Official Libraries"),(0,i.yg)(a.A,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);