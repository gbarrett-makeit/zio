"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[75249],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var s=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=s.createContext({}),l=function(e){var t=s.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||r;return n?s.createElement(m,i(i({ref:t},p),{},{components:n})):s.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<r;l++)i[l]=n[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(58168),o=(n(96540),n(15680));const r={id:"monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",sidebar_label:"Monitoring a ZIO Application Using ZIO's Built-in Metric System"},i=void 0,a={unversionedId:"guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",id:"guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",description:"Introduction",source:"@site/docs/guides/tutorials/monitor-a-zio-application-using-zios-built-in-metric-system.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",permalink:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/monitor-a-zio-application-using-zios-built-in-metric-system.md",tags:[],version:"current",frontMatter:{id:"monitor-a-zio-application-using-zio-built-in-metric-system",title:"Tutorial: How to Monitor a ZIO Application Using ZIO's Built-in Metric System?",sidebar_label:"Monitoring a ZIO Application Using ZIO's Built-in Metric System"},sidebar:"guides-sidebar",previous:{title:"Producing/Consuming Data To/From Kafka Topics",permalink:"/guides/tutorials/producing-consuming-data-from-kafka-topics"},next:{title:"Debugging a ZIO Application",permalink:"/guides/tutorials/debug-a-zio-application"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Running the Example",id:"running-the-example",level:2},{value:"Trying a Simple Example",id:"trying-a-simple-example",level:2},{value:"Built-in ZIO HTTP Metrics",id:"built-in-zio-http-metrics",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Serving Prometheus Metrics",id:"serving-prometheus-metrics",level:2},{value:"Testing the Metrics",id:"testing-the-metrics",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,s.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"ZIO has a built-in metric system that allows us to monitor the performance of our application. This is very useful for debugging and tuning our application. In this tutorial, we are going to learn how to add metrics to our application and then how to connect our application to one of the metric backends, e.g. Prometheus."),(0,o.yg)("h2",{id:"running-the-example"},"Running the Example"),(0,o.yg)("p",null,"To access the code examples, you can clone the ",(0,o.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstarts")," project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/zio/zio-quickstarts.git\n$ cd zio-quickstarts/zio-quickstart-restful-webservice-metrics\n")),(0,o.yg)("p",null,"And finally, run the application using sbt:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ sbt run\n")),(0,o.yg)("p",null,"Alternatively, to enable hot-reloading and prevent port binding issues, you can use:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"sbt reStart\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},'If you encounter a "port already in use" error, you can use ',(0,o.yg)("inlineCode",{parentName:"p"},"sbt-revolver")," to manage server restarts more effectively. The ",(0,o.yg)("inlineCode",{parentName:"p"},"reStart")," command will start your server and ",(0,o.yg)("inlineCode",{parentName:"p"},"reStop")," will properly stop it, releasing the port."),(0,o.yg)("p",{parentName:"admonition"},"To enable this feature, we have included ",(0,o.yg)("inlineCode",{parentName:"p"},"sbt-revolver")," in the project. For more details on this, refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://zio.dev/zio-http/installation#hot-reload-changes-watch-mode"},"ZIO HTTP documentation on hot-reloading"),".")),(0,o.yg)("h2",{id:"trying-a-simple-example"},"Trying a Simple Example"),(0,o.yg)("p",null,"Before going to apply the metrics in our application, let's try a simple example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.metrics.Metric\n\nobject MainApp extends ZIOAppDefault {\n  private val count = Metric.counterInt("fib_call_total").fromConst(1)\n\n  def fib(n: Int): ZIO[Any, Nothing, Int] =\n    if (n <= 1) ZIO.succeed(1)\n    else for {\n      a <- fib(n - 1) @@ count\n      b <- fib(n - 2) @@ count\n    } yield a + b\n\n  def run =\n    for {\n      i <- Console.readLine("Please enter a number to calculate fibonacci: ").mapAttempt(_.toInt)\n      n <- fib(i) @@ count\n      _ <- Console.printLine(s"fib($i) = $n")\n      c <- count.value\n      _ <- ZIO.debug(s"number of fib calls to calculate fib($i): ${c.count}")\n    } yield ()\n}\n')),(0,o.yg)("p",null,"In this example, we are going to calculate the Fibonacci number for a given number. We also count the number of times we call the ",(0,o.yg)("inlineCode",{parentName:"p"},"fib")," function using the ",(0,o.yg)("inlineCode",{parentName:"p"},"count")," metric. Finally, we will print the value of the metric as a debug message."),(0,o.yg)("p",null,"This is a pedagogical example of how to use metrics. In real life, we will probably want to poll the metrics using a web API and feed them to a monitoring system, e.g. Prometheus. In the following sections, we will learn how to do that by applying the metrics to our RESTful web service."),(0,o.yg)("h2",{id:"built-in-zio-http-metrics"},"Built-in ZIO HTTP Metrics"),(0,o.yg)("p",null,"ZIO HTTP has built-in support for metrics. We can attach metrics middleware to our HTTP application using the ",(0,o.yg)("inlineCode",{parentName:"p"},"@@")," syntax:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.http._\nimport zio.schema.codec.JsonCodec.schemaBasedBinaryCodec\n\n\nobject UserRoutes {\n\n  def apply(): Routes[UserRepo, Response] =\n    Routes(\n      Method.GET / "users" -> handler {\n        UserRepo.users.foldZIO(\n          e =>\n            ZIO\n              .logError(s"Failed to retrieve users. $e") *>\n              ZIO.fail(Response.internalServerError("Cannot retrieve users!")),\n          users =>\n            ZIO\n              .log(\n                s"Retrieved users successfully: response length=${users.length}"\n              )\n              .as(Response(body = Body.from(users)))\n        )\n      }\n    ) @@ Middleware.metrics()\n}\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"metrics")," middleware is attached to all the routes in the ",(0,o.yg)("inlineCode",{parentName:"p"},"UserRoutes"),". Currently, it only counts the number of requests to the ",(0,o.yg)("inlineCode",{parentName:"p"},"/users")," endpoint. We can add more routes to the ",(0,o.yg)("inlineCode",{parentName:"p"},"UserRoutes")," and all of them will be counted by the ",(0,o.yg)("inlineCode",{parentName:"p"},"metrics")," middleware."),(0,o.yg)("p",null,"After adding the metrics to routes, it is time to serve the metrics as a RESTful API. Before that, let's add the required dependencies to our project."),(0,o.yg)("h2",{id:"dependencies"},"Dependencies"),(0,o.yg)("p",null,"In the following sections, we are going to utilize the ",(0,o.yg)("inlineCode",{parentName:"p"},"zio-metrics-connector")," module from the ZIO ZMX project and also provide metrics as a REST API. So let's add the following dependency to our project:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-metrics-connectors"            % "2.3.1"\nlibraryDependencies += "dev.zio" %% "zio-metrics-connectors-prometheus" % "2.3.1"\n')),(0,o.yg)("p",null,"This module provides various connectors for metrics backend, e.g. Prometheus."),(0,o.yg)("h2",{id:"serving-prometheus-metrics"},"Serving Prometheus Metrics"),(0,o.yg)("p",null,"The following snippet shows how to provide an HTTP endpoint that exposes the metrics as a REST API for Prometheus:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio._\nimport zio.metrics.connectors.prometheus.PrometheusPublisher\n\nobject PrometheusPublisherRoutes {\n  def apply(): Routes[PrometheusPublisher, Nothing] = {\n    Routes(\n      Method.GET / "metrics" ->\n        handler(\n          ZIO.serviceWithZIO[PrometheusPublisher](_.get.map(Response.text))\n        )\n    )\n  }\n}\n')),(0,o.yg)("p",null,"Next, we need to add the ",(0,o.yg)("inlineCode",{parentName:"p"},"PrometheusPublisherRoutes")," HTTP App to our application:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.http._\nimport zio.metrics.connectors.{MetricsConfig, prometheus}\n\nobject MainApp extends ZIOAppDefault {\n  private val metricsConfig = ZLayer.succeed(MetricsConfig(1.seconds))\n\n  def run =\n    Server.serve(\n      GreetingRoutes() ++ DownloadRoutes() ++ CounterRoutes() ++ UserRoutes() ++ PrometheusPublisherRoutes()\n    ).provide(\n      Server.default,\n\n      // An layer responsible for storing the state of the `counterApp`\n      ZLayer.fromZIO(Ref.make(0)),\n\n      // To use the persistence layer, provide the `PersistentUserRepo.layer` layer instead\n      InmemoryUserRepo.layer,\n\n      // configs for metric backends\n      metricsConfig,\n\n      // The prometheus reporting layer\n      prometheus.publisherLayer,\n      prometheus.prometheusLayer,\n    )\n}\n")),(0,o.yg)("h2",{id:"testing-the-metrics"},"Testing the Metrics"),(0,o.yg)("p",null,"Now that we have the metrics as a REST API, we can test them. Let's run the application and then send some requests to the application as below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://localhost:8080/users -d \'{"name": "John", "age": 42}\'\n$ curl -i http://localhost:8080/users -d \'{"name": "Jane", "age": 43}\'\n$ curl -i http://localhost:8080/users\n')),(0,o.yg)("p",null,'If we fetch the metrics from the "/metrics" endpoint, we will see the metrics in the Prometheus format, like below:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://localhost:8080/metrics\nHTTP/1.1 200 OK\ncontent-type: text/plain\ndate: Tue, 30 Apr 2024 18:58:26 GMT\ncontent-length: 4801\n\n# TYPE http_concurrent_requests_total gauge\n# HELP http_concurrent_requests_total\nhttp_concurrent_requests_total{method="GET",path="/users",} 0.0 1714503503829\n# TYPE http_concurrent_requests_total gauge\n# HELP http_concurrent_requests_total\nhttp_concurrent_requests_total{method="POST",path="/users",} 0.0 1714503503829\n# TYPE http_request_duration_seconds histogram\n# HELP http_request_duration_seconds\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.005",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.01",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.025",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.05",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.075",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.1",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.25",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.5",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="0.75",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="1.0",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="2.5",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="5.0",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="7.5",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="10.0",} 2.0 1714503503829\nhttp_request_duration_seconds_bucket{method="POST",path="/users",status="200",le="+Inf",} 2.0 1714503503829\n\nhttp_request_duration_seconds_sum{method="POST",path="/users",status="200",} 0.100570365 1714503503829\nhttp_request_duration_seconds_count{method="POST",path="/users",status="200",} 2.0 1714503503829\nhttp_request_duration_seconds_min{method="POST",path="/users",status="200",} 0.00120463 1714503503829\nhttp_request_duration_seconds_max{method="POST",path="/users",status="200",} 0.099365735 1714503503829\n# TYPE http_request_duration_seconds histogram\n# HELP http_request_duration_seconds\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.005",} 0.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.01",} 0.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.025",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.05",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.075",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.1",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.25",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.5",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="0.75",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="1.0",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="2.5",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="5.0",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="7.5",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="10.0",} 1.0 1714503503829\nhttp_request_duration_seconds_bucket{method="GET",path="/users",status="200",le="+Inf",} 1.0 1714503503829\n\nhttp_request_duration_seconds_sum{method="GET",path="/users",status="200",} 0.017157212 1714503503829\nhttp_request_duration_seconds_count{method="GET",path="/users",status="200",} 1.0 1714503503829\nhttp_request_duration_seconds_min{method="GET",path="/users",status="200",} 0.017157212 1714503503829\nhttp_request_duration_seconds_max{method="GET",path="/users",status="200",} 0.017157212 1714503503829\n# TYPE http_requests_total counter\n# HELP http_requests_total\nhttp_requests_total{method="POST",path="/users",status="200",} 2.0 1714503503829\n# TYPE http_requests_total counter\n# HELP http_requests_total\nhttp_requests_total{method="GET",path="/users",status="200",} 1.0 1714503503829\u23ce\n')),(0,o.yg)("p",null,"Now that we have the metrics as a REST API, we can add this endpoint to our Prometheus server to fetch the metrics periodically."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"In this tutorial, we have learned how to define metrics and apply them to our application. We have also learned how to provide the metrics as a REST API which then can be polled by a Prometheus server."),(0,o.yg)("p",null,"All the source code associated with this article is available on the ",(0,o.yg)("a",{parentName:"p",href:"http://github.com/zio/zio-quickstarts"},"ZIO Quickstart")," on GitHub."))}d.isMDXComponent=!0}}]);