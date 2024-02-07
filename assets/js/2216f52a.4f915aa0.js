"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[59552],{95788:(e,a,n)=>{n.d(a,{Iu:()=>l,yg:()=>u});var o=n(11504);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=o.createContext({}),d=function(e){var a=o.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},l=function(e){var a=d(e.components);return o.createElement(i.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},g=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=t,u=p["".concat(i,".").concat(g)]||p[g]||m[g]||r;return n?o.createElement(u,c(c({ref:a},l),{},{components:n})):o.createElement(u,c({ref:a},l))}));function u(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,c=new Array(r);c[0]=g;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:t,c[1]=s;for(var d=2;d<r;d++)c[d]=n[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89552:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(45072),t=(n(11504),n(95788));const r={id:"message-pack",title:"MessagePack Codecs",sidebar_label:"MessagePack"},c=void 0,s={unversionedId:"zio-schema/derivations/codecs/message-pack",id:"zio-schema/derivations/codecs/message-pack",title:"MessagePack Codecs",description:"Introduction",source:"@site/docs/zio-schema/derivations/codecs/messsage-pack.md",sourceDirName:"zio-schema/derivations/codecs",slug:"/zio-schema/derivations/codecs/message-pack",permalink:"/zio-schema/derivations/codecs/message-pack",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/codecs/messsage-pack.md",tags:[],version:"current",frontMatter:{id:"message-pack",title:"MessagePack Codecs",sidebar_label:"MessagePack"},sidebar:"ecosystem-sidebar",previous:{title:"JSON",permalink:"/zio-schema/derivations/codecs/json"},next:{title:"Protobuf",permalink:"/zio-schema/derivations/codecs/protobuf"}},i={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"BinaryCodec",id:"binarycodec",level:2},{value:"Example",id:"example",level:2}],l={toc:d},p="wrapper";function m(e){let{components:a,...n}=e;return(0,t.yg)(p,(0,o.c)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,"MessagePack is a binary serialization format designed for efficient data exchange between different systems and languages. In this section, we will explore how to derive MessagePack codecs from a ZIO Schema. MessagePack codecs allow us to easily serialize and deserialize data in MessagePack format."),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("p",null,"To use MessagePack codecs, you need to add the following dependency to your build.sbt file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-msg-pack" % "0.4.15"\n')),(0,t.yg)("h2",{id:"binarycodec"},"BinaryCodec"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"MessagePackCodec")," object inside the ",(0,t.yg)("inlineCode",{parentName:"p"},"zio.schema.codec")," package provides the ",(0,t.yg)("inlineCode",{parentName:"p"},"messagePackCodec")," operator which allows us to derive MessagePack codecs from a ZIO Schema:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object MessagePackCodec {\n  implicit def messagePackCodec[A](implicit schema: Schema[A]): BinaryCodec[A] = ???\n}\n")),(0,t.yg)("h2",{id:"example"},"Example"),(0,t.yg)("p",null,"Let's try an example to see how it works:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema.codec._\nimport zio.schema.{DeriveSchema, Schema}\n\ncase class Person(name: String, age: Int)\n\nobject Person {\n  implicit val schema: Schema[Person] =\n    DeriveSchema.gen\n  implicit val msgPackCodec: BinaryCodec[Person] =\n    MessagePackCodec.messagePackCodec(schema)\n}\n\nobject Main extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.debug("MessagePack Codec Example:")\n    person: Person = Person("John", 42)\n    encoded: Chunk[Byte] = Person.msgPackCodec.encode(person)\n    _ <- ZIO.debug(s"person object encoded to MessagePack\'s binary format: ${toHex(encoded)}")\n    decoded <- ZIO.fromEither(Person.msgPackCodec.decode(encoded))\n    _ <- ZIO.debug(s"MessagePack object decoded to Person class: $decoded")\n  } yield ()\n\n  def toHex(bytes: Chunk[Byte]): String =\n    bytes.map("%02x".format(_)).mkString(" ")\n}\n')),(0,t.yg)("p",null,"The output of the above program is:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"MessagePack Codec Example:\nperson object encoded to MessagePack's binary format: 82 a4 6e 61 6d 65 a4 4a 6f 68 6e a3 61 67 65 2a\nMessagePack object decoded to Person class: Person(John,42)\n")))}m.isMDXComponent=!0}}]);