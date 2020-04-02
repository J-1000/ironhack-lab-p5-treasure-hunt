class Game {
  drawGrid() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    for (let i = 0; i <= 10; i++) {
      line(0, i * SQUARE_SIDE, WIDTH, i * SQUARE_SIDE);
    }
    for (let i = 0; i <= 10; i++) {
      line(i * SQUARE_SIDE, 0, i * SQUARE_SIDE, HEIGHT);
    }
  }
}
class Player {}

class Treasure {
  constructor() {
    this.xCord = Math.floor(Math.random() * 10) * 100;
    this.yCord = Math.floor(Math.random() * 10) * 100;
    this.img;
    console.log(this.xCord, this.yCord);
  }

  drawTreasure() {
    image(imgT, this.xCord, this.yCord, 100, 100);
  }
}
