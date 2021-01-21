class Player {
  constructor(col,row) {
    this.col = col;
    this.row = row;
    this.imageDown;

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
 
  preload() {
    this.imageDown = loadImage('assets/character-down.png');
    
  }
  draw() {
    image(this.imageDown, this.col*100, this.row*100, 100, 100)
  // add constraint here
  } 
}



class Game {
  constructor() {
    this.player = new Player();
}

drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    
    rect(0, 0, 1000, 1000);
    line(0, 100, 1000, 100)
    line(0, 200, 1000, 200)
    line(0, 300, 1000, 300)
    line(0, 400, 1000, 400)
    line(0, 500, 1000, 500)
    line(0, 600, 1000, 600)
    line(0, 700, 1000, 700)
    line(0, 800, 1000, 800)
    line(0, 900, 1000, 900)
    line(100, 0, 100, 1000)
    line(200, 0, 200, 1000)
    line(300, 0, 300, 1000)
    line(400, 0, 400, 1000)
    line(500, 0, 500, 1000)
    line(600, 0, 600, 1000)
    line(700, 0, 700, 1000)
    line(800, 0, 800, 1000)
    line(900, 0, 900, 1000)
  
  }
}

function preload() {
  console.log('this is preload');
  game.preload()
}



