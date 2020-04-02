const game = new Game();
let lastKey = "down";
let img = "";

let counter = 0;

let keyChecker = () => {
  if (lastKey === "down") {
    img = imgD;
  } else if (lastKey === "up") {
    img = imgU;
  } else if (lastKey === "left") {
    img = imgL;
  } else {
    img = imgR;
  }
  console.log(img);
};
function preload() {
  imgD = loadImage("../assets/character-down.png");
  imgL = loadImage("../assets/character-left.png");
  imgR = loadImage("../assets/character-right.png");
  imgU = loadImage("../assets/character-up.png");
  imgT = loadImage("../assets/treasure.png");
  console.log("preloaded");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  player = new Player(0, 0);
  treasure = new Treasure();
}

function draw() {
  clear();
  keyChecker();
  game.drawGrid();
  player.draw();
  treasure.draw();

  document.getElementById("score").innerHTML = counter;

  if (player.col === treasure.col && player.row === treasure.row) {
    counter += 1;
    treasure = new Treasure();
  }
}

function keyPressed() {
  console.log(keyCode);
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
}
