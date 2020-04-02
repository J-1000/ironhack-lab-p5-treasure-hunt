const game = new Game();
let xCord = 0;
let yCord = 0;
let imgDown;
let imgUp;
let imgLeft;
let imgRight;
let img;
let H = 100;
let W = 100;
let player;
let treasure = new Treasure();
let counter = 0;

function preload() {
  imgDown = loadImage("assets/character-down.png");
  imgUp = loadImage("assets/character-up.png");
  imgLeft = loadImage("assets/character-left.png");
  imgRight = loadImage("assets/character-right.png");
  img = imgDown;
  imgT = loadImage("assets/treasure.png");

  // treasure.preload();
}
function setup() {}

function draw() {
  clear();

  game.drawGrid();

  image(img, xCord, yCord, W, H);

  if (treasure.xCord == xCord && treasure.yCord == yCord) {
    treasure = new Treasure();
    counter += 100;
  }
  document.getElementById("sebasFanClub").innerHTML = counter;
  treasure.drawTreasure();
}

function keyPressed() {
  if (keyCode === 40) {
    if (yCord !== HEIGHT * (9 / 10)) yCord += SQUARE_SIDE;
    img = imgDown;
  }

  if (keyCode === 38) {
    if (yCord !== 0) {
      yCord -= SQUARE_SIDE;
      img = imgUp;
    }
  }

  if (keyCode === 37) {
    if (xCord !== 0) {
      xCord -= SQUARE_SIDE;
      img = imgLeft;
    }
  }

  if (keyCode === 39) {
    if (xCord !== WIDTH * (9 / 10)) {
      xCord += SQUARE_SIDE;
      img = imgRight;
    }
  }
}

//create counter = 0
// everytime you hit treasure, increase by 1
// afterwards: set score = counter
