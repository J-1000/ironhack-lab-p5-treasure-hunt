class Game {
  constructor() {
		this.player = new Player()
    this.player2 = new Player ()
    this.player2.col = 9*SQUARE_SIDE
    this.treasure = new Treasure()
    this.treasure.setRandomPosition()
    this.socre = 0
    this.score2 = 0
	} 

  drawGrid() {  
    stroke('black')
    for ( let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for ( let y = 0; y <= HEIGHT; y += SQUARE_SIDE)
      line(0, y, WIDTH, y)
      line(x , 0, x, HEIGHT)
    } 
  

  }
  preload() {
		this.player.imageDown = loadImage('../assets/character-down.png')
    this.player.imageLeft = loadImage('../assets/character-left.png')
    this.player.imageRight = loadImage('../assets/character-right.png')
    this.player.imageUp = loadImage('../assets/character-up.png') 
    this.player.image = this.player.imageDown

    this.player2.imageDown = loadImage('../assets/character-down.png')
    this.player2.imageLeft = loadImage('../assets/character-left.png')
    this.player2.imageRight = loadImage('../assets/character-right.png')
    this.player2.imageUp = loadImage('../assets/character-up.png') 
    this.player2.image = this.player.imageDown

    this.treasure.image = loadImage('../assets/treasure.png') 
	}

  draw() {    
    this.player.draw()  
    this.player2.draw() 
  }
  drawTreasure() {    
    this.treasure.draw()
  }

positionChange() {

    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row){
     this.treasure.setRandomPosition() 
     this.socre ++    
     console.log(this.socre)
    }   
    if (this.player2.col === this.treasure.col && this.player2.row === this.treasure.row){
      this.treasure.setRandomPosition() 
      this.socre2 ++    
      console.log(this.socre2)
     }    
  }   

}

class Player {
	constructor() {
		this.col = 0
		this.row = 0 
    this.image
    this.imageDown
    this.imageLeft
		this.imageRight
    this.imageUp

	}
  draw() {   
    image(this.image, this.col + 10 , this.row + 10, 80, 80)           
    }

	moveRight() {
    if( this.col < WIDTH -SQUARE_SIDE ){
		  this.col += SQUARE_SIDE
      this.image = this.imageRight
    }
	}
	moveLeft() {
    if( this.col > 0 ){
		  this.col -= SQUARE_SIDE
      this.image = this.imageLeft
    }
	}
	moveUp() {
    if ( this.row > 0 )
    {
		  this.row -= SQUARE_SIDE
      this.image = this.imageUp
    }
	}
	moveDown() {
    if ( this.row < HEIGHT - SQUARE_SIDE ){
		  this.row += SQUARE_SIDE
      this.image = this.imageDown
    }
	}
}

class Treasure {
  constructor() {
		this.col 
		this.row  
    this.image
  }

  setRandomPosition(){    
    this.col = Math.floor(Math.random()*10)*SQUARE_SIDE
    this.row = Math.floor(Math.random()*10)*SQUARE_SIDE
  }

  
  draw() {  
    image(this.image, this.col , this.row, SQUARE_SIDE, SQUARE_SIDE)
    game.positionChange()
  }
} 






