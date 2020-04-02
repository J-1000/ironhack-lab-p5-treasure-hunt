const game = new Game();
const player = new Player(0, 0); // (0,0) = Initial position (col, row)
const treasure = new Treasure(0, 0);
let score = 0;


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  img = loadImage('assets/character-down.png', 0, 0);
  treasureImg = loadImage('assets/treasure.png', 0, 0);
}

function draw() {
  
  clear()
  treasure.draw();
  game.drawGrid();
  player.draw();
  if(player.row === treasure.row && player.col === treasure.col){
    console.log(score += 1)
  }
}