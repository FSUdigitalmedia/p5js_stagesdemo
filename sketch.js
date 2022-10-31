let y = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);

  ellipse(width/2, y, 50);

  y += speed;
  if (y > height || y < 0) {
    speed *= -1;
  }

}
