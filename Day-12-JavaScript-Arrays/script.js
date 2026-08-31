// ========================================
// Day 12 - JavaScript Arrays
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
// Gives values
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

const nestedNumbers = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(nestedNumbers[0][1]);


// ========================================
// 19. forEach()
// ========================================

const numbersForEach = [10, 20, 30];

numbersForEach.forEach(number => {
    console.log(number);
});


// ========================================
// 20. forEach() with Index
// ========================================

const studentNames = [
    "Punith",
    "Rahul",
    "Anil"
];

studentNames.forEach((student, index) => {
    console.log(index, student);
});


// ========================================
// 21. map()
// Transform every element
// ========================================

const numbersMap = [1, 2, 3, 4];

const doubled = numbersMap.map(number => {
    return number * 2;
});

console.log(doubled);


// ========================================
// 22. map() with Strings
// ========================================

const names = [
    "Punith",
    "Rahul",
    "Anil"
];

const greetings = names.map(name => {
    return `Hello ${name}`;
});

console.log(greetings);


// ========================================
// 23. filter()
// Keep elements that satisfy condition
// ========================================

const numbersFilter = [
    1,
    2,
    3,
    4,
    5,
    6
];

const evenNumbers = numbersFilter.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);


// ========================================
// 24. find()
// Returns first matching element
// ========================================

const numbersFind = [
    5,
    12,
    8,
    20
];

const firstGreaterThanTen =
    numbersFind.find(number => number > 10);

console.log(firstGreaterThanTen);


// ========================================
// 25. reduce()
// Calculate total
// ========================================

const numbersReduce = [
    10,
    20,
    30,
    40
];

const sum = numbersReduce.reduce(
    (total, number) => {
        return total + number;
    },
    0
);

console.log(sum);


// ========================================
// 26. reduce() for Multiplication
// ========================================

const multiplyNumbers = [2, 3, 4];

const multiplicationResult =
    multiplyNumbers.reduce(
        (total, number) => {
            return total * number;
        },
        1
    );

console.log(multiplicationResult);


// ========================================
// 27. Combining filter() and map()
// ========================================

const numbersCombined = [
    1,
    2,
    3,
    4,
    5,
    6
];

const doubledEvenNumbers = numbersCombined
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(doubledEvenNumbers);


// ========================================
// 28. sort()
// Ascending order
// ========================================

const ascendingNumbers = [
    40,
    10,
    30,
    20
];

ascendingNumbers.sort((a, b) => a - b);

console.log(ascendingNumbers);


// ========================================
// 29. sort()
// Descending order
// ========================================

const descendingNumbers = [
    10,
    30,
    20,
    40
];

descendingNumbers.sort((a, b) => b - a);

console.log(descendingNumbers);


// ========================================
// 30. Arrays of Objects
// ========================================

const studentObjects = [
    {
        name: "Punith",
        age: 22,
        course: "Java"
    },
    {
        name: "Rahul",
        age: 21,
        course: "JavaScript"
    },
    {
        name: "Anil",
        age: 23,
        course: "Java"
    }
];


// ========================================
// 31. Accessing Object in Array
// ========================================

console.log(studentObjects[0]);

console.log(studentObjects[0].name);

console.log(studentObjects[0].age);

console.log(studentObjects[0].course);


// ========================================
// 32. Loop Through Array of Objects
// ========================================

for (const student of studentObjects) {

    console.log(
        `${student.name} - ${student.age} - ${student.course}`
    );

}


// ========================================
// 33. map() with Objects
// Get Names
// ========================================

const studentObjectNames =
    studentObjects.map(student => student.name);

console.log(studentObjectNames);


// ========================================
// 34. map() to Create New Objects
// ========================================

const studentInfo = studentObjects.map(student => {

    return {
        name: student.name,
        course: student.course
    };

});

console.log(studentInfo);


// ========================================
// 35. filter() with Objects
// ========================================

const adultStudents =
    studentObjects.filter(student => {
        return student.age >= 22;
    });

console.log(adultStudents);


// ========================================
// 36. find() with Objects
// ========================================

const foundStudent =
    studentObjects.find(student => {
        return student.name === "Punith";
    });

console.log(foundStudent);


// ========================================
// 37. find() - No Match
// ========================================

const missingStudent =
    studentObjects.find(student => {
        return student.name === "Kiran";
    });

console.log(missingStudent);


// ========================================
// 38. forEach() with Objects
// ========================================

studentObjects.forEach(student => {

    console.log(
        `Name: ${student.name}`
    );

});


// ========================================
// 39. reduce() with Objects
// Calculate Total Age
// ========================================

const totalAge =
    studentObjects.reduce(
        (total, student) => {
            return total + student.age;
        },
        0
    );

console.log(totalAge);


// ========================================
// 40. Calculate Average Age
// ========================================

const averageAge =
    totalAge / studentObjects.length;

console.log(averageAge);


// ========================================
// 41. Sort Objects by Age
// Ascending
// ========================================

studentObjects.sort(
    (a, b) => a.age - b.age
);

console.log(studentObjects);


// ========================================
// 42. Practical Learning Topics
// ========================================

const learningTopics = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL"
];

learningTopics.forEach(topic => {

    console.log(
        `I am learning ${topic}`
    );

});


// ========================================
// 43. Filter + Map with Products
// ========================================

const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 1000
    },
    {
        name: "Keyboard",
        price: 2000
    },
    {
        name: "Monitor",
        price: 15000
    }
];


// Products above ₹5,000
const expensiveProducts =
    products.filter(product => {
        return product.price > 5000;
    });

console.log(expensiveProducts);


// Names of products above ₹5,000
const expensiveProductNames = products
    .filter(product => product.price > 5000)
    .map(product => product.name);

console.log(expensiveProductNames);


// Total price of all products
const totalProductPrice =
    products.reduce(
        (total, product) => {
            return total + product.price;
        },
        0
    );

console.log(totalProductPrice);


// Total price of expensive products
const expensiveProductTotal =
    products
        .filter(product => product.price > 5000)
        .reduce(
            (total, product) => {
                return total + product.price;
            },
            0
        );

console.log(expensiveProductTotal);


// ========================================
// 44. Day 12 Completed
// ========================================

console.log(
    "Day 12 - JavaScript Arrays Completed!"
);