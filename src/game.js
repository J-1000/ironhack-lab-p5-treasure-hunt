const size = 80;

class Treasure {
  constructor() {
    this.col;
    this.row;
  }
  setRandomPosition() {
    let randomNumX = Math.floor(Math.random() * 10)
    this.col = randomNumX;
    let randomNumY = Math.floor(Math.random() * 10)
    this.row = randomNumY;
  }
  drawTreasure(){
    let xCord = 10 + this.col * size;
    let yCord = 10 + this.row * size;
    let h = 60;
    let w = 60;
    image(imgTreasure, xCord, yCord, h, w);
    console.log('hey');
  }
}

class Player {
    constructor (col, row) {
      this.col = col;
      this.row = row;
    }
    moveUp() {
      this.row -= 1;
    }
    moveDown() {
      this.row += 1;
    }
    moveLeft(){
      this.col -= 1;
    }
    moveRight(){
      this.col += 1;
    }
    draw(){
      let xCord = 10 + this.col * size;
      let yCord = 10 + this.row * size;
      let h = 60;
      let w = 60;
      image(img, xCord, yCord, h, w);
    }
  
  }

// const player = new Player(0,0) // (0,0) = Initial position (col, row)
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2

class Game {
  drawGrid() {
    
    const gridCounts = 10;
    const max = size * gridCounts;
    
    for (let x = 0; x <= max; x += size) {
      for (let y = 0; y <= max; y += size) {
        rect(x, y, size, size);
      }
    }

    // for (let i = 0; i <= max; i+= size) {
    //   const x1 = i;
    //   const y1 = 0;
    //   const x2 = i;
    //   const y2 = max;

    //   line(x1, y1, x2, y2);
    // }

    // for (let i = 0; i <= max; i+= size) {
    //   const x1 = 0;
    //   const y1 = i;
    //   const x2 = max;
    //   const y2 = i;

    //   line(x1, y1, x2, y2);
    // }
    
  }
}
