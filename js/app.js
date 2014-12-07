var main = function(){

  var color;

  var color_pallette = $("<div>", {
    class: "color"
  });

  //PixelPainter class
  function PixelPainter (width, height) {

    this.width = width;
    this.height = height;
    this.grid = $("<div>", {
      class: "grid clearfix"
    });
    
    this.pixel_row = $("<div>", {
      class: "pixel_row clearfix"
    });
    
    this.pixel_square = $("<div>", {
      class: "pixel_square"
    });

  }

  PixelPainter.prototype.render = function () {

    console.log("TEST");

    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.width ; j++) {
        
        this.pixel_row.append(this.pixel_square);
        
        this.pixel_square = $("<div>", {
          class: "pixel_square"
        });
      }
      this.grid.append(this.pixel_row);
    }

    this.grid.append(this.pixel_square);

    return this.grid;
  };

  //when page loads, load the grid

  var pixelPainter = new PixelPainter(20,20);
  console.log(pixelPainter);
  $("#container").append(pixelPainter.render());



  $(color_pallette).click(function () {
    color = $(this).css('background-color');
  });

  $(pixel_square).click(function () {
    $(this).css('background-color', color);
  })











};

$(document).ready(main);