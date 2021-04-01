const game = new Game();
const player = new Player(4, 4);
const treasure = new Treasure(1, 1);

function preload() {

  player.preload();
  treasure.preload();

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.setup();
  treasure.setup();
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.draw();

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