# Arrow Functions

Shorter function syntax it was introduced in ES6 (ECMAScript 2015) and are especially common in modern JavaScript, React, and Node.js.

## Syntax

Traditional Function

```function sayHi() {
  console.log('Hi');
}

Arrow Function

```const sayHi = () => console.log('Hi');

## Rules & Shortcuts 

- If the function has no parameters, you must use empty parentheses

```const greet = () => console.log('Hello');

- If the function has exactly one parameter, parentheses are optional

```const greet = name => console.log(name);

If there are multiple parameters, parentheses are required.

```const add = (a, b) => a + b;

If the function returns a single value

Remove curly braces { }
Remove the return keyword

```const multiply = (a, b) => a * b;

If your function has multiple statements, you must use braces and return.

```const multiply = (a, b) => {
  const result = a * b;
  return result;
};

## Arrow functions do not create their own this (Important)
They use this from their surrounding code.
This makes them very useful in:

- Classes
- Callbacks (map, filter, forEach)
- Event handlers
- React components

``` class Person {
  name = 'Max';

  printName = () => {
    console.log(this.name);
  };
}

When to Avoid using arrow function 

-You need the arguments object
-You need a constructor (cannot use new with arrow functions)
