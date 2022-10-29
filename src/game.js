
class Game { 
  constructor () {
    this.player = new Player(0, 0);     
    this.treasure = new Treasure();
  }
  preload() {
    this.player.image = loadImage("./assets/character-down.png");
    this.player.imageDown = loadImage("./assets/character-down.png");
    this.player.imageUp = loadImage("./assets/character-up.png");
    this.player.imageRight = loadImage("./assets/character-right.png");
    this.player.imageLeft = loadImage("./assets/character-left.png");
    this.treasure.image = loadImage("./assets/treasure.png");
  }
  draw() {
    clear();
    this.drawGrid();
    this.player.draw();
    this.treasure.drawTreasure();
    this.collision();
  }
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
  collision() {
    if (dist(this.player.col, this.player.row, this.treasure.col, this.treasure.row) < SQUARE_SIDE) {
      this.treasure.setRandomPosition();
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
      this.image = this.imageUp;
    }
  }
  moveDown() {
    if (this.row < HEIGHT - SQUARE_SIDE) { 
      this.row += SQUARE_SIDE;
      this.image = this.imageDown;
    } 
  }
  moveLeft() {
    if (this.col > 0) { 
      this.col -= SQUARE_SIDE;
      this.image = this.imageLeft;
    } 
  }
  moveRight() {
    if (this.col < WIDTH - SQUARE_SIDE) {      
      this.col += SQUARE_SIDE;
      this.image = this.imageRight;
    }  
  }  
}

class Treasure {
  setRandomPosition() {
    this.col = Math.min((random().toFixed(1) * HEIGHT), HEIGHT - SQUARE_SIDE);
    this.row = Math.min((random().toFixed(1) * WIDTH), WIDTH - SQUARE_SIDE);
   }
  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}


