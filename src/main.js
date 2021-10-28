let game;
//const player = new Player(0,0);
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  game = new Game();
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
  game.player.moveDown();
  
  

}

