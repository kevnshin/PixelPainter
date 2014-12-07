//PixelPainter class
function PixelPainter (width, height) {

  this.width = width;
  this.height = height;

}

PixelPainter.prototype.render = function () {

  var app = $("<div>", {
    class: "app_contents"
  });
  // app.append(this.color_pallette());
  app.append(this.build_grid());
  this.color_dropper();

  return app;

};

//This method builds out the grid according 
//to the width and height provided by the user
PixelPainter.prototype.build_grid = function () {
  this.grid = $("<div>", {
    class: "grid clearfix"
  });    

  for (var i = 0; i < this.height; i++) {

    var new_pixelrow = $("<div>", {
      class: "pixel_row clearfix"
    });

    for (var j = 0; j < this.width ; j++) {

      var new_pixelsquare = $("<div>", {
        class: "pixel_square"
      });

      new_pixelrow.append(new_pixelsquare);
    }
    this.grid.append(new_pixelrow);
  }
  return this.grid;
}

PixelPainter.prototype.build_colors = function () {
  
}

PixelPainter.prototype.color_dropper = function (color) {
  
  this.grid.find("div.pixel_square").click(function () {
    $(this).css('background-color', "#000");// FIX the hardcoded color
  })
}

PixelPainter.prototype.color_copier = function () {
  
}

PixelPainter.prototype.eraser = function () {

}

PixelPainter.prototype.clear = function () {
  
}









