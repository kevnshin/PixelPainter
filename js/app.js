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

    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.width ; j++) {
        
        this.pixel_row.append(this.pixel_square);
        
        this.pixel_square = $("<div>", {
          class: "pixel_square"
        });
      }
      console.log("Row#:"+i);
      this.grid.append(this.pixel_row);
      this.pixel_row = $("<div>", {
        class: "pixel_row clearfix"
      });
    }

    return this.grid;
  };

  //when page loads, load the grid
  var pixelPainter = new PixelPainter(5,5);
  $("#container").append(pixelPainter.render());



  // $(color_pallette).click(function () {
  //   color = $(this).css('background-color');
  // });

  // $(pixel_square).click(function () {
  //   $(this).css('background-color', color);
  // })











};

$(document).ready(main);