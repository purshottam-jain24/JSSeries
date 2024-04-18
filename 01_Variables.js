/* 
what is a variable?
- A variable is a container to store the data temporarily
- It is used to access the data whenever required.

how to declare a variable?
- To declare a variable we need to use the keyword "var", "let" or "const".
- Then we need to give a name to the variable.
- Then we need to assign a value to the variable.

syntax:
var variableName = value;
let variableName = value;
const variableName = value;


what is the difference between var, let and const?
- var: It is used to declare the variable globally or locally.
- let: It is used to declare the variable locally.
- const: It is used to declare the constant variable.

what is the difference between let and const?
- let: The value of the variable can be changed.
- const: The value of the variable cannot be changed.

why we shoud use let and const instead of var?
- The var keyword has function scope.
- The let keyword has block scope.
- The const keyword has block scope.
- The let and const keywords are recommended to use instead of var.

why we stopped using var?
- The var keyword has function scope and can be hoisted, redeclared and reassigned.
{for now ignore the hoisting}

what are the rules to declare a variable?
- The variable name should start with a letter, underscore or dollar sign.
- The variable name should not start with a number.
- The variable name should not contain special characters except underscore and dollar sign.
- The variable name is case-sensitive.
- The variable name should not be a reserved keyword.

what are the naming conventions for a variable?
- The variable name should be meaningful.
- The variable name should be in camelCase.
- The variable name should not be too long.
- The variable name should not be too short.

*/

// Example 2: Variables

const UserName = "John Doe";
let userEmail = "abc@example.com";
var userpassword = "123456";
userAge = 25;

console.log(UserName); // Output: John Doe
console.log(userEmail); // Output: abc@example.com
console.log(userpassword); // Output: 123456
console.log(userAge); // Output: 25

// In the above example we have declared the variables UserName, userEmail, userpassword and userAge and assigned the values to them.
// Then we have printed the values of the variables in the console.
// Let's try to change value of the variable and see the output.

// Example 3: Change the value of the variable
// UserName = "Jane Prime"; // Output: TypeError: Assignment to constant variable.
console.log(UserName); // Output: Jane Prime - But wait till you see the error message

userEmail = "xyz@example.com";
console.log(userEmail); // Output: xyz@example.com

userpassword = "654321";
console.log(userpassword); // Output: 654321

userAge = 30;
console.log(userAge); // Output: 30

// In the above example we have changed the values of the variables UserName, userEmail, userpassword and userAge and printed the values in the console.
// You might think The values of the variables are changed successfully.
// Now let's try to change the value of the constant variable and see the output.

// But we got *Output: TypeError: Assignment to constant variable.* for the above code. or more specifaclly for UserName = "Jane Prime"; why ?
// The value of the constant variable cannot be changed. If we try to change the value of the constant variable then it will throw an error.
// The value of the constant variable is fixed and cannot be changed.

// But there is one more thing to notice here, we have not declared the variable userAge using var, let or const keyword.
// But still we are able to change the value of the variable userAge.
// This is because of the implicit declaration of the variable.
// The variable userAge is declared implicitly without using var, let or const keyword.
// The variable userAge is declared globally and can be accessed anywhere in the program.
// The variable userAge is not recommended to use because it is declared globally and can be accessed anywhere in the program.

// And what if we just declare the variable without assigning the value to it.

let userGender;
console.log(userGender); // Output: undefined

// In the above example we have declared the variable userGender without assigning the value to it.
// The value of the variable userGender is undefined.
// The value of the variable is not assigned to it so it is undefined.

// In the next tutorial we will learn about the data types in JavaScript.
