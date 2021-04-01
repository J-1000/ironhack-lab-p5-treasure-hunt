class Game {
  constructor() {
    this.player = new Player(0, 0);
  }

  drawGrid() {
    for (let x = 0; x < WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y < HEIGHT; y += SQUARE_SIDE) {
        rect(x, y, SQUARE_SIDE, SQUARE_SIDE);
      }

    }
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png");
  }
}

class Player {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;
    this.image;
  }

  moveUp = () => {
    this.row--;
  }

  moveDown = () => {
    this.row++;
  }

  moveLeft = () => {
    this.col--;
  }

  moveRight = () => {
    this.col++
  }

  draw() {
    image(
      this.image,
      this.col * SQUARE_SIDE,
      this.row * SQUARE_SIDE,
      SQUARE_SIDE,
      SQUARE_SIDE
    )
  }
}
