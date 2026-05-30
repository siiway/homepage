# TypeScript Coding Standards

## 1. Code Style

### 1.1 Indentation

Use 2 spaces for indentation. Do not use 4 spaces or tabs:

```js
// bad
function foo() {
    let name;
}

// good
function foo() {
  let name;
}
```

### 1.2 Semicolons

Always terminate statements with semicolons. This avoids quirks with JavaScript's Automatic Semicolon Insertion mechanism and makes intent more explicit.

```js
// bad - causes Uncaught ReferenceError
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader'
})

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// bad - function returns undefined instead of the value on the next line
function foo() {
  return
    'Result want to be returned'
}

// good
function foo() {
  return 'Result want to be returned';
}
```

### 1.3 Commas

For comma-separated multi-line structures, do not use leading commas; always include a trailing comma. This makes adding and removing lines easier and produces cleaner git diffs.

```js
// bad
const story = [
    once
  , upon
  , aTime
];

// good
const story = [
  once,
  upon,
  aTime,
];

// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];

function createHero(
  firstName,
  lastName,
  inventorOf,
) {
  // ...
}

// Note: no trailing comma after spread elements
function createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
) {
  // ...
}
```

### 1.4 Blocks

Always use braces to wrap code blocks:

```js
// bad
if (foo)
  bar();
  baz(); // this line is not inside the if statement

// good
if (foo) {
  bar();
  baz();
}
```

When a block contains only a single statement, braces may be omitted and the statement placed on the same line as the control statement. However, for consistency and readability, this is not recommended:

```js
// bad
if (foo)
  return false;

// bad - allowed but not recommended
if (foo) return false;

// good
if (foo) {
  return false;
}
```

### 1.5 Brace Style

For non-empty blocks, use Egyptian Brackets style:

- Opening brace `{` has no line break before it, but has one after it
- Closing brace `}` has a line break before it
- If `}` ends the entire statement, it requires a line break after it
- If `}` is followed by `else`, `catch`, `while`, or by a comma, semicolon, or closing parenthesis (`)`), no line break is needed

```js
// bad - else should be on the same line as if's }
if (foo) {
  thing1();
}
else
  thing2();
}

// good
if (foo) {
  thing1();
} else {
  thing2();
}
```

For empty blocks that are not part of a multi-block structure like `if..else..` or `try..catch..finally..`, braces may be closed immediately:

```js
// good
function doNothing() {}
```

However, if the empty block is in a multi-block structure, still follow the Egyptian Brackets style as for non-empty blocks:

```js
// bad
if (condition) {
  // ...
} else if (otherCondition) {} else {
  // ...
}

// good
if (condition) {
  // ...
} else if (otherCondition) {
} else {
  // ...
}
```

Do not use empty blocks. If an empty block is necessary, include a comment inside it:

```js
// bad
if (condition) {
  thing1();
} else {
}

// good
if (condition) {
  thing1();
} else {
  // TODO I haven't determined what to do.
}
```

### 1.6 Whitespace

Using whitespace reasonably and consistently improves code readability and maintainability.

There is a space before the opening brace `{` of a block:

```js
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}
```

There is a space before the opening parenthesis `(` of control statements (`if`, `while`, etc.):

```js
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}
```

When declaring a function, there is no space between the function name and the parameter list:

```js
// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

No spaces inside parentheses and brackets; spaces inside braces:

```js
// bad
function bar( foo ) {
  return foo;
}
const foo = [ 1, 2, 3 ];
const obj = {clark: 'kent'};

// good
function bar(foo) {
  return foo;
}
const foo = [1, 2, 3];
const obj = { clark: 'kent' };
```

Spaces around operators, except unary operators:

```js
// bad
const x=y+5;
const isRight = result === 0? false: true;
const x = ! y;

// good
const x = y + 5;
const isRight = result === 0 ? false : true;
const x = !y;
```

When defining object literals, exactly one space between key and value; no "horizontal alignment":

```js
// bad
{
  a:            'short',
  looooongname: 'long',
}

// good
{
  a: 'short',
  looooongname: 'long',
}
```

### 1.7 Blank Lines

Keep one blank line at the end of the file:

```js
// bad - no trailing newline at end of file
import { foo } from './Foo';
// ...
export default foo;

