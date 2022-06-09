class Game {
  constructor() {
		this.player = new Player()
	}
  drawGrid() {
   
    stroke(150);
    line(0, 1000, 1000, 1000);
    line(1000, 1000, 1000, 0);
    for (let x = 0; x < width; x += 100) {
      console.log(x);
      line(x, 0, x, height);
      // text(x, x + 1, 12);
    }
    for (let y = 0; y < height; y += 100) {
      line(0, y, width, y);
      //text(y, 1, y + 12);
    }
  }
  
  

  

  preload() {
    this.player.image = loadImage('../assets/character-down.png')
  }
draw() {
    clear()
    this.drawGrid()
    this.player.draw()
  }


}



class Player {
  constructor() {
    this.col = 500
    this.row = 500
    this.width = 100
    this.height = 100
    this.image
    
  }

  draw() {
    this.col
    this.row
    image(this.image)
  }

  moveRight() {}

  moveLeft() {}
  
  moveUp() {}
  
  moveDown() {}

}

