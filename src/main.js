const game = new Game();
const player = new Player(1, 1);
const treasure = new Treasure();

function preload() {

  player.preload();
  treasure.preload();

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.setup();
  treasure.setRandomPosition();

}

function draw() {
  clear();
  stroke(0);
  game.drawGrid();
  player.draw();
  treasure.draw();
  treasure.catchTreasure();

}





function keyPressed() {

  if (keyCode === 38) {
    player.moveUp();
  }
  if (keyCode === 40) {
    player.moveDown();
  }
  if (keyCode === 37) {
    player.moveLeft();
  }
  if (keyCode === 39) {
    player.moveRight();
  }
}