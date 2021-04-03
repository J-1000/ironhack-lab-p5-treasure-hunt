const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");

  game.setup();
}

function draw() {
  clear()
  game.drawGrid();
  game.draw();
  

}

function preload() {
  playerImg = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
}

function keyPressed(key) {
  console.log(keyCode);
  game.move(key)
}