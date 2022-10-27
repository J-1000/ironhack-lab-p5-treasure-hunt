const game = new Game();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
  game.player.image = loadImage("./../assets/character-down.png")
  game.treasure.image = loadImage("./../assets/treasure.png")
}

function draw() {
  game.drawGrid();
  game.player.draw();
}

function keyPressed() {
  switch (keyCode) {
    case 38:
      if (game.player.row === 0) break;
      game.player.moveUp()
      break;
    case 40:
      if (game.player.row === 900) break;
      game.player.moveDown()
      break;
    case 37:
      if (game.player.col === 0) break;
      game.player.moveLeft()
      break;
    case 39:
      if (game.player.col === 900) break;
      game.player.moveRight()
      break;
    default:
      null;
  }
}
