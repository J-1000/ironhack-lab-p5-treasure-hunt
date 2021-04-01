class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i=0; i<11; i++){
      
      line(XSTART, i*SQUARE_SIDE, XEND, i*SQUARE_SIDE)
      line(XSTART+i*SQUARE_SIDE, 0, XSTART+i*SQUARE_SIDE, SQUARE_SIDE*10)
    }
  }
}

//Iteration 2 -Creating the player
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

  //Iteration 3 - Drawing the p
  draw(playerImage){
    let SQUARE_SIDE=40;

    image(playerImage, XSTART +(this.col*100), 0 + (this.row*100), 100, 100); //when I write SQUARE_SIDE here, it is not 100, but smaller?
  }

  keyPressed(){
    if(keyIsDown(37)){
      this.moveLeft();
      console.log('left key is pressed')
      this.draw(playerImage)
      clear ();
    }
  
    if(keyIsDown(38)){
      this.moveUp();
      console.log('right key is pressed')
      this.draw(playerImage)
      clear ();
    }
  
    if(keyIsDown(39)){
      this.moveRight();
      console.log('down key is pressed')
      this.draw(playerImage)
      clear ();
    }
  
    if(keyIsDown(40)){
      this.moveDown();
      console.log('down key is pressed')
      this.draw(playerImage)
      clear ();
    }
  }

}


