# Day 14 - JavaScript Strings, Numbers & Math

## Project: JavaScript Strings, Numbers & Math Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned JavaScript Strings, Numbers, and Math operations.

I practised creating and accessing strings, finding string length, changing string case, removing whitespace, searching strings, extracting parts of strings, replacing text, splitting strings, combining strings, repeating strings, and using template literals.

I also learned JavaScript numbers, arithmetic operators, remainder and exponentiation, increment and decrement operators, assignment operators, operator precedence, the Math object, random numbers, number conversion, `NaN`, and integer checking.

I also practised practical calculations such as percentages and shopping bill calculations.

## Concepts Learned

| JavaScript concept | Example | Purpose |
| --- | --- | --- |
| String | `const name = "Punith"` | Stores text. |
| String indexing | `name[0]` | Accesses a character using its index. |
| `length` | `name.length` | Returns the number of characters. |
| `toUpperCase()` | `text.toUpperCase()` | Converts text to uppercase. |
| `toLowerCase()` | `text.toLowerCase()` | Converts text to lowercase. |
| `trim()` | `username.trim()` | Removes whitespace from the beginning and end. |
| `includes()` | `text.includes("Java")` | Checks whether text exists in a string. |
| `startsWith()` | `text.startsWith("Java")` | Checks whether a string starts with specific text. |
| `endsWith()` | `text.endsWith("Stack")` | Checks whether a string ends with specific text. |
| `indexOf()` | `text.indexOf("S")` | Finds the index of the first occurrence. |
| `lastIndexOf()` | `text.lastIndexOf("Java")` | Finds the index of the last occurrence. |
| `slice()` | `text.slice(0, 4)` | Extracts part of a string. |
| `substring()` | `text.substring(0, 4)` | Extracts characters between indexes. |
| `replace()` | `text.replace("Java", "JavaScript")` | Replaces the first matching text. |
| `replaceAll()` | `text.replaceAll("Java", "JavaScript")` | Replaces all matching text. |
| `split()` | `skills.split(",")` | Converts a string into an array. |
| `concat()` | `firstName.concat(" ", lastName)` | Combines strings. |
| `repeat()` | `"Java ".repeat(3)` | Repeats a string. |
| Template literals | `` `Hello ${name}` `` | Creates strings with embedded variables. |
| `map()` with strings | `words.map(word => word.toUpperCase())` | Transforms each string in an array. |
| Number | `const age = 22` | Stores numeric values. |
| Arithmetic operators | `+`, `-`, `*`, `/` | Performs mathematical calculations. |
| Remainder | `number % 2` | Returns the remainder after division. |
| Exponentiation | `2 ** 3` | Calculates powers. |
| Increment | `count++` | Increases a value by 1. |
| Decrement | `count--` | Decreases a value by 1. |
| Assignment operators | `+=`, `-=`, `*=`, `/=` | Performs arithmetic and assignment together. |
| Operator precedence | `(10 + 5) * 2` | Controls the order of calculations. |
| `Math.round()` | `Math.round(4.6)` | Rounds to the nearest integer. |
| `Math.floor()` | `Math.floor(4.9)` | Rounds down. |
| `Math.ceil()` | `Math.ceil(4.1)` | Rounds up. |
| `Math.trunc()` | `Math.trunc(4.9)` | Removes the decimal portion. |
| `Math.abs()` | `Math.abs(-10)` | Returns the absolute value. |
| `Math.max()` | `Math.max(10, 50, 20)` | Returns the largest number. |
| `Math.min()` | `Math.min(10, 50, 20)` | Returns the smallest number. |
| `Math.sqrt()` | `Math.sqrt(25)` | Returns the square root. |
| `Math.pow()` | `Math.pow(2, 3)` | Calculates a power. |
| `Math.random()` | `Math.random()` | Generates a random decimal number. |
| Random integer | `Math.floor(Math.random() * 10) + 1` | Generates a random integer within a range. |
| `Number()` | `Number("500")` | Converts a value into a number. |
| `parseInt()` | `parseInt("25.99")` | Converts a value into an integer. |
| `parseFloat()` | `parseFloat("99.99")` | Converts a value into a decimal number. |
| `NaN` | `Number("hello")` | Represents an invalid numeric result. |
| `Number.isNaN()` | `Number.isNaN(result)` | Checks whether a value is `NaN`. |
| `Number.isInteger()` | `Number.isInteger(10)` | Checks whether a value is an integer. |

## Creating Strings

Strings can be created using single or double quotes.

```javascript
const name = "Punith";
const course = 'Java Full Stack';