const game = new Game();

const treasure = new Treasure()


function preload() {
  game.player.preload();
  game.treasure.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear()
  game.drawGrid();
  game.player.drawPlayer();
  game.treasure.drawTreasure();
}




function keyPressed() {

  if (keyCode === 39) {
    game.player.moveRight()
    game.checkPosition();

  }
  if (keyCode === 37) {
    game.player.moveLeft()
    game.checkPosition();
    // playerimageDirection = this.game.player.imageL;
  }
  if (keyCode === 38) {
    game.player.moveUp()
    game.checkPosition();
    // playerimageDirection = this.game.player.imageU;
  }
  if (keyCode === 40) {
    game.player.moveDown()
    game.checkPosition();
    // playerimageDirection = this.game.player.imageD;

  }

}