// good
import { foo } from './Foo';
// ...
export default foo;
```

Blocks must not begin or end with a blank line:

```js
// bad
function bar() {

  console.log(foo);

}

// good
function bar() {
  console.log(foo);
}
```

Insert a blank line between the end of a block and the next statement:

```js
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;
```

### 1.8 Maximum Line Length and Maximum File Lines

A single line should not exceed 100 characters, except for strings, template strings, and regular expressions:

```js
// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;
```

Files should not exceed 1000 lines. Overly long files are difficult to read and maintain, and should be split.

Functions should not exceed 80 lines.

## 2. Variable Declarations

### 2.1 Use const and let; var is forbidden

Since ES6, you can use `let` and `const` keywords to declare variables with block scope. Do not use `var`:

```js
// bad
var foo = 'foo';
var bar;

// good
const foo = 'foo';
let bar;
```

Do not declare variables without any keyword (this creates global variables and pollutes the global namespace):

```js
// bad
foo = 'foo';

// good
const foo = 'foo';
```

### 2.2 Prefer const; use let only when reassignment is needed

When declaring variables, prefer `const`. Only use `let` when the variable will be reassigned:

```js
// bad - no reassignment occurs; should use const
let flag = true;
if (flag) {
  console.log(flag);
}

// good - reassignment occurs; let is used correctly
let flag = true;
if (flag) {
  flag = false;
}
```

Note that arrays and objects are references. Modifying an array element or object property is not reassignment, so `const` should be used in most cases:

```js
// bad
let arr = [];
let obj = {};
arr[0] = 'foo';
obj.name = 'bar';

// good
const arr = [];
const obj = {};
arr.push('foo');
obj.name = 'bar';
```

### 2.3 Declare only one variable per declaration statement

This makes it easier to add new declarations and simplifies debugging:

```js
// bad
const foo = 1,
      bar = 2;

// good
const foo = 1;
const bar = 2;
```

### 2.4 Declared variables must be used

Declared but unused variables and expressions can cause potential issues and confuse maintainers. Delete them:

```js
// bad - unused variable foo
const foo = 1;

// good
const foo = 1;
doSomethingWith(foo);
```

### 2.5 No usage before declaration

In ES6, `const` and `let` are not hoisted. Using them before declaration causes an error:

```js
// bad
console.log(foo); // => Uncaught ReferenceError: foo is not defined
const foo = 'foo';

// good
const foo = 'foo';
console.log(foo); // => foo
```

### 2.6 Variables must not shadow outer scope variables

Shadowing outer scope variables reduces readability and prevents access to the outer variable:

```js
// bad
const foo = 1;
if (someCondition) {
  const foo = 2;
  console.log(foo); // => 2
}

