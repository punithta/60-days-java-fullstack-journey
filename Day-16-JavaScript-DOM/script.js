// ========================================
// DAY 16 - JAVASCRIPT DOM MANIPULATION
// ========================================


// ========================================
// 1. Selecting Element by ID
// ========================================

const title = document.getElementById("title");

console.log(title);


// ========================================
// 2. Reading and Changing Text
// ========================================

const message = document.getElementById("message");

console.log(message.textContent);

message.textContent = "DOM Manipulation is Easy";


// ========================================
// 3. querySelector()
// ========================================

// Select by ID
const titleElement = document.querySelector("#title");

console.log(titleElement);


// Select by class
const boxElement = document.querySelector(".box");

console.log(boxElement);


// Select by tag
const heading = document.querySelector("h1");

console.log(heading);


// ========================================
// 4. querySelectorAll()
// ========================================

const skillElements = document.querySelectorAll("#skills");

console.log(skillElements);


// ========================================
// 5. Changing CSS using JavaScript
// ========================================

title.style.color = "red";
title.style.fontSize = "30px";
title.style.backgroundColor = "lightblue";


// ========================================
// 6. Changing Image Attributes
// ========================================

const profileImage = document.getElementById("profileImage");

profileImage.src = "new.jpg";
profileImage.alt = "New Profile";


// ========================================
// 7. getAttribute() and setAttribute()
// ========================================

console.log(
    profileImage.getAttribute("src")
);

profileImage.setAttribute(
    "alt",
    "Developer Profile"
);

console.log(
    profileImage.getAttribute("alt")
);


// ========================================
// 8. classList.add()
// ========================================

const box = document.getElementById("box");

box.classList.add("active");

console.log(
    box.classList.contains("active")
);


// ========================================
// 9. classList.remove()
// ========================================

box.classList.remove("active");

console.log(
    box.classList.contains("active")
);


// ========================================
// 10. classList.toggle()
// ========================================

box.classList.toggle("active");

console.log(
    box.classList.contains("active")
);


// ========================================
// 11. Creating a New Element
// ========================================

const paragraph = document.createElement("p");

paragraph.textContent =
    "This paragraph was created using JavaScript.";

document.body.appendChild(paragraph);


// ========================================
// 12. Creating and Adding List Items
// ========================================

const skills = document.getElementById("skills");

const item1 = document.createElement("li");
item1.textContent = "Java";
skills.appendChild(item1);

const item2 = document.createElement("li");
item2.textContent = "JavaScript";
skills.appendChild(item2);

const item3 = document.createElement("li");
item3.textContent = "HTML";
skills.appendChild(item3);

const item4 = document.createElement("li");
item4.textContent = "CSS";
skills.appendChild(item4);

const item5 = document.createElement("li");
item5.textContent = "SQL";
skills.appendChild(item5);


// ========================================
// 13. Removing an Element
// ========================================

const removeParagraph = document.createElement("p");

removeParagraph.textContent =
    "This paragraph will be removed.";

document.body.appendChild(removeParagraph);

removeParagraph.remove();


// ========================================
// 14. DOM Event - Click
// ========================================

const changeButton =
    document.getElementById("changeButton");

changeButton.addEventListener(
    "click",
    function() {

        message.textContent =
            "JavaScript changed this message!";

    }
);


// ========================================
// 15. Practical Student Profile
// ========================================

const studentName = document.createElement("h2");

studentName.textContent = "Name: Punith";

document.body.appendChild(studentName);


const studentCourse = document.createElement("p");

studentCourse.textContent =
    "Course: Java Full Stack";

document.body.appendChild(studentCourse);


const studentSkills = document.createElement("p");

studentSkills.textContent =
    "Skills: Java, JavaScript, SQL";

document.body.appendChild(studentSkills);