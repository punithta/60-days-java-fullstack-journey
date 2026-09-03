// ========================================
// DAY 15 - JAVASCRIPT DATES & TIME
// ========================================

// 1. Creating Current Date and Time
const now = new Date();

console.log("Current Date and Time:", now);


// 2. Creating a Specific Date
const specificDate = new Date("2026-09-03");

console.log("Specific Date:", specificDate);


// 3. Creating a Specific Date and Time
const specificDateTime = new Date("2026-09-03T17:30:00");

console.log("Specific Date and Time:", specificDateTime);


// 4. Getting the Year
console.log("Year:", now.getFullYear());


// 5. Getting the Month
// Months start from 0
// 0 = January, 1 = February, ..., 11 = December

console.log("Month:", now.getMonth() + 1);


// 6. Getting the Date
console.log("Date:", now.getDate());


// 7. Getting the Day of the Week
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday

console.log("Day of Week:", now.getDay());


// 8. Getting Hours, Minutes and Seconds
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());


// 9. Creating a Custom Date
// Month 7 represents August

const customDate = new Date(2026, 7, 15);

console.log("Custom Date:", customDate);


// 10. Setting Date Values
const date = new Date();

date.setFullYear(2030);
date.setMonth(5);
date.setDate(25);

console.log("Modified Date:", date);


// 11. Formatting Date
const today = new Date();

console.log("Date String:", today.toDateString());
console.log("Time String:", today.toTimeString());


// 12. Indian Date Format
console.log(
    "Indian Date:",
    today.toLocaleDateString("en-IN")
);


// 13. Indian Date and Time Format
console.log(
    "Indian Date and Time:",
    today.toLocaleString("en-IN")
);


// 14. Timestamp using getTime()
const timestamp = today.getTime();

console.log("Timestamp:", timestamp);


// 15. Current Timestamp using Date.now()
console.log("Current Timestamp:", Date.now());


// 16. Comparing Dates
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-31");

if (date2 > date1) {
    console.log("Date 2 is later than Date 1");
} else {
    console.log("Date 1 is later than Date 2");
}


// 17. Difference Between Two Dates
const startDate = new Date("2026-01-01");
const endDate = new Date("2026-01-31");

const difference = endDate - startDate;

console.log("Difference in milliseconds:", difference);


// 18. Convert Difference into Days
const millisecondsPerDay = 1000 * 60 * 60 * 24;

const days = difference / millisecondsPerDay;

console.log("Difference in days:", days);


// 19. Calculate Days Lived
const birthDate = new Date("2004-10-16");
const currentDate = new Date();

const differenceInMilliseconds = currentDate - birthDate;

const daysLived =
    Math.floor(differenceInMilliseconds / millisecondsPerDay);

console.log("Days Lived:", daysLived);


// 20. Practical Order Date Example
const product = "Laptop";
const orderDate = new Date();

console.log(`Product: ${product}`);
console.log(
    `Order Date: ${orderDate.toLocaleDateString("en-IN")}`
);