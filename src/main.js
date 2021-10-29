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
  game.drawGrid();
  game.drawPlayer();
}
