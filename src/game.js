class Game {

  drawGrid() {

    let currentLineSpacing = 0
    for(let i = 0; i < 11; i++){

      line(0, currentLineSpacing, WIDTH, currentLineSpacing);
      line(currentLineSpacing, 0, currentLineSpacing, HEIGHT)

      currentLineSpacing += SQUARE_SIDE
    }
  }
}

class Player{

  constructor(col, row){

    this.col = col
    this.row = row 
    this.currentPlayerImage
    this.playerLeft
    this.playerRight
    this.playerUp
    this.playerDown
  }

  moveUp(){

    this.row -= 100
  }

  moveDown(){

    this.row += 100
  }

  moveLeft(){

    this.col -= 100
  }

  moveRight(){

    this.col += 100
  }

  preload(){

    this.currentPlayerImage = loadImage('assets/character-down.png')
    this.playerLeft = loadImage('assets/character-left.png')
    this.playerRight = loadImage('assets/character-right.png')
    this.playerUp = loadImage('assets/character-up.png')
    this.playerDown = loadImage('assets/character-down.png')
  }

  draw(){

    image(this.currentPlayerImage, this.col, this.row, 100, 100)
  }
}

class Treasure(){
  
}
  
 
