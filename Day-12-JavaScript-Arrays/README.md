# Day 12 - JavaScript Arrays

## Project: JavaScript Arrays Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned JavaScript arrays and how to work with collections of data. I practised creating, accessing, modifying, searching, looping, sorting, and processing arrays.

I also learned important array methods such as `forEach()`, `map()`, `filter()`, `find()`, `reduce()`, and `sort()`.

Finally, I worked with arrays of objects and combined multiple array methods to process real-world style data.

## Concepts Learned

| JavaScript concept | Example | Purpose |
| --- | --- | --- |
| Array | `const fruits = ["Apple", "Banana"]` | Stores multiple values in one variable. |
| Array index | `fruits[0]` | Accesses an element using its index. |
| Zero-based indexing | First element is index `0` | Arrays start from index 0. |
| `length` | `fruits.length` | Returns the number of elements. |
| `push()` | `fruits.push("Mango")` | Adds an element to the end. |
| `pop()` | `fruits.pop()` | Removes the last element. |
| `unshift()` | `fruits.unshift("Apple")` | Adds an element to the beginning. |
| `shift()` | `fruits.shift()` | Removes the first element. |
| `for` loop | `for (let i = 0; i < array.length; i++)` | Loops through an array using indexes. |
| `for...of` | `for (const item of array)` | Loops through array values. |
| `for...in` | `for (const index in array)` | Loops through indexes. |
| `forEach()` | `array.forEach(...)` | Performs an action for each element. |
| `map()` | `array.map(...)` | Transforms elements and creates a new array. |
| `filter()` | `array.filter(...)` | Creates a new array containing matching elements. |
| `find()` | `array.find(...)` | Returns the first matching element. |
| `reduce()` | `array.reduce(...)` | Combines array values into one result. |
| `includes()` | `array.includes("Java")` | Checks whether a value exists. |
| `indexOf()` | `array.indexOf("Java")` | Finds the index of a value. |
| `join()` | `array.join(", ")` | Combines elements into a string. |
| `slice()` | `array.slice(1, 3)` | Extracts part of an array without modifying it. |
| `splice()` | `array.splice(1, 1)` | Removes or modifies elements in the original array. |
| `sort()` | `array.sort((a, b) => a - b)` | Sorts array elements. |
| Nested array | `numbers[0][1]` | Stores arrays inside another array. |
| Array of objects | `[{ name: "Punith", age: 22 }]` | Stores structured data. |
| Object property access | `student.name` | Accesses a property of an object. |
| Method chaining | `filter().map()` | Performs multiple operations on an array. |

## Creating an Array

```javascript
const fruits = ["Apple", "Banana", "Mango"];