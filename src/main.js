const game = new Game();
const player = new Player(0,0)

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw();
}

function preload (){
  player.preload()
}

player.moveDown();
player.moveDown();
player.moveRight();
console.log (player)

console.log(player.col, player.row)