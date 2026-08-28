// ========================================
// Day 9 - JavaScript Basics
// ========================================


// ========================================
// 1. let
// ========================================

let age = 22;

age = 23;

console.log("Age:", age);


// ========================================
// 2. const
// ========================================

const name = "Punith T A";

console.log("Name:", name);


// ========================================
// 3. String
// ========================================

const course = "Java Full-Stack Development";

console.log("Course:", course);


// ========================================
// 4. Number
// ========================================

const completedDays = 24;

console.log("Completed Days:", completedDays);


// ========================================
// 5. Boolean
// ========================================

const isLearning = true;

console.log("Currently Learning:", isLearning);


// ========================================
// 6. Undefined
// ========================================

let result;

console.log("Result:", result);


// ========================================
// 7. Null
// ========================================

const selectedUser = null;

console.log("Selected User:", selectedUser);


// ========================================
// 8. typeof
// ========================================

console.log(typeof name);
console.log(typeof completedDays);
console.log(typeof isLearning);
console.log(typeof result);


// ========================================
// 9. Arithmetic Operators
// ========================================

const a = 10;
const b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);


// ========================================
// 10. Assignment Operators
// ========================================

let score = 50;

score += 10;

console.log("Score:", score);

score -= 5;

console.log("Score:", score);

score *= 2;

console.log("Score:", score);

score /= 2;

console.log("Score:", score);


// ========================================
// 11. Comparison Operators
// ========================================

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(5 <= 10);


// ========================================
// 12. == vs ===
// ========================================

console.log(5 == "5");
console.log(5 === "5");


// ========================================
// 13. Logical Operators
// ========================================

const studentAge = 22;
const hasId = true;

console.log(studentAge >= 18 && hasId);

console.log(studentAge >= 18 || hasId);

console.log(!hasId);


// ========================================
// 14. Type Coercion
// ========================================

console.log("10" + 5);

console.log("10" - 5);

console.log("10" * 2);

console.log("10" / 2);


// ========================================
// 15. Explicit Type Conversion
// ========================================

const stringNumber = "25";

const convertedNumber = Number(stringNumber);

console.log(convertedNumber);
console.log(typeof convertedNumber);


const numberValue = 100;

const convertedString = String(numberValue);

console.log(convertedString);
console.log(typeof convertedString);


// ========================================
// 16. Template Literals
// ========================================

const studentName = "Punith T A";
const studentAgeValue = 22;
const learningCourse = "Java Full-Stack Development";
const days = 24;

const diary = `My name is ${studentName}. I am ${studentAgeValue} years old. I have been learning ${learningCourse} for the last ${days} days.`;

console.log(diary);


// ========================================
// 17. Expressions inside ${}
// ========================================

const price = 500;
const discount = 100;
const quantity = 2;

console.log(
  `Final amount: ${(price - discount) * quantity}`
);


// ========================================
// 18. JavaScript Basics Summary
// ========================================

console.log("JavaScript Basics Completed!");