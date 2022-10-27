const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  frameRate(FPS)
}

function draw() {
  game.draw();
  game.move();
  game.over();
}

