# Make Image Divisible By N

Takes an image and expands its width and heigt to be divisible by the provided integer.

Works with [ndarray](https://www.npmjs.com/package/ndarray) based images only.

## Install

`npm install make-img-divisible-by-n --save`

## Usage

```js
var getPixels = require('get-pixels');
var savePixels = require('save-pixels');
var fs = require('fs');

var makeImageDivisibleByN = require('posterize');

getPixels('./path-to-image.jpg', function(err, inImage) {
  var outImg = makeImageDivisibleByN(inImage, 10);
  savePixels(outImg, 'jpg').pipe(fs.createWriteStream('./new-image.jpg');
});
```
