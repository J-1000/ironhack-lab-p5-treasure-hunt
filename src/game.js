class Game {

  // Iteration 1
  // Draw the grid
  
  drawGrid() {

    //vertical lines of the grid (the vertical lines go from 0 to the total height of the canvas and they are repeated on the X axis. That is why in the for loop the counter is X. If you set the final X to the width of the canvas you'll get diagonal lines endind there)
    for (var x = 0; x <=HEIGHT; x+= SQUARE_SIDE) {
      line(x,0, x, HEIGHT)
    }

    //horizontal lines of the grid
    for (var y = 0; y <=HEIGHT; y+= SQUARE_SIDE) {
      line(0, y, WIDTH, y)
    }
  }
}


class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.img;
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
  }
  moveRight() {
    this.col += SQUARE_SIDE;
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
  }
  moveDown() {
    this.row += SQUARE_SIDE;
  }
  
  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

  keyPressed() {
    clear();
    //if (keyIsDown(40)) this.moveDown();
    //if (keyIsDown(38)) this.moveUp();
    if (keyCode === 40) this.moveDown();
    if (keyCode === 39) this.moveRight();
    if (keyCode === 38) this.moveUp();
    if (keyCode === 37) this.moveLeft();
    console.log(player.col, player.row);
  }
}

let counter = 0;

class Treasure{
  constructor (col , row){
    this.col = col;
    this.row = row;
    this.img;
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random()*10)*SQUARE_SIDE;
    this.row = Math.floor(Math.random()*10)*SQUARE_SIDE;
  };

  drawTreasure(){
    if (frameCount%150 === 0) {
      counter -= 1;
      this.setRandomPosition();
    }
    if (this.col === player.col && this.row === player.row) {
      frameCount = 0;
      counter += 1;
      this.setRandomPosition();
    }
    document.querySelector("h2 span").innerHTML = counter;

    image(this.img, this.col, this.row, SQUARE_SIDE , SQUARE_SIDE)
  }
}