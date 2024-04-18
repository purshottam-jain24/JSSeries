/* 
In this tutorial, we'll explore data types in JavaScript and ECMAScript.
Data types define variable types in JavaScript.
JavaScript is a loosely typed or dynamic language, allowing variables to hold any value type.

JavaScript's data types are categorized into two groups:
1. Primitive Data Types
2. Non-Primitive Data Types

1. Primitive Data Types - Primitive data types are immutable and stored directly in memory.
1. String
The string data type is used to represent text data, a sequence of characters enclosed in double or single quotes. It is an immutable primitive data type.
Example:
let str = "Hello World";
let str1 = 'Hello World';

2. Number
The number data type represents numeric data, including integers, floating-point numbers, and both positive and negative values. It is a primitive data type.
Example:
let num = 10.50;
let num1 = 100;

3. Boolean
The boolean data type represents logical data with true or false values and is a primitive data type.
Example:
let isTrue = true;
let isFalse = false;

4. Undefined
The undefined data type represents the absence of a value or a variable that hasn't been assigned a value yet. It is a primitive data type.
Example:
let x;
console.log(x); // Output: undefined

5. Null
The null data type represents a null or empty value and is a primitive data type.
Example:
let y = null;
console.log(y); // Output: null

6. Symbol
The symbol data type, introduced in ECMAScript 6, represents unique values or identifiers and is a primitive data type.
Example:
let sym1 = Symbol("Hello");
let sym2 = Symbol("World");

2. Non-Primitive Data Types - Non-primitive data types are mutable and stored by reference.
1. Object
The object data type represents collections of data structured as key-value pairs and is a non-primitive data type.
Example:
let obj = {
name: "John Doe",
age: 25
};

2. Array
The array data type represents collections or lists of elements and is a non-primitive data type.
Example:
let arr = [10, 20, 30, 40, 50];

*/

// Example 4: Primitive Data Types
let str = "Hello World";
let num = 100;
let isTrue = true;
let x;
let y = null;
let sym1 = Symbol("Hello");

console.table({ str, num, isTrue, x, y, sym1 });
// console.table(); is used to display the data in a table format.

// Example 5: Non-Primitive Data Types
let obj = {
  name: "John Doe",
  age: 25,
};

let arr = [10, 20, 30, 40, 50];

console.table({ arr, obj });

// In the above example, we have declared the variables str, num, isTrue, x, y, sym1, obj, and arr with different data types and assigned values to them.

// lets see typeof operator in action

console.log(typeof str); // Output: string
console.log(typeof num); // Output: number
console.log(typeof isTrue); // Output: boolean
console.log(typeof x); // Output: undefined
console.log(typeof y); // Output: object
console.log(typeof sym1); // Output: symbol
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object
// But the typeof operator returns object for the null value, which is a known issue in JavaScript.

// Also instead of using console.log() we can use console.table() to display the data in a table format.
// console.table() is used to display the data in a table format.
console.table({
  typeof_str: typeof str,
  typeof_num: typeof num,
  typeof_isTrue: typeof isTrue,
  typeof_x: typeof x,
  typeof_y: typeof y,
  typeof_sym1: typeof sym1,
  typeof_obj: typeof obj,
  typeof_arr: typeof arr,
});

// The typeof operator is used to determine the data type of a variable or expression.
