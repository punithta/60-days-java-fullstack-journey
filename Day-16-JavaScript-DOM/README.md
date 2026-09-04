# Day 16 - JavaScript DOM Manipulation

## Project: JavaScript DOM Manipulation Practice

This project is part of my 60 Days Java Full-Stack Journey.

Today I learned how JavaScript interacts with HTML using the Document Object Model (DOM).

I learned how to select HTML elements, change content and styles, modify attributes and classes, create and remove elements, and handle button click events.

---

## Concepts Learned

| JavaScript Concept | Example | Purpose |
| --- | --- | --- |
| DOM | `document` | Access the HTML document |
| Get element by ID | `getElementById()` | Select an element by ID |
| Get elements by class | `getElementsByClassName()` | Select elements by class |
| Get elements by tag | `getElementsByTagName()` | Select elements by tag |
| Query selector | `querySelector()` | Select the first matching element |
| Query selector all | `querySelectorAll()` | Select all matching elements |
| Text content | `textContent` | Read or change text |
| HTML content | `innerHTML` | Read or change HTML |
| CSS styling | `element.style` | Change CSS using JavaScript |
| Get attribute | `getAttribute()` | Read an HTML attribute |
| Set attribute | `setAttribute()` | Change an HTML attribute |
| Classes | `classList` | Work with CSS classes |
| Add class | `classList.add()` | Add a CSS class |
| Remove class | `classList.remove()` | Remove a CSS class |
| Toggle class | `classList.toggle()` | Add/remove a class |
| Check class | `classList.contains()` | Check whether a class exists |
| Create element | `createElement()` | Create a new HTML element |
| Add element | `appendChild()` | Add an element to the page |
| Remove element | `remove()` | Remove an element |
| Events | `addEventListener()` | Respond to user actions |

---

# What is DOM?

DOM stands for:

**Document Object Model**

When the browser loads an HTML document, it creates a DOM structure that JavaScript can interact with.

JavaScript can use the DOM to:

- Select HTML elements
- Change text
- Change HTML
- Change CSS
- Change attributes
- Add classes
- Remove classes
- Create elements
- Remove elements
- Respond to user actions

---

# Selecting Elements

## `getElementById()`

HTML:

```html
<h1 id="title">Hello JavaScript</h1>