# singleline

![Build status](https://api.travis-ci.org/benbowes/singleline.svg?branch=master)

Convert a multiline string to a single line string
---

## Getting started

Install the dependency

`npm install singleline --save-dev`

## React classNames example

```js
import singleline from 'singleline';

...
<div
  className={singleline(`
    rrs__select-container
    rrs__select-container--multiselect
    ${(disabled === true) ? 'rrs__select-container--disabled' : ''}
    ${(isTouchDevice === true) ? 'rrs__is-touch' : 'rrs__is-desktop'}
    ${(isOptionsPanelOpen === true) ? 'rrs__options-container--visible' : ''}
    ${altered ? 'rrs__has-changed': ''}
  `)}
>
Some output
</div>

// className="rrs__select-container rrs__select-container--multiselect rrs__is-desktop rrs__options-container--visible"
```

## Example 2

```js
import singleline from 'singleline';
var testMultilineHTMLString = singleline(`

  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GDD - Giphy Github embed Gif code explorer</title>
<link href="css/styleguide.css" rel="stylesheet">
</head>
<body>
<div id="root" class="root"></div>
<script src="app.js"></script>
</body>
</html>

`);

console.log(testMultilineHTMLString);

// '<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>GDD - Giphy Github embed Gif code explorer</title> <link href="css/styleguide.css" rel="stylesheet"> </head> <body> <div id="root" class="root"></div> <script src="app.js"></script> </body> </html>'

```
