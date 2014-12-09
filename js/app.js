var main = function(){

  // var color;

  // var color_pallette = $("<div>", {
  //   class: "color"
  // });

  //when page loads, load the grid
  var pixelPainter = new PixelPainter(15,15);
  $("#container").append(pixelPainter.render());

  // $(color_pallette).click(function () {
  //   color = $(this).css('background-color');
  // }))




};

$(document).ready(main);