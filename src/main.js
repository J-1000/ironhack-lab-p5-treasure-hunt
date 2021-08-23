const game = new Game();
const player = new Player();
const treasure = new Treasure();


// Can be here as well instead of in main.preload() 🤔
//treasure.setRandomPosition();

function preload() {
  game.preloadGame();
  treasure.setRandomPosition();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.drawPlayerDown();
  // player.drawPlayerUp();
  treasure.drawTreasure();
  game.findTreasure();
}

function keyPressed() {
  
  if (keyCode === 38) {
    player.moveUp();
    //player.drawPlayerUp();
  }
  
  if (keyCode === 40) {
    player.moveDown();
  }
  
  if (keyCode === 39) {
    player.moveRight();
  }
  
  if (keyCode === 37) {
    player.moveLeft();
  }
  
}



