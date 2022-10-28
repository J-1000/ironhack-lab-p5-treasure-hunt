/***************/
/* Main Script */
/***************/

const game      = new Game();
const player    = new Player(0, 0);
const treasure  = new Treasure();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}


function preload() {
  player.preload();
  treasure.preload();
}


function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.draw();
}

function keyPressed() {
  player.keyPressed();
}