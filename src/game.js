class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (var x = 0; x < width; x += 40) {
      for (var y = 0; y < height; y += 40) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, y);
        line(0, y, x, y);
      }
    }
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
  }

  moveUp() {
    this.row -= 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
  moveRight() {
    this.col += 1;
  }
}

const player = new Player(0, 0); // (0,0) = Initial position (col, row)
console.log(player.col, player.row);
player.moveDown(); // Increase by 1 the value of player.row
console.log(player.col, player.row);
player.moveDown(); // Increase by 1 the value of player.row
console.log(player.col, player.row);
player.moveRight(); // Increase by 1 the value of player.col
console.log(player.col, player.row); // => 1,2
