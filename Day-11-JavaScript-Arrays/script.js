// ========================================
// Day 11 - JavaScript Arrays
// ========================================


// ========================================
// 1. Creating an Array
// ========================================

const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// ========================================
// 2. Accessing Array Elements
// ========================================

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// ========================================
// 3. Changing an Array Element
// ========================================

const students = ["Punith", "Rahul", "Anil"];

students[1] = "Kiran";

console.log(students);


// ========================================
// 4. Array Length
// ========================================

console.log(students.length);


// ========================================
// 5. Accessing the Last Element
// ========================================

console.log(students[students.length - 1]);


// ========================================
// 6. push()
// Adds an element to the end
// ========================================

const pushExample = ["Apple", "Banana"];

pushExample.push("Mango");

console.log(pushExample);


// ========================================
// 7. pop()
// Removes the last element
// ========================================

const popExample = ["Apple", "Banana", "Mango"];

const removedFruit = popExample.pop();

console.log(popExample);
console.log(removedFruit);


// ========================================
// 8. unshift()
// Adds an element to the beginning
// ========================================

const unshiftExample = ["Banana", "Mango"];

unshiftExample.unshift("Apple");

console.log(unshiftExample);


// ========================================
// 9. shift()
// Removes the first element
// ========================================

const shiftExample = ["Apple", "Banana", "Mango"];

shiftExample.shift();

console.log(shiftExample);


// ========================================
// 10. Array + for Loop
// ========================================

const studentList = [
    "Punith",
    "Rahul",
    "Anil"
];

for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i]);
}


// ========================================
// 11. for...of
// ========================================

for (const student of studentList) {
    console.log(student);
}


// ========================================
// 12. for...in
// Gives indexes
// ========================================

for (const index in studentList) {
    console.log(index);
}


// ========================================
// 13. includes()
// ========================================

const languages = [
    "Java",
    "JavaScript",
    "Python"
];

console.log(languages.includes("Java"));
console.log(languages.includes("C++"));


// ========================================
// 14. indexOf()
// ========================================

console.log(languages.indexOf("JavaScript"));
console.log(languages.indexOf("Python"));
console.log(languages.indexOf("C++"));


// ========================================
// 15. join()
// ========================================

const joinExample = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(joinExample.join(", "));
console.log(joinExample.join(" - "));


// ========================================
// 16. slice()
// Does NOT modify original array
// ========================================

const sliceExample = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

const selectedFruits = sliceExample.slice(1, 3);

console.log(selectedFruits);
console.log(sliceExample);


// ========================================
// 17. splice()
// Modifies the original array
// ========================================

const spliceExample = [
    "Apple",
    "Banana",
    "Mango"
];

spliceExample.splice(1, 1);

console.log(spliceExample);


// ========================================
// 18. Nested Arrays
// ========================================

const numbers = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(numbers[0][1]);


// ========================================
// 19. Array + for...of
// ========================================

const studentNames = [
    "Punith",
    "Rahul",
    "Anil",
    "Kiran"
];

for (const student of studentNames) {
    console.log(`Student: ${student}`);
}


// ========================================
// 20. Calculate Total Using Array
// ========================================

const prices = [
    100,
    200,
    300,
    400
];

let total = 0;

for (const price of prices) {
    total += price;
}

console.log("Total:", total);


// ========================================
// 21. Find Even Numbers
// ========================================

const numberList = [
    1,
    2,
    3,
    4,
    5,
    6
];

for (const number of numberList) {

    if (number % 2 === 0) {
        console.log(number);
    }

}


// ========================================
// 22. Function with Array
// Calculate Sum
// ========================================

function calculateSum(numbers) {

    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(
    calculateSum([10, 20, 30, 40])
);


// ========================================
// 23. Function to Find Even Numbers
// ========================================

function findEvenNumbers(numbers) {

    const evenNumbers = [];

    for (const number of numbers) {

        if (number % 2 === 0) {
            evenNumbers.push(number);
        }

    }

    return evenNumbers;
}

console.log(
    findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])
);


// ========================================
// 24. Array Practice
// Java Full-Stack Learning Topics
// ========================================

const learningTopics = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL"
];

for (const topic of learningTopics) {
    console.log(`I am learning ${topic}`);
}


// ========================================
// Day 11 Completed
// ========================================

console.log(
    "JavaScript Arrays - Basic Concepts Completed!"
);