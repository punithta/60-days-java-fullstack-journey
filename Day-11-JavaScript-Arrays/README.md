# Day 11 - JavaScript Arrays

## Project: JavaScript Arrays Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned the fundamentals of JavaScript arrays. I practised creating arrays, accessing and modifying elements, adding and removing elements, checking array length, searching arrays, extracting elements, and looping through arrays.

I also combined arrays with loops, conditions, and functions.

## Concepts Learned

| JavaScript concept | Example in `script.js` | Purpose |
| --- | --- | --- |
| Array | `const fruits = ["Apple", "Banana", "Mango"]` | Stores multiple values in a single variable. |
| Array index | `fruits[0]` | Accesses an element using its index. |
| Zero-based indexing | First element uses index `0` | JavaScript arrays start from index 0. |
| Array length | `fruits.length` | Returns the number of elements. |
| Last element | `fruits[fruits.length - 1]` | Accesses the last element dynamically. |
| Modify element | `students[1] = "Kiran"` | Changes an existing array element. |
| `push()` | `fruits.push("Mango")` | Adds an element to the end. |
| `pop()` | `fruits.pop()` | Removes the last element. |
| `unshift()` | `fruits.unshift("Apple")` | Adds an element to the beginning. |
| `shift()` | `fruits.shift()` | Removes the first element. |
| `for` loop | `for (let i = 0; i < array.length; i++)` | Loops through an array using indexes. |
| `for...of` | `for (const item of array)` | Loops through array values. |
| `for...in` | `for (const index in array)` | Loops through array indexes. |
| `includes()` | `languages.includes("Java")` | Checks whether a value exists. |
| `indexOf()` | `languages.indexOf("Python")` | Finds the index of a value. |
| `join()` | `fruits.join(", ")` | Combines array elements into a string. |
| `slice()` | `fruits.slice(1, 3)` | Extracts part of an array without modifying the original. |
| `splice()` | `fruits.splice(1, 1)` | Removes or modifies elements in the original array. |
| Nested array | `numbers[0][1]` | Stores arrays inside another array. |
| Array + condition | `number % 2 === 0` | Finds values based on a condition. |
| Array + function | `calculateSum(numbers)` | Processes array data using a reusable function. |

## Creating an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];