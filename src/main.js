const game = new Game();
const player = new Player();
const treasure = new Treasure();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function preload(){
  player.preload()
  treasure.preload()
}


function draw() {
  clear()
  game.drawGrid();
  player.drawPlayer();
  treasure.drawTreasure();
  
  
}


function keyPressed() {
  player.keyPressed()
  //check collision

}

function updateScore() {
  game.updateScore()}