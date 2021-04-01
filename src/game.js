let score = 0;
let scoreDisplay = document.querySelector('h2 span');
scoreDisplay.innerText = score;

class Player {
  constructor () {
    this.col = 0;
    this.row = 0;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.image;
  }
  draw() {
    this.col = constrain(this.col, 0, (WIDTH - SQUARE_SIDE));
    this.row = constrain(this.row, 0, (WIDTH - SQUARE_SIDE));

    image(this.image, this.col, this.row, this.width, this.height);

    if (keyIsDown(38)) {
        this.moveUp()
    }
    if (keyIsDown(40)) {
        this.moveDown()
    }
    if (keyIsDown(37)) {
        this.moveLeft()
    }
    if (keyIsDown(39)) {
        this.moveRight()
    }
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
    this.image = loadImage('assets/character-up.png');
  }
  moveDown() {
    this.row += SQUARE_SIDE;
    this.image = loadImage('assets/character-down.png');
  }
  moveLeft() {
    this.col -= SQUARE_SIDE;
    this.image = loadImage('assets/character-left.png');
  }
  moveRight() {
    this.col += SQUARE_SIDE;
    this.image = loadImage('assets/character-right.png');
  }
}

class Treasure {
  constructor() {
    this.col = 600;
    this.row = 800;
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.image;
  }
  draw() {
    image(this.image, this.col, this.row, this.width, this.height);
  }
}

class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }
  preload() {
    this.player.image = loadImage('assets/character-down.png');
    this.treasure.image = loadImage('assets/treasure.png')
  }
  draw() {
    this.player.draw();
    this.treasure.draw();
  }
  drawGrid() {
    for (let i = 0; i < WIDTH; i += SQUARE_SIDE) {
      for (let k = 0; k < HEIGHT; k += SQUARE_SIDE) {
        line(i, 0, i, HEIGHT);
			  line(0, k, WIDTH, k);
      }
    }
  }
  updateScore() {
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      score++;
      scoreDisplay.innerText = score;
      this.treasure.row = 100 * Math.ceil((Math.random()*(WIDTH-SQUARE_SIDE)) / 100);
      this.treasure.col = 100 * Math.ceil((Math.random()*(HEIGHT-SQUARE_SIDE)) / 100);
    }
  }
}

function keyPressed() {
  if (keyCode === 38) {
      game.player.moveUp()
  }
  if (keyCode === 40) {
      game.player.moveDown()
  }
  if (keyCode === 37) {
      game.player.moveLeft()
  }
  if (keyCode === 39) {
      game.player.moveRight()
  }
}