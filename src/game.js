class Game {
  constructor(player1, player2, treasure) {
    this.player1 = player1;
    this.player2 = player2;
    this.treasure = treasure;
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let i = 0; i < 11; i++) {
      line(0, i * 100, 1000, i * 100);
      line(i * 100, 0, i * 100, 1000);
    }
  }

  drawAssets() {
    this.treasure.draw();
    this.player1.draw();
    this.player2.draw();
  }

  checkCollisions() {
    if (
      this.treasure.col === this.player2.col &&
      this.treasure.row === this.player2.row
    ) {
      this.treasure.setRandomPosition();
      document.querySelector("h1").innerText = `LEFT ${++this.player2.score * 100} : ${this.player1.score * 100} RIGHT`;
    }

    if (
      this.treasure.col === this.player1.col &&
      this.treasure.row === this.player1.row
    ) {
      this.treasure.setRandomPosition();
      document.querySelector("h1").innerText = `LEFT ${this.player2.score * 100} : ${++this.player1.score * 100} RIGHT`;

    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image = loadImage("../assets/character-down.png");
    this.score = 0;
  }

  moveUp() {
    if (this.outOfGridBoundary(this.col, this.row - 1)) return;

    this.image = loadImage("../assets/character-up.png");
    this.row--;
  }

  moveDown() {
    if (this.outOfGridBoundary(this.col, this.row + 1)) return;
    this.image = loadImage("../assets/character-down.png");
    this.row++;
  }

  moveLeft() {
    if (this.outOfGridBoundary(this.col - 1, this.row)) return;

    this.image = loadImage("../assets/character-left.png");
    this.col--;
  }

  moveRight() {
    if (this.outOfGridBoundary(this.col + 1, this.row)) return;

    this.image = loadImage("../assets/character-right.png");
    this.col++;
  }

  draw() {
    console.log(this.col, this.row);
    image(this.image, this.col * 100, this.row * 100, 100, 100);
  }

  outOfGridBoundary(col, row) {
    return col >= 10 || row >= 10 || col < 0 || row < 0;
  }
}

class Treasure {
  constructor() {
    this.image = loadImage("../assets/treasure.png");
    this.col;
    this.row;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  draw() {
    image(this.image, this.col * 100, this.row * 100, 100, 100);
  }
}