// good
const foo = 1;
if (someCondition) {
  const bar = 2;
  console.log(bar); // => 2
  console.log(foo); // => 1
}
```

### 2.7 No chained assignments

Chained variable assignments are hard to read and understand, and can cause unexpected results (such as creating global variables):

```js
// bad - in this case, let only works for a; b and c become global variables
(function test() {
  let a = b = c = 1; // equivalent to let a = (b = (c = 1));
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function test() {
  let a = 1;
  let b = a;
  let c = a;
})();
```

### 2.8 Group let and const separately

Grouping `let` and `const` declarations together improves code neatness:

```js
// bad
let a;
const b = 2;
let c;
const d = 4;
let e;

// good
const b = 2;
const d = 4;
let a;
let c;
let e;
```

## 3. Type System

### 3.1 Prefer interface over type for object types

interface supports extend/implement/union capabilities and can also describe plain objects:

```ts
// bad
type T = { x: number };

// good
type T = string;
type Foo = string | {};
interface T {
  x: number;
}
```

### 3.2 Use T[] for simple arrays, Array\<T\> for complex arrays

Use `T[]` or `readonly T[]` for simple types (numbers, strings, booleans, etc.). Use `Array<T>` or `ReadonlyArray<T>` for complex types (unions, intersections, objects, functions, etc.):

```ts
// bad
const a: (string | number)[] = ['a', 1];
const b: { prop: string }[] = [{ prop: 'a' }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ['a', 'b'];
const e: Array<string> = ['a', 'b'];
const f: ReadonlyArray<string> = ['a', 'b'];

// good
const a: Array<string | number> = ['a', 1];
const b: Array<{ prop: string }> = [{ prop: 'a' }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ['a', 'b'];
const e: string[] = ['a', 'b'];
const f: readonly string[] = ['a', 'b'];
```

### 3.3 Use `as Type` for type assertions; \<Type\> is forbidden

Always use the `as Type` style for type assertions rather than `<Type>`, which is easily confused with JSX. Type assertions on object literals are forbidden, except when asserting to `any`:

```ts
// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;
```

```ts
// bad
const x = { ... } as T;
const y = { ... } as object;

// good
const x: T = { ... };
const y = { ... } as any;
const z = { ... } as unknown;
```

### 3.4 No namespace; use ES module instead

Custom TypeScript modules and namespaces are no longer recommended. Prefer ES2015 module syntax for imports and exports:

```ts
// bad
module foo {}
namespace foo {}

// good
declare module 'foo' {}
declare module foo {}
declare namespace foo {}
declare global {
  namespace foo {}
}
declare module foo {
  namespace foo {}
}
```

Do not use `module` to define namespaces (no restriction on `declare module`):

```ts
// bad
module Foo {}

// good
declare module Foo {}
declare namespace Foo {}
```

### 3.5 Use semicolons as interface member delimiters

```ts
// bad: comma style(JSON style)
interface Foo {
  name: string,
  greet(): void,
}

type Bar = {
  name: string,
  greet(): void,
};

// bad: line break style
interface Foo {
  name: string
  greet(): void
}

// good
interface Foo {
  name: string;
  greet(): void;
}

type Bar = {
  name: string;
  greet(): void;
};
```

### 3.6 Do not explicitly annotate types that can be inferred

Redundant explicit type annotations on easily inferred variables and parameters add code noise:

```ts
// bad
const foo: number = 1;
const bar: string = '';
class Foo {
  prop: number = 5;
}
function fn(a: number = 5, b: boolean = true) {}

// good
const foo = 1;
const bar = '';
class Foo {
  prop = 5;
}
function fn(a = 5, b = true) {}
```

### 3.7 Type annotations: no space before colon, one space after colon

Appropriate spacing around type annotations effectively improves code readability:

- No space before colon, one space after colon
- One space before and after the arrow

```ts
// bad
let foo:string = 'bar';
let foo :string = 'bar';
let foo : string = 'bar';

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
  name:string;
}

class Foo {
  name :string;
}

class Foo {
  name : string;
}

type Foo = ()=> {};

// good
let foo: string = 'bar';

function foo(): string {}

class Foo {
  name: string;
}

type Foo = () => {};
```

### 3.8 No empty interfaces (except extends)

An empty interface is equivalent to an empty object. If it only extends another interface, it is equivalent to the extended type. Avoid defining meaningless interfaces:

```ts
// bad
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
interface Bar extends Foo {}

// an interface with an empty list of supertypes
interface Baz {}

// good
// an interface with any number of members
interface Foo {
  name: string;
}

// same as above
interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of a union type.
interface Baz extends Foo, Bar {}
```

### 3.9 Define interface methods using property syntax

Defining interface methods using property syntax enables stricter checking:

```ts
// bad
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}

// good
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// property method overload
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
```

### 3.10 Overloaded functions must be grouped together

Grouping naturally related items improves code readability and organization:

```ts
// bad
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

// good
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}
```

```ts
// bad
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

// good
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}
```

### 3.11 Prefer parameter union types over function overloads

```ts
// bad
function f(x: number): void;
function f(x: string): void;
f(): void;
f(...x: number[]): void;

// good
function f(x: number | string): void;
function f(x?: ...number[]): void;
```

### 3.12 No unnecessary boolean casts

Forcing a boolean conversion on expressions in `if` and other conditional statements is redundant:

```js
// bad
if (!!foo) {
  // ...
}

while (!!foo) {
  // ...
}

const a = !!flag ? b : c;

// good
if (foo) {
  // ...
}

