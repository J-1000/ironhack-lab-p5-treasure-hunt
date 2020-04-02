const game = new Game();
const player = new Player(0, 0);
const treasure = new Treasure();
let img;
let treasureImg;

function preload() {
  img = loadImage("assets/character-down.png");
  treasureImg = loadImage("assets/treasure.png");
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
  }
  if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
  if (keyCode === UP_ARROW) {
    player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    player.moveDown();
  }
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
    count += 1;
    document.querySelector("span").innerText = `${count}`;
  }
}

let count = parseInt(document.querySelector("span").innerText);
console.log(count);
