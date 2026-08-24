# Day 5 - CSS Grid

## Project: Learning Dashboard

This project is part of my 60 Days Java Full-Stack Journey.

I built a learning dashboard to practise creating layouts with CSS Grid. The dashboard displays learning progress and project cards in rows and columns.

## Concepts Learned

| CSS Grid concept | Example in `styles.css` | Purpose |
| --- | --- | --- |
| Grid container | `display: grid` | Turns the dashboard into a grid layout. |
| Grid columns | `grid-template-columns: repeat(3, 1fr)` | Creates three equal-width columns. |
| Grid gap | `gap: 1rem` | Adds equal space between grid items. |
| Full-width item | `grid-column: 1 / -1` | Makes the welcome card use all columns. |
| Grid item span | `grid-column: span 1` | Controls how many columns an item uses. |
| Fraction unit | `1fr` | Shares available space equally between columns. |
| Responsive Grid | Media queries | Changes from three columns to two and then one on smaller screens. |

## Where CSS Grid Is Used

1. `.dashboard` is the main Grid container.
2. `.welcome-card` spans all dashboard columns.
3. `.progress-card` and topic cards are Grid items.
4. The tablet screen uses two columns.
5. The mobile screen uses one column.

## Files

```text
Day-05-CSS-Grid/
├── index.html
├── styles.css
└── README.md
```

## Author

Punith  
Learning Java Full-Stack Development