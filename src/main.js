const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.preload();
}

function draw() {
  game.drawGrid();
  game.player.draw();
  game.treasure.draw();
}

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if(keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}