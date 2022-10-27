
class Game {
  drawGrid() {
    const numberOfRowsAndColumns = GRIDSIZE;
    const xStep = WIDTH/numberOfRowsAndColumns;; 
    const yStep = HEIGHT/numberOfRowsAndColumns;; 
    for(let x = 0; x <= WIDTH; x += xStep) { 
      line(0, x, WIDTH, x);
        for(let y = 0; y <= HEIGHT; y += yStep) { 
          line(y, 0, y, HEIGHT);
        }
    }
  }
}

class Player {
  constructor(col, row) { 
    this.col = col;
    this.row = row;
  }
  draw() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
  moveUp() {
    if (this.row > 0) {  
      this.row -= SQUARE_SIDE;
      this.image = loadImage("./assets/character-up.png");
      this.draw();
      clear();
    }
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) { 
      this.row += SQUARE_SIDE;
      this.image = loadImage("./assets/character-down.png");
      this.draw();
      clear();
    } 
  }
  moveLeft() {
    if (this.col > 0) { 
      this.col -= SQUARE_SIDE;
      this.image = loadImage("./assets/character-left.png");
      this.draw();
      clear();
    } 
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {      
      this.col += SQUARE_SIDE;
      this.image = loadImage("./assets/character-right.png");
      this.draw();
      clear();
    }  
  }  
}

class Treasure {
  setRandomPosition() {
    this.col = Number(random().toFixed(1) * WIDTH);
    this.row = Number(random().toFixed(1) * WIDTH);
   }
   drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}


