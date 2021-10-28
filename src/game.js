class Game {
  drawGrid() {
    
    for (let i=0; i<= 1000; i = i +100){
      line(0, i, 1000, i); 
    }
    for (let i=0; i<= 1000; i = i +100){
      line(i, 0, i, 1000); 
    }
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  }
}

class Player {

  preload() {

    this.image = loadImage('../assets/character-down.png')
    }

  constructor(){
    this.width = 100;
		this.height = 100;
		this.image;
    this.x = 0;
	  this.y = 0;
  }
  draw (){

    clear()

    image(this.image, this.x, this.y, this.width, this.height)

    // image(this.image, 500, 500, 100, 100)
  

  }
  moveRight() {
		this.x += 100
	}
	moveLeft() {
		this.x -= 100
	}
	moveUp() {
		this.y -= 100
	}
	moveDown() {
		this.y += 100
	}
  
}

