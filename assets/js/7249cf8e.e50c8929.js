"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8232],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(45072),a=(t(11504),t(95788));const o={id:"tranzactio",title:"TranzactIO"},i=void 0,s={unversionedId:"ecosystem/community/tranzactio",id:"ecosystem/community/tranzactio",title:"TranzactIO",description:"TranzactIO is a ZIO wrapper for some Scala database access libraries, currently for Doobie and Anorm.",source:"@site/docs/ecosystem/community/tranzactio.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/tranzactio",permalink:"/ecosystem/community/tranzactio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/tranzactio.md",tags:[],version:"current",frontMatter:{id:"tranzactio",title:"TranzactIO"},sidebar:"ecosystem-sidebar",previous:{title:"Tofu ZIO 2 Logging",permalink:"/ecosystem/community/tofu-zio2-logging"},next:{title:"ZIO AMQP",permalink:"/ecosystem/community/zio-amqp"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/gaelrenoux/tranzactio"},"TranzactIO")," is a ZIO wrapper for some Scala database access libraries, currently for ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/tpolecat/doobie"},"Doobie")," and ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/playframework/anorm"},"Anorm"),"."),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Using functional effect database access libraries like ",(0,a.yg)("em",{parentName:"p"},"Doobie")," enforces us to use their specialized monads like ",(0,a.yg)("inlineCode",{parentName:"p"},"ConnectionIO")," for ",(0,a.yg)("em",{parentName:"p"},"Doobie"),". The goal of ",(0,a.yg)("em",{parentName:"p"},"TranzactIO")," is to provide seamless integration with these libraries to help us to stay in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," world."),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.yg)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.github.gaelrenoux" %% "tranzactio" % "2.1.0"\n')),(0,a.yg)("p",null,"In addition, we need to declare the database access library we are using. For example, for the next example we need to add following dependencies for ",(0,a.yg)("em",{parentName:"p"},"Doobie")," integration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "org.tpolecat" %% "doobie-core" % "0.13.4"\nlibraryDependencies += "org.tpolecat" %% "doobie-h2"   % "0.13.4"\n')),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"Let's try an example of simple ",(0,a.yg)("em",{parentName:"p"},"Doobie")," program:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'import doobie.implicits._\nimport io.github.gaelrenoux.tranzactio.doobie\nimport io.github.gaelrenoux.tranzactio.doobie.{Connection, Database, TranzactIO, tzio}\nimport org.h2.jdbcx.JdbcDataSource\nimport zio.blocking.Blocking\nimport zio.clock.Clock\nimport zio.console.{Console, putStrLn}\nimport zio.{ExitCode, Has, URIO, ZIO, ZLayer, blocking}\n\nimport javax.sql.DataSource\n\nobject TranzactIOExample extends zio.App {\n\n  val query: ZIO[Connection with Console, Throwable, Unit] = for {\n    _ <- PersonQuery.setup\n    _ <- PersonQuery.insert(Person("William", "Stewart"))\n    _ <- PersonQuery.insert(Person("Michelle", "Streeter"))\n    _ <- PersonQuery.insert(Person("Johnathon", "Martinez"))\n    users <- PersonQuery.list\n    _ <- putStrLn(users.toString)\n  } yield ()\n\n  val myApp: ZIO[zio.ZEnv, Throwable, Unit] =\n    Database.transactionOrWidenR(query).provideCustom(services.database)\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n\ncase class Person(firstName: String, lastName: String)\n\nobject PersonQuery {\n  def list: TranzactIO[List[Person]] = tzio {\n    sql"""SELECT first_name, last_name FROM person""".query[Person].to[List]\n  }\n\n  def setup: TranzactIO[Unit] = tzio {\n    sql"""\n        CREATE TABLE person (\n          first_name VARCHAR NOT NULL,\n          last_name VARCHAR NOT NULL\n        )\n        """.update.run.map(_ => ())\n  }\n\n  def insert(p: Person): TranzactIO[Unit] = tzio {\n    sql"""INSERT INTO person (first_name, last_name) VALUES (${p.firstName}, ${p.lastName})""".update.run\n      .map(_ => ())\n  }\n}\n\nobject services {\n  val datasource: ZLayer[Blocking, Throwable, Has[DataSource]] =\n    ZLayer.fromEffect(\n      blocking.effectBlocking {\n        val ds = new JdbcDataSource\n        ds.setURL(s"jdbc:h2:mem:mydb;DB_CLOSE_DELAY=10")\n        ds.setUser("sa")\n        ds.setPassword("sa")\n        ds\n      }\n    )\n\n  val database: ZLayer[Any, Throwable, doobie.Database.Database] =\n    (Blocking.live >>> datasource ++ Blocking.live ++ Clock.live) >>> Database.fromDatasource\n}\n')))}u.isMDXComponent=!0}}]);