const game = new Game();

function preload() {
	// loadImage is needed to preload the image
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
  frameRate(FPS);
}

function draw() {
  game.draw();
  game.move();
  game.update();
  
}


