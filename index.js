var ndarray = require('ndarray');

module.exports = function(img, blockSize) {

  if (blockSize !== Math.floor(blockSize)) {
    throw new Error('N must be an integer');
  }
  else if (blockSize <= 0) {
    throw new Error('N must be greater than zero');
  }

  var widthNew = Math.floor((img.shape[0] + 9)/blockSize) * blockSize;
  var heightNew = Math.floor((img.shape[1] + 9)/blockSize) * blockSize;

  var widthRatio = widthNew / img.shape[0];
  var heightRatio = heightNew / img.shape[1];

  var result = ndarray([], [widthNew, heightNew, img.shape[2]], img.stride, img.offset);

  for (var x=0; x<img.shape[0]; x++) {
    var startX = Math.floor(x * widthRatio);
    var endX = Math.ceil(x+1 * widthRatio);
    if (endX >= widthNew) {
      endX = widthNew;
    }
    for (var y=0; y<img.shape[1]; y++) {
      var startY = Math.floor(y * heightRatio);
      var endY = Math.ceil(y+1 * heightRatio);
      if (endY >= heightNew) {
        endY = heightNew;
      }
      for(var c=0; c<img.shape[2]; c++) {
        var color = img.get(x, y, c);
        for(var xs=startX; xs<endX; xs++) {
          for(var ys=startY; ys<endY; ys++) {
            result.set(xs, ys, c, color);
          }
        }
      }
    }
  }
  return result;
}
