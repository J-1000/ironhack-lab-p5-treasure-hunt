class Game {
  drawGrid() {
    for (let x = 0; x < 600; x+=50){
    line(0,x,600,x)}
    for (let y = 0; y < 600; y+=50){
      line(y,600,y,0)
    } 
    
  }
}



class Player {
  constructor(col, row) {
		this.width = 30
		this.height = 40
    this.col = col
    this.row = row
}

moveRight(){
  this.col += 50
}
moveLeft(){
  this.col -= 50
}
moveUp(){
  this.row -=50
}
moveDown(){
  this.row +=50
}

preload(){
  this.playerImage = loadImage('assets/character-down.png')
}

draw(){
  image(this.playerImage, this.col, this.row, this.width, this.height)
}

}

class Treasure {
  constructor(col,row){
    this.width = 50
    this.height = 40
    this.col = col
    this.row = row
  }

  preload(){
    this.treasureImage = loadImage('assets/treasure.png')
  }

  draw(){
    image(this.treasureImage,this.col,this.row,this.width,this.height)
  }

  setRandomPosition(){
    const choices = [50,150,200,250,300,350,400,450,500,550]
    this.col = random(choices)
    this.row = random(choices) 
  }
}

