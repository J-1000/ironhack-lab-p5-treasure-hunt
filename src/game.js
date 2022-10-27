class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i < 9; i++) {
      line(0, SQUARE_SIDE * (i + 1), WIDTH, SQUARE_SIDE * (i + 1));
      line(SQUARE_SIDE * (i + 1), 0, SQUARE_SIDE * (i + 1), HEIGHT);
      strokeWeight(2);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }

  moveUp() {
    this.image = loadImage('./assets/character-up.png');
    if (this.row > 0) {
      this.row--;
    }
    clear();
  }

  moveDown() {
    this.image = loadImage('./assets/character-down.png');
    if (this.row < 9) {
      this.row++;
    }
    clear();
  }

  moveLeft() {
    this.image = loadImage('./assets/character-left.png');
    if (this.col > 0) {
      this.col--;
    }
    clear();
  }

  moveRight() {
    this.image = loadImage('./assets/character-right.png');
    if (this.col < 9) {
      this.col++;
    }
    clear();
  }

  draw() {
    image(
      this.image,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  draw() {
    image(
      this.image,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
