class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    line(0, 0, 1000, 0)
    line(0, 100, 1000, 100)
    line(0, 200, 1000, 200)
    line(0, 300, 1000, 300)
    line(0, 400, 1000, 400)
    line(0, 500, 1000, 500)
    line(0, 600, 1000, 600)
    line(0, 700, 1000, 700)
    line(0, 800, 1000, 800)
    line(0, 900, 1000, 900)
    line(0, 1000, 1000, 1000)

    line(0, 0, 0, 1000)
    line(100, 0, 100, 1000)
    line(200, 0, 200, 1000)
    line(300, 0, 300, 1000)
    line(400, 0, 400, 1000)
    line(500, 0, 500, 1000)
    line(600, 0, 600, 1000)
    line(700, 0, 700, 1000)
    line(800, 0, 800, 1000)
    line(900, 0, 900, 1000)
    line(1000, 0, 1000, 1000)
  }
}

class Player {

  constructor(col, row){
    this.col = col;
    this.row = row;
    this.direction = 'down'; 
  }

  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }

  preload() {
    this.imageDown = loadImage('/assets/character-down.png');
    this.imageUp = loadImage('/assets/character-up.png');
    this.imageLeft = loadImage('/assets/character-left.png');
    this.imageRight = loadImage('/assets/character-right.png');
  }

  draw() {
    this.col = constrain(this.col, 0, 9);
    this.row = constrain(this.row, 0, 8);
    if (this.direction === 'down'){
      image(this.imageDown, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100);
    }
    if (this.direction === 'up'){
      image(this.imageUp, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100);
    }
    if (this.direction === 'left'){
      image(this.imageLeft, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100);
    }
    if (this.direction === 'right'){
      image(this.imageRight, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100);
    }

  }
    

}

class Treasure {
  constructor(){
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 9);
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 9);
  }
  preload() {
    this.image = loadImage('/assets/treasure.png')
  }
  drawTreasure() {
    image(this.image, this.col*SQUARE_SIDE, this.row*SQUARE_SIDE, 100, 100)
    if (this.col === 0 && this.row === 0) {
      treasure.setRandomPosition();
    }
  }
}

