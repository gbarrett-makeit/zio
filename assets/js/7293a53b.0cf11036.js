"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[27888],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>u});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return t?n.createElement(u,o(o({ref:r},p),{},{components:t})):n.createElement(u,o({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},84380:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(45072),a=(t(11504),t(95788));const i={id:"algebraic-data-types",title:"Model Domain Errors Using Algebraic Data Types",sidebar_label:"Algebraic Data Types"},o=void 0,s={unversionedId:"reference/error-management/best-practices/algebraic-data-types",id:"reference/error-management/best-practices/algebraic-data-types",title:"Model Domain Errors Using Algebraic Data Types",description:"It is best to use algebraic data types (ADTs) when modeling errors within the same domain or subdomain.",source:"@site/docs/reference/error-management/best-practices/algebraic-data-types.md",sourceDirName:"reference/error-management/best-practices",slug:"/reference/error-management/best-practices/algebraic-data-types",permalink:"/reference/error-management/best-practices/algebraic-data-types",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/best-practices/algebraic-data-types.md",tags:[],version:"current",frontMatter:{id:"algebraic-data-types",title:"Model Domain Errors Using Algebraic Data Types",sidebar_label:"Algebraic Data Types"},sidebar:"reference-sidebar",previous:{title:"Zooming In on Nested Values",permalink:"/reference/error-management/operations/zooming-in-on-nested-values"},next:{title:"Union Types",permalink:"/reference/error-management/best-practices/union-types"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"It is best to use ",(0,a.yg)("em",{parentName:"p"},"algebraic data types (ADTs)")," when modeling errors within the same domain or subdomain."),(0,a.yg)("p",null,"Sealed traits allow us to introduce an error type as a common supertype and all errors within a domain are part of that error type by extending that:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait UserServiceError extends Exception\n\ncase class InvalidUserId(id: ID) extends UserServiceError\ncase class ExpiredAuth(id: ID)   extends UserServiceError\n")),(0,a.yg)("p",null,"In this case, the super error type is ",(0,a.yg)("inlineCode",{parentName:"p"},"UserServiceError"),". We sealed that trait, and we extend it by two cases, ",(0,a.yg)("inlineCode",{parentName:"p"},"InvalidUserId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ExpiredAuth"),". Because it is sealed, if we have a reference to a ",(0,a.yg)("inlineCode",{parentName:"p"},"UserServiceError")," we can match against it and the Scala compiler knows there are two possibilities for a ",(0,a.yg)("inlineCode",{parentName:"p"},"UserServiceError"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"userServiceError match {\n  case InvalidUserId(id) => ???\n  case ExpiredAuth(id)   => ???\n}\n")),(0,a.yg)("p",null,"This is a sum type, and also an enumeration. The Scala compiler knows only two of these ",(0,a.yg)("inlineCode",{parentName:"p"},"UserServiceError")," exist. If we don't match on all of them, it is going to warn us. We can add the ",(0,a.yg)("inlineCode",{parentName:"p"},"-Xfatal-warnings")," compiler option which treats warnings as errors. By turning on the fatal warning, we will have type-safety control on expected errors. So sealing these traits gives us great power."),(0,a.yg)("p",null,"Also extending all of our errors from a common supertype helps the ZIO's combinators like flatMap to auto widen to the most specific error type."),(0,a.yg)("p",null,"Let's say we have this for-comprehension here that calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"userAuth")," function, and it can fail with ",(0,a.yg)("inlineCode",{parentName:"p"},"ExpiredAuth"),", and then we call ",(0,a.yg)("inlineCode",{parentName:"p"},"userProfile")," that fails with ",(0,a.yg)("inlineCode",{parentName:"p"},"InvalidUserID"),", and then we call ",(0,a.yg)("inlineCode",{parentName:"p"},"generateEmail")," that can't fail at all, and finally we call ",(0,a.yg)("inlineCode",{parentName:"p"},"sendEmail")," which can fail with ",(0,a.yg)("inlineCode",{parentName:"p"},"EmailDeliveryError"),". We have got a lot of different errors here:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val myApp: IO[Exception, Receipt] =\n  for {\n    service <- userAuth(token)                // IO[ExpiredAuth, UserService]\n    profile <- service.userProfile(userId)    // IO[InvalidUserId, Profile]\n    body    <- generateEmail(orderDetails)    // IO[Nothing, String]\n    receipt <- sendEmail("Your order detail",\n       body, profile.email)                   // IO[EmailDeliveryError, Unit]\n  } yield receipt\n')),(0,a.yg)("p",null,"In this example, the flatMap operations auto widens the error type to the most specific error type possible. As a result, the inferred error type of this for-comprehension will be ",(0,a.yg)("inlineCode",{parentName:"p"},"Exception")," which gives us the best information we could hope to get out of this. We have lost information about the particulars of this. We no longer know which of these error types it is. We know it is some type of ",(0,a.yg)("inlineCode",{parentName:"p"},"Exception")," which is more information than nothing."))}m.isMDXComponent=!0}}]);