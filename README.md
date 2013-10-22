# viewports.scss

`_viewports.scss` is a SASS microlibrary that makes it easier to manage media queries in responsive layouts.  It does this by allowing you to assign specific styles to named ranges of viewports, instead of repeating `@media` blocks and pixel counts all over.

## Quick demo

Yet-another github page, and about 10 seconds to pitch this before you close the tab.  So here's the beef:

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
Or, the more maintainable but even longer SASS variant:
```css
@media (min-width: #{$smallBreakpoint + 1}) and (max-width: #{$mediumBreakpoint}) {
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
That's it!  There's also an [interactive demo](#todo) of how the library works.

## Installation

The library is contained in a single `_viewports.scss` file, which is the only thing you need to include into your project.  To obtain a copy:

TODO

The only dependency is `sass >= 3.2.5`, which you can install with - you guessed it - `$ gem install sass`.

## Configuration

To set up your viewports, you must define the `$VIEWPORTS_CONFIG` variable, with a cutesy little english-like syntax, for example:
```scss
$VIEWPORTS_CONFIG:
    up-to  600px it-is "stacked",
    up-to  750px it-is "fluid-1",
    up-to 1000px it-is "fluid-2",
    beyond-that  it-is "static";
```
The pixel amounts (also known as *breakpoints*) and quoted names are yours to choose.  If you want to, you can omit this and just `@import "viewports"`.  That will leave you with sensible default viewport ranges, but you really should pick ones that make sense for your project.  There's a few more bits about that below.

Importing the library depends a bit on your installation method, but it's just the path that varies, for example:

TODO

## Picking a range config

One simple option, as demonstrated by the [above example](#configuration), is to name each of your major layout modes.  A common scheme in responsive layouts is to split them into:

  * a **stacked** layout, that caters to small-screen devices that can't afford to display things side-by-side at all
  * a **fluid** layout, that takes up 100% of the available horizontal space on the device
  * a **static** layout, that has a fixed width, so it doesn't look ridiculous on huge desktop displays

You'll note the "fluid" range has been split into two, as it's common to shift things around a bit as your fluid layout gains more space.  You can still target all "fluid" ranges with `@include viewports(fluid-1 fluid-2)`.

Another fine option, as demonstrated by the [first example](#quick-demo), is to look at all the devices you want to target, throw them into a few categories based on their viewport sizes, and give the categories some simple names (from "tiny" to "large", for example).

## Finer details

The library declares a single SASS mixin, which can be invoked in a few ways:

 * `@include viewports(tiny small large)`: Just listing one or more range names gives you a media query that applies when the viewport size falls within any of the listed ranges.
 * `@include viewports(above small)`: You can also name an operator and a *single* range name.  The available operators are:
   * `up-to` for matching all ranges **up to** and **including** the named range
   * `up-from` for matching all ranges **up from** and **including** the named range
   * `below` for matching all ranges **up to** the named range, **excluding** the named range itself
   * `above` for matching all ranges **up from** the named range, **excluding** the named range itself
 * `@include viewports('not' small large)`: Listing one or more range names after the `not` operator produces a media query that applies whenever the viewport size is *not* within any of the listed ranges.  Note that since "not" is a reserved word in SASS, this operator needs to be quoted.

The [interactive demo](#todo) hopefully makes these quite clear.

## Test suite

To make sure it generates exactly the desired CSS output and nothing else, `_viewports.scss` ships with a good coverage of unit tests, which you can run by going:
```bash
$ git clone TODO
$ npm install
$ npm test
```
Unit testing SASS is surprisingly simple; the test cases are regular SASS files under `test/spec/`, and look something like this:
```scss
@import "../../viewports";

/* it handles a basic "above" query */

@include viewports(above small) {
    p { color: red; }
}

/* should equal */

@media (min-width: 769px) {
    p { color: red; }
}
```
This file can be compiled on its own, and executing `$ sass test/spec/above-1.scss` produces the following CSS output:
```css
/* it handles a basic "above" query */
@media (min-width: 769px) {
  p {
    color: red; } }
/* should equal */
@media (min-width: 769px) {
  p {
    color: red; } }
```
The test runner simply does this for all spec files, makes the part following `/* it ` the name of the test case, and compares the parts separated by `/* should equal */`.

## And finally

![bill](bill.jpg)

*For responsive times... make it __viewports__ time*

## License

http://opensource.org/licenses/MIT

![GA](https://ssl.google-analytics.com/__utm.gif?utmwv=5.4.3&utmn=20129&utmhn=github.com&utmdt=viewports&utmr=-&utmp=%2Fjareware%2Fviewports&utmac=UA-42176157-4&utmcc=__utma%3D1.1828258468.1374783534.1374783534.1374783534.1%3B%2B__utmz%3D1.1374783534.1.1.utmcsr%3D(direct\)%7Cutmccn%3D(direct\)%7Cutmcmd%3D(none\)%3B)
