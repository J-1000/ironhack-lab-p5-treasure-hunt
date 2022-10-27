const game = new Game();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.player.image = loadImage("./../assets/character-down.png")
}

function draw() {
  game.drawGrid();
  game.player.draw();
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      game.player.moveUp()
      break;
    case 40:
      game.player.moveDown()
      break;
    case 37:
      game.player.moveLeft()
      break;
    case 39:
      game.player.moveRight()
      break;
    default:
      null;
  }
}
