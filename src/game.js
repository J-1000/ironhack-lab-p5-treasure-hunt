class Player {
  constructor(col, row, playerX) {
    this.col = col;
    this.row = row;
    this.image;
    this.imageUp;
    this.imageDown;
    this.imageRight;
    this.imageLeft;
    this.scores = 0;
    this.direction = "d";
    this.playerX = playerX;
  }

  moveUp() {
    this.col--;
    this.image = this.imageUp;
  }
  moveDown() {
    this.col++;
    this.image = this.imageDown;
  }
  moveLeft() {
    this.row--;
    this.image = this.imageLeft;
  }
  moveRight() {
    this.row++;
    this.image = this.imageRight;
  }

  preload() {
    this.image = loadImage('assets/character-down.png');
    this.imageUp = loadImage('assets/character-up.png');
    this.imageDown = loadImage('assets/character-down.png');
    this.imageRight = loadImage('assets/character-right.png');
    this.imageLeft = loadImage('assets/character-left.png');
  }

  draw() {
    this.col = constrain(this.col, 0, width/SQUARE_SIZE-1);
    this.row = constrain(this.row, 0, height/SQUARE_SIZE-1);
    image(this.image, this.row*SQUARE_SIZE, this.col*SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  }


  keyPressed() {
    console.log(keyCode);
    if (keyCode === 38) {
      this.moveUp();
    }
    if (keyCode === 40) {
      this.moveDown();
    }
    if (keyCode === 37) {
      this.moveLeft();
    }
    if (keyCode === 39) {
      this.moveRight();
    }
  }
}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * width/SQUARE_SIZE);
    this.row = Math.floor(Math.random() * width/SQUARE_SIZE);
  }

  drawTreasure() {
    image(this.image, this.row*SQUARE_SIZE, this.col*SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
  }

  preload() {
    this.image = loadImage('assets/treasure.png');
  }
}


class Game {

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    let step = 0;
    // width equals height
    while(step < WIDTH+1) {
      // horizontal lines
      line(0, step, WIDTH, step);
      // vertical lines
      line(step, 0 , step, WIDTH);
      step += 100;
    }
  }
}


class ExtraPlayer extends Player{
  constructor(col, row, playerX) {
    super(col, row, playerX);
  }
  keyPressed() {
    console.log(keyCode);
    if (keyCode === 87) {
      this.moveUp();
    }
    if (keyCode === 83) {
      this.moveDown();
    }
    if (keyCode === 65) {
      this.moveLeft();
    }
    if (keyCode === 68) {
      this.moveRight();
    }
  }
}