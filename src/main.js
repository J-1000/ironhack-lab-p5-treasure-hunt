console.log(WIDTH);

const game = new Game();
const player = new Player(2, 0);
const treasure = new Treasure();


function preload() {
  img = loadImage(
          "assets/character-down.png"
        );
  imgTreasure = loadImage(
          "assets/treasure.png"
        );
}

function setup() {
  let canvas = createCanvas(800, 800); //==> (600,600) for example in px
  canvas.parent("canvas");
  treasure.setRandomPosition()
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}


//keyPressed is a p5 function: whenever you press a key this function is called
function keyPressed() {
  //keyCode is a P5 variable
  clear();
  if (keyCode === 40) {
    player.moveDown();
    console.log("arrow Down");
  }
  if (keyCode === 38) {
    player.moveUp();
    console.log("arrow up");
  }
  if (keyCode === 39) {
    player.moveRight();
    console.log("arrow right");
  }
  if (keyCode === 37) {
    player.moveLeft();
    console.log("arrow left");
  }
}