while (foo) {
  // ...
}

const a = flag ? b : c;
```

### 3.13 type definitions must declare member types

```ts
// bad
type Members = {
  member;
  otherMember;
};

// good
type Members = {
  member: boolean;
  otherMember: string;
};
```

## 4. Functions

### 4.1 Prefer arrow functions over anonymous functions

Arrow functions introduced in ES6 solve the `this` binding problem and have cleaner syntax:

```js
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
```

When the function body is a single `return` statement, the braces and `return` may be omitted:

```js
// good - when the body has multiple statements, always use braces
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// good - when the body is a single return statement, braces and return may be omitted
[1, 2, 3].map(number => `A string containing the ${number + 1}.`);
```

When the return value is an object or spans multiple lines, wrap it in parentheses:

```js
// bad - Uncaught SyntaxError: Unexpected token
[1, 2, 3].map((item) => {
  foo: item,
  bar: item + 1,
});

// good
[1, 2, 3].map((item) => ({
  foo: item,
  bar: item + 1,
}));
```

### 4.2 Prefer function expressions over function declarations

Function declarations are hoisted to the top of their scope, so functions can be called before their declaration, which hurts readability and maintainability:

```js
// bad
function foo() {
  // ...
}

// good
const foo = () => {
  // ...
};

const foo = function () {
  // ...
};
```

### 4.3 Use default parameter syntax

ES6 introduced default parameter syntax, which is more concise and readable than the old way of assigning defaults:

```js
// bad
const multiple = (a, b) => {
  a = a || 0;
  b = b || 0;
  return a * b;
}

// good
const multiple = (a = 0, b = 0) => {
  return a * b;
}
```

### 4.4 Put default parameters last

Otherwise you cannot benefit from default parameters and must pass `undefined` to trigger the default:

```js
// bad
function multiply(a = 1, b) {
  return a * b;
}
const x = multiply(42); // => NaN
const y = multiply(undefined, 42); // => 42

// good
function multiply(a, b = 1) {
  return a * b;
}
const x = multiply(42); // => 42
```

### 4.5 Do not mutate function parameters

Do not mutate reference-type parameters, as this may change the original argument variables. Also do not reassign parameters, which may cause unexpected behavior and optimization issues:

```js
// bad
const f1 = function f1(obj) {
  obj.key = 1;
}
const originalObj = { key: 0 };
f1(originalObj);
console.log(originalObj); // => { key: 1 }

// good
const f2 = function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```

```js
// bad
function foo(bar, baz) {
  if (!baz) {
    bar = 1;
  }
}

// good
function foo(bar, baz) {
  let qux = bar;
  if (!baz) {
    qux = 1;
  }
}
```

### 4.6 Use ...rest instead of arguments

ES6 provides the rest operator `...`, which aggregates remaining arguments more clearly than `arguments`. Additionally, `...` yields a true array, while `arguments` is array-like:

```js
// bad
function foo(a, b) {
  const args = Array.prototype.slice.call(arguments, foo.length);
  console.log(args);
}
foo(1, 2, 3, 4); // => [3, 4]

// good
function foo(a, b, ...args) {
  console.log(args);
}
foo(1, 2, 3, 4); // => [3, 4]
```

### 4.7 Wrap IIFEs in parentheses

An IIFE is an independent execution unit; wrapping it in parentheses makes this clearer:

```js
(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
```

### 4.8 Keep function complexity low (cyclomatic complexity < 10)

Excessive complexity makes code hard to maintain and test. A function's cyclomatic complexity should not exceed **10**, and cognitive complexity should not exceed **15**.

### 4.9 Avoid too many function parameters

Too many parameters hurt maintainability and usability. If many parameters are necessary, consider using an object instead:

```js
// bad
function doSomething(param1, param2, param3, param4, param5, param6, param7, param8) {
  // ...
}
doSomething(1, 2, 3, 4, 5, 6, 7, 8);

// good
function doSomething({ param1, param2, param3, param4, param5, param6, param7, param8 }) {
  // ...
}
doSomething({ param1: 1, param2: 2, param3: 3, param4: 4, param5: 5, param6: 6, param7: 7, param8: 8 });
```

### 4.10 Do not use function declarations inside blocks

In non-function blocks (such as `if`, `while`, etc.), do not use function declarations:

```js
// bad - function declarations are function-scoped, not block-scoped, so the function is usable outside the block, which is confusing
if (true) {
  function test() {
    console.log('test');
  }
}
test(); // => test

// good - function expressions clearly indicate whether the function is accessible outside the block
if (true) {
  const test = function () {
    console.log('test');
  };
}
test(); // => Uncaught ReferenceError: test is not defined
```

### 4.11 Prefer higher-order functions for iteration

When iterating, prefer JavaScript's built-in higher-order functions over raw `for` loops:

```js
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});

