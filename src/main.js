const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();
let img;
let treasureImg;

function preload() {
  img = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");

  console.log("preload");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  treasure.draw();
  player.draw();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
    console.log("arrow Left");
  }
  if (keyCode === RIGHT_ARROW) {
    player.moveRight();
    console.log("arrow rigth");
  }
  if (keyCode === UP_ARROW) {
    player.moveUp();
    console.log("arrow up");
  }
  if (keyCode === DOWN_ARROW) {
    player.moveDown();
    console.log("arrow down");
  }
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
  }
}
