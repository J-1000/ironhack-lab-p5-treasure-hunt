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
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}
//let avatar = loadImage('/assets/character-down.png');


class Player {
  constructor(col, row){
    this.col = col;
    this.row = row;
  }

  moveUp(){
    if(this.row> 0){
      this.row -= SQUARE_SIDE;
    }
    console.log(this.col, this.row);
  }

  moveDown(){
    if(this.row <HEIGHT - SQUARE_SIDE ){
      this.row += SQUARE_SIDE;
    }
    console.log(this.col, this.row);
  }
  moveLeft(){
    if (this.col >0){
      this.col -= SQUARE_SIDE;
    }
    console.log(this.col, this.row);
  }
moveRight(){
  if(this.col<WIDTH - SQUARE_SIDE){
    this.col += SQUARE_SIDE;
  }
  console.log(this.col, this.row);
  console.log("moved right");"s"
}
drawPlayer(){
  image(img,this.col, this.row, 100, 100);
}
}

let newPlayer = new Player(0,0);
console.log(newPlayer);


class Treasure{
  constructor() {
    this.row ;
    this.col;
  }
  randomPosition() {
    this.row = Math.floor(Math.random() * 10)*100;
    this.col = Math.floor(Math.random() *10)*100;
  }
  drawTreasure(){
    image(treasureImage, this.row, this.col, 100,100)
  }
}
let newTreasure = new Treasure();
newTreasure.randomPosition();