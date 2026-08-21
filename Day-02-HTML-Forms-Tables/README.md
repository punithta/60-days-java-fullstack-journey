# Day 2 - HTML Forms and Tables

## Project: Student Registration Form

This project is part of my **60 Days Java Full-Stack Journey**.

I built a student registration form to practise collecting user information and a learning-progress table to display structured data.

## Concepts Learned

- HTML forms
- Labels and input fields
- Input validation
- Select menus
- Text areas
- Checkboxes
- Submit buttons
- HTML tables
- Semantic HTML structure
- Connecting HTML with CSS

## Tags Used and Their Purpose

| Tag | Where I Used It | Purpose |
| --- | --- | --- |
| `<!DOCTYPE html>` | First line | Declares that this is an HTML5 document. |
| `<html>` | Wraps the entire page | Root element of an HTML page. |
| `<head>` | Top configuration area | Contains metadata, page title, and CSS connection. |
| `<title>` | Inside `<head>` | Shows the name in the browser tab. |
| `<link>` | Inside `<head>` | Connects `styles.css` to `index.html`. |
| `<body>` | Main visible area | Contains all content shown in the browser. |
| `<header>` | Page top | Displays the project title and subtitle. |
| `<main>` | Main page content | Holds the form and progress-table sections. |
| `<section>` | Form and table areas | Groups related content together. |
| `<form>` | Registration section | Groups fields that collect user details. |
| `<label>` | Before each input | Explains what information the user should enter. |
| `<input>` | Name, date, email, phone, and checkbox | Lets a user enter or select information. |
| `<select>` | Learning-track field | Lets a user choose one option. |
| `<option>` | Inside `<select>` | Provides each selectable choice. |
| `<textarea>` | Learning-goal field | Lets a user enter a longer message. |
| `<button>` | End of the form | Submits the form. |
| `<table>` | Learning-progress section | Displays information in rows and columns. |
| `<thead>` | First part of table | Contains the table headings. |
| `<tbody>` | Second part of table | Contains the table data. |
| `<tr>` | Inside table | Creates a table row. |
| `<th>` | First table row | Creates a heading cell. |
| `<td>` | Table data rows | Creates a normal data cell. |
| `<footer>` | Bottom of page | Displays copyright and project information. |

## Form Validation Used

- `required` makes a field mandatory.
- `type="email"` checks for an email format.
- `type="date"` opens a date selector.
- `type="tel"` is used for phone numbers.
- `placeholder` gives users an example of what to enter.

## Project Files

```text
Day-02-HTML-Forms-Tables/
├── index.html
├── styles.css
└── README.md
```

## How to Run

1. Open `index.html` in a browser.
2. Fill in the registration form.
3. Try submitting it without filling mandatory fields to see HTML validation.
4. Edit the code in VS Code, save it, and refresh the browser.

## Author

Punith  
Learning Java Full-Stack Development