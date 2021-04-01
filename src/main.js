const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.preload();
}

function draw() {
  clear();
  game.drawGrid();
  game.treasure.draw();
  game.player.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    game.player.moveUp()
  }
  if (keyCode === DOWN_ARROW) {
    game.player.moveDown()
  }
  if (keyCode === LEFT_ARROW) {
    game.player.moveLeft()
  }
  if (keyCode === RIGHT_ARROW) {
    game.player.moveRight()
  }
  if (game.player.col === game.treasure.col && game.player.row === game.treasure.row) {
    game.treasure.setRandomPosition();
  }
}