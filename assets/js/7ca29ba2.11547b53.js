"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[11192],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>g});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),y=a,g=c["".concat(i,".").concat(y)]||c[y]||u[y]||o;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},64056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(45072),a=(n(11504),n(95788));const o={id:"opentelemetry-instrumentation-example",title:"OpenTelemetry Automatic Instrumentation Example"},l=void 0,p={unversionedId:"zio-telemetry/opentelemetry-instrumentation-example",id:"zio-telemetry/opentelemetry-instrumentation-example",title:"OpenTelemetry Automatic Instrumentation Example",description:"You can find the source code here.",source:"@site/docs/zio-telemetry/opentelemetry-instrumentation-example.md",sourceDirName:"zio-telemetry",slug:"/zio-telemetry/opentelemetry-instrumentation-example",permalink:"/zio-telemetry/opentelemetry-instrumentation-example",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-telemetry/opentelemetry-instrumentation-example.md",tags:[],version:"current",frontMatter:{id:"opentelemetry-instrumentation-example",title:"OpenTelemetry Automatic Instrumentation Example"},sidebar:"ecosystem-sidebar",previous:{title:"OpenTelemetry Example",permalink:"/zio-telemetry/opentelemetry-example"},next:{title:"ZIO Webhooks",permalink:"/zio-webhooks/"}},i={},s=[],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can find the source code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-telemetry/tree/series/2.x/opentelemetry-instrumentation-example"},"here"),"."),(0,a.yg)("p",null,"Firstly, we need to start the observability backends (",(0,a.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger")," and ",(0,a.yg)("a",{parentName:"p",href:"https://datalust.co/seq"},"Seq"),")"),(0,a.yg)("p",null,"Start Jaeger by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -d \\\n  -e COLLECTOR_OTLP_ENABLED=true \\\n  -p 14250:14250 \\\n  -p 16686:16686 \\\n  -p 4317:4317 \\\n  jaegertracing/all-in-one:1.47\n")),(0,a.yg)("p",null,"To run Seq, you also need to specify an admin password (user is ",(0,a.yg)("inlineCode",{parentName:"p"},"admin"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"PH=$(echo 'admin123' | docker run --rm -i datalust/seq config hash)\n\ndocker run \\\n  -d \\\n  --restart unless-stopped \\\n  -e ACCEPT_EULA=Y \\\n  -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=\"$PH\" \\\n  -p 80:80 \\\n  -p 5341:5341 \\\n  datalust/seq\n")),(0,a.yg)("p",null,"After this, we can kick off our application to generate some metrics."),(0,a.yg)("p",null,"For this, we have to download OpenTelemetry JVM agent JAR:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'OTEL_AGENT_PATH=$(cs fetch --classpath "io.opentelemetry.javaagent:opentelemetry-javaagent:latest.release")\n')),(0,a.yg)("p",null,"Then start the server application"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sbt -J-javaagent:$OTEL_AGENT_PATH \\\n    -J-Dotel.service.name=example-server \\\n    -J-Dotel.traces.sampler=always_on \\\n    -J-Dotel.traces.exporter=otlp \\\n    -J-Dotel.logs.exporter=otlp \\\n    -J-Dotel.exporter.otlp.logs.protocol="http/protobuf" \\\n    -J-Dotel.exporter.otlp.logs.endpoint="http://localhost:5341/ingest/otlp/v1/logs" \\\n    -J-Dotel.metrics.exporter=none \\\n    "opentelemetryInstrumentationExample/runMain zio.telemetry.opentelemetry.instrumentation.example.ServerApp"\n')),(0,a.yg)("p",null,"and the client application which will send one request to the server application"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sbt -J-javaagent:$OTEL_AGENT_PATH \\\n    -J-Dotel.service.name=example-client \\\n    -J-Dotel.traces.sampler=always_on \\\n    -J-Dotel.traces.exporter=otlp \\\n    -J-Dotel.metrics.exporter=none \\\n    "opentelemetryInstrumentationExample/runMain zio.telemetry.opentelemetry.instrumentation.example.ClientApp"\n')),(0,a.yg)("p",null,"Head over to ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:16686/"},"Jaeger UI")," and ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:80/"},"Seq UI")," to see the result."))}u.isMDXComponent=!0}}]);