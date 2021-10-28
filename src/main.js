let game;
let player;
let treasure;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player(0, 0), new Treasure());
  // player = new Player(0, 0);
  // treasure = new Treasure();
}

function draw() {
  clear();
  game.drawGrid();
  game.drawAssets();
  game.checkCollisions();
}

function keyPressed() {
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();
  }
}
