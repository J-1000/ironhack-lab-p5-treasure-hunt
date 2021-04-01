class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.direction = 0;
    this.image = [];
  }
  preload() {
    this.image[0] = loadImage('./assets/character-down.png');
    this.image[1] = loadImage('./assets/character-up.png');
    this.image[2] = loadImage('./assets/character-left.png');
    this.image[3] = loadImage('./assets/character-right.png');
  }
  draw() {
    image(
      this.image[this.direction],
      SQUARE_SIDE * this.col,
      SQUARE_SIDE * this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
  moveDown() {
    this.direction = 0;
    this.row++;
  }
  moveUp() {
    this.direction = 1;
    this.row--;
  }
  moveLeft() {
    this.direction = 2;
    this.col--;
  }
  moveRight() {
    this.direction = 3;
    this.col++;
  }
}