// best
const sum = numbers.reduce((total, num) => total + num, 0);

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best
const increasedByOne = numbers.map(num => num + 1);
```

## 5. Arrays and Objects

### 5.1 Use literals to create arrays and objects

Do not use `new Array()` or `Array()` to create arrays, unless constructing an empty array of a certain length:

```js
// bad
const a = new Array(1, 2, 3);
const b = Array(1, 2, 3);

// good
const a = [1, 2, 3];
const b = new Array(500); // construct an empty array of length 500
```

```js
// bad
const obj = new Object();

// good
const obj = {};
```

### 5.2 Use the spread operator ... for arrays and objects

Array copying:

```js
// bad
const array1 = [];
for (let i = 0; i < array.length; i += 1) {
  array1[i] = array[i];
}

// good
const array1 = [...array];
```

Array concatenation:

```js
// bad
const array1 = [1, 2].concat(array);

// good
const array1 = [1, 2, ...array]
```

Replace `apply` with `...`:

```js
// bad
const args = [1, 2, 3, 4];
Math.max.apply(Math, args);

// good
const args = [1, 2, 3, 4];
Math.max(...args);
```

Replace `Object.assign` for shallow object copies:

```js
// very bad - original gets mutated
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 });
delete copy.a;

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 });

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 };
```

Get a new object excluding certain properties:

```js
// good
const copy = { a: 1, b: 2, c: 3 };
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

### 5.3 Use destructuring to access properties

Use ES6 destructuring to get array elements:

```js
// bad
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];

// good
const arr = [1, 2, 3, 4];
const [first, second] = arr;
```

Use destructuring to get identically named or multiple properties from an object for cleaner code:

```js
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```

### 5.4 Prefer dot notation to access object properties

`[]` should only be used to access dynamic property names or property names containing special characters:

```js
const obj = {
  active: true,
  [getDynamicKey()]: 'foo',
  'data-bar': 'bar',
};

// bad
const isActive = obj['active'];

// good
const isActive = obj.active;
const foo = obj[getDynamicKey()];
const bar = obj['data-bar'];
```

### 5.5 map/filter/reduce etc. must have return statements

The callback functions of the following array methods must include a `return` statement: `map`, `filter`, `every`, `find`, `findIndex`, `reduce`, `reduceRight`, `some`, `sort`:

```js
// bad - map is meant to build a new array; use forEach for simple iteration
myArray.map((item, index) => {
  myObj[item] = index;
});

// good
myArray.forEach((item, index) => {
  myObj[item] = index;
});
```

```js
// bad => Uncaught TypeError: Cannot set property 'b' of undefined
const myObj = myArray.reduce((memo, item, index) => {
  memo[item] = index;
}, {});

// good
const myObj = myArray.reduce((memo, item, index) => {
  memo[item] = index;
  return memo;
}, {});
```

### 5.6 Use shorthand syntax for object properties and methods

ES6 provides shorthand syntax for object properties and methods, making code more concise:

```js
const value = 'foo';

// bad
const atom = {
  value: value,
  addValue: function (value) {
    return value + ' added';
  },
};

// good
const atom = {
  value,
  addValue(value) {
    return value + ' added';
  },
};
```

Place shorthand properties together, at the beginning or end of the object:

```js
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
```

### 5.7 Do not quote object property names (unless containing special characters)

```js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
  'one two': 12,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
  'one two': 12,
};
```

## 6. Classes

### 6.1 Use class syntax to declare classes

