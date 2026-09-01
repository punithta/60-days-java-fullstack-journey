// ========================================
// Day 13 - JavaScript Objects
// ========================================


// ========================================
// 1. Creating an Object
// ========================================

const student = {
    name: "Punith",
    age: 22,
    course: "Java Full Stack"
};

console.log(student);


// ========================================
// 2. Accessing Properties
// ========================================

console.log(student.name);
console.log(student.age);
console.log(student.course);


// ========================================
// 3. Bracket Notation
// ========================================

console.log(student["name"]);
console.log(student["age"]);


// ========================================
// 4. Accessing Property Using a Variable
// ========================================

const property = "course";

console.log(student[property]);


// ========================================
// 5. Modifying a Property
// ========================================

student.age = 23;

console.log(student);


// ========================================
// 6. Adding a Property
// ========================================

student.city = "Bengaluru";

console.log(student);


// ========================================
// 7. Deleting a Property
// ========================================

const deleteExample = {
    name: "Punith",
    age: 22,
    course: "Java"
};

delete deleteExample.age;

console.log(deleteExample);


// ========================================
// 8. Object with Different Data Types
// ========================================

const user = {
    name: "Punith",
    age: 22,
    isStudent: true,
    skills: [
        "Java",
        "JavaScript"
    ],
    address: null
};

console.log(user);


// ========================================
// 9. Nested Object
// ========================================

const studentAddress = {
    name: "Punith",
    age: 22,

    address: {
        city: "Bengaluru",
        state: "Karnataka"
    }
};

console.log(studentAddress.address.city);
console.log(studentAddress.address.state);


// ========================================
// 10. Object Method
// ========================================

const greetingStudent = {

    name: "Punith",

    greet() {
        console.log("Hello!");
    }
};

greetingStudent.greet();


// ========================================
// 11. this Keyword
// ========================================

const thisStudent = {

    name: "Punith",

    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

thisStudent.greet();


// ========================================
// 12. Practical Object Method
// ========================================

const studentProfile = {

    name: "Punith",
    age: 22,
    course: "Java Full Stack",

    introduce() {
        console.log(
            `My name is ${this.name}. ` +
            `I am ${this.age} years old and ` +
            `I am learning ${this.course}.`
        );
    }
};

studentProfile.introduce();


// ========================================
// 13. Object Destructuring
// ========================================

const destructuringStudent = {
    name: "Punith",
    age: 22,
    course: "Java"
};

const {
    name,
    age
} = destructuringStudent;

console.log(name);
console.log(age);


// ========================================
// 14. Destructuring with Different Variable Names
// ========================================

const {
    name: studentName,
    age: studentAge
} = destructuringStudent;

console.log(studentName);
console.log(studentAge);


// ========================================
// 15. Default Values in Destructuring
// ========================================

const defaultStudent = {
    name: "Punith"
};

const {
    name: defaultName,
    city = "Unknown"
} = defaultStudent;

console.log(defaultName);
console.log(city);


// ========================================
// 16. Object Property Shorthand
// ========================================

const studentNameValue = "Punith";
const studentAgeValue = 22;

const shorthandStudent = {
    name: studentNameValue,
    age: studentAgeValue
};

console.log(shorthandStudent);


// ========================================
// 17. Computed Property Names
// ========================================

const courseProperty = "course";

const computedStudent = {
    name: "Punith",
    [courseProperty]: "Java"
};

console.log(computedStudent.course);


// ========================================
// 18. Object.keys()
// ========================================

const studentDetails = {
    name: "Punith",
    age: 22,
    course: "Java"
};

console.log(Object.keys(studentDetails));


// ========================================
// 19. Object.values()
// ========================================

console.log(Object.values(studentDetails));


// ========================================
// 20. Object.entries()
// ========================================

console.log(Object.entries(studentDetails));


// ========================================
// 21. Looping Through Object Keys
// ========================================

for (const key of Object.keys(studentDetails)) {
    console.log(key);
}


// ========================================
// 22. Looping Through Object Values
// ========================================

for (const value of Object.values(studentDetails)) {
    console.log(value);
}


// ========================================
// 23. Looping Through Object Entries
// ========================================

for (const [key, value] of Object.entries(studentDetails)) {
    console.log(`${key}: ${value}`);
}


// ========================================
// 24. Array of Objects
// ========================================

const students = [

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
// 25. Accessing Object Inside Array
// ========================================

console.log(students[0]);
console.log(students[0].name);
console.log(students[0].age);


// ========================================
// 26. Looping Through Array of Objects
// ========================================

for (const student of students) {

    console.log(
        `${student.name} - ${student.age} - ${student.course}`
    );

}


// ========================================
// 27. map() with Objects
// ========================================

const studentNames = students.map(
    student => student.name
);

console.log(studentNames);


// ========================================
// 28. filter() with Objects
// ========================================

const adultStudents = students.filter(
    student => student.age >= 22
);

console.log(adultStudents);


// ========================================
// 29. find() with Objects
// ========================================

const foundStudent = students.find(
    student => student.name === "Punith"
);

console.log(foundStudent);


// ========================================
// 30. reduce() with Objects
// ========================================

const totalAge = students.reduce(
    (total, student) => {
        return total + student.age;
    },
    0
);

console.log(totalAge);


// ========================================
// 31. Average Age
// ========================================

const averageAge =
    totalAge / students.length;

console.log(averageAge);


// ========================================
// 32. Sorting Objects
// ========================================

students.sort(
    (a, b) => a.age - b.age
);

console.log(students);


// ========================================
// 33. Practical Product Example
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


// ========================================
// 34. Filter Expensive Products
// ========================================

const expensiveProducts = products.filter(
    product => product.price > 5000
);

console.log(expensiveProducts);


// ========================================
// 35. Get Names of Expensive Products
// ========================================

const expensiveProductNames = products
    .filter(product => product.price > 5000)
    .map(product => product.name);

console.log(expensiveProductNames);


// ========================================
// 36. Total Price of Expensive Products
// ========================================

const expensiveProductTotal = products
    .filter(product => product.price > 5000)
    .reduce(
        (total, product) => {
            return total + product.price;
        },
        0
    );

console.log(expensiveProductTotal);


// ========================================
// 37. Complete Student Introduction
// ========================================

const finalStudent = {

    name: "Punith",
    age: 22,
    course: "Java Full Stack",
    city: "Bengaluru",

    introduce() {
        console.log(
            `Hi, I am ${this.name} and ` +
            `I am learning ${this.course}.`
        );
    }

};

finalStudent.introduce();


// ========================================
// Day 13 Completed
// ========================================

console.log(
    "Day 13 - JavaScript Objects Completed!"
);