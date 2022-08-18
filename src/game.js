class Game {
  constructor(){
    this.player = new Player()
    this.treasure = new Treasure()
  }
	drawGrid() {
		function lineX(y) {
			line(0, y, WIDTH, y);
		}

		function lineY(x) {
			line(x, 0, x, HEIGHT);
		}

		for (let i = 0; i <= 10; i++) {
			lineX(50 * i);
			lineY(50 * i);
		}
	}

  preload() {
		this.player.image = loadImage('../assets/character-up.png')
    this.treasure.images = loadImage('../assets/treasure.png')
	}
	// here all the objects are drawn

	draw() {
		clear()
    this.drawGrid()
		this.player.draw()
    this.treasure.drawTreasure()
    this.checkGoal()
	}

  checkGoal(){
    if((this.player.col === this.treasure.col) && (this.player.row === this.treasure.row)){
      this.treasure.setRandomPosition()
    }
  }  
}

class Player {
  constructor(){
    this.col = this.randomPosition()
    this.row = this.randomPosition()
    this.image
  }
  
  draw(){
    image(this.image, this.col, this.row, 50, 50)
  }

  randomPosition(){
    return Math.floor(Math.random() * 10) * 50
  }

  moveUp(){
    if (this.row > 0) {
      this.row -= MOVE
    }
  }

  moveDown(){
    if (this.row < HEIGHT - MOVE) {
      this.row += MOVE
    }
  }

  moveRight(){
    if (this.col < HEIGHT - MOVE) {
      this.col += MOVE
    }
  }

  moveLeft(){
    if (this.col > 0 ) {
      this.col -= MOVE
    }
  }
}

class Treasure {
  constructor(){
    this.col = Math.floor(Math.random() * 10) * 50
    this.row = Math.floor(Math.random() * 10) * 50
    this.images
  }

  setRandomPosition(){
    this.col = Math.floor(Math.random() * 10) * 50
    this.row =Math.floor(Math.random() * 10) * 50
  }

  drawTreasure(){
      image(this.images, this.col, this.row, 50, 50)
    
  }
}
