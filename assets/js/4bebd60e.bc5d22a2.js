"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[15623],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,g=d["".concat(i,".").concat(c)]||d[c]||h[c]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const a={id:"routes",title:"Routes"},l=void 0,s={unversionedId:"zio-http/dsl/routes",id:"zio-http/dsl/routes",title:"Routes",description:"Routes models a collection of routes, each of which is defined by a pattern and a handler. This data type can be thought of as modeling a routing table, which decides where to direct every endpoint in an API based on both method and path of the request.",source:"@site/docs/zio-http/dsl/routes.md",sourceDirName:"zio-http/dsl",slug:"/zio-http/dsl/routes",permalink:"/zio-http/dsl/routes",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-http/dsl/routes.md",tags:[],version:"current",frontMatter:{id:"routes",title:"Routes"},sidebar:"ecosystem-sidebar",previous:{title:"Server",permalink:"/zio-http/dsl/server"},next:{title:"RoutePattern",permalink:"/zio-http/dsl/route_pattern"}},i={},u=[{value:"Building Routes",id:"building-routes",level:2},{value:"Nested Routes",id:"nested-routes",level:2},{value:"Combining Routes",id:"combining-routes",level:2},{value:"Transforming Routes",id:"transforming-routes",level:2},{value:"Through Handler Transformations",id:"through-handler-transformations",level:3},{value:"Through Applying Middlewares",id:"through-applying-middlewares",level:3},{value:"Handling Errors in Routes",id:"handling-errors-in-routes",level:2},{value:"Converting <code>Routes</code> to <code>HttpApp</code>",id:"converting-routes-to-httpapp",level:2},{value:"Running an App",id:"running-an-app",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," models a collection of routes, each of which is defined by a pattern and a handler. This data type can be thought of as modeling a routing table, which decides where to direct every endpoint in an API based on both method and path of the request."),(0,o.yg)("p",null,"Let's see an example of a simple ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," that has two routes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\nRoutes(\n  Method.GET / "hello"        -> Handler.text("hello"),\n  Method.GET / "health-check" -> Handler.ok,\n)\n')),(0,o.yg)("h2",{id:"building-routes"},"Building Routes"),(0,o.yg)("p",null,"To build empty routes we have ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes.empty")," constructor:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.http._ \n\nval routes1 = Routes.empty\n")),(0,o.yg)("p",null,"We can build routes with the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes.apply")," constructor, which takes varargs of individual ",(0,o.yg)("inlineCode",{parentName:"p"},"Route")," values:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"object Routes {\n  def apply[Env, Err](\n    route : Route[Env, Err],\n    routes: Route[Env, Err]*,\n  ): Routes[Env, Err] = ???\n}\n")),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'Routes(\n  Method.GET / "hello"        -> Handler.text("hello"),\n  Method.GET / "health-check" -> Handler.ok,\n  Method.POST / "echo"        ->\n    handler { req: Request =>\n      req.body.asString.map(Response.text(_))\n    }.sandbox,\n)\n')),(0,o.yg)("p",null,"Please note that in this example, we have used the DSL for constructing routes, which consists of two parts, the route pattern and the handler:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"RoutePattern"),"- The route pattern is responsible for matching the method and path of the incoming request."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Handler"),"- The handler is responsible for producing a response to the matched request.")),(0,o.yg)("p",null,"Although we can build ",(0,o.yg)("inlineCode",{parentName:"p"},"Route")," values by using the constructors of ",(0,o.yg)("inlineCode",{parentName:"p"},"Route"),", we may prefer to use the DSL for constructing routes which starts in ",(0,o.yg)("inlineCode",{parentName:"p"},"Method"),"."),(0,o.yg)("p",null,"Using the ",(0,o.yg)("inlineCode",{parentName:"p"},"/")," operator of ",(0,o.yg)("inlineCode",{parentName:"p"},"Method"),", we can construct route patterns, which can then be bound to handlers, to create a fully formed route:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val routes2 = \n  Routes(\n    Method.GET / "hello"   -> Handler.ok,\n    Method.GET / "goodbye" -> Handler.ok\n  )\n')),(0,o.yg)("p",null,"Using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes.fromIterable")," constructor, we can build routes from an iterable of individual routes."),(0,o.yg)("h2",{id:"nested-routes"},"Nested Routes"),(0,o.yg)("p",null,"Routes can be nested, which means that we can have routes that are themselves collections of other routes. This is useful for organizing routes into hierarchical structures, and for sharing common paths accross routes."),(0,o.yg)("p",null,"Let's see an example of nested routes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.http.codec.PathCodec._\n\n\nval routes = \n  literal("nest1") /\n    Routes.fromIterable(\n      Chunk(\n        Method.GET / "foo" -> Handler.text("foo"),\n        Method.GET / "bar" -> Handler.text("bar"),\n      ) ++\n        Chunk(\n          literal("nest2") / Routes(\n            Method.GET / "baz" -> Handler.text("baz"),\n            Method.GET / "qux" -> Handler.text("qux"),\n          ),\n          literal("nest2") / Routes(\n            Method.GET / "quux" -> Handler.text("quux"),\n            Method.GET / "corge" -> Handler.text("corge"),\n          ),\n        ).map(_.routes).flatten,\n    )\n')),(0,o.yg)("h2",{id:"combining-routes"},"Combining Routes"),(0,o.yg)("p",null,"The only way to combine two routes collections is to concatenate them using the ",(0,o.yg)("inlineCode",{parentName:"p"},"++")," operator:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"val routes3 = routes1 ++ routes2\n")),(0,o.yg)("p",null,"If the routes have any overlap in their route patterns, then those on the left-side will take\nprecedence over those on the right-hand side."),(0,o.yg)("h2",{id:"transforming-routes"},"Transforming Routes"),(0,o.yg)("p",null,"Since routes are just a collection of individual routes, we can transform them in all the same ways that we can transform an individual route. We could do this manually, by building new routes from the old collection of routes, but several convenient methods do this:"),(0,o.yg)("h3",{id:"through-handler-transformations"},"Through Handler Transformations"),(0,o.yg)("p",null,"Takes a function of type ",(0,o.yg)("inlineCode",{parentName:"p"},"Handler[Env, Response, Request, Response] => Handler[Env1, Response, Request, Response]")," and applies it to all routes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait Routes[-Env, +Err] {\n  def transform[Env1](\n    f: Handler[Env, Response, Request, Response] => Handler[Env1, Response, Request, Response],\n  ): Routes[Env1, Err] = ???\n}  \n")),(0,o.yg)("p",null,"Let's add a delay to all routes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nval routes: Routes[Any, Response] = ???\n\nroutes.transform[Any] { handle =>\n   handler { (request: Request) => \n     ZIO.sleep(1.second) *> handle(request)\n   }\n}\n")),(0,o.yg)("h3",{id:"through-applying-middlewares"},"Through Applying Middlewares"),(0,o.yg)("p",null,"One of the most common ways to transform routes is to apply a middleware to them. A middleware is a function that takes a collection of routes and returns a new collection of routes. To apply a middleware to ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," we can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes#@@")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait Routes[-Env, +Err] {\n  def @@[Env1 <: Env](aspect: Middleware[Env1]): Routes[Env1, Err]\n}\n")),(0,o.yg)("p",null,"Let's add a logging middleware to all routes:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nval routes: Routes[Any, Response] = ???\n\nval newRoutes = routes @@ HandlerAspect.dropTrailingSlash\n")),(0,o.yg)("p",null,"To learn more about middlewares, see the ",(0,o.yg)("a",{parentName:"p",href:"/zio-http/dsl/middleware"},"Middleware")," section."),(0,o.yg)("h2",{id:"handling-errors-in-routes"},"Handling Errors in Routes"),(0,o.yg)("p",null,"Like ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO")," data type, we can handle errors in ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes"),". When we handle errors at the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," level, we are handling errors that occur in any of the routes within the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes")," data type."),(0,o.yg)("p",null,"The following methods are available for error handling:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait Routes[-Env, +Err] {\n  def handleError(f: Err => Response): Routes[Env, Nothing]\n  def handleErrorCause(f: Cause[Err] => Response): Routes[Env, Nothing]\n  def handleErrorCauseZIO(f: Cause[Err] => ZIO[Any, Nothing, Response]): Routes[Env, Nothing]\n}\n")),(0,o.yg)("p",null,"All of these methods are similar to their ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO")," counterparts, i.e. ",(0,o.yg)("inlineCode",{parentName:"p"},"ZIO#catch*"),", but they are applied to the routes."),(0,o.yg)("p",null,"If we need to take into account what request caused the error, we can use the following methods, instead:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"trait Routes[-Env, +Err] {\n  def handleErrorRequest(f: (Err, Request) => Response): Routes[Env, Nothing]\n  def handleErrorRequestCause(f: (Request, Cause[Err]) => Response): Routes[Env, Nothing]\n  def handleErrorRequestCauseZIO(f: (Request, Cause[Err]) => ZIO[Any, Nothing, Response]): Routes[Env, Nothing]\n}\n")),(0,o.yg)("h2",{id:"converting-routes-to-httpapp"},"Converting ",(0,o.yg)("inlineCode",{parentName:"h2"},"Routes")," to ",(0,o.yg)("inlineCode",{parentName:"h2"},"HttpApp")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"HttpApp[-R]")," represents a fully-specified HTTP application that can be executed by the server."),(0,o.yg)("p",null,"When we are done building a collection of routes, our next step is typically to convert these routes into an HTTP application using the ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes#toHttpApp")," method, which we can then execute with the server."),(0,o.yg)("p",null,"Routes may have handled or unhandled errors.  If the error type of ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes[Env, Err]")," is equal to or a subtype of ",(0,o.yg)("inlineCode",{parentName:"p"},"Response"),", we call this a route where all errors are handled. Otherwise, it's a route where some errors are unhandled."),(0,o.yg)("p",null,"For instance, a route of type ",(0,o.yg)("inlineCode",{parentName:"p"},"Route[Env, Throwable]")," has not handled its errors by converting them into responses. Consequently, such unfinished routes cannot be converted into HTTP applications. We must first handle errors using the ",(0,o.yg)("inlineCode",{parentName:"p"},"handleError")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"handleErrorCause")," methods."),(0,o.yg)("p",null,"By handling our errors, we ensure that clients interacting with our API will not encounter strange or unexpected responses, but will always be able to interact effectively with our web service, even in exceptional cases."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"If we aim to automatically convert our failures into suitable responses, without revealing details about the specific nature of the errors, we can utilize ",(0,o.yg)("inlineCode",{parentName:"p"},"Routes#sandbox"),". After addressing our errors in this manner, we can proceed to convert our routes into an HTTP application.")),(0,o.yg)("h2",{id:"running-an-app"},"Running an App"),(0,o.yg)("p",null,"ZIO HTTP server needs an ",(0,o.yg)("inlineCode",{parentName:"p"},"HttpApp[R]")," for running. We can use ",(0,o.yg)("inlineCode",{parentName:"p"},"Server.serve()")," method to bootstrap the server with\nan ",(0,o.yg)("inlineCode",{parentName:"p"},"HttpApp[R]"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\n\nobject HelloWorld extends ZIOAppDefault {\n  val app: HttpApp[Any] = Handler.ok.toHttpApp\n\n  override def run = Server.serve(app).provide(Server.default)\n}\n")))}h.isMDXComponent=!0}}]);