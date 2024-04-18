/* 

operations in javascript - operations are the actions that can be performed on the data. 

There are different types of operators in JavaScript:
1. Arithmetic Operators - used to perform arithmetic operations like addition, subtraction, multiplication, division, etc.
2. Assignment Operators - used to assign values to variables. e.g. =, +=, -=, *=, /=, etc.
3. Comparison Operators - used to compare two values. e.g. ==, ===, !=, !==, >, <, >=, <=, etc.
4. Logical Operators - used to combine multiple conditions. e.g. &&, ||, !
5. Bitwise Operators - used to perform bitwise operations. e.g. &, |, ^, ~, <<, >>, etc.
6. Unary Operators - used to perform operations on a single operand. e.g. +, -, ++, --, typeof, delete, void, etc.
7. Ternary Operators - used to assign values based on a condition. e.g. condition ? value1 : value2

+ is used for addition, - is used for subtraction, * is used for multiplication, / is used for division, % is used for modulus (remainder).
+= is used for addition, -= is used for subtraction, *= is used for multiplication, /= is used for division, %= is used for modulus.
== is used for equal to, === is used for strict equal to (it checks data as well as dataype too), != is used for not equal to, !== is used for strict not equal to, > is used for greater than, < is used for less than, >= is used for greater than or equal to, <= is used for less than or equal to.



*/

// Example 1: Arithmetic Operators
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
console.log(sum); // Output: 30 (+ is used for addition)
let diff = num1 - num2;
console.log(diff); // Output: -10 (- is used for subtraction)
let product = num1 * num2;
console.log(product); // Output: 200 (* is used for multiplication)
let quotient = num1 / num2;
console.log(quotient); // Output: 0.5 (/ is used for division)
let remainder = num1 % num2;
console.log(remainder); // Output: 10 (% is used for modulus)

// Example 2: Assignment Operators
let x = 10;
let y = 20;

x += y; // x = x + y;
console.log(x); // Output: 30 (+= is used for addition)

x -= y; // x = x - y;
console.log(x); // Output: 10 (-= is used for subtraction)

x *= y; // x = x * y;
console.log(x); // Output: 200 (*= is used for multiplication)

x /= y; // x = x / y;
console.log(x); // Output: 10 (/= is used for division)

x %= y; // x = x % y;
console.log(x); // Output: 10 (%= is used for modulus)

// Example 3: Comparison Operators
let a = 10;
let b = 20;

console.log(a == b); // Output: false (== is used for equal to)
console.log(a === b); // Output: false (=== is used for strict equal to)
console.log(a != b); // Output: true  (!= is used for not equal to)
console.log(a !== b); // Output: true (!== is used for strict not equal to)
console.log(a > b); // Output: false ( > is used for greater than)
console.log(a < b); // Output: true ( < is used for less than)
console.log(a >= b); // Output: false ( >= is used for greater than or equal to)
console.log(a <= b); // Output: true ( <= is used for less than or equal to)

// Example 4: Logical Operators
let p = true; // 1
let q = false; // 0

console.log(p && q); // Output: false (AND)
console.log(p || q); // Output: true (OR)
console.log(!p); // Output: false (NOT)
console.log(!q); // Output: true (NOT)

// Example 5: Bitwise Operators
let m = 5; // 101 (Binary)
let n = 3; // 011 (Binary)

console.log(m & n); // Output: 1 (AND) how it is 1? 101 & 011 = 001
console.log(m | n); // Output: 7 (OR) how it is 7? 101 | 011 = 111
console.log(m ^ n); // Output: 6 (XOR) how it is 6? 101 ^ 011 = 110
console.log(~m); // Output: -6 (NOT) how it is -6? ~101 = -110
console.log(m << 1); // Output: 10 (Left Shift) how it is 10? 101 << 1 = 1010
console.log(m >> 1); // Output: 2 (Right Shift) how it is 2? 101 >> 1 = 10

// Example 6: Unary Operators
let num = 10;
let result = -num;
console.log(result); // Output: -10 (Unary Minus)

let count = 0;
count++;
console.log(count); // Output: 1

count--;
console.log(count); // Output: 0

console.log(typeof num); // Output: number
console.log(typeof count); // Output: number

// Example 7: Ternary Operators
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Output: Yes

// pre and post increment and decrement operators (Important)
let i = 10;
let j = 20;

console.log(i++); // Output: 10 (Post Increment)
console.log(i); // Output: 11

console.log(++j); // Output: 21 (Pre Increment)
console.log(j); // Output: 21

console.log(i--); // Output: 11 (Post Decrement)
console.log(i); // Output: 10

console.log(--j); // Output: 20 (Pre Decrement)
console.log(j); // Output: 20