"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38068],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const a={id:"graceful-shutdown",title:"Graceful Shutdown Example",sidebar_label:"Graceful Shutdown"},i=void 0,s={unversionedId:"zio-http/examples/graceful-shutdown",id:"zio-http/examples/graceful-shutdown",title:"Graceful Shutdown Example",description:"",source:"@site/docs/zio-http/examples/graceful-shutdown.md",sourceDirName:"zio-http/examples",slug:"/zio-http/examples/graceful-shutdown",permalink:"/zio-http/examples/graceful-shutdown",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/examples/graceful-shutdown.md",tags:[],version:"current",frontMatter:{id:"graceful-shutdown",title:"Graceful Shutdown Example",sidebar_label:"Graceful Shutdown"},sidebar:"ecosystem-sidebar",previous:{title:"Authentication",permalink:"/zio-http/examples/authentication"},next:{title:"CLI",permalink:"/zio-http/examples/cli"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala",metastring:'title="zio-http-example/src/main/scala/example/GracefulShutdown.scala" showLineNumbers"',title:'"zio-http-example/src/main/scala/example/GracefulShutdown.scala"','showLineNumbers"':!0},'/*\n * Copyright 2021 - 2023 Sporta Technologies PVT LTD & the ZIO HTTP contributors.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\npackage example\n\nimport zio._\n\nimport zio.http._\n\nobject GracefulShutdown extends ZIOAppDefault {\n\n  val app: HttpApp[Any] = Handler\n    .fromFunctionZIO[Request] { _ =>\n      ZIO.sleep(10.seconds).debug("request handler delay done").as(Response.text("done"))\n    }\n    .sandbox\n    .toHttpApp\n\n  override def run: ZIO[Any, Throwable, Unit] =\n    (for {\n      started  <- Promise.make[Nothing, Unit]\n      fiber    <- Server\n        .install(app)\n        .zipRight(started.succeed(()))\n        .zipRight(ZIO.never)\n        .provide(\n          Server.live,\n          ZLayer.succeed(Server.Config.default.port(8080)),\n        )\n        .fork\n      _        <- started.await\n      _        <- fiber.interrupt.delay(2.seconds).fork\n      response <- ZClient.request(Request.get(URL.decode("http://localhost:8080/test").toOption.get))\n      body     <- response.body.asString\n      _        <- Console.printLine(response.status)\n      _        <- Console.printLine(body)\n    } yield ()).provide(\n      Client.default,\n      Scope.default,\n    )\n}\n')))}d.isMDXComponent=!0}}]);