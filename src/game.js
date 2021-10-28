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
    if (this.x<=800){
      this.x += 100
    }
		
	}
	moveLeft() {
    if (this.x>=100){
		this.x -= 100
    }
	}
	moveUp() {
    if (this.y>=100){
		this.y -= 100
    }
	}
	moveDown() {
    if (this.y<=800){
		this.y += 100
    }
	}
  
}

class Treasure {
  preload() {

    this.image = loadImage('../assets/treasure.png')
    }
    constructor(){
      this.width = 100;
      this.height = 100;
      this.image;
      this.x = (Math.floor(Math.random() * (9 - 0 + 1) + 0))*100;
      this.y = (Math.floor(Math.random() * (9 - 0 + 1) + 0))*100;
    }
    drawTreasure(){
  
      
  
      image(this.image, this.x, this.y, this.width, this.height)
  
      // image(this.image, 500, 500, 100, 100)
    
  
    }

  
}

