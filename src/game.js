class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= width; x += 100) {
      for (let y = 0; y <= height; y += 100) {
        line(x, 0, x, 1000);
        line(0, y, 1000, y);
      }
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = col;
  }
  draw() {
    image(img, this.col, this.row, 100, 100);
  }
  moveUp() {
    this.row -= 100
  }
  moveDown() {
    this.row += 100
  }
  moveLeft() {
    this.col -= 100
  }
  moveRight() {
    this.col += 100
  }
}

class Treasure {
  constructor(col, row) {
    this.col = Math.floor(Math.random() * 10) * 100
    this.row = Math.floor(Math.random() * 10) * 100
  }

  // setRandomPosition(){
  //   this.col = Math.floor(Math.random() * 10)*100;
  //   this.row = Math.floor(Math.random() * 10)*100;
  // }
  draw() {
    image(treasureImg, this.col, this.row, 100, 100);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    player.moveDown();
  }
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  }
}