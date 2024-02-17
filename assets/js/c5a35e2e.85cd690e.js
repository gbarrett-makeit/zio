"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38426],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>f});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},y),{},{components:a})):n.createElement(f,o({ref:t},y))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(58168),i=(a(96540),a(15680));const r={id:"summary",title:"Summary"},o=void 0,l={unversionedId:"overview/summary",id:"overview/summary",title:"Summary",description:"ZIO is a next-generation framework for building cloud-native applications on the JVM. With a beginner-friendly yet powerful functional core, ZIO lets developers quickly build best-practice applications that are highly scalable, testable, robust, resilient, resource-safe, efficient, and observable.",source:"@site/docs/overview/summary.md",sourceDirName:"overview",slug:"/overview/summary",permalink:"/overview/summary",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/summary.md",tags:[],version:"current",frontMatter:{id:"summary",title:"Summary"},sidebar:"overview_sidebar",previous:{title:"Getting Started",permalink:"/overview/getting-started"},next:{title:"Creating Effects",permalink:"/overview/creating-effects"}},p={},s=[{value:"ZIO",id:"zio",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Next Steps",id:"next-steps",level:2}],y={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"ZIO is a next-generation framework for building cloud-native applications on the JVM. With a beginner-friendly yet powerful functional core, ZIO lets developers quickly build best-practice applications that are highly scalable, testable, robust, resilient, resource-safe, efficient, and observable."),(0,i.yg)("p",null,"At the heart of ZIO is a powerful data type called ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO"),", which is the fundamental building block for every ZIO application."),(0,i.yg)("h2",{id:"zio"},"ZIO"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is called a ",(0,i.yg)("em",{parentName:"p"},"functional effect"),", and represents a unit of computation inside a ZIO application. Similar to a blueprint or a workflow, functional effects are precise plans that ",(0,i.yg)("em",{parentName:"p"},"describe")," a computation or interaction. When executed by the ZIO runtime system, a functional effect will either fail with some type of error, or succeed with some type of value."),(0,i.yg)("p",null,"Like the ",(0,i.yg)("inlineCode",{parentName:"p"},"List")," data type, the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is a ",(0,i.yg)("em",{parentName:"p"},"generic")," data type, and uses type parameters for improved type-safety. The ",(0,i.yg)("inlineCode",{parentName:"p"},"List")," data type has a single type parameter, which represents the type of element that is stored in the ",(0,i.yg)("inlineCode",{parentName:"p"},"List"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type has three type parameters: ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[R, E, A]"),"."),(0,i.yg)("p",null,"The type parameters of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type have the following meanings:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"R")," - Environment Type"),". The environment type parameter represents the type of contextual data that is required by the effect before it can be executed. For example, some effects may require a connection to a database, while others might require an HTTP request, and still others might require a user session. If the environment type parameter is ",(0,i.yg)("inlineCode",{parentName:"p"},"Any"),", then the effect has no requirements, meaning the effect can be executed without first providing it any specific context.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"E")," - Failure Type"),". The failure type parameter represents the type of error that the effect can fail with when it is executed. Although ",(0,i.yg)("inlineCode",{parentName:"p"},"Exception")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"Throwable")," are common failure types in ZIO applications, ZIO imposes no requirement on the error type, and it is sometimes useful to define custom business or domain error types for different parts of an application. If the error type parameter is ",(0,i.yg)("inlineCode",{parentName:"p"},"Nothing"),", it means the effect cannot fail.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"A")," - Success Type"),". The success type parameter represents the type of success that the effect can succeed with when it is executed. If the success type parameter is ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit"),", it means the effect produces no useful information (similar to a ",(0,i.yg)("inlineCode",{parentName:"p"},"void"),"-returning method), while if it is ",(0,i.yg)("inlineCode",{parentName:"p"},"Nothing"),", it means the effect runs forever, unless it fails."),(0,i.yg)("p",{parentName:"li"},"As several examples of how to interpret the types of ZIO effects:")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"An effect of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[Any, IOException, Byte]")," has no requirements, and when executed, such an effect may fail with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"IOException"),", or may succeed with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"Byte"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"An effect of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[Connection, SQLException, ResultSet]")," requires a ",(0,i.yg)("inlineCode",{parentName:"p"},"Connection"),", and when executed, such an effect may fail with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"SQLException"),", or may succeed with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ResultSet"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"An effect of type ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[HttpRequest, HttpFailure, HttpSuccess]")," requires an ",(0,i.yg)("inlineCode",{parentName:"p"},"HttpRequest"),", and when executed, such an effect may fail with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"HttpFailure"),", or may succeed with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"HttpSuccess"),"."))),(0,i.yg)("p",null,"The environment type parameter is a ",(0,i.yg)("em",{parentName:"p"},"composite type parameter"),", because sometimes, a single effect can require ",(0,i.yg)("em",{parentName:"p"},"multiple")," values of ",(0,i.yg)("em",{parentName:"p"},"different")," types. If you see that an effect has a type of ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[UserSession with HttpRequest, E, A]")," (Scala 2.x) or ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO[UserSession & HttpRequest, E, A]")," (Scala 3.x), it means that the effect requires multiple contextual values before it can be executed."),(0,i.yg)("p",null,"Although this analogy is not precise, a ZIO effect can be thought of as a function:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"R => Either[E, A]\n")),(0,i.yg)("p",null,"This function requires an ",(0,i.yg)("inlineCode",{parentName:"p"},"R")," and produces a failure of type ",(0,i.yg)("inlineCode",{parentName:"p"},"E")," or a success value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"A"),". "),(0,i.yg)("p",null,"ZIO effects are not actually functions, of course, because they model complex computations and interactions, which may be asynchronous, concurrent, or resourceful."),(0,i.yg)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is the only effect type in ZIO. However, there are a family of type aliases that reduce the need to type:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"UIO[A]")," \u2014 A type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),", representing an effect that has no requirements, cannot fail, and can succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"URIO[R, A]")," \u2014 A type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),", representing an effect that requires an ",(0,i.yg)("inlineCode",{parentName:"li"},"R"),", cannot fail, and can succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"Task[A]")," \u2014 A type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),", representing an effect that has no requirements, may fail with a ",(0,i.yg)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"RIO[R, A]")," \u2014 A type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),", representing an effect that requires an ",(0,i.yg)("inlineCode",{parentName:"li"},"R"),", may fail with a ",(0,i.yg)("inlineCode",{parentName:"li"},"Throwable")," value, or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"IO[E, A]")," \u2014 A type alias for ",(0,i.yg)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),", representing an effect that has no requirements, may fail with an ",(0,i.yg)("inlineCode",{parentName:"li"},"E"),", or succeed with an ",(0,i.yg)("inlineCode",{parentName:"li"},"A"),".")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Tips For Getting Started With Type Aliases")),(0,i.yg)("p",null,"If you are new to functional effects, we recommend starting with the ",(0,i.yg)("inlineCode",{parentName:"p"},"Task")," type, which has a single type parameter and corresponds most closely to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Future")," data types built into the Scala and Java standard libraries."),(0,i.yg)("p",null,"If you are using ",(0,i.yg)("em",{parentName:"p"},"Cats Effect")," libraries, you may find the ",(0,i.yg)("inlineCode",{parentName:"p"},"RIO")," type useful, since it allows you to thread context through third-party libraries."),(0,i.yg)("p",null,"No matter what type alias you use in your application, ",(0,i.yg)("inlineCode",{parentName:"p"},"UIO")," can be useful for describing infallible effects, including those resulting from handling all errors."),(0,i.yg)("p",null,"Finally, if you are an experienced functional programmer, then direct use of the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type is recommended, although you may find it useful to create your own family of type aliases in different parts of your application."),(0,i.yg)("h2",{id:"next-steps"},"Next Steps"),(0,i.yg)("p",null,"If you are comfortable with the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, and its family of type aliases, the next step is learning how to ",(0,i.yg)("a",{parentName:"p",href:"/overview/creating-effects"},"create effects"),"."))}u.isMDXComponent=!0}}]);