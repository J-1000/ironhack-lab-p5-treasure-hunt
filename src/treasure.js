class Treasure {
  constructor() {
    this.setRandomPosition();
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
    console.log(this.row, this.col);
  }
  draw() {
    image(treasureImg, treasure.col * 100, treasure.row * 100, 100, 100);
  }
}
