const game = new Game();

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");
  frameRate(15);
}

 function preload() {
   game.preload();
 }

function draw() {
  clear();
  game.drawGrid();
  game.draw();
}

