const game = new Game();
const player = new Player(4, 4);
const treasure = new Treasure();

function preload() {
  player.preload();
  treasure.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
  // make sure the player position is not the position of the player at the start of the game
  while(player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
  }
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
  player.keyPressed();
}

function isFound() {
  if (player.col === treasure.col && player.row === treasure.row) {
    player.scores++;
  }
}