# Day 1 - HTML5 Basics

A simple, responsive personal learning page built as **Day 1** of a 60-day Java Full-Stack Developer roadmap.

## Concepts Learned and Where They Are Used

| Concept | Where it is used in `index.html` | Why it is used |
| --- | --- | --- |
| HTML5 boilerplate | `<!DOCTYPE html>` at the top | Tells the browser to use modern HTML5. |
| Document structure | `<html>`, `<head>`, and `<body>` | Separates settings from the visible page content. |
| Page title | `<title>My Developer Journey</title>` | Shows the text in the browser tab. |
| Responsive viewport | `<meta name="viewport" ...>` | Makes the page work well on mobile screens. |
| Headings | `<h1>`, `<h2>`, and `<h3>` | Creates a clear content hierarchy. |
| Paragraphs | `<p>` elements | Displays the introduction, descriptions, and footer text. |
| Semantic tags | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` | Gives each page area a meaningful purpose. |
| Navigation links | `<a href="#about">About</a>` | Jumps the visitor to the About section. |
| External link | GitHub link in the footer | Opens the GitHub profile. |
| Grouping content | The three cards in the `#goals` section | Groups related roadmap goals. |
| Accessibility | `aria-label` attributes | Helps screen-reader users understand the page. |
| CSS link | `<link rel="stylesheet" href="styles.css">` | Connects this HTML file with its design file. |

## CSS Concepts and Where They Are Used

| CSS concept | Where it is used in `styles.css` | What it does |
| --- | --- | --- |
| CSS variables | `:root` section, such as `--green` and `--paper` | Stores reusable colors so the design stays consistent. |
| Universal selector | `* { box-sizing: border-box; }` | Makes width and height calculations easier to control. |
| Flexbox | `.site-header`, `.hero-actions`, and `footer` | Aligns items in rows and controls their spacing. |
| CSS Grid | `.hero`, `.about`, and `.goal-grid` | Creates the main multi-column page layouts. |
| Typography | `font-family`, `font-size`, and `line-height` rules | Controls the text appearance and readability. |
| Colors | `background`, `color`, and CSS variables | Gives the page its green, cream, and coral visual style. |
| Spacing | `margin`, `padding`, and `gap` | Adds space between page sections and elements. |
| Hover effects | `.button-primary:hover` and `nav a:hover` | Changes link or button color when the mouse is over it. |
| Responsive design | `@media (max-width: 720px)` | Changes the layout for phones and smaller screens. |
| Smooth scrolling | `html { scroll-behavior: smooth; }` | Smoothly moves to a page section after clicking navigation links. |

## Preview

Open `index.html` in any modern browser. No installation or build step is required.

## What I practised

- Semantic HTML structure
- Accessible navigation and image-free page structure
- Responsive CSS with Grid and Flexbox
- CSS custom properties and mobile-first adjustments

## Project structure

```
.
├── index.html
├── styles.css
└── README.md
```

## Roadmap

This project follows the 60-Day Java Full-Stack Developer Roadmap.
