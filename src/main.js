const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player.image = loadImage("./assets/character-down.png");
  treasure.image = loadImage("./assets/treasure.png");
  treasure.setRandomPosition();
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();

}
function keyPressed() {

  if (keyCode === 37) {
    player.moveLeft();
    game.hunt();
  }
  if (keyCode === 39) {
    player.moveRight();
    game.hunt();
  }
  if (keyCode === 38) {
    player.moveUp();
    game.hunt();
  }
  if (keyCode === 40) {
    player.moveDown();
    game.hunt();
  }
}