The `class` syntax introduced in ES6 is syntactic sugar for declaring classes, and is more concise and maintainable:

```js
// bad
function Person() {
  this.age = 1;
}
Person.prototype.growOld = function () {
  this.age += 1;
}

// good
class Person {
  constructor() {
    this.age = 1;
  }
  growOld() {
    this.age += 1;
  }
}
```

### 6.2 Use extends for inheritance

`extends` is the built-in method for prototypal inheritance and does not break `instanceof`:

```js
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
```

### 6.3 Avoid unnecessary constructor

ES6 classes provide a default `constructor`. An empty `constructor` or one that only calls the parent `constructor` is unnecessary:

```js
// bad - both constructors below can be omitted
class Parent {
  constructor() {
  }

  method() {
    // ...
  }
}

class Child extends Parent {
  constructor (value) {
    super(value);
  }

  method() {
    // ...
  }
}

// good
class Parent {
  method() {
    // ...
  }
}

class Child extends Parent {
  method() {
    // ...
  }
}
```

### 6.4 Use super correctly

- Child class `constructor` must call `super()`, and it must be called before using `this` and `super` keywords
- Non-child class `constructor` must not use `super()`

```js
// bad - non-child class cannot use super
class Parent {
  constructor() {
    super();
    this.name = 'parent';
  }
}

// good
class Parent {
  constructor() {
    this.name = 'parent';
  }
}

// bad - child class must use super
class Child extends Parent {
  constructor() {
    this.name = 'child';
  }
}

// bad - this must be used after calling super
class Child extends Parent {
  constructor() {
    this.name = 'foo';
    super();
  }
}

// good
class Child extends Parent {
  constructor (value) {
    super(value);
    this.name = 'foo';
  }
}
```

### 6.5 Set member accessibility (public/protected/private)

Setting non-public members to `private` improves code comprehension and prevents illegal calls. `public` modifiers may be omitted for public members:

```ts
// bad
class Foo {
  static foo = 'foo';
  static getFoo() {
    return Foo.foo;
  }
  constructor() {}
  bar = 'bar';
  getBar() {}
  get baz() {
    return 'baz';
  }
  set baz(value) {
    console.log(value);
  }
}

// good
class Foo {
  private static foo = 'foo';
  public static getFoo() {
    return Foo.foo;
  }
  public constructor() {}
  protected bar = 'bar';
  public getBar() {}
  public get baz() {
    return 'baz';
  }
  public set baz(value) {
    console.log(value);
  }
}
```

### 6.6 Member ordering: static -> instance, field -> constructor -> method, public -> protected -> private

1. Static methods/properties come before instance methods/properties
2. Fields come before constructor, which comes before methods
3. Public members come before protected members, which come before private members

```ts
// good
class Foo {
  public static foo1 = 'foo1';
  protected static foo2 = 'foo2';
  private static foo3 = 'foo3';
  public static getFoo1() {}
  protected static getFoo2() {}
  private static getFoo3() {
    return Foo.foo3;
  }
  public bar1 = 'bar1';
  protected bar2 = 'bar2';
  private bar3 = 'bar3';
  public constructor() {
    console.log(Foo.getFoo3());
    console.log(this.getBar3());
  }
  public getBar1() {}
  protected getBar2() {}
  private getBar3() {
    return this.bar3;
  }
}
```

### 6.7 Use readonly for literal class properties instead of getters

All getter methods on a class that return "literals" should be replaced with the `readonly` modifier. Literals include strings, template strings, numbers, bigint, regex, and null:

```ts
// bad
class Mx {
  public static get myField1() {
    return 1;
  }
  private get ['myField2']() {
    return 'hello world';
  }
}

// good
class Mx {
  public readonly myField1 = 1;
  public readonly myField2 = [1, 2, 3]; // non-literal
  private readonly ['myField3'] = 'hello world';
  public get myField4() {
    return `hello from ${window.location.href}`;
  }
}
```

## 7. Modules

### 7.1 Use ES6 import/export instead of require

Use ES6 modules (`import`/`export`) rather than non-standard module systems like CommonJS, AMD, or CMD:

```js
// bad
const React = require('react');
module.exports = React.Component;

// good
import React, { Component } from 'react';
export default Component;
```

