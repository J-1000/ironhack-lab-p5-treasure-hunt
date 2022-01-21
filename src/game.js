class Game {

  constructor(treasure){

    this.score = treasure.score
  }

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

  constructor(){

    this.col = 100
    this.row = 100
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
    //console.log('running')

    image(this.currentPlayerImage, this.col, this.row, 100, 100)
  }
}

class Treasure{

  constructor(player){

    this.col 
    this.row
    this.treasureImg
    this.player = player
    this.score = 0
  }

  setRandomPosition(){

    this.col = Math.round(Math.random() * 9) * 100
    this.row = Math.round(Math.random() * 9) * 100
  }

  preload(){
    this.setRandomPosition()

    this.treasureImg = loadImage('assets/treasure.png')
  }

  drawTreasure(){

    if(this.player.col === this.col && this.player.row === this.row){
      this.score++
      this.setRandomPosition()
    }
      
      
    image(this.treasureImg, this.col, this.row, 100, 100)
  }
}
  
 
