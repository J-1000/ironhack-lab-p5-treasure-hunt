let game;
let player;
let treasure;

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game = new Game(new Player(9, 9),new Player(0, 0), new Treasure());
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
    game.player1.moveRight();
  }
  if (keyCode === 37) {
    game.player1.moveLeft();
  }
  if (keyCode === 38) {
    game.player1.moveUp();
  }
  if (keyCode === 40) {
    game.player1.moveDown();
  }
  if (keyCode === 68) {
    game.player2.moveRight();
  }
  if (keyCode === 65) {
    game.player2.moveLeft();
  }
  if (keyCode === 87) {
    game.player2.moveUp();
  }
  if (keyCode === 83) {
    game.player2.moveDown();
  }
}
