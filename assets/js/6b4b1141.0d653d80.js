"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[82710],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},39492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const a={id:"zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",sidebar_label:"ZIO Test Gen Derivation"},o=void 0,s={unversionedId:"zio-schema/derivations/zio-test-gen-derivation",id:"zio-schema/derivations/zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",description:"Introduction",source:"@site/docs/zio-schema/derivations/zio-test-gen-derivation.md",sourceDirName:"zio-schema/derivations",slug:"/zio-schema/derivations/zio-test-gen-derivation",permalink:"/zio-schema/derivations/zio-test-gen-derivation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/zio-test-gen-derivation.md",tags:[],version:"current",frontMatter:{id:"zio-test-gen-derivation",title:"Derivation of ZIO Test Generators",sidebar_label:"ZIO Test Gen Derivation"},sidebar:"ecosystem-sidebar",previous:{title:"Optics Derivation",permalink:"/zio-schema/derivations/optics-derivation"},next:{title:"Codecs",permalink:"/zio-schema/derivations/codecs/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"DriveGen",id:"drivegen",level:2},{value:"Example",id:"example",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"ZIO Test supports property-based testing via the ",(0,i.yg)("inlineCode",{parentName:"p"},"Gen")," type. ",(0,i.yg)("inlineCode",{parentName:"p"},"Gen[R, A]")," is a random generator of values of type ",(0,i.yg)("inlineCode",{parentName:"p"},"A"),". Such a generator can be used to produce test cases for a property, which can then be checked for validity. The ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-schema-zio-test")," module provides a way to derive a ",(0,i.yg)("inlineCode",{parentName:"p"},"Gen[R, A]")," from a ",(0,i.yg)("inlineCode",{parentName:"p"},"Schema[A]"),". In this section, we will see how this functionality works."),(0,i.yg)("h2",{id:"installation"},"Installation"),(0,i.yg)("p",null,"In order to derive a generator from a ZIO Schema, we need to add the following dependency to our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-zio-test" % 0.4.15\n')),(0,i.yg)("h2",{id:"drivegen"},"DriveGen"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"DriveGen")," inside ",(0,i.yg)("inlineCode",{parentName:"p"},"zio.schema")," package provides the ",(0,i.yg)("inlineCode",{parentName:"p"},"gen")," operator which takes a ",(0,i.yg)("inlineCode",{parentName:"p"},"Schmea[A]")," implicitly and returns a ",(0,i.yg)("inlineCode",{parentName:"p"},"Gen[Sized, A]"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object DeriveGen {\n  def gen[A](implicit schema: Schema[A]): Gen[Sized, A] = ???\n}\n")),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"In the following example, we will derive a generator for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," class using the ",(0,i.yg)("inlineCode",{parentName:"p"},"DeriveGen.gen")," operator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.schema.{DeriveGen, DeriveSchema, Schema}\nimport zio.test.{Gen, Sized}\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] = DeriveSchema.gen\n  val gen: Gen[Sized, Person]         = DeriveGen.gen\n}\n\nimport zio.test._\n\nobject ExampleSpec extends ZIOSpecDefault {\n  def spec =\n    test("example test") {\n      check(Person.gen) { p =>\n        assertTrue(???)\n      }\n    }\n}\n')))}m.isMDXComponent=!0}}]);