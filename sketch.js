let mgr;

function setup() {
  createCanvas(400,400);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(spring);
}

function draw() {
  mgr.draw();
}