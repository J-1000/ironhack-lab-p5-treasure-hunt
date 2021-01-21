class Game {
constructor() {
  this.player = new Player();
  this.treasure = new Treasure();
}
preload() {
    this.player.image = loadImage('assets/Kenny.png');
    this.treasure.image = loadImage('assets/bomb.png');
}

drawGrid() {
  clear();
  game.player.draw();
  game.treasure.drawTreasure();
  for (let i = 0;i<WIDTH;i++) {
    line(0,i*SQUARE_SIDE,WIDTH,i*SQUARE_SIDE);
    line(i*SQUARE_SIDE,0,i*SQUARE_SIDE,WIDTH);
    }
  }
}

class Player {
  constructor() {
    this.col = 1 ;
    this.row = 1 ;
    this.image;
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

 draw() {
        clear();
        this.col = constrain(this.col, 1, 10)
        this.row = constrain(this.row, 1, 10)
        image(this.image, (this.col-1)*SQUARE_SIDE, (this.row-1)*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)

  // if (keyIsDown(38)) {
  //     this.moveUp()
  // }
  // if (keyIsDown(40)) {
  //     this.moveDown()
  // }
  // if (keyIsDown(38)) {
  //     this.moveLeft()
  // }
  // if (keyIsDown(39)) {
  //     this.moveRight()
  // }
  console.log(`${this.row} and ${this.col}`)
}
}

class Treasure {
    constructor()  {
    this.col = 1;
    this.row = 1;
    this.image;
    }

  setRandomPosition() {
    this.col = 1 + Math.floor(Math.random()*9);
    this.row = 1 + Math.floor(Math.random()*9);
  }

  drawTreasure() {
    image(this.image,(this.col-1)*SQUARE_SIDE,(this.row-1)*SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }
  }