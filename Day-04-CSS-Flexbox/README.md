# Day 4 - CSS Flexbox

## Project: Developer Roadmap Dashboard

This project is part of my 60 Days Java Full-Stack Journey.

I created a responsive roadmap dashboard to practise arranging elements with CSS Flexbox.

## Concepts Learned

| Flexbox concept | Example in `styles.css` | Purpose |
| --- | --- | --- |
| Flex container | `display: flex` | Turns a parent element into a flexible layout container. |
| Flex row | `.site-header` | Places the logo and navigation side by side. |
| Flex column | `.roadmap-list` | Stacks roadmap cards vertically. |
| Main-axis alignment | `justify-content: space-between` | Pushes items apart with space between them. |
| Cross-axis alignment | `align-items: center` | Aligns items vertically in the middle. |
| Spacing | `gap: 1.5rem` | Adds equal space between Flexbox items. |
| Flexible item | `flex-grow: 1` | Lets roadmap text use the remaining available space. |
| Responsive Flexbox | `flex-direction: column` in media query | Stacks items vertically on smaller screens. |

## Where Flexbox Is Used

1. `.site-header` aligns the logo and navigation.
2. `.hero` puts the introduction and progress card side by side.
3. `.section-heading` aligns the title and description.
4. `.roadmap-list` stacks all roadmap cards.
5. `.roadmap-card` aligns the day, topic description, and status badge.
6. The mobile media query changes rows into columns.

## Files

```text
Day-04-CSS-Flexbox/
├── index.html
├── styles.css
└── README.md
```

## Author

Punith  
Learning Java Full-Stack Development