# Aperture CSS
Video effects animation library using CSS.


`Aperture.css` is a bunch of cool, fun, and cross-browser background animations for you to use in your projects. Great for emphasis, home pages, sliders.

## Installation

To install, simply do the following:

```bash
$ git clone https://github.com/creativeautomaton/aperture-css.git
```

## Basic Usage
1. Include the stylesheet on your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="aperture.min.css">
  </head>
  ```

2. Add the class `apertured` to the element you want to animate.
 You may also want to include the class `infinite` for an infinite loop.

3. Finally you need to add one of the following classes:

| ﻿Class Name |
|--------------------|
| `ghost` |
| `flash` |
| `jitter` |
| `focus-blur` |


Full example:
```html
<div class="apertured infinite ghost" >
    <!--  Example image for background can be <img> or a css background image. -->
    <img src="/example.jpg" />
</div>[-]
```

[Check out all the animations here!](http://creativeautomaton.com/aperture-css/)

## Usage
To use aperture.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `apertured` to an element with a background image, along with any of the animation names. That's it! You've got a CSS animated loop video effect. Kool Beans!


You can build video animations from aperture.css when you combine it with jQuery or add your own CSS rules. Dynamically add video animations using jQuery with ease:

```javascript
$('#yourElement').addClass('apertured ghost');
```

You can also detect when an Aperture Video animation ends:


Before you make changes to this file, you should know that $('#yourElement').one() is *NOT A TYPO*

http://api.jquery.com/one/


```javascript
$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
```

## Gulp Usage
[Source Maps](http://www.html5rocks.com/tutorials/developertools/sourcemaps/) can be generated by using [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps).

```javascript

let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');

gulp.task('minify-css',() => {
  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
```



<!-- [View a video tutorial](https://www.youtube.com/watch?v=CBQGl6zokMs) on how to use Animate.css with jQuery here. -->

<!-- **Note:** `jQuery.one()` is used when you want to execute the event handler at most *once*. More information [here](http://api.jquery.com/one/).

You can also extend jQuery to add a function that does it all for you:

```javascript
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
```

And use it like this:

```javascript
$('#yourElement').animateCss('bounce');
```

You can change the duration of your animations, add a delay or change the number of times that it plays:

```css
#yourElement {
  -vendor-animation-duration: 3s;
  -vendor-animation-delay: 2s;
  -vendor-animation-iteration-count: infinite;
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, etc)*

## Custom Builds
Animate.css is powered by [gulp.js](http://gulpjs.com/), and you can create custom builds pretty easily. First of all, you’ll need Gulp and all other dependencies:

```sh
$ cd path/to/animate.css/
$ sudo npm install
```

Next, run `gulp` to compile your custom builds. For example, if you want only some of the “attention seekers”, simply edit the `animate-config.json` file to select only the animations you want to use.

```javascript
"attention_seekers": {
  "bounce": true,
  "flash": false,
  "pulse": false,
  "shake": true,
  "headShake": true,
  "swing": true,
  "tada": true,
  "wobble": true,
  "jello":true
}
``` -->

## License
[Aperture.css](http://creativeautomaton.com/aperture-css/) is licensed under the MIT license. (http://opensource.org/licenses/MIT)
[Creative Automaton](http://creativeautomaton.com/)

## Contributing
Pull requests are the way to go here. I apologise in advance for the slow action on pull requests and issues. I only have two rules for submitting a pull request: match the naming convention (camelCase, categorised [fades, bounces, etc]) and let us see a demo of submitted animations in a [pen](http://codepen.io). That last one is important.

Graciasly copied from animate.css git repo, Thanks.
