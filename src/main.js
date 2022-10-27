const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();

function preload() {
  player.image = loadImage("./assets/character-down.png");
  treasure.image = loadImage("./assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  switch (keyCode) {
    case RIGHT_ARROW:
      player.moveRight();
      break;
    case LEFT_ARROW:
      player.moveLeft();
      break;
    case UP_ARROW:
      player.moveUp();
      break;
    case DOWN_ARROW:
      player.moveDown();
      break;
  }
}
