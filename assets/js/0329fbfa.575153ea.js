"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[78936],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?t.createElement(g,s(s({ref:a},c),{},{components:n})):t.createElement(g,s({ref:a},c))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26368:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(58168),i=(n(96540),n(15680));const r={id:"optics-derivation",title:"Optics Derivation"},s=void 0,o={unversionedId:"zio-schema/derivations/optics-derivation",id:"zio-schema/derivations/optics-derivation",title:"Optics Derivation",description:"Optics are a way of accessing and manipulating data in a functional way. They can be used to get, set, and update values in data structures, as well as to traverse and explore data.",source:"@site/docs/zio-schema/derivations/optics-derivation.md",sourceDirName:"zio-schema/derivations",slug:"/zio-schema/derivations/optics-derivation",permalink:"/zio-schema/derivations/optics-derivation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-schema/derivations/optics-derivation.md",tags:[],version:"current",frontMatter:{id:"optics-derivation",title:"Optics Derivation"},sidebar:"ecosystem-sidebar",previous:{title:"Ordering Derivation",permalink:"/zio-schema/derivations/ordering-derivation"},next:{title:"ZIO Test Gen Derivation",permalink:"/zio-schema/derivations/zio-test-gen-derivation"}},l={},p=[{value:"Manual Derivation of Optics",id:"manual-derivation-of-optics",level:2},{value:"Automatic Derivation of Optics",id:"automatic-derivation-of-optics",level:2},{value:"Installation",id:"installation",level:3},{value:"Examples",id:"examples",level:3},{value:"Lens",id:"lens",level:4},{value:"Prism",id:"prism",level:4},{value:"Traversal",id:"traversal",level:4}],c={toc:p},d="wrapper";function u(e){let{components:a,...n}=e;return(0,i.yg)(d,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Optics are a way of accessing and manipulating data in a functional way. They can be used to get, set, and update values in data structures, as well as to traverse and explore data."),(0,i.yg)("h2",{id:"manual-derivation-of-optics"},"Manual Derivation of Optics"),(0,i.yg)("p",null,"Before we dive into auto-derivation of optics and how we can derive optics from a ZIO Schema, let's take a look at the pure optics and how we can create them manually using ",(0,i.yg)("a",{parentName:"p",href:"https://zio.dev/zio-optics"},"ZIO Optics")," library."),(0,i.yg)("p",null,"First, we should add ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-optics")," to our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-optics" % "<version>"\n')),(0,i.yg)("p",null,"Now let's define a simple data type called ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," and create two optics for its ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"age")," fields:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.optics._\n\ncase class User(name: String, age: Int)\n\nval nameLens = Lens[User, String](\n  user => Right(user.name),\n  name => user => Right(user.copy(name = name))\n)\n\nval ageLens = Lens[User, Int](\n  user => Right(user.age),\n  age => user => Right(user.copy(age = age))\n)\n\nval ageAndNameLens = nameLens.zip(ageLens)\n")),(0,i.yg)("p",null,"Now we can use these optics to get, set, and update values in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," data structure:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject Main extends ZIOAppDefault {\n  def run =\n    for {\n      _ <- ZIO.debug("Pure Optics")\n      user = User("John", 34)\n\n      updatedUser1 <- ZIO.fromEither(nameLens.setOptic("Jane")(user))\n      _ <- ZIO.debug(s"Name of user updated: $updatedUser1")\n\n      updatedUser2 <- ZIO.fromEither(ageLens.setOptic(32)(user))\n      _ <- ZIO.debug(s"Age of user updated: $updatedUser2")\n\n      updatedUser3 <- ZIO.fromEither(\n        ageAndNameLens.set(("Jane", 32))(User("John", 34))\n      )\n      _ <- ZIO.debug(s"Name and age of the user updated: $updatedUser3")\n    } yield ()\n}\n')),(0,i.yg)("h2",{id:"automatic-derivation-of-optics"},"Automatic Derivation of Optics"),(0,i.yg)("p",null,"ZIO Schema has a module called ",(0,i.yg)("inlineCode",{parentName:"p"},"zio-schema-optics")," which provides functionalities to derive various optics from a ZIO Schema."),(0,i.yg)("p",null,"By having a ",(0,i.yg)("inlineCode",{parentName:"p"},"Schema[A]"),", we can derive optics automatically from a schema. This means that we don't have to write the optics manually, but instead, we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"Schema#makeAccessors")," method which will derive the optics for us:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait Schema[A] {\n  def makeAccessors(b: AccessorBuilder): Accessors[b.Lens, b.Prism, b.Traversal]\n}\n")),(0,i.yg)("p",null,"It takes an ",(0,i.yg)("inlineCode",{parentName:"p"},"AccessorBuilder")," which is an interface of the creation of optics:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait AccessorBuilder {\n  type Lens[F, S, A]\n  type Prism[F, S, A]\n  type Traversal[S, A]\n\n  def makeLens[F, S, A](\n    product: Schema.Record[S],\n    term: Schema.Field[S, A]\n  ): Lens[F, S, A]\n\n  def makePrism[F, S, A](\n    sum: Schema.Enum[S],\n    term: Schema.Case[S, A]\n  ): Prism[F, S, A]\n\n  def makeTraversal[S, A](\n    collection: Schema.Collection[S, A],\n    element: Schema[A]\n  ): Traversal[S, A]\n}\n")),(0,i.yg)("p",null,"It has three methods for creating three types of optics:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Lens")," is an optic used to get and update values in a product type."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Prism")," is an optic used to get and update values in a sum type."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Traversal")," is an optic used to get and update values in a collection type.")),(0,i.yg)("p",null,"Let's take a look at how we can derive optics using ZIO Schema Optics."),(0,i.yg)("h3",{id:"installation"},"Installation"),(0,i.yg)("p",null,"To be able to derive optics from a ZIO Schema, we need to add the following line to our ",(0,i.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-schema-optics" % 0.4.15\n')),(0,i.yg)("p",null,"This package contains a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZioOpticsBuilder")," which is an implementation of the ",(0,i.yg)("inlineCode",{parentName:"p"},"AccessorBuilder")," interface based on ZIO Optics library."),(0,i.yg)("p",null,"Now we are ready to try any of the following examples:"),(0,i.yg)("h3",{id:"examples"},"Examples"),(0,i.yg)("h4",{id:"lens"},"Lens"),(0,i.yg)("p",null,"Now we can derive the schema for our ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," data type in its companion object, and then derive optics using ",(0,i.yg)("inlineCode",{parentName:"p"},"Schema#makeAccessors")," method:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.schema.DeriveSchema\nimport zio.schema.Schema.CaseClass2\nimport zio.schema.optics.ZioOpticsBuilder\n\ncase class User(name: String, age: Int)\n\nobject User {\n  implicit val schema: CaseClass2[String, Int, User] =\n    DeriveSchema.gen[User].asInstanceOf[CaseClass2[String, Int, User]]\n\n  val (nameLens, ageLens) = schema.makeAccessors(ZioOpticsBuilder)\n}\n")),(0,i.yg)("p",null,"Based on the type of the schema, the ",(0,i.yg)("inlineCode",{parentName:"p"},"makeAccessors")," method will derive the proper optics for us."),(0,i.yg)("p",null,"Now we can use these optics to update values in the ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," data structure:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'object MainApp extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.debug("Auto-derivation of Optics")\n    user = User("John", 42)\n\n    updatedUser1 = User.nameLens.set("Jane")(user)\n    _ <- ZIO.debug(s"Name of user updated: $updatedUser1")\n\n    updatedUser2 = User.ageLens.set(32)(user)\n    _ <- ZIO.debug(s"Age of user updated: $updatedUser2")\n\n    nameAndAgeLens = User.nameLens.zip(User.ageLens)\n    updatedUser3   = nameAndAgeLens.set(("Jane", 32))(user)\n    _ <- ZIO.debug(s"Name and age of the user updated: $updatedUser3")\n  } yield ()\n}\n')),(0,i.yg)("p",null,"Output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"Auto-derivation of Lens Optics:\nName of user updated: Right(User(Jane,42))\nAge of user updated: Right(User(John,32))\nName and age of the user updated: Right(User(Jane,32))\n")),(0,i.yg)("h4",{id:"prism"},"Prism"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.schema.Schema._\n\nsealed trait Shape {\n  def area: Double\n}\n\ncase class Circle(radius: Double) extends Shape {\n  val area: Double = Math.PI * radius * radius\n}\n\ncase class Rectangle(width: Double, height: Double) extends Shape {\n  val area: Double = width * height\n}\n\nobject Shape {\n  implicit val schema: Enum2[Circle, Rectangle, Shape] =\n    DeriveSchema.gen[Shape].asInstanceOf[Enum2[Circle, Rectangle, Shape]]\n\n  val (circlePrism, rectanglePrism) =\n    schema.makeAccessors(ZioOpticsBuilder)\n}\n\nobject MainApp extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.debug("Auto-derivation of Prism Optics")\n    shape = Circle(1.2)\n    _ <- ZIO.debug(s"Original shape: $shape")\n    updatedShape <- ZIO.fromEither(\n      Shape.rectanglePrism.setOptic(Rectangle(2.0, 3.0))(shape)\n    )\n    _ <- ZIO.debug(s"Updated shape: $updatedShape")\n  } yield ()\n\n}\n')),(0,i.yg)("p",null,"Output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"Auto-derivation of Prism Optics:\nOriginal shape: Circle(1.2)\nUpdated shape: Rectangle(2.0,3.0)\n")),(0,i.yg)("h4",{id:"traversal"},"Traversal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.optics._\nimport zio.schema.Schema._\nimport zio.schema._\n\nobject IntList {\n  implicit val listschema =\n    Sequence[List[Int], Int, String](\n      elementSchema = Schema[Int],\n      fromChunk = _.toList,\n      toChunk = i => Chunk.fromIterable(i),\n      annotations = Chunk.empty,\n      identity = "List"\n    )\n\n  val traversal: ZTraversal[List[Int], List[Int], Int, Int] =\n    listschema.makeAccessors(ZioOpticsBuilder)\n}\n\nobject MainApp extends ZIOAppDefault {\n  def run = for {\n    _ <- ZIO.debug("Auto-derivation of Traversal Optic:")\n    list = List(1, 2, 3, 4, 5)\n    _           <- ZIO.debug(s"Original list: $list")\n    updatedList <- ZIO.fromEither(IntList.traversal.set(Chunk(1, 5, 7))(list))\n    _           <- ZIO.debug(s"Updated list: $updatedList")\n  } yield ()\n}\n')),(0,i.yg)("p",null,"Output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"Auto-derivation of Traversal Optic:\nOriginal list: List(1, 2, 3, 4, 5)\nUpdated list: List(1, 5, 7, 4, 5)\n")))}u.isMDXComponent=!0}}]);