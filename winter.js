
function winter() {

  let y;
  let speed = 1;
  let xArray = [];
  let yArray = [];
  let startTime;

  this.enter = function() {
    for (let i = 0; i < 100; i++) {
      xArray[i] = random(0,width);
      yArray[i] = random(0,height*2);
    }
    noStroke();
    rectMode(CENTER);
    startTime = millis();
    fill("white");
    y = 0;
  }

  this.draw = function() {
    background(125);

    for (let i = 0; i < xArray.length; i++) {
      let yVal = yArray[i]-(height*2)+y;
      rect(xArray[i],yVal,5,5);
    }
    
    y += speed;

    if (millis() - startTime > 5000) {
      this.sceneManager.showScene(spring);
    }

  }
}