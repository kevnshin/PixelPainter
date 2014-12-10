var main = function(){

  //when page loads, load the grid
  var pixelPainter = new PixelPainter(15,15);
  $("#container").append(pixelPainter.render());

};

$(document).ready(main);