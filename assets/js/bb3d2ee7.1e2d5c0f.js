"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[18772],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>h});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(45072),i=(n(11504),n(95788));const o={id:"identityboth",title:"IdentityBoth"},r=void 0,l={unversionedId:"zio-prelude/functional-abstractions/parameterized-types/identityboth",id:"zio-prelude/functional-abstractions/parameterized-types/identityboth",title:"IdentityBoth",description:"IdentityBoth[F] describes an associative way to combine two values F[A] and F[B] into a value F[(A, B)] that also has an identity element of type F[Any].",source:"@site/docs/zio-prelude/functional-abstractions/parameterized-types/identityboth.md",sourceDirName:"zio-prelude/functional-abstractions/parameterized-types",slug:"/zio-prelude/functional-abstractions/parameterized-types/identityboth",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityboth",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-abstractions/parameterized-types/identityboth.md",tags:[],version:"current",frontMatter:{id:"identityboth",title:"IdentityBoth"},sidebar:"ecosystem-sidebar",previous:{title:"ForEach",permalink:"/zio-prelude/functional-abstractions/parameterized-types/foreach"},next:{title:"IdentityEither",permalink:"/zio-prelude/functional-abstractions/parameterized-types/identityeither"}},s={},p=[],c={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(d,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"IdentityBoth[F]")," describes an associative way to combine two values ",(0,i.yg)("inlineCode",{parentName:"p"},"F[A]")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"F[B]")," into a value ",(0,i.yg)("inlineCode",{parentName:"p"},"F[(A, B)]")," that also has an identity element of type ",(0,i.yg)("inlineCode",{parentName:"p"},"F[Any]"),"."),(0,i.yg)("p",null,"Its signature is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait AssociativeBoth[F[_]] {\n  def both[A, B](fa: => F[A], fb: => F[B]): F[(A, B)]\n}\n\ntrait IdentityBoth[F[_]] extends AssociativeBoth[F] {\n  def any: F[Any]\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," value must be an identity element with respect to the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator, so that after removing unnecessary tuples the following property holds:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"fa <*> identity === fa\nidentity <*> fa === fa\n")),(0,i.yg)("p",null,"This is the same as the laws for the ",(0,i.yg)("inlineCode",{parentName:"p"},"Identity")," functional abstraction for concrete types except lifted into the context of parameterized types."),(0,i.yg)("p",null,"To be an identity element, running the ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," value must not do anything so we can always compose it as many times as we want with the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator without changing the result."),(0,i.yg)("p",null,"As with the other abstractions for parameterized types we have looked at ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," provides a good initial example."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," value for ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"unit"),", the workflow that does not do anything, always succeeds, and produces no useful information. We can do nothing before or after another ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," workflow as many times as we want and we will always get a workflow that does the same thing."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.io.IOException\n\nval helloUnit: ZIO[Console, IOException, Unit] =\n  Console.printLine("Hello") <*> ZIO.unit\n// helloUnit: ZIO[Console, IOException, Unit] = OnSuccess(\n//   trace = "repl.MdocSession.MdocApp0.helloUnit(identityboth.md:31)",\n//   first = Stateful(\n//     trace = "repl.MdocSession.MdocApp0.helloUnit(identityboth.md:31)",\n//     onState = zio.FiberRef$unsafe$$anon$2$$Lambda$17730/0x00007f359e73ad78@50a9c6fc\n//   ),\n//   successK = zio.ZIO$$Lambda$17732/0x00007f359e73d038@70cb4c54\n// )\n\nval unitHello: ZIO[Console, IOException, Unit] =\n  ZIO.unit <*> Console.printLine("Hello")\n// unitHello: ZIO[Console, IOException, Unit] = OnSuccess(\n//   trace = "repl.MdocSession.MdocApp0.unitHello(identityboth.md:35)",\n//   first = Sync(\n//     trace = "",\n//     eval = zio.ZIO$$$Lambda$17712/0x00007f359e72bc68@2d68c30a\n//   ),\n//   successK = zio.ZIO$$Lambda$17732/0x00007f359e73d038@2fa54aaf\n// )\n')),(0,i.yg)("p",null,"These programs are identical because ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO.unit")," does not do anything at all and always succeeds."),(0,i.yg)("p",null,"Similarly, the ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," with respect to data types such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Either")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Option")," that model failure is a successful value that contains no useful information."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val anyEither: Either[Nothing, Any] =\n  Right(())\n// anyEither: Either[Nothing, Any] = Right(value = ())\n\nval anyOption: Option[Any] =\n  Some(())\n// anyOption: Option[Any] = Some(value = ())\n")),(0,i.yg)("p",null,"Since the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator for these data types corresponds to failing on the first error or returning a success with all the results, the ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," value can never change the result. If ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," is combined with a failed value the result will be that failure, and if it is combined with a successful value the result will be that success."),(0,i.yg)("p",null,"For collection types the ",(0,i.yg)("inlineCode",{parentName:"p"},"any")," value is a collection with a single value containing no useful information."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"val anyList: List[Any] =\n  List(())\n// anyList: List[Any] = List(())\n")),(0,i.yg)("p",null,"We might be tempted to think that an empty collection would be the identity value but we can see this is not the case because the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator corresponds to the Cartesian product of two collections and the product of a collection with the empty collection is the empty collection, not the original collection."),(0,i.yg)("p",null,"If we think of a collection as representing a set of possible states then we can think of this as the state that occurs with certainty. Or if we think of the ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator as being the product of two collections the identity element for multiplication is one, not zero."),(0,i.yg)("p",null,"For a parser the identity element would be a parser that always succeeds with no useful information and does not change the parse state."),(0,i.yg)("p",null,"We can also define identity values with respect to contravariant types."),(0,i.yg)("p",null,"For example, consider the ",(0,i.yg)("inlineCode",{parentName:"p"},"Predicate")," data type."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait Predicate[-A] {\n  def run(a: A): Boolean\n}\n")),(0,i.yg)("p",null,"We could define an ",(0,i.yg)("inlineCode",{parentName:"p"},"IdentityBoth")," instance for it like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.prelude._\n\nobject Predicate {\n  implicit val PredicateIdentityBoth: IdentityBoth[Predicate] =\n    new IdentityBoth[Predicate] {\n      val any: Predicate[Any] =\n        new Predicate[Any] {\n          def run(a: Any) =\n            true\n        }\n      def both[A, B](left: => Predicate[A], right: => Predicate[B]): Predicate[(A, B)] =\n        new Predicate[(A, B)] {\n          def run(tuple: (A, B)): Boolean =\n            left.run(tuple._1) && right.run(tuple._2)\n        }\n    }\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"both")," operator for ",(0,i.yg)("inlineCode",{parentName:"p"},"Predicate")," combines two predicates to return a new predicate that is true if both of the original predicates are true. So we can always combine any predicate with the predicate that is always true without changing the result."),(0,i.yg)("p",null,"This again shows the value of separating abstractions for defining how parameterized types can be combined from abstractions for describing their variance. Otherwise we would face a proliferation of abstractions to describe the product of these various combinations of properties of the combining operation and the variance of the data type, as other functional programming libraries have experienced."),(0,i.yg)("p",null,"When a data type has both a ",(0,i.yg)("inlineCode",{parentName:"p"},"IdentityBoth")," and a ",(0,i.yg)("inlineCode",{parentName:"p"},"Covariant")," instance we can define a particularly useful operator for it called ",(0,i.yg)("inlineCode",{parentName:"p"},"succeed"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"def succeed[F[+_]: IdentityBoth : Covariant, A](a: => A): F[A] =\n  IdentityBoth[F].any.map(_ => a)\n")),(0,i.yg)("p",null,'This says that if a data type is also covariant we can always "lift" any value into the data type by starting with the identity value and using ',(0,i.yg)("inlineCode",{parentName:"p"},"map")," to transform the output type to the specified value."),(0,i.yg)("p",null,"This is very useful for working with parameterized data types in general because it allows us to take ordinary values and use them in the context of our parameterized type."),(0,i.yg)("p",null,"For example we can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"succeed")," operator on ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," to wrap any arbitrary block of Scala code in a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," effect."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'val helloScala: ZIO[Any, Nothing, Unit] =\n  ZIO.succeed(println("Hello, Scala!"))\n// helloScala: ZIO[Any, Nothing, Unit] = Sync(\n//   trace = "repl.MdocSession.MdocApp0.helloScala(identityboth.md:98)",\n//   eval = <function0>\n// )\n')),(0,i.yg)("p",null,"This is also quite useful in ZIO Prelude in particular because many operators are only defined for data types that have an ",(0,i.yg)("inlineCode",{parentName:"p"},"IdentityBoth")," instance, such as the ",(0,i.yg)("inlineCode",{parentName:"p"},"forEach")," operator on the ",(0,i.yg)("inlineCode",{parentName:"p"},"ForEach")," abstraction."),(0,i.yg)("p",null,"As with concrete data types, it is quite useful to have an identity element with respect to the combining operator for parameterized types."),(0,i.yg)("p",null,"Most of the time for working with existing data types from ZIO or the Scala standard library it will be less important directly because operators for that data type will already be defined for you."),(0,i.yg)("p",null,"However, it can still be helpful to think about what the identity value is with respect to a given operation. For example, you may not have thought of a ",(0,i.yg)("inlineCode",{parentName:"p"},"Right")," with no useful information as being an identity with respect to combining ",(0,i.yg)("inlineCode",{parentName:"p"},"Either")," values."),(0,i.yg)("p",null,"When defining your own parameterized data types, it can be helpful to think about whether an identity element exists with respect to combining values of your data type. If not, could it be refactored to have such an identity value, or does thinking about that tell you something about why it makes sense that your data type does not have one?"),(0,i.yg)("p",null,"Finally, if you are writing generic code in terms of the functional abstractions in ZIO Prelude this is likely to be another important abstraction. In particular the ability to lift a value into the parameterized type described by the combination of the ",(0,i.yg)("inlineCode",{parentName:"p"},"CommutativeBoth")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Covariant")," abstractions is often important."))}y.isMDXComponent=!0}}]);