# Day 10 - JavaScript Programming

## Project: JavaScript Conditions, Loops and Functions

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned JavaScript programming fundamentals from conditions through functions. I practised making decisions using conditions, repeating code using loops, and creating reusable blocks of code using functions.

## Concepts Learned

| JavaScript concept | Example | Purpose |
| --- | --- | --- |
| `if` | `if (age >= 18)` | Executes code when a condition is true. |
| `else if` | `else if (marks >= 80)` | Checks another condition when the previous condition is false. |
| `else` | `else {}` | Executes when all previous conditions are false. |
| Logical AND | `age >= 18 && hasId` | Requires both conditions to be true. |
| Logical OR | `isAdmin || isTeacher` | Requires at least one condition to be true. |
| Logical NOT | `!isLoggedIn` | Reverses a boolean value. |
| Truthy / Falsy | `Boolean(0)` | Determines how values behave in conditions. |
| Ternary operator | `age >= 18 ? "Adult" : "Minor"` | Short form of simple `if/else`. |
| `switch` | `switch(day)` | Compares one value against multiple specific values. |
| `break` | `break` | Stops a loop or switch statement. |
| `continue` | `continue` | Skips the current loop iteration. |
| `??` | `value ?? "Guest"` | Provides a default for `null` or `undefined`. |
| `?.` | `user?.address?.city` | Safely accesses nested properties. |
| `for` loop | `for (let i = 1; i <= 5; i++)` | Repeats code a specific number of times. |
| `while` loop | `while (i <= 5)` | Repeats while a condition is true. |
| `do...while` | `do {} while (condition)` | Executes the code at least once before checking the condition. |
| Nested loop | Loop inside another loop | Repeats operations in multiple levels. |
| Function | `function add(a, b)` | Creates reusable code. |
| Parameter | `function add(a, b)` | Receives values inside a function. |
| Argument | `add(10, 20)` | Supplies actual values to parameters. |
| `return` | `return a + b` | Sends a value back from a function. |
| Default parameter | `quantity = 1` | Provides a default value when an argument is not supplied. |
| Function expression | `const greet = function() {}` | Stores a function in a variable. |
| Arrow function | `const add = (a, b) => a + b` | Provides shorter function syntax. |
| Function scope | Local variables | Limits variables to their accessible scope. |

## Conditions

I learned how JavaScript makes decisions using:

```javascript
if
else if
else