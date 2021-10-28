class Game {
  constructor() {
		this.player = new Player(0,0)
	}

  drawGrid() {
    // Iteration 1
    // horizontal line
    for (let i = 0; i < 1100; i += 100) {
      line(0, i, 1000, i);
      line(i, 0, i, 1000);
    } 
    // https://p5js.org/reference/#/p5/line
  }
  preload() {
		this.player.image = loadImage('character-up.png')
	}
	draw() {
		clear()
		this.player.draw()
	}
}

class Player {
  constructor(col, row){
  this.col = col
  this.row = row
  this.width = 100;
  this.height = 100;
  this.image = loadImage ('../assets/character-down.png');
  }
  moveRight() {
		this.row += 1
	}
	moveLeft() {
		this.row -= 1
	}
	moveUp() {
		this.col -= 1
	}
	moveDown() {
		this.col += 1
	}


  draw() {
		image(this.image, 100*this.row, 100*this.col, 100, 100)
		// if you keep 'd' (keyCode 68)  pressed the player keeps moving to the right

		if (keyIsDown(68)) {
			this.moveRight()
		}
	}
}




