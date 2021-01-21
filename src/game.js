class Game {
  constructor() {
    this.player = new Player();
  }
  preload() {
    this.player.image = loadImage('goku.png');
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    stroke(100);
    fill(120);
    for (let x = 0; x <= 500; x += 50) {
      line(x, 0, x, 500);
    }
    for (let y = 0; y <= 500; y += 50) {
      line(0, y, 500, y);
    }
  }
}


class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
  }
  moveUp() {
    this.col -= 50
  }

  moveDown() {
    this.col += 50
  }

  moveLeft() {
    this.row -= 50
  }

  moveRight() {
    this.row += 50
  }

  draw() {
    this.row = constrain(this.row, 0, 500)
    this.col = constrain(this.col, 0, 500)
    image(this.image, this.x, this.y, 100, 100)
  }
}