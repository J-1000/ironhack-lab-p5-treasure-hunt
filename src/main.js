const game = new Game();
const player = new Player(6,4);
const treasure = new Treasure(2,4)
// player.moveDown()
console.log(player.row, player.row)
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  img = loadImage('/assets/character-down.png');
  img2 = loadImage("/assets/treasure.png")
}

function draw() {
  game.drawGrid();
  player.draw()
  treasure.drawTreasure()
  
}
function keyPressed(){
player.keyPressed()
} 
treasure.setRandomPosition()

