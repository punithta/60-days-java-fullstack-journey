# Day 7 - Framework + Mini Project

## Project: Responsive Java Full-Stack Landing Page

This project is part of my 60 Days Java Full-Stack Journey.

I built a responsive developer landing page using Bootstrap to practise using a CSS framework, responsive grid layouts, utility classes, and ready-made components.

## Concepts Learned

| Bootstrap / Framework concept | Example in `index.html`              | Purpose                                                       |
| ----------------------------- | ------------------------------------ | ------------------------------------------------------------- |
| Bootstrap CDN                 | `<link href="...bootstrap.min.css">` | Loads the Bootstrap framework into the project.               |
| Container                     | `class="container"`                  | Creates a responsive, centered content area.                  |
| Row                           | `class="row"`                        | Creates a row for the Bootstrap grid system.                  |
| Columns                       | `class="col-lg-7"`                   | Controls how much space an element occupies on large screens. |
| Responsive columns            | `class="col-md-6 col-lg-4"`          | Changes the column width according to screen size.            |
| Spacing utilities             | `p-4`, `mt-3`, `py-5`                | Adds padding and margin without writing custom CSS.           |
| Flex utilities                | `d-flex`, `justify-content-center`   | Controls Flexbox layout using Bootstrap classes.              |
| Typography utilities          | `fw-bold`, `display-4`               | Controls font weight and display text sizes.                  |
| Buttons                       | `btn btn-success`                    | Provides ready-made button styling.                           |
| Cards                         | `card`, `card-body`                  | Creates structured content cards.                             |
| Navbar                        | `navbar`, `navbar-expand-lg`         | Creates a responsive navigation bar.                          |
| Responsive navbar             | `navbar-toggler`, `collapse`         | Allows the navigation menu to collapse on smaller screens.    |
| Badges                        | `badge text-bg-success`              | Displays small labels for skills.                             |
| Responsive layout             | `col-md-*`, `col-lg-*`               | Makes the page adapt to different screen sizes.               |

## Where Bootstrap Is Used

1. Bootstrap is loaded through the CDN in the `<head>` section.

2. `.container` is used throughout the page to keep content centered and responsive.

3. `.row` and `.col-*` classes are used to create the responsive grid layout.

4. The hero section uses `col-lg-7` and `col-lg-5` to display the content and profile card side by side on large screens.

5. The skills section uses `col-md-6 col-lg-4` so the cards change their layout on different screen sizes.

6. Bootstrap spacing utilities such as `p-4`, `mt-3`, and `py-5` are used instead of writing separate CSS for every spacing requirement.

7. Bootstrap button classes such as `btn btn-success` are used for the call-to-action buttons.

8. Bootstrap's navbar classes are used to create a responsive navigation menu.

9. Bootstrap's card classes are used for the profile card and skill cards.

10. Custom `styles.css` is still used for project-specific design such as the hero background, avatar, journey cards, and hover effects.

## Framework vs Custom CSS

Before using a framework, I had to write CSS such as:

```css
button {
  padding: 12px 20px;
  color: white;
  background: green;
  border-radius: 6px;
}
```

With Bootstrap, I can use:

```html
<a class="btn btn-success">
  Get Started
</a>
```

The framework provides reusable styling through predefined classes.

## Responsive Layout

```text
Desktop
Hero → Two columns
Skills → Three columns
Journey → Three columns

        ↓

Tablet
Hero → Adjusted columns
Skills → Two columns
Journey → Two columns

        ↓

Mobile
Hero → One column
Skills → One column
Journey → One column
```

## Files

```text
Day-07-Framework-Landing-Page/

├── index.html

├── styles.css

└── README.md
```

## Author

Punith

Learning Java Full-Stack Development
