"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[61560],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(r),u=a,g=c["".concat(i,".").concat(u)]||c[u]||y[u]||o;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={id:"opentelemetry-example",title:"OpenTelemetry Example"},l=void 0,p={unversionedId:"zio-telemetry/opentelemetry-example",id:"zio-telemetry/opentelemetry-example",title:"OpenTelemetry Example",description:"You can find the source code here.",source:"@site/docs/zio-telemetry/opentelemetry-example.md",sourceDirName:"zio-telemetry",slug:"/zio-telemetry/opentelemetry-example",permalink:"/zio-telemetry/opentelemetry-example",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-telemetry/opentelemetry-example.md",tags:[],version:"current",frontMatter:{id:"opentelemetry-example",title:"OpenTelemetry Example"},sidebar:"ecosystem-sidebar",previous:{title:"OpenTelemetry",permalink:"/zio-telemetry/opentelemetry"},next:{title:"OpenTelemetry Automatic Instrumentation Example",permalink:"/zio-telemetry/opentelemetry-instrumentation-example"}},i={},s=[],m={toc:s},c="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You can find the source code ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-telemetry/tree/series/2.x/opentelemetry-example"},"here"),"."),(0,a.yg)("p",null,"For an explanation in more detail, check the ",(0,a.yg)("a",{parentName:"p",href:"/zio-telemetry/opentracing-example"},"OpenTracing Example"),"."),(0,a.yg)("p",null,"We're going to show an example of how to pass contextual information using ",(0,a.yg)("a",{parentName:"p",href:"https://opentelemetry.io/docs/concepts/signals/baggage/"},"Baggage")," and collect traces, metrics, and logs."),(0,a.yg)("hr",null),(0,a.yg)("p",null,"By default the example code uses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/tree/main/exporters/logging-otlp"},"OTLP Logging Exporters")," to print all signals to stdout in OTLP JSON encoding. This means that you can run the application immediately and observe the results."),(0,a.yg)("p",null,"For this, you need to run proxy and backend parts of application in different terminals via sbt."),(0,a.yg)("p",null,"Run proxy:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sbt "opentelemetryExample/runMain zio.telemetry.opentelemetry.example.ProxyApp"\n')),(0,a.yg)("p",null,"Run backend:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'sbt "opentelemetryExample/runMain zio.telemetry.opentelemetry.example.BackendApp"\n')),(0,a.yg)("p",null,"Now perform the following request to see the results immediately:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X GET http://localhost:8080/statuses\n")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"In case you want to try different observability platforms such as ",(0,a.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),", ",(0,a.yg)("a",{parentName:"p",href:"https://fluentbit.io/"},"Fluentbit"),", ",(0,a.yg)("a",{parentName:"p",href:"https://datalust.co/seq"},"Seq"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"DataDog"),", ",(0,a.yg)("a",{parentName:"p",href:"https://www.honeycomb.io/"},"Honeycomb")," or others, please change the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/zio/zio-telemetry/blob/series/2.x/opentelemetry-example/src/main/scala/zio/telemetry/opentelemetry/example/otel/OtelSdk.scala"},"OtelSdk.scala")," file by choosing from the available tracer, meter, and logger providers or by implementing your own. "),(0,a.yg)("hr",null),(0,a.yg)("p",null,"We chose ",(0,a.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger")," for distributed traces and ",(0,a.yg)("a",{parentName:"p",href:"https://datalust.co/seq"},"Seq")," to store logs to demonstrate how the library works with available open-source observability platforms."),(0,a.yg)("p",null,"Start Jaeger by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it \\\n  -d \\\n  -e COLLECTOR_OTLP_ENABLED=true \\\n  -p 4317:4317 \\\n  -p 16686:16686 \\\n  jaegertracing/all-in-one:1.47\n")),(0,a.yg)("p",null,"To run Seq, you also need to specify an admin password (user is ",(0,a.yg)("inlineCode",{parentName:"p"},"admin"),"):"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"PH=$(echo 'admin123' | docker run --rm -i datalust/seq config hash)\n\ndocker run \\\n  -d \\\n  --restart unless-stopped \\\n  -e ACCEPT_EULA=Y \\\n  -e SEQ_FIRSTRUN_ADMINPASSWORDHASH=\"$PH\" \\\n  -p 80:80 \\\n  -p 5341:5341 \\\n  datalust/seq\n")),(0,a.yg)("p",null,"Run the application and fire a curl request as shown above, and then head over to ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:16686/"},"Jaeger UI")," and ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:80/"},"Seq UI")," to see the result."))}y.isMDXComponent=!0}}]);