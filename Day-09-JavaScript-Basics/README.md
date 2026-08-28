# Day 9 - JavaScript Basics

## Project: JavaScript Basics Practice

This project is part of my 60 Days Java Full-Stack Journey.

I learned the fundamentals of JavaScript including variables, data types, operators, type coercion, type conversion, and template literals. I also practised these concepts using JavaScript examples and console output.

## Concepts Learned

| JavaScript concept | Example in `script.js` | Purpose |
| --- | --- | --- |
| `let` | `let age = 22` | Declares a variable whose value can be reassigned. |
| `const` | `const name = "Punith T A"` | Declares a variable that cannot be reassigned. |
| String | `const course = "Java Full-Stack Development"` | Stores text values. |
| Number | `const completedDays = 24` | Stores numeric values. |
| Boolean | `const isLearning = true` | Represents `true` or `false`. |
| Undefined | `let result` | Represents a variable that has not been assigned a value. |
| Null | `const selectedUser = null` | Represents an intentional absence of a value. |
| `typeof` | `typeof name` | Checks the data type of a value. |
| Arithmetic operators | `+`, `-`, `*`, `/`, `%`, `**` | Performs mathematical operations. |
| Assignment operators | `+=`, `-=`, `*=`, `/=` | Updates the value of a variable. |
| Comparison operators | `>`, `<`, `>=`, `<=` | Compares values. |
| Strict equality | `===` | Checks both value and type. |
| Loose equality | `==` | Compares values and may perform type coercion. |
| Logical operators | `&&`, `||`, `!` | Combines or reverses conditions. |
| Type coercion | `"10" + 5` | Demonstrates JavaScript's automatic type conversion. |
| Type conversion | `Number("25")` | Explicitly converts a value to another type. |
| Template literals | `` `Hello ${name}` `` | Creates strings with variables and expressions. |

## Where JavaScript Concepts Are Used

1. `let` is used for values that may change, such as `age` and `score`.

2. `const` is used for values that are not reassigned, such as `name` and `course`.

3. Strings are used to store text such as the student's name and course.

4. Numbers are used for age, scores, prices, quantities, and completed days.

5. Boolean values are used to represent true or false states.

6. `typeof` is used to check the data type of JavaScript values.

7. Arithmetic operators are used to perform calculations.

8. Assignment operators are used to update variable values.

9. Comparison operators are used to compare values.

10. `==` and `===` are used to understand loose and strict equality.

11. Logical operators `&&`, `||`, and `!` are used to combine and reverse boolean expressions.

12. Type coercion is demonstrated using operations between strings and numbers.

13. `Number()` and `String()` are used for explicit type conversion.

14. Template literals are used to create readable strings containing variables and expressions.

## Type Coercion Examples

```javascript
console.log("10" + 5);