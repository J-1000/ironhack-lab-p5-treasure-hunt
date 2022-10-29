const game = new Game();

function preload() {
  game.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.treasure.setRandomPosition();
}

function draw() {
  game.draw();
}

function keyPressed() {
  switch (keyCode) {
    case RIGHT_ARROW:
      game.player.moveRight();
      break;
    case LEFT_ARROW:
      game.player.moveLeft();
      break;
    case UP_ARROW:
      game.player.moveUp();
      break;
    case DOWN_ARROW:
      game.player.moveDown();
      break;
  }
}