```ts
// bad
const fs = require('fs');

// good
import * as fs from 'fs';
```

### 7.2 Do not use multiple imports from the same module

Multiple `import` statements from the same module hurt maintainability. Combine them into one statement:

```js
// bad
import React from 'react';
import { Component }  from 'react';

// good
import React, { Component } from 'react';
```

### 7.3 Place import statements at the top of the file

Since `import` statements are hoisted, place them at the top of the module to prevent unexpected behavior:

```js
// bad
import foo from 'foo';
foo.init();

import bar from 'bar';
bar.init();

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
bar.init();
```

### 7.4 Import order: third-party -> internal modules

Sort `import` statements as follows:

- Third-party modules first, then internal project modules
- Absolute path imports first, then relative path imports

```js
// bad
import foo from 'components/foo';
import './index.scss';
import React from 'react';

// good
import React from 'react';
import foo from 'components/foo';
import './index.scss';
```

### 7.5 No triple-slash import syntax

The triple-slash syntax is deprecated. Do not use it outside of declaration files (d.ts):

```ts
// bad
/// <reference path="./my-module" />

// good
import myModule from './my-module';
```

### 7.6 Keep a blank line after module imports

```js
// bad
import foo from './foo.js';
const FOO = 'FOO'

// good
import foo from './foo.js';

const FOO = 'FOO'
```

### 7.7 No self-referencing or circular imports

Modules must not import themselves, and modules must not form circular dependencies.

## 8. Type Annotations and Directives

### 8.1 @ts-expect-error/@ts-ignore must include an explanation

TypeScript provides directive comments to suppress compile-time errors. Using these directives in code is allowed, but they must be accompanied by a descriptive comment of reasonable length:

```ts
// bad
// @ts-expect-error
console.log('my code');

// @ts-ignore
console.log('my code');

// good
// @ts-expect-error: Unreachable code here
console.log('my code');

// @ts-ignore: It's ok to ignore this compile error
console.log('my code');
```

### 8.2 No tslint comments

tslint has been deprecated, and its directive comments should no longer appear:

```ts
// bad
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
```

## 9. Important Notes

### 9.1 No meaningless void type (except for return types)

Do not use the `void` type outside of return types or generic type parameters, and in return types do not union or intersect it with other types. `void` represents "nothing" or a function that "returns nothing":

```ts
// bad
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));
function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}
logAndReturn<void>(undefined);
interface Interface {
  lambda: () => void;
  prop: void;
}
class MyClass {
  private readonly propName: void;
}

// good
type NoOp = () => void;
function noop(): void {}
let trulyUndefined = void 0;
async function promiseMeSomething(): Promise<void> {}
type stillVoid = void | never;
```

### 9.2 No non-null assertion after optional chaining

`optional chaining` is designed to return `undefined`. Using a non-null assertion after it is incorrect and introduces serious type safety issues:

```ts
// bad
foo?.bar!;
foo?.bar!.baz;
foo?.bar()!;
foo?.bar!();
foo?.bar!().baz;

// good
foo?.bar;
(foo?.bar).baz;
foo?.bar();
foo?.bar();
foo?.bar().baz;
```

### 9.3 No confusing non-null assertions

Using a non-null assertion (`!`) before an equality comparison operator (`==` or `===`) can easily be confused with an inequality operator (`!=` or `!==`). This is not recommended:

```ts
interface Foo {
  bar?: string;
  num?: number;
}

// bad
const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == 'hello';
const isEqualsNum = 1 + foo.num! == 2;

// good
const foo: Foo = getFoo();
const isEqualsBar = foo.bar == 'hello';
const isEqualsNum = (1 + foo.num!) == 2;
```

### 9.4 Prefer `as const` when the value equals the type declaration

```ts
// bad
let bar: 2 = 2;
let foo = <'bar'>'bar';
let foo = { bar: 'baz' as 'baz' };

// good
let foo = 'bar';
let foo = 'bar' as const;
let foo: 'bar' = 'bar' as const;
let bar = 'bar' as string;
let foo = <string>'bar';
let foo = { bar: 'baz' };
```

### 9.5 Use single quotes for string literals

