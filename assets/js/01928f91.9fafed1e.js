"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[17100],{95788:(e,a,n)=>{n.d(a,{Iu:()=>p,yg:()=>m});var t=n(11504);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=d(n),h=i,m=g["".concat(s,".").concat(h)]||g[h]||u[h]||o;return n?t.createElement(m,l(l({ref:a},p),{},{components:n})):t.createElement(m,l({ref:a},p))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[g]="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65847:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(45072),i=(n(11504),n(95788));const o={id:"validation",title:"Validation"},l=void 0,r={unversionedId:"zio-prelude/functional-data-types/validation",id:"zio-prelude/functional-data-types/validation",title:"Validation",description:"A Validation[E, A] is a data type that is either a Success with a value of type A or a Failure with one or more errors of type E.",source:"@site/docs/zio-prelude/functional-data-types/validation.md",sourceDirName:"zio-prelude/functional-data-types",slug:"/zio-prelude/functional-data-types/validation",permalink:"/zio-prelude/functional-data-types/validation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-prelude/functional-data-types/validation.md",tags:[],version:"current",frontMatter:{id:"validation",title:"Validation"},sidebar:"ecosystem-sidebar",previous:{title:"These",permalink:"/zio-prelude/functional-data-types/these"},next:{title:"ZSet",permalink:"/zio-prelude/functional-data-types/zset"}},s={},d=[{value:"Constructing Validation Values",id:"constructing-validation-values",level:2},{value:"From Existing Values",id:"from-existing-values",level:3},{value:"From Code That May Throw Exceptions",id:"from-code-that-may-throw-exceptions",level:3},{value:"From Predicates",id:"from-predicates",level:3},{value:"From Other Data Types",id:"from-other-data-types",level:3},{value:"Transforming Validation Values",id:"transforming-validation-values",level:2},{value:"Combining Validation Values",id:"combining-validation-values",level:2},{value:"Accumulating Errors",id:"accumulating-errors",level:3},{value:"Chaining Validations",id:"chaining-validations",level:3},{value:"Extracting Validation Values",id:"extracting-validation-values",level:2}],p={toc:d},g="wrapper";function u(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.c)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation[E, A]")," is a data type that is either a ",(0,i.yg)("inlineCode",{parentName:"p"},"Success")," with a value of type ",(0,i.yg)("inlineCode",{parentName:"p"},"A")," or a ",(0,i.yg)("inlineCode",{parentName:"p"},"Failure")," with one or more errors of type ",(0,i.yg)("inlineCode",{parentName:"p"},"E"),"."),(0,i.yg)("p",null,"You can think of a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," as looking something like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.NonEmptyChunk\n\nsealed trait Validation[+E, +A]\n\nobject Validation {\n  case class Success[+A](value: A)                 extends Validation[Nothing, A]\n  case class Failure[+E](errors: NonEmptyChunk[E]) extends Validation[E, Nothing]\n}\n")),(0,i.yg)("p",null,"Thus, a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," looks very much like an ",(0,i.yg)("inlineCode",{parentName:"p"},"Either")," except that it can contain multiple errors instead of just one."),(0,i.yg)("p",null,"The distinguishing feature of ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," is that it can accumulate multiple errors. This makes it extremely convenient for problems like data validation where we want to accumulate all validation errors and report them back instead of failing immediately on the first validation error."),(0,i.yg)("p",null,"To see this, let's consider a simple example of validating a ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," data type."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"case class Person(name: String, age: Int)\n")),(0,i.yg)("p",null,"The business requirements are that a valid person must have a name that is not empty and an age that is greater than zero."),(0,i.yg)("p",null,"We could try to model validating a ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," using ",(0,i.yg)("inlineCode",{parentName:"p"},"Either")," like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'def validateName(name: String): Either[String, String] =\n  if (name.isEmpty) Left("Name was empty")\n  else Right(name)\n\ndef validateAge(age: Int): Either[String, Int] =\n  if (age <= 0) Left(s"Age $age was less than zero")\n  else Right(age)\n\ndef validatePerson(name: String, age: Int): Either[String, Person] =\n  for {\n    name <- validateName(name)\n    age  <- validateAge(age)\n  } yield Person(name, age)\n')),(0,i.yg)("p",null,"However, there is a problem with this. If we try to validate a ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," with both an invalid ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," and an invalid ",(0,i.yg)("inlineCode",{parentName:"p"},"age")," we will just get a single failure indicating that the name was empty."),(0,i.yg)("p",null,"This is because ",(0,i.yg)("inlineCode",{parentName:"p"},"Either"),' embodies "fail fast" semantics where if one part of a computation fails the subsequent parts of the computation will never be performed.'),(0,i.yg)("p",null,"Normally this is what we want because there is no point in doing further work if a computation has already failed. This is similar to how in traditional imperative programs if an exception is thrown on one line then further lines will not be executed."),(0,i.yg)("p",null,"However, it is not what we want here."),(0,i.yg)("p",null,"We could imagine that the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"age")," were transmitted by a customer. They would probably not be happy if we told them the name was invalid, they corrected that and sent it again, and then we failed again because the age was invalid."),(0,i.yg)("p",null,'"Why didn\'t you tell me about all the problems up front?" we can see them saying. ',(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," does just that."),(0,i.yg)("p",null,"We can fix this example using ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," like so:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.prelude.Validation\n\ncase class Person(name: String, age: Int)\n\ndef validateName(name: String): Validation[String, String] =\n  if (name.isEmpty) Validation.fail("Name was empty")\n  else Validation.succeed(name)\n\ndef validateAge(age: Int): Validation[String, Int] =\n  if (age <= 0) Validation.fail(s"Age $age was less than zero")\n  else Validation.succeed(age)\n\ndef validatePerson(name: String, age: Int): Validation[String, Person] =\n  Validation.validateWith(validateName(name), validateAge(age))(Person)\n')),(0,i.yg)("p",null,"Here we are just using the basic operators on ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," of ",(0,i.yg)("inlineCode",{parentName:"p"},"succeed")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"fail")," which construct a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," that succeeds or fails with the specified value. We are then using the ",(0,i.yg)("inlineCode",{parentName:"p"},"validateWith")," operator, which combines the results of multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values, accumulating all errors that occur."),(0,i.yg)("p",null,"Note that we are using the ",(0,i.yg)("inlineCode",{parentName:"p"},"apply")," method of ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," to combine the validated name and age into a ",(0,i.yg)("inlineCode",{parentName:"p"},"Person"),". This is often a convenient pattern when we are modeling our data using case classes."),(0,i.yg)("p",null,"Now if we validate a person where both the ",(0,i.yg)("inlineCode",{parentName:"p"},"name")," and the ",(0,i.yg)("inlineCode",{parentName:"p"},"age")," are invalid we will get a failure containing both errors, giving us exactly what we need for our internal customer, so they can efficiently correct the problem and send us valid data."),(0,i.yg)("h2",{id:"constructing-validation-values"},"Constructing Validation Values"),(0,i.yg)("p",null,"Now that we understand what ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," is, let's look at how to construct ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values."),(0,i.yg)("h3",{id:"from-existing-values"},"From Existing Values"),(0,i.yg)("p",null,"The simplest ways to construct ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values are the ",(0,i.yg)("inlineCode",{parentName:"p"},"succeed")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"fail")," operators we saw above:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object Validation {\n  def fail[E](error: E): Validation[E, Nothing] =\n    ???\n  def succeed[A](value: A): Validation[Nothing, A] =\n    ???\n}\n")),(0,i.yg)("p",null,"These just construct validation successes or failures with the specified value. We can use these as the building blocks for creating more complex validation logic as we saw above."),(0,i.yg)("h3",{id:"from-code-that-may-throw-exceptions"},"From Code That May Throw Exceptions"),(0,i.yg)("p",null,"Another useful constructor of ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values is the ",(0,i.yg)("inlineCode",{parentName:"p"},"apply")," method on ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object Validation {\n  def apply[A](a: => A): Validation[Throwable, A] =\n    ???\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"apply")," operator takes a by name argument and evaluates that argument, converting any non-fatal thrown exceptions into ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," failures. This is useful when working with code that might throw exceptions to safely import that code into a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," value."),(0,i.yg)("h3",{id:"from-predicates"},"From Predicates"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"fromPredicateWith")," constructor is useful for constructing ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values from predicates. This is nice for cleaning up code that constructs a validation failure or success based on some condition like the example we wrote above:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object Validation {\n  def fromPredicateWith[E, A](error: => E)(value: A)(f: A => Boolean): Validation[E, A] =\n    ???\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"fromPredicateWith")," constructor constructs a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," from a value, a predicate about that value, and an error to provide if the predicate is false."),(0,i.yg)("p",null,"For example, here is how we could simplify the example we wrote above using the ",(0,i.yg)("inlineCode",{parentName:"p"},"fromPredicateWith")," operator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'def validateName(name: String): Validation[String, String] =\n  Validation.fromPredicateWith("Name was empty")(name)(_.nonEmpty)\n\ndef validateAge(age: Int): Validation[String, Int] =\n  Validation.fromPredicateWith(s"Age $age was less than zero")(age)(_ >= 0)\n')),(0,i.yg)("p",null,"This is the same as the original example but lets us express our logic at a slightly higher level."),(0,i.yg)("h3",{id:"from-other-data-types"},"From Other Data Types"),(0,i.yg)("p",null,"There are also operators for constructing ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values from a variety of other data types in the Scala standard library such as ",(0,i.yg)("inlineCode",{parentName:"p"},"Either"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"Option"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"Try"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import scala.util.Try\n\nobject Validation {\n  def fromEither[E, A](value: Either[E, A]): Validation[E, A] =\n    ???\n  def fromOption[A](value: Option[A]): Validation[Unit, A] =\n    ???\n  def fromTry[A](value: => Try[A]): Validation[Throwable, A] =\n    ???\n}\n")),(0,i.yg)("p",null,"Each of these operators just converts another data type that models potential failures into a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation"),"."),(0,i.yg)("p",null,"In the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"fromEither")," the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," will fail with the same error type as the ",(0,i.yg)("inlineCode",{parentName:"p"},"Either"),"."),(0,i.yg)("p",null,"In the case of ",(0,i.yg)("inlineCode",{parentName:"p"},"fromTry")," the error type is always ",(0,i.yg)("inlineCode",{parentName:"p"},"Throwable"),", since a ",(0,i.yg)("inlineCode",{parentName:"p"},"Try")," can fail with any ",(0,i.yg)("inlineCode",{parentName:"p"},"Throwable"),". The ",(0,i.yg)("inlineCode",{parentName:"p"},"fromTry")," operator will also catch any exception thrown in the construction of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Try")," value and convert it to a ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," failure."),(0,i.yg)("p",null,"A ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," constructed using ",(0,i.yg)("inlineCode",{parentName:"p"},"fromOption")," has ",(0,i.yg)("inlineCode",{parentName:"p"},"Unit")," for the error type since an ",(0,i.yg)("inlineCode",{parentName:"p"},"Option")," contains no useful information about why a failure has occurred. We will see shortly when we learn about transforming ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values how we can add additional information here about why a validation failure occurred."),(0,i.yg)("h2",{id:"transforming-validation-values"},"Transforming Validation Values"),(0,i.yg)("p",null,"Now that we know about creating ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values, the next thing we need to know is how to transform them."),(0,i.yg)("p",null,"We can transform the value type of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," using the ",(0,i.yg)("inlineCode",{parentName:"p"},"map")," operator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait Validation[+E, +A] {\n  def map[B](f: A => B): Validation[E, B]\n}\n")),(0,i.yg)("p",null,"We can transform the error type of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," using the ",(0,i.yg)("inlineCode",{parentName:"p"},"mapError")," operator:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait Validation[+E, +A] {\n  def mapError[E2](f: E => E2): Validation[E2, A]\n}\n")),(0,i.yg)("p",null,"This can be useful to transform the error type to our own internal data model. It can also be useful to add additional information about why a validation failure occurred, for example adding a descriptive error message if an optional value did not exist."),(0,i.yg)("h2",{id:"combining-validation-values"},"Combining Validation Values"),(0,i.yg)("p",null,"We can also combine ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values."),(0,i.yg)("h3",{id:"accumulating-errors"},"Accumulating Errors"),(0,i.yg)("p",null,"The most common way to do this is with the ",(0,i.yg)("inlineCode",{parentName:"p"},"validateWith")," operator we saw above:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"object Validation {\n  def validateWith[E, A, B, C](\n    left: Validation[E, A],\n    right: Validation[E, B]\n  )(f: (A, B) => C): Validation[E, C] =\n    ???\n}\n")),(0,i.yg)("p",null,"This will check each of the original ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values and if they are both successes combine their values with the function ",(0,i.yg)("inlineCode",{parentName:"p"},"f")," to produce a new successful ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," value. If one or more of the original ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values are failures then the result will be a failure with all of the failures of both original ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values."),(0,i.yg)("p",null,"There are variants of ",(0,i.yg)("inlineCode",{parentName:"p"},"validateWith")," for combining up to twenty two different ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values so even if you are working with large cases classes with many fields you can still use ",(0,i.yg)("inlineCode",{parentName:"p"},"validateWith")," to combine them."),(0,i.yg)("p",null,"There is also a ",(0,i.yg)("inlineCode",{parentName:"p"},"validate")," variant that combines multiple ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values but does not take a combining function. In this case the returned ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," just contains a tuple with all the original values, and you can combine them yourself later using ",(0,i.yg)("inlineCode",{parentName:"p"},"map"),"."),(0,i.yg)("p",null,"If you have a whole collection of values you want to validate you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"validateAll")," operator to validate them all at the same time."),(0,i.yg)("h3",{id:"chaining-validations"},"Chaining Validations"),(0,i.yg)("p",null,"The second way we might want to combine ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values is by returning another ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," value based on the result of the first validation value. For example, we might first try to parse a string into an integer and then validate that the integer is within a reasonable range."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.prelude.Validation\n\ndef validateInt(s: String): Validation[String, Int] =\n  Validation(s.toInt).mapError(_.getMessage)\n\ndef validateAge(age: Int): Validation[String, Int] =\n  Validation.fromPredicateWith(s"Age $age was less than zero")(age)(_ >= 0)\n\ndef validateAgeString(s: String): Validation[String, Int] =\n  for {\n    n <- validateInt(s)\n    _ <- validateAge(n)\n  } yield n\n')),(0,i.yg)("p",null,"Here the second validation depended on the first one because if we could not parse the string into an integer then we would not even have an integer to validate. Just like with other data types we can express this with the ",(0,i.yg)("inlineCode",{parentName:"p"},"flatMap")," operator and use a for comprehension to chain multiple validations together."),(0,i.yg)("p",null,"Note that when we chain validations like this we only do the second validation if the first one is successful so we will never see both errors here. If all we are doing is chaining then we don't actually need ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," and could just use ",(0,i.yg)("inlineCode",{parentName:"p"},"Either"),"."),(0,i.yg)("p",null,"However, frequently we want to do some validations with error accumulating semantics and chain others. Having ",(0,i.yg)("inlineCode",{parentName:"p"},"flatMap")," on ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," makes it very easy for us to do this."),(0,i.yg)("p",null,"To see this, let's expand on our example of validating a ",(0,i.yg)("inlineCode",{parentName:"p"},"Person")," data type from above. Now we will validate the person based on two ",(0,i.yg)("inlineCode",{parentName:"p"},"String")," inputs using the logic we implemented above."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"def validatePerson(name: String, age: String): Validation[String, Person] =\n  Validation.validateWith(validateName(name), validateAgeString(age))(Person)\n")),(0,i.yg)("p",null,"Now we are combining accumulating errors and chaining validations."),(0,i.yg)("p",null,"Validating the age will proceed by validating that the age can be parsed into an ",(0,i.yg)("inlineCode",{parentName:"p"},"Int")," and then that the age is not negative. This will return either a validated age or a validation error if either of these steps failed."),(0,i.yg)("p",null,"We are also validating that the name is not empty. The final result will be either a validated person or a validation error containing both any errors that occurred in validating the name and age."),(0,i.yg)("p",null,"By combining operators like ",(0,i.yg)("inlineCode",{parentName:"p"},"validateWith")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"flatMap")," you can build complex validation logic that handles any of your problems in this or related domains."),(0,i.yg)("h2",{id:"extracting-validation-values"},"Extracting Validation Values"),(0,i.yg)("p",null,"The final thing we want to be able to do with ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values is extract them to access the success value or errors and do something with them. This also includes transforming ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values into other data types that we may be interested in."),(0,i.yg)("p",null,"The most basic way to do this is with the ",(0,i.yg)("inlineCode",{parentName:"p"},"fold")," operator, which lets us provide functions specifying what we want to do with the success or failure."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"trait Validation[+E, +A] {\n  def fold[B](failure: E => B, success: A => B): B\n}\n")),(0,i.yg)("p",null,"Using ",(0,i.yg)("inlineCode",{parentName:"p"},"fold"),", we can get out the success value of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," by providing a function that says what we want to do if the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," is a failure. For example, we might provide a default value or refail in the context of some other data type that can model failure such as ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,i.yg)("p",null,"There are a variety of helpful operators implemented in terms of ",(0,i.yg)("inlineCode",{parentName:"p"},"fold")," for transforming ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," values into other data types we might be interested in. The most common of these are:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.{IO, NonEmptyChunk}\n\ntrait Validation[+E, +A] {\n  def toEither: Either[NonEmptyChunk[E], A]\n  def toEitherWith[E2](f: NonEmptyChunk[E] => E2): Either[E2, A]\n  def toZIO: IO[E, A]\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"toEither")," operator converts the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," into an ",(0,i.yg)("inlineCode",{parentName:"p"},"Either")," where the ",(0,i.yg)("inlineCode",{parentName:"p"},"Left")," side of the other contains a ",(0,i.yg)("inlineCode",{parentName:"p"},"NonEmptyChunk")," of all the errors that occurred if the ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," was a failure. The ",(0,i.yg)("inlineCode",{parentName:"p"},"toEitherWith")," operator is similar to this but lets us provide our own function for converting the collection of errors that occurred into our own error type."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"toZIO")," operator is particularly useful because frequently we will do some data validation which we will model with ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation")," but then want to do some further work with the result that needs a ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," effect such as writing it to a file or sending it over the wire."),(0,i.yg)("p",null,"With ",(0,i.yg)("inlineCode",{parentName:"p"},"toZIO")," we can easily do our validation in the context of ",(0,i.yg)("inlineCode",{parentName:"p"},"Validation"),' and then "lift" it into the context of ',(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," to compose with our other ",(0,i.yg)("inlineCode",{parentName:"p"},"ZIO")," effects. One nice feature of this operator is that it will automatically preserve all validation errors that occurred in ZIO's ",(0,i.yg)("inlineCode",{parentName:"p"},"Cause")," data type."))}u.isMDXComponent=!0}}]);