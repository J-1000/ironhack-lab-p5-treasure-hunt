class Game {
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
  constructor() {
  	this.x = 500
		this.y = 500
		this.width = 100
		this.height = 100
		this.image
	}

  preload() {
    this.image = loadImage('character-down.png')
  }


	draw() {
		image(this.image, this.x, this.y, this.width, this.height)
		
		
	}
	moveRight() {
		this.x += 10
	}
	moveLeft() {
		this.x -= 10
	}
	moveUp() {
		this.y -= 10
	}
	moveDown() {
		this.y += 10
	}
  
}