function spring() {
  let springImage;

  this.setup = function() { 
    springImage = loadImage("assets/spring.jpg");
  }

  this.draw = function() {
    image(springImage,0,0);
  }

  this.mouseClicked = function() {
    this.sceneManager.showScene(summer);
  }
}