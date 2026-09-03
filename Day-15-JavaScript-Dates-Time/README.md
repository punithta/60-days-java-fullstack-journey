# Day 15 - JavaScript Dates & Time

## Project: JavaScript Dates & Time Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned how to work with dates and time in JavaScript using the built-in `Date` object.

## Concepts Learned

| JavaScript Concept | Example | Purpose |
| --- | --- | --- |
| Date object | `new Date()` | Create current date and time |
| Specific date | `new Date("2026-09-03")` | Create a specific date |
| Date and time | `new Date("2026-09-03T17:30:00")` | Create a date with time |
| Get year | `getFullYear()` | Get the year |
| Get month | `getMonth()` | Get the month |
| Get date | `getDate()` | Get day of the month |
| Get day | `getDay()` | Get day of the week |
| Get hours | `getHours()` | Get hours |
| Get minutes | `getMinutes()` | Get minutes |
| Get seconds | `getSeconds()` | Get seconds |
| Get milliseconds | `getMilliseconds()` | Get milliseconds |
| Set year | `setFullYear()` | Change the year |
| Set month | `setMonth()` | Change the month |
| Set date | `setDate()` | Change the date |
| Date formatting | `toDateString()` | Convert date to readable string |
| Time formatting | `toTimeString()` | Convert time to readable string |
| Local date | `toLocaleDateString()` | Display localized date |
| Local date and time | `toLocaleString()` | Display localized date and time |
| Timestamp | `getTime()` | Get milliseconds since January 1, 1970 |
| Current timestamp | `Date.now()` | Get current timestamp |
| Date comparison | `date1 > date2` | Compare dates |
| Date difference | `date2 - date1` | Find difference between dates |

---

## Creating a Date

### Current Date and Time

```javascript
const now = new Date();

console.log(now);