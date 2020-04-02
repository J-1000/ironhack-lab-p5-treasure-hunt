const game = new Game();

function preload() {
  player.image = loadImage('../assets/character-down.png');
  treasure.image = loadImage('../assets/treasure.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
}

function draw() {
  // console.log('hello2');
  push();
  game.drawGrid();
  image(player.image, player.row, player.col, SQUARE_SIDE, SQUARE_SIDE);
  pop();
  // if (frameCount % 60 === 0) {
  //   clear();
  // }

  // image(treasure.image, treasure.row, treasure.col, SQUARE_SIDE, SQUARE_SIDE);
}
