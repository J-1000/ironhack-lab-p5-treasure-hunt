class Treasure {
  constructor() {
    this.image;
    this.col;
    this.row;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * (WIDTH / SQUARE_SIDE));
    this.row = Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE));
  }
  preload() {
    this.image = loadImage('./assets/treasure.png');
  }
  drawTreasure() {
    image(
      this.image,
      SQUARE_SIDE * this.col,
      SQUARE_SIDE * this.row,
      SQUARE_SIDE,
      SQUARE_SIDE
    );
  }
}
