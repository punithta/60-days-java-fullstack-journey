// ========================================
// JavaScript Programming Basics
// Conditions + Loops + Functions
// ========================================


// ========================================
// 1. CONDITIONS
// ========================================

// if / else
const age = 22;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// else if
const marks = 85;

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 80) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else {
    console.log("Fail");
}


// Logical AND
const studentAge = 22;
const hasId = true;

if (studentAge >= 18 && hasId) {
    console.log("Entry allowed.");
}


// Logical OR
const isAdmin = false;
const isTeacher = true;

if (isAdmin || isTeacher) {
    console.log("Access allowed.");
}


// Logical NOT
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}


// ========================================
// 2. TRUTHY AND FALSY
// ========================================

console.log(Boolean(""));
console.log(Boolean("JavaScript"));
console.log(Boolean(0));
console.log(Boolean(100));
console.log(Boolean(false));
console.log(Boolean(true));


// ========================================
// 3. TERNARY OPERATOR
// ========================================

const userAge = 22;

const status = userAge >= 18 ? "Adult" : "Minor";

console.log(status);


// ========================================
// 4. SWITCH
// ========================================

const day = 5;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ========================================
// 5. SHORT-CIRCUIT EVALUATION
// ========================================

const loggedIn = true;

loggedIn && console.log("Welcome!");


// ========================================
// 6. || DEFAULT VALUE
// ========================================

const username = "";

const displayName = username || "Guest";

console.log(displayName);


// ========================================
// 7. NULLISH COALESCING (??)
// ========================================

const score = 0;

console.log(score ?? 100);

const userName = null;

console.log(userName ?? "Guest");


// ========================================
// 8. OPTIONAL CHAINING (?.)
// ========================================

const user = {
    name: "Punith"
};

console.log(user?.name);
console.log(user?.address?.city);


// ========================================
// 9. ?? WITH OPTIONAL CHAINING
// ========================================

const city = user?.address?.city ?? "Unknown";

console.log(city);


// ========================================
// 10. FOR LOOP
// ========================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ========================================
// 11. REVERSE FOR LOOP
// ========================================

for (let i = 5; i >= 1; i--) {
    console.log(i);
}


// ========================================
// 12. INCREMENT BY 2
// ========================================

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// ========================================
// 13. 60-DAY JOURNEY LOOP
// ========================================

for (let dayNumber = 1; dayNumber <= 60; dayNumber++) {
    console.log(`Day ${dayNumber}`);
}


// ========================================
// 14. WHILE LOOP
// ========================================

let counter = 1;

while (counter <= 5) {
    console.log(counter);

    counter++;
}


// ========================================
// 15. DO...WHILE LOOP
// ========================================

let number = 1;

do {
    console.log(number);

    number++;
} while (number <= 5);


// ========================================
// 16. BREAK
// ========================================

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}


// ========================================
// 17. CONTINUE
// ========================================

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


// ========================================
// 18. NESTED LOOPS
// ========================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }

}


// ========================================
// 19. MULTIPLICATION TABLE
// ========================================

const multiplicationNumber = 7;

for (let i = 1; i <= 10; i++) {
    console.log(
        `${multiplicationNumber} X ${i} = ${multiplicationNumber * i}`
    );
}


// ========================================
// 20. SUM OF NUMBERS
// ========================================

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log("Sum:", sum);


// ========================================
// 21. FUNCTIONS
// ========================================

// Function declaration
function greet() {
    console.log("Hello JavaScript");
}

greet();


// Function with parameter
function greetUser(name) {
    console.log(`Hello ${name}!`);
}

greetUser("Punith");


// Function with return
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Function with multiple parameters
function introduce(name, age, course) {
    return `My name is ${name}. I am ${age} years old and I am learning ${course}.`;
}

console.log(
    introduce(
        "Punith",
        22,
        "Java Full-Stack Development"
    )
);


// ========================================
// 22. FUNCTION WITH CONDITION
// ========================================

function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(22));
console.log(checkAge(15));


// ========================================
// 23. FUNCTION WITH LOOP
// ========================================

function printNumbers(limit) {

    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }

}

printNumbers(5);


// ========================================
// 24. DEFAULT PARAMETERS
// ========================================

function greetWithDefault(name = "Guest") {
    return `Hello ${name}`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Punith"));


// ========================================
// 25. FUNCTION EXPRESSION
// ========================================

const greetExpression = function () {
    console.log("Hello from a function expression!");
};

greetExpression();


// ========================================
// 26. ARROW FUNCTION
// ========================================

const addNumbers = (a, b) => {
    return a + b;
};

console.log(addNumbers(10, 20));


// ========================================
// 27. ARROW FUNCTION WITH IMPLICIT RETURN
// ========================================

const square = number => number * number;

console.log(square(6));


// ========================================
// 28. CALCULATE AVERAGE
// ========================================

const calculateAverage = (a, b, c) =>
    (a + b + c) / 3;

console.log(calculateAverage(10, 20, 30));


// ========================================
// 29. CALCULATE TOTAL
// ========================================

function calculateTotal(price, quantity, discount) {
    return (price * quantity) - discount;
}

console.log(calculateTotal(500, 2, 100));


// Arrow function version
const calculateTotalArrow = (price, quantity, discount) =>
    (price * quantity) - discount;

console.log(calculateTotalArrow(500, 2, 100));


// ========================================
// 30. GRADE CALCULATOR
// ========================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "Fail";
    }

}

console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(40));


// ========================================
// 31. JAVASCRIPT JOURNEY PROGRESS
// ========================================

function showProgress(completedDays) {

    if (completedDays >= 60) {
        return "Journey Completed!";
    } else if (completedDays >= 30) {
        return "Halfway There!";
    } else if (completedDays >= 15) {
        return "Great Progress!";
    } else {
        return "Keep Going!";
    }

}

console.log(showProgress(10));
console.log(showProgress(24));
console.log(showProgress(35));
console.log(showProgress(60));


// ========================================
// 32. FUNCTION SCOPE
// ========================================

function scopeExample() {

    const message = "This is a local variable.";

    console.log(message);
}

scopeExample();


// ========================================
// 33. FINAL PRACTICE
// ========================================

const calculateFinalAmount = (
    price,
    quantity = 1,
    discount = 0
) => {
    return (price * quantity) - discount;
};

console.log(
    calculateFinalAmount(500, 2, 100)
);


// ========================================
// DAY COMPLETED
// ========================================

console.log("JavaScript Conditions, Loops and Functions Completed!");