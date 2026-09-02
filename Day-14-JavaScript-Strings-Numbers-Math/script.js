// ========================================
// DAY 14 - JAVASCRIPT STRINGS
// ========================================


// 1. Creating Strings

const name = "Punith";
const course = 'Java Full Stack';

console.log(name);
console.log(course);


// 2. String Indexing

console.log(name[0]);
console.log(name[name.length - 1]);


// 3. String Length

console.log(name.length);


// 4. Changing Case

const language = "JavaScript";

console.log(language.toUpperCase());
console.log(language.toLowerCase());


// 5. trim()

const username = "   Punith   ";

console.log(username.trim());


// 6. includes()

const technology = "Java Full Stack";

console.log(technology.includes("Java"));
console.log(technology.includes("Python"));


// 7. startsWith()

console.log(technology.startsWith("Java"));


// 8. endsWith()

console.log(technology.endsWith("Stack"));


// 9. indexOf()

const text = "JavaScript";

console.log(text.indexOf("S"));
console.log(text.indexOf("x"));


// 10. lastIndexOf()

const repeatedText = "JavaScript is easy. JavaScript is powerful.";

console.log(repeatedText.lastIndexOf("JavaScript"));


// 11. slice()

const word = "JavaScript";

console.log(word.slice(0, 4));
console.log(word.slice(4));
console.log(word.slice(-6));


// 12. substring()

console.log(word.substring(0, 4));
console.log(word.substring(4));


// 13. replace()

const sentence = "Java is easy. Java is powerful.";

console.log(
    sentence.replace("Java", "JavaScript")
);


// 14. replaceAll()

console.log(
    sentence.replaceAll("Java", "JavaScript")
);


// 15. split()

const skills = "Java,JavaScript,HTML,CSS";

const skillArray = skills.split(",");

console.log(skillArray);


// 16. concat()

const firstName = "Punith";
const lastName = "Kumar";

const fullName = firstName.concat(" ", lastName);

console.log(fullName);


// 17. repeat()

console.log("Java ".repeat(3));


// 18. Template Literals

const studentName = "Punith";
const age = 22;
const studentCourse = "Java Full Stack";

const studentInfo =
    `My name is ${studentName}, I am ${age} years old and I am learning ${studentCourse}.`;

console.log(studentInfo);


// 19. Practical String Processing

const sentence2 = "java javascript html css";

const usingSplit = sentence2.split(" ");

const convertUppercase = usingSplit.map(
    n => n.toUpperCase()
);

console.log(convertUppercase);


// ========================================
// DAY 14 - JAVASCRIPT NUMBERS & MATH
// ========================================


// 20. Numbers

const studentAge = 22;
const productPrice = 499.99;
const temperature = -5;

console.log(studentAge);
console.log(productPrice);
console.log(temperature);

console.log(typeof studentAge);
console.log(typeof productPrice);


// 21. Basic Arithmetic Operators

const a = 25;
const b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponent:", a ** 3);


// 22. Remainder - Even or Odd

const number = 42;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 23. Operator Precedence

const result1 = 10 + 5 * 2;
const result2 = (10 + 5) * 2;

console.log("Without parentheses:", result1);
console.log("With parentheses:", result2);


// 24. Increment

let count = 5;

count++;

console.log("After increment:", count);


// 25. Decrement

count--;

console.log("After decrement:", count);


// 26. Assignment Arithmetic Operators

let value = 20;

value += 10;
console.log("After +=:", value);

value -= 5;
console.log("After -=:", value);

value *= 2;
console.log("After *=:", value);

value /= 5;
console.log("After /=:", value);


// ========================================
// MATH OBJECT
// ========================================


// 27. Math.round()

console.log("Round:", Math.round(4.6));


// 28. Math.floor()

console.log("Floor:", Math.floor(4.9));


// 29. Math.ceil()

console.log("Ceil:", Math.ceil(4.1));


// 30. Math.trunc()

console.log("Trunc:", Math.trunc(4.9));


// 31. Math.abs()

console.log("Absolute:", Math.abs(-10));


// 32. Math.max()

console.log(
    "Maximum:",
    Math.max(10, 50, 20, 5)
);


// 33. Math.min()

console.log(
    "Minimum:",
    Math.min(10, 50, 20, 5)
);


// 34. Math.sqrt()

console.log(
    "Square root:",
    Math.sqrt(25)
);


// 35. Math.pow()

console.log(
    "Power:",
    Math.pow(2, 3)
);


// 36. Math.random()

console.log(
    "Random decimal:",
    Math.random()
);


// 37. Random Integer from 1 to 10

const randomNumber =
    Math.floor(Math.random() * 10) + 1;

console.log(
    "Random integer (1-10):",
    randomNumber
);


// ========================================
// NUMBER CONVERSION
// ========================================


// 38. Number()

const priceString = "500";

const convertedPrice = Number(priceString);

console.log("Converted price:", convertedPrice);
console.log("Type:", typeof convertedPrice);


// 39. parseInt()

const integerString = "25.99";

const integerNumber = parseInt(integerString);

console.log("parseInt:", integerNumber);


// 40. parseFloat()

const decimalString = "99.99";

const decimalNumber = parseFloat(decimalString);

console.log("parseFloat:", decimalNumber);


// 41. NaN

const invalidNumber = Number("hello");

console.log("Invalid number:", invalidNumber);

console.log(
    "Is NaN:",
    Number.isNaN(invalidNumber)
);


// 42. Number.isInteger()

console.log(
    "Is integer:",
    Number.isInteger(10)
);

console.log(
    "Is integer:",
    Number.isInteger(10.5)
);


// ========================================
// PRACTICAL CALCULATIONS
// ========================================


// 43. Percentage Calculation

const marks = 450;
const totalMarks = 500;

const percentage =
    (marks / totalMarks) * 100;

console.log("Percentage:", percentage);


// 44. Shopping Bill Calculation

const itemPrice = 1200;
const quantity = 4;
const discountPercentage = 10;

const subTotal =
    itemPrice * quantity;

const discountAmount =
    (subTotal * discountPercentage) / 100;

const finalPrice =
    subTotal - discountAmount;

console.log("Subtotal:", subTotal);
console.log("Discount:", discountAmount);
console.log("Final Price:", finalPrice);