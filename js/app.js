var main = function(){

  $("#container").addClass("clearfix");
  //when page loads, load the grid
  var pixelPainter = new PixelPainter(15,15);
  // pixelPainter.cellSize(30);
  $("#container").append(pixelPainter.render());

};

$(document).ready(main);