const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();
}

function preload() {
  game.preload();
}


function keyPressed() {
  console.log(keyCode);
  if (keyCode === 38) {
      game.player.moveUp();
  }
  if (keyCode === 40) {
      game.player.moveDown();
  }
  if (keyCode === 37) {
      game.player.moveLeft();
  }
  if (keyCode === 39) {
      game.player.moveRight();
  }
}

