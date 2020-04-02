class Game {
  drawGrid() {
    for (var x = 0; x <= width; x += width / 10) {
      for (var y = 0; y <= height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= SQUARE_SIDE;
    console.log("moveUp");
  }
  moveDown() {
    this.row += SQUARE_SIDE;
    console.log("moveDown");
  }
  moveLeft() {
    this.col -= SQUARE_SIDE;

    console.log("moveLeft");
  }
  moveRight() {
    this.col += SQUARE_SIDE;

    console.log("moveRight");
  }
}

function keyPressed() {
  
  if (keyCode === 40) {
    player.moveDown();
    console.log("arrow Down");
  }
  if (keyCode === 38) {
    player.moveUp();
    console.log("arrow up");
  }
  if (keyCode === 37) {
    player.moveLeft();
    console.log("arrow left");
  }
  if (keyCode === 39) {
    player.moveRight();
    console.log("arrow right");
  }
  clear();
}

class Treasure {
  constructor (col, row){
    this.col = col;
    this.row = row;
  }
  setRandomPosition(col, row) {
    this.col = Math.floor(Math.random()* WIDTH.length);
    this.row = Math.floor(Math.random()* HEIGHT.length);
  }




  drawTreasure()
}