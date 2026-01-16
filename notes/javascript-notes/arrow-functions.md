# Arrow Functions

Arrow functions are a **shorter way to write functions** in JavaScript.
They were introduced in **ES6 (ECMAScript 2015)** and are especially common in **modern JavaScript**, **React**, and **Node.js**.

---

## Syntax

### Traditional Function

```js
function sayHi() {
  console.log('Hi');
}
```

### Arrow Function

```js
const sayHi = () => console.log('Hi');
```

---

## Rules & Shortcuts

### 1. No Parameters

If the function has **no parameters**, you must use empty parentheses:

```js
const greet = () => console.log('Hello');
```

### 2. One Parameter

If the function has **exactly one parameter**, parentheses are optional:

```js
const greet = name => console.log(name);
```

### 3. Multiple Parameters

If there are **multiple parameters**, parentheses are required:

```js
const add = (a, b) => a + b;
```

### 4. Single Expression Return

If the function **returns a single value**, you can:

* Remove curly braces `{ }`
* Remove the `return` keyword

```js
const multiply = (a, b) => a * b;
```

This is equivalent to:

```js
const multiply = (a, b) => {
  return a * b;
};
```

### 5. Multiple Statements

If your function has **multiple statements**, you must use braces and `return`:

```js
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

---

## `this` Behavior (Important)

Arrow functions **do not create their own `this`**.
They use `this` from their surrounding code.

This makes them very useful in:

* Classes
* Callbacks (`map`, `filter`, `forEach`)
* Event handlers
* React components

```js
class Person {
  name = 'Max';

  printName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printName(); // prints 'Max'
```

---

## When to Avoid Arrow Functions

Do **not** use arrow functions when:

* You need the `arguments` object
* You need a constructor (cannot use `new` with arrow functions)


