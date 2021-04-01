class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    push()
    for (let i=0; i<11; i++){
      let rect=40;
      const xstart= width/2-(rect*5);
      const xend = width/2+(rect*5);
      line(xstart, i*rect, xend, i*rect)
      line(xstart+i*rect, 0, xstart+i*rect, rect*10)
    }
  }
}

//Iteration 2
//Creating the player
class Player{
  constructor(col, row){
    this.col = col;
    this.row = row;
  }

  moveUp(){
    this.row--;
  }

  moveDown(){
    this.row++;
  }
  
  moveLeft(){
    this.col--;
  }

  moveRight(){
    this.col++;
  }

}
const player = new Player(0,0) // (0,0) = Initial position (col, row)
player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2