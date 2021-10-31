// declare variables(objects) for the game
const game = new Game();

function preload(){
  game.preload();
}

// this is object instance
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

// commands
function draw() {
  clear()
  game.drawGrid();
  game.drawPlayer();
  game.drawTreasure();
  game.drawCollision();
}

function keyPressed() {
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}




