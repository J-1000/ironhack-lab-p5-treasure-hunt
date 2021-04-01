const game = new Game();
game.treasure.setRandomPosition();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.treasure.draw();
  game.player.draw();

}

function preload() {
  game.preload();
}

function keyPressed() {
  switch (keyCode) {
    case LEFT_ARROW:
      game.player.moveLeft();
      break;
    case UP_ARROW:
      game.player.moveUp();
      break;
    case RIGHT_ARROW:
      game.player.moveRight();
      break;
    case DOWN_ARROW:
      game.player.moveDown();
      break;
  }
}