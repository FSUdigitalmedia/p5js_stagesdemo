function fall() {
  let randomFallColor = ["brown","red","orange","yellow"];
  let myFrameCount;

  this.enter = function() {
    rectMode(CENTER);
    noStroke();
    fill("yellow");
    myFrameCount = 0;
  }

  this.draw = function() {
    background("darkGreen");
    if (myFrameCount % 60 == 0) fill( random(randomFallColor) ) 
    rect(width/2,height/2,300,300);

    if (myFrameCount >= 600) { 
      this.sceneManager.showScene(winter);
    }

    myFrameCount++;
  }
}