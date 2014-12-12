function PixelPainter (width, height) {

  this.width = width;
  this.height = height;
  this.size = null;
  this.grid = this.buildGrid();
  this.palette = this.buildPalette();
  this.color = null;
  this.registerEventListeners();

}

//Render should render all elements of the app
//Just need to run render in app.js, nothing else is needed
PixelPainter.prototype.render = function () {
  return [this.palette, this.grid];
}

//This method builds out the grid according 
//to the width and height provided by the user
PixelPainter.prototype.buildGrid = function () {
  
  var grid = $("<div>", {
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
      new_pixelrow.append(new_pixelsquare);
    }
    //add the row to the grid
    grid.append(new_pixelrow);
  }
  return grid;
}

//Builds the entire palette area: color palette, sampler, buttons
PixelPainter.prototype.buildPalette = function () {
  
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

  var color_sampler = $("<div>", {
    class: "color_sampler"
  });

  var eraser = $("<div>", {
    class: "eraser",
  });

  var clear = $("<button>", {
    class: "clear",
    html: "clear all"
  });

  return this.palette_container.append(color_grid, color_sampler, eraser, clear);

}

//This method takes care of all event listeners
//The color copier, the eraser, the color dropper, clear all button
PixelPainter.prototype.registerEventListeners = function () {

  var self = this;

  //Listens for click on any of the colors on the pallette
  //When clicked, it sets current color as that color
  //Can't just taret div.color_square becuase it doesn't exist in the context of the page
  //It exists in context of this.pallette_container
  //Need to "find" it in there
  this.palette_container.find("div.color_square").click(function () {
    $("div").removeClass("selected");
    $(this).addClass("selected");
    self.color = $(this).css('background-color');
    $("div.color_sampler").css("background-color", self.color);
  });

  //Listens for click on eraser icon
  //When clicked, it makes current color ""white" to erase pixels
  this.palette_container.find("div.eraser").click(function () {
    $("div").removeClass("selected");
    $(this).addClass("selected");
    self.color = "white";
    $("div.color_sampler").css("background-color", self.color);
  });

  //Listens for a click on the grid and drops the currently selected color on it
  this.grid.find("div.pixel_square").click(function () {
    $(this).css('background-color', self.color);
  });

  //Listens for the click on the "clear all button"
  //If user confirms clear all, colors on pixels are reset
  this.palette_container.find("button.clear").click(function () {
    var answer = confirm("Are you sure you want to clear all?")
    if(answer){//yes
      $("div.pixel_square"
        ).css('background-color', "#fff");
    }
  });

}

//Extra Functionality
//Setting cell size
PixelPainter.prototype.cellSize = function (size) {
  
  this.size = size;
  this.grid.find("div.pixel_square").css({
    "width": this.size + "px",
    "height": this.size + "px"
  });

}









