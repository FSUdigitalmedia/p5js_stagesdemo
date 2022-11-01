function summer() {

  var circleSize = 200;

  this.enter = function() {
    fill("yellow");
    background("lightblue");
    ellipseMode(CENTER);
    stroke("orange");
  }

  this.draw = function() {
    circle(width/2, height/2, circleSize);
    filter(BLUR,4);
  }

  this.mouseClicked = function() {
    if (dist(mouseX,mouseY,width/2,height/2) < circleSize/2) {
      this.sceneManager.showScene(fall);
    }
  }
}