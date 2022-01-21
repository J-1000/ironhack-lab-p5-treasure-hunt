const game = new Game();
const player = new Player(308,308);
const treasure = new Treasure(100,100)

function preload () {
    player.preload();
    treasure.preload();
}


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  treasure.setRandomPosition();
}

function draw() {
  clear()
  background('#E9C3EF')
  game.drawGrid();
  player.draw();
  treasure.draw();

}

function keyPressed() {
  if (keyCode === 39) {
    player.moveRight()
  } else if (keyCode === 37) {
    player.moveLeft()
  } else if (keyCode === 40) {
    player.moveDown()
  } else if (keyCode === 38){
    player.moveUp()
  }
}