```ts
// bad
const foo = "bar";

// good
const foo = 'bar';
```

```js
// bad
const name = "tod";
const name = `tod`; // template literals should contain variables or newlines; otherwise use single quotes

// good
const name = 'tod';
```

### 9.6 Use template literals instead of string concatenation

Template literals make code more concise and readable:

```js
// bad
function getDisplayName({ nickName, realName }) {
  return nickName + ' (' + realName + ')';
}

// good
function getDisplayName({ nickName, realName }) {
  return `${nickName} (${realName})`;
}
```

### 9.7 Both sides of + must be numbers or both strings

Mixing numbers and strings with `+` often causes unexpected issues:

```ts
// bad
var foo = '5.5' + 5;
var foo = 1n + 1;

// good
var foo = parseInt('5.5', 10) + 10;
var foo = 1n + 1n;
```

### 9.8 Use strict equality operators

Non-strict equality operators (`==` and `!=`) convert values to the same type before comparison, which can be a significant pitfall for those unfamiliar with JavaScript. Generally, use strict comparison operators (`===` and `!==`):

```js
const id = '83949';

// bad - intentionally using == to compare with a number to accommodate id potentially being a string
if (id == 83949) {
  // do something
}

// good - if id might be a string, convert its type first, then use === to compare
if (Number(id) === 83949) {
  // do something
}
```

### 9.9 Do not use unary increment/decrement operators

`++` and `--` introduce cognitive overhead about whether the value changes early, and may cause errors due to automatic semicolon insertion. Use `num += 1` instead of `num++`. However, out of habit, increment/decrement operators may still be used in `for` loop conditions:

```js
let num = 1;

// bad
num++;
--num;

// good
num += 1;
num -= 1;
```

### 9.10 switch case clauses must end with break

```js
// bad
switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomethingElse();
  default:
    doSomething();
}

// good
switch(foo) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomethingElse();
    break;
  default:
    doSomething();
}
```

switch statements must always include a default branch. If default is intentionally omitted, indicate it with a `// no default` comment at the end of the `switch` statement.

### 9.11 Control statement nesting should not exceed 4 levels

```js
// bad
if (condition1) {
  // depth = 1
  if (condition2) {
    // depth = 2
    for (let i = 0; i < 10; i++) {
      // depth = 3
      if (condition4) {
        // depth = 4
        if (condition5) {
          // bad - depth = 5
        }
        return;
      }
    }
  }
}
```

### 9.12 If an if block always returns, the final else is unnecessary

```js
// bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// good
function foo() {
  if (x) {
    return x;
  }

  return y;
}
```

### 9.13 No unnecessary escape characters

Escape characters greatly reduce code readability, so avoid overusing them:

```js
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `'this' is "quoted"`;
```

### 9.14 Do not call Object.prototype methods directly on objects

Do not call `Object.prototype` methods like `hasOwnProperty`, `propertyIsEnumerable`, `isPrototypeOf` directly on objects. These methods may be overridden by properties on the object, causing errors:

```js
const obj = {
  foo: 'foo',
  hasOwnProperty: false,
};
const objNull = Object.create(null);

// bad => Uncaught TypeError: obj.hasOwnProperty is not a function
console.log(obj.hasOwnProperty('foo'));
console.log(objNull.hasOwnProperty('foo'));

// good
console.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));
console.log(Object.prototype.hasOwnProperty.call(objNull, 'foo'));
```

## 10. Prohibited Actions

- No `var`; use `const` and `let` instead
- No `any` (scenarios requiring explicit annotation must include a comment explaining why)
- No `namespace` (use ES modules instead)
- No `require()` (use `import` instead)
- No triple-slash imports `///` (use `import` instead)
- No empty `interface` (except for `extends`)
- No duplicate class members
- No module-level side effects (side effects should be isolated in entry files)
- No `eval`
- No `debugger`
- No assigning to native objects or read-only global objects
- No creating functions with the `Function` constructor
- No `new Number/String/Boolean`
- No assigning `this` to other variables (use arrow functions to preserve function scope)
- No `void` operator
- No nested ternary expressions
- No unnecessary ternary expressions
- No mixing multiple operators without grouping with parentheses
