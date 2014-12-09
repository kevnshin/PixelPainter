function PixelPainter (width, height) {

  this.width = width;
  this.height = height;

}

//Render should render all elements of the app
PixelPainter.prototype.render = function () {

  $("#container").addClass("clearfix");

  var app = [this.build_palette(), this.build_grid()];
  this.color_changer();
  this.clear_all();

  return app;

};

//This method builds out the grid according 
//to the width and height provided by the user
PixelPainter.prototype.build_grid = function () {
  
  this.grid = $("<div>", {
    class: "grid clearfix"
  });

  //add new rows according to height
  for (var i = 0; i < this.height; i++) {

    //make a new row element
    var new_pixelrow = $("<div>", {
      class: "pixel_row clearfix"
    });

    //add new columns according to width
    for (var j = 0; j < this.width ; j++) {

      //make a new pixel element
      var new_pixelsquare = $("<div>", {
        class: "pixel_square"
      });
      //add the pixel element to the row
      new_pixelrow.append(new_pixelsquare);
    }
    //add the row to the grid
    this.grid.append(new_pixelrow);
  }
  return this.grid;
}


//Builds the entire palette area: color palette, sampler, buttons
PixelPainter.prototype.build_palette = function () {
  
  var colors = ["white", "black", "light_gray", "gray", "brown", "maroon", "pink", "red", "yellow_orange", "orange", "tan", "yellow", "yellow_green", "green", "light_blue", "blue", "dark_blue", "blue_violet", "light_purple", "purple"];

  this.palette_container = $("<div>", {
    class: "palette_container"
  });

  var color_grid = $("<div>", {
    class: "color_grid clearfix"
  });

  //make 10 rows
  for (var i = 0, k = 0; i < 10; i++) {

    var color_row = $("<div>", {
      class: "color_row clearfix"
    });

    //make 2 columns
    for (var j = 0; j < 2 ; j++, k++) {

      var color_square = $("<div>", {
        class: "color_square " + colors[k]
      });

      color_row.append(color_square);
    }
    color_grid.append(color_row);
  }

  // var color_sampler = $("<div>", {
  //   class: "color_sampler"
  // });

  var eraser = $("<div>", {
    class: "eraser",
  });

  var clear = $("<button>", {
    class: "clear",
    html: "clear all"
  });

  this.palette_container.append(color_grid);
  this.palette_container.append(eraser);
  this.palette_container.append(clear);

  return this.palette_container;
}

PixelPainter.prototype.color_changer = function () {

  var color;

  //Color copier event listener
  this.palette_container.find("div.color_square").click(function () {
    color = $(this).css('background-color');
    console.log("TEST: " + color);
  });

  //Eraser event listener
  this.palette_container.find("div.eraser").click(function () {
    color = "white";
  });

  //Color dropper event listener
  this.grid.find("div.pixel_square").click(function () {
    $(this).css('background-color', color);
  });


}

PixelPainter.prototype.clear_all = function () {

  //Clear All event listener
  this.palette_container.find("button.clear").click(function () {
  
    var answer = confirm("Are you sure you want to clear all?")
  
    if(answer){

      $("div.pixel_square").css('background-color', "#fff");

    }

  });

}









