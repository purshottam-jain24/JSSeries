/* 

Conversion is the process of converting one data type to another. In JavaScript, we can convert a value from one data type to another. We need conversion because JavaScript is a loosely typed language, which means we can use the same variable to hold different data types.

There are two types of conversion in JavaScript:

1. Implicit Conversion
Implicit conversion is the automatic conversion of a value from one data type to another data type. JavaScript automatically converts the data type of a value to another data type when it is required.

Example:

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;

In the above example, the variables num1 and num2 are of the number data type, and the sum variable is also of the number data type. When we add the num1 and num2 variables, JavaScript automatically converts the data type of the sum variable to a number.

2. Explicit Conversion
Explicit conversion is the manual conversion of a value from one data type to another data type. We can explicitly convert the data type of a value using the following functions:

1. Number(): It converts a value to a number.
2. String(): It converts a value to a string.
3. Boolean(): It converts a value to a boolean.

Example:

let num = '10';
console.log(typeof num); // string
num = Number(num);
console.log(typeof num); // number

In the above example, the num variable is of the string data type. We convert the data type of the num variable to a number using the Number() function.

Note: The Number() function converts a string to a number. If the string contains a non-numeric value, it returns NaN (Not a Number).

Example:

let num = 'Hello';
console.log(Number(num)); // NaN

In the above example, the num variable contains a non-numeric value, so the Number() function returns NaN.

Let's see some examples of explicit conversion:

*/

// Example 1: Convert a string to a number
let num1 = "10";
console.log(typeof num1); // string
num1 = Number(num1);
console.log(typeof num1); // number
let num2 = "Hello";
console.log(Number(num2)); // NaN

// Example 2: Convert a number to a string
let str1 = 10;
console.log(typeof str1); // number
let str2 = String(str1);
console.log(typeof str2); // string

// Example 3: Convert a boolean to a number
let bool = true;
console.log(Number(bool)); // 1
