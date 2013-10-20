# viewports.scss

`viewports.scss` is a SASS microlibrary that makes it easier to manage media queries in complex responsive layouts.  It does this by allowing you to assign specific styles to named ranges of viewports, instead of repeating `@media` blocks and pixel counts all over.

## Quick demo

Yet-another github page, and I have about 10 seconds to pitch this before you close the tab.  So here's the beef:

```scss
// Define what ranges you want and what they're called:
$VIEWPORTS_CONFIG:
    up-to  480px it-is "tiny",
    up-to  768px it-is "small",
    up-to 1024px it-is "medium",
    beyond-that  it-is "large";

// Import the library:
@import "viewports";
```
Then, instead of writing:
```css
@media (min-width: 769px) and (max-width: 1024px) {
    font-size: 150%;
}
```
You can write:
```scss
@include viewports(medium) {
    font-size: 150%;
}
```
Which outputs the exact same media query.  You can also name several ranges:
```scss
@include viewports(small medium) { /* ... */ }
```
Or use simple operators to specify the ranges:
```scss
@include viewports(up-to medium) { /* ... */ }
```
