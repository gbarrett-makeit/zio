"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[26752],{7916:(e,t,n)=>{n.r(t),n.d(t,{default:()=>me});var a=n(11504),l=n(85008),c=n(91100);const o=a.createContext(null);function r(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(o);if(null===e)throw new c.AH("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(l.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(48080),m=n(11432),u=n(45072),b=n(84357),v=n(70308);function p(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&a.createElement(v.c,(0,u.c)({},t,{subLabel:a.createElement(b.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(v.c,(0,u.c)({},n,{subLabel:a.createElement(b.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function f(){const{metadata:e}=s();return a.createElement(p,{previous:e.previous,next:e.next})}function h(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}const E=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(a&&(a+=" "),a+=t);return a};var g=n(28264),L=n(76016),C=n(15172),N=n(45864),_=n(94592),x=n(69920);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is not the most current version.")}};function U(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function y(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(b.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(L.c,{to:n,onClick:l},a.createElement(b.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.c)(),{pluginId:c}=(0,C.UF)({failfast:!0}),{savePreferredVersionName:o}=(0,_.iy)(c),{latestDocSuggestion:r,latestVersionSuggestion:s}=(0,C.i8)(c),i=r??(d=s).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:E(t,N.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(U,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(y,{versionLabel:s.label,to:i.path,onClick:()=>o(s.name)})))}function H(e){let{className:t}=e;const n=(0,x.E)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function A(e){let{className:t}=e;const n=(0,x.E)();return n.badge?a.createElement("span",{className:(0,d.c)(t,N.W.docs.docVersionBadge,"badge badge--secondary")},a.createElement(b.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function M(e){let{lastUpdatedBy:t}=e;return a.createElement(b.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function I(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:N.W.common.lastUpdated},a.createElement(b.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(M,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var B=n(18544),O=n(55776);const S={lastUpdated:"lastUpdated_vwxv"};function V(e){return a.createElement("div",{className:(0,d.c)(N.W.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(O.c,e)))}function P(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:c}=e;return a.createElement("div",{className:(0,d.c)(N.W.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(B.c,{editUrl:t})),a.createElement("div",{className:(0,d.c)("col",S.lastUpdated)},(n||l)&&a.createElement(I,{lastUpdatedAt:n,formattedLastUpdatedAt:c,lastUpdatedBy:l})))}function D(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:c,tags:o}=e,r=o.length>0,i=!!(t||n||c);return r||i?a.createElement("footer",{className:(0,d.c)(N.W.docs.docFooter,"docusaurus-mt-lg")},r&&a.createElement(V,{tags:o}),i&&a.createElement(P,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c,formattedLastUpdatedAt:l})):null}var W=n(58448),R=n(43088);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function z(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.c)({type:"button"},n,{className:(0,d.c)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const j={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function G(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:c}=e;const{collapsed:o,toggleCollapsed:r}=(0,W.a)({initialState:!0});return a.createElement("div",{className:(0,d.c)(j.tocCollapsible,!o&&j.tocCollapsibleExpanded,n)},a.createElement(z,{collapsed:o,onClick:r}),a.createElement(W.U,{lazy:!0,className:j.tocCollapsibleContent,collapsed:o},a.createElement(R.c,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}const q={tocMobile:"tocMobile_ITEo"};function $(){const{toc:e,frontMatter:t}=s();return a.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.c)(N.W.docs.docTocMobile,q.tocMobile)})}var Y=n(77504);function Z(){const{toc:e,frontMatter:t}=s();return a.createElement(Y.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:N.W.docs.docTocDesktop})}var J=n(87624),K=n(91696);function Q(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.c)(N.W.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(J.c,{as:"h1"},n)),a.createElement(K.c,null,t))}var X=n(79940),ee=n(13376),te=n(70964);function ne(e){return a.createElement("svg",(0,u.c)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const ae={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){const e=(0,te.c)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(L.c,{"aria-label":(0,b.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ne,{className:ae.breadcrumbHomeIcon})))}const ce={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function oe(e){let{children:t,href:n,isLast:l}=e;const c="breadcrumbs__link";return l?a.createElement("span",{className:c,itemProp:"name"},t):n?a.createElement(L.c,{className:c,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:c},t)}function re(e){let{children:t,active:n,index:l,addMicrodata:c}=e;return a.createElement("li",(0,u.c)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.c)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function se(){const e=(0,X.js)(),t=(0,ee.Y5)();return e?a.createElement("nav",{className:(0,d.c)(N.W.docs.docBreadcrumbs,ce.breadcrumbsContainer),"aria-label":(0,b.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(re,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(oe,{href:t.href,isLast:l},t.label))})))):null}const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.U)(),l=e.hide_table_of_contents,c=!l&&t.length>0;return{hidden:l,mobile:c?a.createElement($,null):void 0,desktop:!c||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(Z,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.c)("col",!n.hidden&&ie.docItemCol)},a.createElement(H,null),a.createElement("div",{className:ie.docItemContainer},a.createElement("article",null,a.createElement(se,null),a.createElement(A,null),n.mobile,a.createElement(Q,null,t),a.createElement(D,null)),a.createElement(f,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function me(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(r,{content:e.content},a.createElement(l.cr,{className:t},a.createElement(i,null),a.createElement(de,null,a.createElement(n,null))))}},77504:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(45072),l=n(11504),c=n(48080),o=n(43088);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,c.c)(r.tableOfContents,"thin-scrollbar",t)},l.createElement(o.c,(0,a.c)({},n,{linkClassName:s,linkActiveClassName:i})))}},43088:(e,t,n)=>{n.d(t,{c:()=>v});var a=n(45072),l=n(11504),c=n(21824);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.y)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:c,maxHeadingLevel:o}),s=i(r,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:c}=e;return t.length?l.createElement("ul",{className:c?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const b=l.memo(u);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...v}=e;const p=(0,c.y)(),f=d??p.tableOfContents.minHeadingLevel,h=u??p.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:h});return m((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:f,maxHeadingLevel:h}}),[s,i,f,h])),l.createElement(b,(0,a.c)({toc:E,className:n,linkClassName:s},v))}}}]);