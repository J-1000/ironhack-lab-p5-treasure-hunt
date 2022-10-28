/* ------------------------------------- */
/* ------------ Class Game ------------- */
/* ------------------------------------- */

class Game {

  drawGrid() {
    let position = 0;
    while (position <= WIDTH) {
      line(position, 0, position, HEIGHT); 
      line(0, position, WIDTH, position);
      position += SQUARE_SIDE;
    }
  }

}

/* --------------------------------------- */
/* ------------ Class Player ------------- */
/* --------------------------------------- */

class Player {

  constructor(row, col) {
    this.row = row;
    this.col = col; 
    this.image;
  }

  preload() {
    this.imageDown  = loadImage("../assets/character-down.png");
    this.imageLeft  = loadImage("../assets/character-left.png");
    this.imageRight = loadImage("../assets/character-right.png");
    this.imageUp    = loadImage("../assets/character-up.png"); 
    this.image      = this.imageDown;
  }

  draw() {
      image(this.image, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
  }

  moveUp() {
    if (this.col > 0) {
      this.col  -= SQUARE_SIDE;
      this.image = this.imageUp;
    }
  }

  moveDown() {
    if (this.col < HEIGHT - SQUARE_SIDE) {
      this.col  += SQUARE_SIDE;
      this.image = this.imageDown;
    }
  }

  moveLeft() {
    if (this.row > 0) {
      this.row  -= SQUARE_SIDE;
      this.image = this.imageLeft;
    }
  }

  moveRight() {
    if (this.row < WIDTH - SQUARE_SIDE) {
      this.row  += SQUARE_SIDE;
      this.image = this.imageRight;
    }
  }
  
  keyPressed() {
    if (keyCode === 37) {
        this.moveLeft();
    } if (keyCode === 39) {
        this.moveRight();
    } if (keyCode === 38) {
        this.moveUp();
    } if (keyCode === 40) {
        this.moveDown();
    }
  }
}


/* --------------------------------------- */
/* ----------- Class Treasure ------------ */
/* --------------------------------------- */

class Treasure {

  constructor() {
    this.col;
    this.row;
    this.image;
  }

  preload() {
    this.image = loadImage("../assets/treasure.png");
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }

  draw() {
    image(this.image, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE);
    
    if (player.row === treasure.row && player.col === treasure.col) {
      treasure.setRandomPosition();
    }
  }

}


