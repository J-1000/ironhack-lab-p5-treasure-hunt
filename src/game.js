class Game { 
  constructor() {
    this.r
    this.g
    this.b
    this.color

  }


  backgroundColor() {
    background(color(255, 255, 34));
  }


  randomBkgColor() {    
    this.r = Math.floor(Math.random() * 255)
    this.g = Math.floor(Math.random() * 255)
    this.b = Math.floor(Math.random() * 255)

    this.color = color(this.r, this.g, this.b)       

    background(this.color);    
  }
  
  drawGrid() { 
          
    let lineX = 100
    let lineY = 100
    for (let i = 0; i < 9; i++) {
      line(lineX, 0, lineX, 1000)
      lineX +=100
    } 
    for (let i = 0; i < 9; i++) {
      line(0, lineY, 1000, lineY)
      lineY +=100
    }    
  }  
}

class Player {
  constructor(col, row) {
  	this.col = col
		this.row = row
		this.width = 80
		this.height = 80
    this.image
		this.imageUp
    this.imagedown
    this.imageLeft
    this.imageRight
    this.score = 0
    
	}

  preload() {
    this.image = loadImage('../assets/character-down.png')
    this.imageUp = loadImage('../assets/character-up.png')
    this.imageDown = loadImage('../assets/character-down.png')
    this.imageLeft = loadImage('../assets/character-left.png')
    this.imageRight = loadImage('../assets/character-right.png')
  }

	draw() {
		image(this.image, this.col, this.row, this.height, this.height)			
	}

	moveRight() {
    this.image = this.imageRight
		this.col += 100
	}
	moveLeft() {
    this.image = this.imageLeft
		this.col -= 100
	}
	moveUp() {
    this.image = this.imageUp
		this.row -= 100
	}
	moveDown() {
    this.image = this.imageDown
		this.row += 100
	} 

  updateScorePlayer1() {
    
    this.score += 10    
    document.querySelector('.score').innerHTML = `Score Player1: ${this.score}`
    
  }

  updateScorePlayer2() {

    this.score += 10
    document.querySelector('.score2').innerHTML = `ScoreP Player2 : ${this.score}`

  }

  
  
  
}

class Treasure {
  constructor() {
    this.col = 910
		this.row = 910     
		this.width = 80
		this.height = 80
    this.image
  }

  preload() {
    this.image = loadImage('../assets/treasure.png')
  }

  draw() {
		image(this.image, this.col, this.row, this.height, this.height)			
	}

  setRandomPosition() {
    this.col = (Math.floor(Math.random() * 10)) * 100 + 10
    this.row = (Math.floor(Math.random() * 10)) * 100 + 10
  }

  
}