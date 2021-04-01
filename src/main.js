const game = new Game();
const treasure = new Treasure();

const player = new Player(0, 0); // (0,0) = Initial position (col, row)

console.log('SQUARE_SIDE', SQUARE_SIDE);
//let testplayer;
function preload() {
  console.log('preload');
  player.preload();
  treasure.preload();
}

function setup() {
  console.log('setup');
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
  treasure.setRandomPosition();
}

function draw() {
  clear();
  game.drawGrid();
  treasure.drawTreasure();
  player.draw();
}

function keyPressed() {
  // if we press up we wanna move the player up
  if (keyCode === UP_ARROW) {
    player.moveUp(); //38
  }
  if (keyCode === DOWN_ARROW) {
    player.moveDown(); //40
  }
  if (keyCode === LEFT_ARROW) {
    player.moveLeft(); //37
  }
  if (keyCode === RIGHT_ARROW) {
    player.moveRight(); //39
  }
}

// player.moveDown(); // Increase by 1 the value of player.row
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveRight(); // Increase by 1 the value of player.col
// console.log(player.col, player.row); // => 1,2
