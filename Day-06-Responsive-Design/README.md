# Day 6 - Responsive Design

## Project: Responsive Developer Portfolio

This project is part of my 60 Days Java Full-Stack Journey.

I built a responsive developer portfolio to practise making web pages adapt to different screen sizes such as desktop, tablet, and mobile.

## Concepts Learned

| Responsive Design concept | Example in `styles.css`      | Purpose                                                              |
| ------------------------- | ---------------------------- | -------------------------------------------------------------------- |
| Responsive container      | `width: min(1100px, 92%)`    | Keeps content responsive while preventing it from becoming too wide. |
| Viewport                  | `<meta name="viewport"...>`  | Makes the webpage adapt correctly to the device screen width.        |
| Fluid width               | `width: 100%`                | Allows elements to use the available screen width.                   |
| Flexbox                   | `display: flex`              | Arranges elements in rows or columns.                                |
| Media queries             | `@media (max-width: 600px)`  | Changes the layout for smaller screens.                              |
| Breakpoints               | `600px`, `800px`             | Defines screen sizes where the layout changes.                       |
| Mobile layout             | `flex-direction: column`     | Stacks elements vertically on mobile screens.                        |
| Responsive Grid           | `grid-template-columns`      | Changes the number of columns based on screen size.                  |
| Responsive typography     | `clamp(2.5rem, 6vw, 4.8rem)` | Allows text size to adjust according to the screen size.             |
| Responsive image          | `max-width: 100%`            | Prevents images from overflowing their container.                    |
| `rem` unit                | `2rem`                       | Provides scalable spacing and sizing.                                |
| `vw` unit                 | `6vw`                        | Sizes elements relative to the viewport width.                       |

## Where Responsive Design Is Used

1. The `<meta name="viewport">` tag is used in `index.html` to make the page work correctly on different devices.

2. `.site-header`, `main`, and `footer` use a responsive container with `width: min(1100px, 92%)`.

3. `.hero` uses Flexbox to place the hero content and profile card side by side on larger screens.

4. The mobile media query changes `.hero` to `flex-direction: column` so the content stacks vertically.

5. `.skills` uses CSS Grid to display three columns on larger screens, two columns on tablet screens, and one column on mobile screens.

6. `.journey` uses the same responsive Grid approach for the learning journey cards.

7. `clamp()` is used for headings so the text size adjusts according to the screen size.

8. Media queries at `800px` and `600px` adjust the layout for smaller screens.

## Responsive Layout

```text
Desktop
3 columns / side-by-side layout
        ↓
Tablet
2 columns
        ↓
Mobile
1 column / stacked layout
```

## Files

```text
Day-06-Responsive-Design/

├── index.html

├── styles.css

└── README.md
```

## Author

Punith

Learning Java Full-Stack Development
