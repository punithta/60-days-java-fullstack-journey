# Day 13 - JavaScript Objects

## Project: JavaScript Objects Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned JavaScript Objects and how to store related information using key-value pairs.

I practised creating objects, accessing and modifying properties, adding and deleting properties, creating object methods, using the `this` keyword, working with nested objects, destructuring objects, and using built-in object utility methods.

I also continued working with arrays of objects using `map()`, `filter()`, `find()`, `reduce()`, and `sort()`.

## Concepts Learned

| JavaScript concept | Example | Purpose |
| --- | --- | --- |
| Object | `const student = { name: "Punith" }` | Stores related data using key-value pairs. |
| Property | `name: "Punith"` | Represents a piece of information in an object. |
| Dot notation | `student.name` | Accesses an object property. |
| Bracket notation | `student["name"]` | Accesses an object property using brackets. |
| Modify property | `student.age = 23` | Changes an existing property. |
| Add property | `student.city = "Bengaluru"` | Adds a new property. |
| Delete property | `delete student.age` | Removes a property. |
| Nested object | `student.address.city` | Stores an object inside another object. |
| Object method | `student.greet()` | A function stored inside an object. |
| `this` | `this.name` | Refers to the object context inside a method. |
| Object destructuring | `const { name } = student` | Extracts properties into variables. |
| Default destructuring | `city = "Unknown"` | Provides a default value when a property is missing. |
| Property shorthand | `{ name, age }` | Shorter syntax when property and variable names are the same. |
| Computed property | `{ [property]: value }` | Uses an expression to determine a property name. |
| `Object.keys()` | `Object.keys(student)` | Returns an array of object keys. |
| `Object.values()` | `Object.values(student)` | Returns an array of object values. |
| `Object.entries()` | `Object.entries(student)` | Returns key-value pairs as arrays. |
| Array of objects | `[{ name: "Punith", age: 22 }]` | Stores structured collections of objects. |

## Creating an Object

Objects use curly braces and store data as key-value pairs.

```javascript
const student = {
    name: "Punith",
    age: 22,
    course: "Java Full Stack"
};