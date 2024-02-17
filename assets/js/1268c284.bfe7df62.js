"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[67435],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>h});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,h=g["".concat(i,".").concat(d)]||g[d]||c[d]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={id:"restful-webservice",title:"ZIO Quickstart: Building RESTful Web Service",sidebar_label:"RESTful Web Service"},s=void 0,o={unversionedId:"guides/quickstarts/restful-webservice",id:"guides/quickstarts/restful-webservice",title:"ZIO Quickstart: Building RESTful Web Service",description:"This quickstart shows how to build a RESTful web service using ZIO. It uses",source:"@site/docs/guides/quickstarts/restful-webservice.md",sourceDirName:"guides/quickstarts",slug:"/guides/quickstarts/restful-webservice",permalink:"/guides/quickstarts/restful-webservice",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/quickstarts/restful-webservice.md",tags:[],version:"current",frontMatter:{id:"restful-webservice",title:"ZIO Quickstart: Building RESTful Web Service",sidebar_label:"RESTful Web Service"},sidebar:"guides-sidebar",previous:{title:"Hello World",permalink:"/guides/quickstarts/hello-world"},next:{title:"GraphQL Web Service",permalink:"/guides/quickstarts/graphql-webservice"}},i={},p=[{value:"Running The Example",id:"running-the-example",level:2},{value:"Testing The Quickstart",id:"testing-the-quickstart",level:2},{value:"1. Greeting App",id:"1-greeting-app",level:3},{value:"2. Download App",id:"2-download-app",level:3},{value:"3. Counter App",id:"3-counter-app",level:3},{value:"4. User App",id:"4-user-app",level:3}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This quickstart shows how to build a RESTful web service using ZIO. It uses"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://zio.dev/zio-http/"},"ZIO HTTP")," for the HTTP server"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://zio.dev/zio-json/"},"ZIO JSON")," for the JSON serialization"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://zio.dev/zio-quill/"},"ZIO Quill")," for type-safe queries on the JDBC database")),(0,r.yg)("h2",{id:"running-the-example"},"Running The Example"),(0,r.yg)("p",null,"First, open the console and clone the project using ",(0,r.yg)("inlineCode",{parentName:"p"},"git")," (or you can simply download the project) and then change the directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"git clone git@github.com:zio/zio-quickstarts.git \ncd zio-quickstarts/zio-quickstart-restful-webservice\n")),(0,r.yg)("p",null,"Once you are inside the project directory, run the application:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sbt run\n")),(0,r.yg)("h2",{id:"testing-the-quickstart"},"Testing The Quickstart"),(0,r.yg)("p",null,"In this quickstart, we will build a RESTful web service that has the following Http apps:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Greeting App"),"\u2014 shows how to write a basic Http App."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Download App"),"\u2014 shows how to work with files, headers, and status codes and also streaming data."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Counter App"),"\u2014 shows how to have a stateful web service and how to use the ZIO environment for Http Apps."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"User App"),"\u2014 shows how to have a stateful web service to register and manage users.")),(0,r.yg)("p",null,"The most important part of this quickstart is learning how to build an ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data type that is used to build the HTTP apps:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"trait Http[-R, +E, -A, +B] extends (A => ZIO[R, Option[E], B])\n")),(0,r.yg)("p",null,"It is a data type that models an HTTP application, just like the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type that models ZIO workflows."),(0,r.yg)("p",null,"We can say that ",(0,r.yg)("inlineCode",{parentName:"p"},"Http[R, E, A, B]")," is a function that takes an ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," and returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO[R, Option[E], B]"),". To put it another way, ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP[R, E, A, B]")," is an HTTP application that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Accepts an ",(0,r.yg)("inlineCode",{parentName:"li"},"A")," and returns ",(0,r.yg)("inlineCode",{parentName:"li"},"B")),(0,r.yg)("li",{parentName:"ul"},"Uses the ",(0,r.yg)("inlineCode",{parentName:"li"},"R")," from the environment"),(0,r.yg)("li",{parentName:"ul"},"Will fail with ",(0,r.yg)("inlineCode",{parentName:"li"},"E")," if there is an error")),(0,r.yg)("p",null,"Like the ",(0,r.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, it can be transformed and also composed with other ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," data types to build complex and large HTTP applications."),(0,r.yg)("h3",{id:"1-greeting-app"},"1. Greeting App"),(0,r.yg)("p",null,"The Greeting App is a simple Http App that returns a greeting message. First, let's see how this app is defined:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object GreetingApp {\n  def apply(): Http[Any, Nothing, Request, Response] = ???\n}\n")),(0,r.yg)("p",null,"So this means that this app doesn't require any services from the environment (",(0,r.yg)("inlineCode",{parentName:"p"},"Any"),"), it doesn't fail (",(0,r.yg)("inlineCode",{parentName:"p"},"Nothing"),"), and it takes a request (",(0,r.yg)("inlineCode",{parentName:"p"},"Request"),") and returns a response (",(0,r.yg)("inlineCode",{parentName:"p"},"Response"),")."),(0,r.yg)("p",null,"It has three routes, and we are going to test them one by one:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When we build and run this quickstart, there is a greeting app that we can access using the following endpoint:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/greet\n")),(0,r.yg)("p",null,"Let's try to access this endpoint using curl and see what we get:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"user@host ~> curl -i localhost:8080/greet\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 12\n\nHello World!\u23ce\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"We have another endpoint that pattern matches the ",(0,r.yg)("inlineCode",{parentName:"li"},"/greet/:name")," request:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/greet/:name\n")),(0,r.yg)("p",null,"Using this endpoint, we can greet a user by its name:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"user@host ~> curl -i http://localhost:8080/greet/John\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 10\n\nHello John!\u23ce\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Finally, we have a third endpoint that extracts the names from the query parameters:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/greet?name=:name\n")),(0,r.yg)("p",null,"Let's try to request this endpoint and see what we get:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'user@host ~> curl -i "http://localhost:8080/greet?name=John"\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 11\n\nHello John!\u23ce\n')),(0,r.yg)("p",null,"It also works for more than one query params:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'user@host ~> curl -i "http://localhost:8080/greet?name=Jane&name=John"\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 21\n\nHello Jane and John!\u23ce\n')),(0,r.yg)("h3",{id:"2-download-app"},"2. Download App"),(0,r.yg)("p",null,"The next example shows how to download a file from the server. First, let's look at the type of the ",(0,r.yg)("inlineCode",{parentName:"p"},"downloadApp"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object DownloadApp {\n  def apply(): Http[Any, Throwable, Request, Response] = ???\n}\n")),(0,r.yg)("p",null,"It is an Http App that doesn't require any environment, it may fail with ",(0,r.yg)("inlineCode",{parentName:"p"},"Throwable")," and it consumes a ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," and produces a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," respectively."),(0,r.yg)("p",null,"Let's try to access this endpoint using curl and see what we get:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Our first endpoint is ",(0,r.yg)("inlineCode",{parentName:"li"},"/download")," which downloads a file from the server:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/download\n")),(0,r.yg)("p",null,"If we try to request this endpoint using curl, we will see the following output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"user@host ~> curl -i http://localhost:8080/download\nHTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Disposition: attachment; filename=file.txt\ntransfer-encoding: chunked\n\nline number 1\n1, 2, 3, 4, 5\nline number 3\nend of file\n")),(0,r.yg)("p",null,"Also, if we try to access this URL from the browser, the browser will prompt us to download the file with ",(0,r.yg)("inlineCode",{parentName:"p"},"file.txt")," as the name."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"The second endpoint is an example of downloading a big file when we want to stream the chunks of the file to the client:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/download/stream\n")),(0,r.yg)("p",null,"When we try to access this endpoint using curl, we will see the following output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl -i http://localhost:8080/download/stream\nHTTP/1.1 200 OK\ntransfer-encoding: chunked\n\n1\n2\n3\n...\n")),(0,r.yg)("p",null,"We have scheduled some delays between each line to simulate downloading a big file. So when we run the above ",(0,r.yg)("inlineCode",{parentName:"p"},"curl")," command, we can see that the content of the file will be downloaded gradually."),(0,r.yg)("h3",{id:"3-counter-app"},"3. Counter App"),(0,r.yg)("p",null,"The next example shows how we can have a stateful web service. Let's look at the type of the ",(0,r.yg)("inlineCode",{parentName:"p"},"counterApp"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object CounterApp {\n  def apply(): Http[Ref[Int], Nothing, Request, Response] = ???\n}\n")),(0,r.yg)("p",null,"This is an Http app that requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref[Int]")," as an environment, it cannot fail and it consumes a ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," and produces a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," respectively."),(0,r.yg)("p",null,"This counter increments every time we access the ",(0,r.yg)("inlineCode",{parentName:"p"},"/up")," endpoint and decrements every time we access the ",(0,r.yg)("inlineCode",{parentName:"p"},"/down")," endpoint:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:8080/up\nGet http://localhost:8080/down\n")),(0,r.yg)("p",null,"Let's try to access the ",(0,r.yg)("inlineCode",{parentName:"p"},"up")," endpoint 100 times and then access the ",(0,r.yg)("inlineCode",{parentName:"p"},"down")," endpoint 25 times:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"user@host ~> for i in {1..100}; do curl http://localhost:8080/up; echo -n ' '; done;\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100\nuser@host ~> for i in {1..25}; do curl http://localhost:8080/down; echo -n ' '; done;\n99 98 97 96 95 94 93 92 91 90 89 88 87 86 85 84 83 82 81 80 79 78 77 76 75\n")),(0,r.yg)("p",null,"We can see that the state of the counter is maintained between requests. In this example, we used the ZIO environment to store the access and store the state of the counter."),(0,r.yg)("h3",{id:"4-user-app"},"4. User App"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"UserApp()")," is an Http app with the following definition:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"object UserApp {\n  def apply(): Http[UserRepo, Throwable, Request, Response] = ???\n}\n")),(0,r.yg)("p",null,"It requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"UserRepo")," service from the ZIO environment, it can fail with ",(0,r.yg)("inlineCode",{parentName:"p"},"Throwable")," and it consumes a ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," and produces a ",(0,r.yg)("inlineCode",{parentName:"p"},"Response")," respectively. In this example, we use the in-memory version of the ",(0,r.yg)("inlineCode",{parentName:"p"},"UserRepo")," service called ",(0,r.yg)("inlineCode",{parentName:"p"},"InmemoryUserRepo"),"."),(0,r.yg)("p",null,"This app has three endpoints:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'POST http://localhost:8080/users -d \'{"name": "John", "age": 30}\'\nGET  http://localhost:8080/users\nGET  http://localhost:8080/users/:id\n')),(0,r.yg)("p",null,"Let's try to register a new user:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'user@host ~> curl -i http://localhost:8080/users -d \'{"name": "John", "age": 35}\'\nHTTP/1.1 200 OK\ncontent-type: text/plain\ncontent-length: 36\n\nf0f319ea-404d-4a55-abd0-41bee4ce887e\n')),(0,r.yg)("p",null,"Now, we can get any registered user by its id:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'user@host ~> curl -i http://localhost:8080/users/f0f319ea-404d-4a55-abd0-41bee4ce887e\nHTTP/1.1 200 OK\ncontent-type: application/json\ncontent-length: 24\n\n{"name":"John","age":35}\n')),(0,r.yg)("p",null,"While this app is stateful, it is not persistent. We just provided the in-memory version of the ",(0,r.yg)("inlineCode",{parentName:"p"},"UserRepo")," service called ",(0,r.yg)("inlineCode",{parentName:"p"},"InmemoryUserRepo"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Server.serve(\n  (GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()).withDefaultErrorResponse\n).provide(\n  Server.defaultWithPort(8080),\n  ZLayer.fromZIO(Ref.make(0)),\n  InmemoryUserRepo.layer\n)\n")),(0,r.yg)("p",null,"To make it persistent, we can provide the ",(0,r.yg)("inlineCode",{parentName:"p"},"PersistentUserRepo")," service instead:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"Server.serve(\n  (GreetingApp() ++ DownloadApp() ++ CounterApp() ++ UserApp()).withDefaultErrorResponse\n).provide(\n  Server.defaultWithPort(8080),\n  ZLayer.fromZIO(Ref.make(0)),\n  PersistentUserRepo.layer\n)\n")),(0,r.yg)("p",null,"Now, if we register a new user, the user will be persisted and if the application is restarted, the user will be available."))}c.isMDXComponent=!0}}]);