"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[64344],{95788:(e,n,a)=>{a.d(n,{Iu:()=>p,yg:()=>m});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?t.createElement(m,i(i({ref:n},p),{},{components:a})):t.createElement(m,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},28660:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(45072),r=(a(11504),a(95788));const o={id:"decoding",title:"Decoding"},i=void 0,l={unversionedId:"zio-json/decoding",id:"zio-json/decoding",title:"Decoding",description:"Automatic Derivation",source:"@site/docs/zio-json/decoding.md",sourceDirName:"zio-json",slug:"/zio-json/decoding",permalink:"/zio-json/decoding",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-json/decoding.md",tags:[],version:"current",frontMatter:{id:"decoding",title:"Decoding"},sidebar:"ecosystem-sidebar",previous:{title:"Getting Started",permalink:"/zio-json/"},next:{title:"Encoding",permalink:"/zio-json/encoding"}},s={},c=[{value:"Automatic Derivation",id:"automatic-derivation",level:2},{value:"Automatic Derivation and case class default field values",id:"automatic-derivation-and-case-class-default-field-values",level:3},{value:"ADTs",id:"adts",level:2},{value:"Manual instances",id:"manual-instances",level:2},{value:"<code>.map</code>",id:"map",level:3},{value:"<code>.mapOrFail</code>",id:"maporfail",level:3}],p={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"automatic-derivation"},"Automatic Derivation"),(0,r.yg)("p",null,"Say we want to be able to read some JSON like"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ "curvature": 0.5 }\n')),(0,r.yg)("p",null,"into a Scala ",(0,r.yg)("inlineCode",{parentName:"p"},"case class")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class Banana(curvature: Double)\n")),(0,r.yg)("p",null,"To do this, we create an ",(0,r.yg)("em",{parentName:"p"},"instance")," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," typeclass for ",(0,r.yg)("inlineCode",{parentName:"p"},"Banana")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"zio-json")," code generator. It is best practice to put it on the companion of ",(0,r.yg)("inlineCode",{parentName:"p"},"Banana"),", like so"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\nobject Banana {\n  implicit val decoder: JsonDecoder[Banana] =\n    DeriveJsonDecoder.gen[Banana]\n}\n")),(0,r.yg)("p",null,"Now we can parse JSON into our object"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "curvature": 0.5 }""".fromJson[Banana]\n// res0: Either[String, Banana] = Right(value = Banana(curvature = 0.5))\n')),(0,r.yg)("h3",{id:"automatic-derivation-and-case-class-default-field-values"},"Automatic Derivation and case class default field values"),(0,r.yg)("p",null,"If a case class field is defined with a default value and the field is not present or ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),", the default value will be used."),(0,r.yg)("p",null,"Say we have a Scala ",(0,r.yg)("inlineCode",{parentName:"p"},"case class")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'case class Entity(id: Long, description: String = "", related: Seq[Entity] = Seq())\n\nimplicit val decoder: JsonDecoder[Entity] =\n  DeriveJsonDecoder.gen[Entity]\n// decoder: JsonDecoder[Entity] = zio.json.DeriveJsonDecoder$$anon$2@3eb5cd1\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "id": 42, "related": null }""".fromJson[Entity]\n// res1: Either[String, Entity] = Right(\n//   value = Entity(id = 42L, description = "", related = List())\n// )\n')),(0,r.yg)("h2",{id:"adts"},"ADTs"),(0,r.yg)("p",null,"Say we extend our data model to include more data types"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait Fruit\n\ncase class Banana(curvature: Double) extends Fruit\ncase class Apple (poison: Boolean)   extends Fruit\n")),(0,r.yg)("p",null,"we can generate the decoder for the entire ",(0,r.yg)("inlineCode",{parentName:"p"},"sealed")," family:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\n\nobject Fruit {\n  implicit val decoder: JsonDecoder[Fruit] =\n    DeriveJsonDecoder.gen[Fruit]\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "Banana":{ "curvature":0.5 }}""".fromJson[Fruit]\n// res3: Either[String, Fruit] = Right(value = Banana(curvature = 0.5))\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""{ "Apple": { "poison": false }}""".fromJson[Fruit]\n// res4: Either[String, Fruit] = Right(value = Apple(poison = false))\n')),(0,r.yg)("p",null,"Almost all of the standard library data types are supported as fields on the case class, and it is easy to add support if one is missing."),(0,r.yg)("h2",{id:"manual-instances"},"Manual instances"),(0,r.yg)("p",null,"Sometimes it is easier to reuse an existing ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," rather than generate a new one. This can be accomplished using convenience methods on the ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," typeclass to ",(0,r.yg)("em",{parentName:"p"},"derive")," new decoders"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait JsonDecoder[A] {\n  def map[B](f: A => B): JsonDecoder[B]\n  def mapOrFail[B](f: A => Either[String, B]): JsonDecoder[B]\n  ...\n}\n")),(0,r.yg)("h3",{id:"map"},(0,r.yg)("inlineCode",{parentName:"h3"},".map")),(0,r.yg)("p",null,"We can ",(0,r.yg)("inlineCode",{parentName:"p"},".map")," from another ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," in cases where the conversion will always succeed. This is very useful if we have a ",(0,r.yg)("inlineCode",{parentName:"p"},"case class")," that simply wraps another thing and shares the same expected JSON."),(0,r.yg)("p",null,"For example, say we want to model the count of fruit with a ",(0,r.yg)("inlineCode",{parentName:"p"},"case class")," to provide us with additional type safety in our business logic (this pattern is known as a ",(0,r.yg)("em",{parentName:"p"},"newtype"),")."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"case class FruitCount(value: Int)\n")),(0,r.yg)("p",null,"but this would cause us to expect JSON of the form"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"value": 1}\n')),(0,r.yg)("p",null,"wheres we really expect the raw number. We can derive a decoder from ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder[Int]")," and ",(0,r.yg)("inlineCode",{parentName:"p"},".map")," the result into a ",(0,r.yg)("inlineCode",{parentName:"p"},"FruitCount")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object FruitCount {\n  implicit val decoder: JsonDecoder[FruitCount] =\n    JsonDecoder[Int].map(FruitCount(_))\n}\n")),(0,r.yg)("p",null,"and now the ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"FruitCount")," just expects a raw ",(0,r.yg)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'"""3""".fromJson[FruitCount]\n// res5: Either[String, FruitCount] = Right(value = FruitCount(value = 3))\n')),(0,r.yg)("p",null,"Another use case is if we want to encode a ",(0,r.yg)("inlineCode",{parentName:"p"},"case class")," as an array of values, rather than an object with named fields. Such an encoding is very efficient because the messages are smaller and require less processing, but are very strict schemas that cannot be upgraded."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala:mdoc:reset"},'import zio.json._\n\ncase class Things(s: String, i: Int, b: Boolean)\n\nobject Things {\n  implicit val decoder: JsonDecoder[Things] =\n    JsonDecoder[(String, Int, Boolean)].map { case (p1, p2, p3) => Things(p1, p2, p3) }\n}\n\n"""[ "hello", 1, true ]""".fromJson[Things]\n')),(0,r.yg)("h3",{id:"maporfail"},(0,r.yg)("inlineCode",{parentName:"h3"},".mapOrFail")),(0,r.yg)("p",null,"We can use ",(0,r.yg)("inlineCode",{parentName:"p"},".mapOrFail")," to take the result of another ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder")," and try to convert it into our custom data type, failing with a message if there is an error."),(0,r.yg)("p",null,"Say we are using the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/fthomas/refined"},(0,r.yg)("inlineCode",{parentName:"a"},"refined"))," library to ensure that a ",(0,r.yg)("inlineCode",{parentName:"p"},"Person")," data type only holds a non-empty string in its ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import eu.timepit.refined.api.Refined\nimport eu.timepit.refined.collection.NonEmpty\n\ncase class Person(name: String Refined NonEmpty)\n")),(0,r.yg)("p",null,"we will get a compile time error because there is no ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder[String Refined NonEmpty]"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object Person {\n  implicit val decoder: JsonDecoder[Person] = DeriveJsonDecoder.gen\n}\n// error: magnolia: could not find JsonDecoder.Typeclass for type eu.timepit.refined.api.Refined[String,eu.timepit.refined.collection.NonEmpty]\n//     in parameter 'name' of product type MdocApp0.this.Person\n// \n//   implicit val decoder: JsonDecoder[Person] = DeriveJsonDecoder.gen\n//                                               ^^^^^^^^^^^^^^^^^^^^^\n")),(0,r.yg)("p",null,"However, we can derive one by requesting the ",(0,r.yg)("inlineCode",{parentName:"p"},"JsonDecoder[String]")," and calling ",(0,r.yg)("inlineCode",{parentName:"p"},".mapOrFail"),", supplying the constructor for our special ",(0,r.yg)("inlineCode",{parentName:"p"},"String Refined NonEmpty")," type"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"import eu.timepit.refined\n\nimplicit val decodeName: JsonDecoder[String Refined NonEmpty] =\n  JsonDecoder[String].mapOrFail(refined.refineV[NonEmpty](_))\n// decodeName: JsonDecoder[Refined[String, NonEmpty]] = zio.json.JsonDecoder$$anon$3@669e2a8\n")),(0,r.yg)("p",null,"Now the code compiles."))}u.isMDXComponent=!0}}]);