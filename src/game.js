class Game {
  drawGrid() {
    for (let i = 0; i <= 1000; i += 100) {
      line(i, 0, i, 1000);
      line(0, i, 1000, i);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 1;
    lastKey = "up";
  }

  moveDown() {
    this.row += 1;
    lastKey = "down";
  }

  moveLeft() {
    this.col -= 1;
    lastKey = "left";
  }

  moveRight() {
    this.col += 1;
    lastKey = "right";
  }

  draw() {
    image(img, this.col * 100, this.row * 100, 100, 100);
  }
}

class Treasure {
  constructor() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    console.log(this.row, this.col);
  }

  draw() {
    image(imgT, this.col * 100, this.row * 100, 100, 100);
  }
}
