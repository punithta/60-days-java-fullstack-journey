# Day 8 - CSS Animations and Transitions

## Project: Animated Developer Portfolio

This project is part of my 60 Days Java Full-Stack Journey.

I built an animated developer portfolio to practise CSS transitions, transforms, hover effects, and keyframe animations.

## Concepts Learned

| CSS Animation concept | Example in `styles.css`           | Purpose                                                       |
| --------------------- | --------------------------------- | ------------------------------------------------------------- |
| Transition            | `transition: transform 0.3s ease` | Makes property changes happen smoothly.                       |
| Hover                 | `.card:hover`                     | Applies styles when the user moves the mouse over an element. |
| Transform             | `transform: translateY(-5px)`     | Moves an element visually.                                    |
| Scale                 | `transform: scale(1.05)`          | Makes an element slightly larger or smaller.                  |
| Keyframes             | `@keyframes slideUp`              | Defines the stages of an animation.                           |
| Animation             | `animation: slideUp 0.8s ease`    | Applies a keyframe animation to an element.                   |
| Animation duration    | `0.8s`                            | Controls how long an animation takes.                         |
| Animation delay       | `0.2s`                            | Delays the start of an animation.                             |
| Animation iteration   | `infinite`                        | Repeats an animation continuously.                            |
| Timing function       | `ease`                            | Controls the speed pattern of an animation.                   |
| Opacity               | `opacity: 0`                      | Makes an element invisible before an animation.               |
| Responsive animations | Media queries                     | Keeps animations and layout usable on smaller screens.        |

## Where CSS Animations and Transitions Are Used

1. The navigation links use `transition` so their color changes smoothly on hover.

2. The hero content uses the `slideUp` keyframe animation when the page loads.

3. The profile card also uses the `slideUp` animation with a small delay.

4. The profile avatar uses the `pulse` animation to create a repeated scaling effect.

5. The progress bar uses the `growProgress` animation to visually increase its width when the page loads.

6. Skill cards use `transition` and `transform` to move upward when the user hovers over them.

7. Journey cards use `transition` to create a smooth hover effect.

8. The current Day 8 card uses the `glow` animation to create a subtle repeating highlight.

## Transition vs Animation

| Transition                           | Animation                     |
| ------------------------------------ | ----------------------------- |
| Usually changes between two states.  | Can contain multiple stages.  |
| Often triggered by user interaction. | Can run automatically.        |
| Commonly used with `:hover`.         | Uses `@keyframes`.            |
| Example: button hover.               | Example: page-load animation. |

## Important Code Patterns

### Transition

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

### Keyframe Animation

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Applying Animation

```css
.card {
  animation: slideUp 0.8s ease;
}
```

## Files

```text
Day-08-CSS-Animations/

├── index.html

├── styles.css

└── README.md
```

## Author

Punith

Learning Java Full-Stack Development
