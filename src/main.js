const game = new Game();

function preload() {
  player.img = loadImage("/assets/character-down.png");
  treasure.img = loadImage("assets/treasure.png")
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  //clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
  //player.keyPressed();
}

function keyPressed() {
  player.keyPressed();
}

const player = new Player(0, 0);
const treasure = new Treasure();
