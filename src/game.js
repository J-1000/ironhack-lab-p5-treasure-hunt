const scoreCount = document.querySelector('h2')
scoreCount.innerText = 'Score: ';


class Game {
  constructor() {
		this.player = new Player(0,0)
		this.treasure = new Treasure()
		
	}

  drawGrid() {
    // Iteration 1
    // horizontal line
		clear()
    for (let i = 0; i <= WIDTH; i += 100) {
      line(0, i, WIDTH, i)
      line(i, 0, i, HEIGHT)
    } 
    // https://p5js.org/reference/#/p5/line
  }
  preload() {
		this.player.image = loadImage('../assets/character-down.png')
		this.treasure.image = loadImage('../assets/treasure.png')
		this.treasure.treasureReset()

	}
	draw() {
		this.player.draw()
		this.treasure.draw()
	}
}

class Player {
  constructor(col, row){
  this.col = col
  this.row = row
  this.width = 100;
  this.height = 100;
  this.image;
  this.score = 0;
  }

  moveRight() {
		if (this.row < 9){
		this.row += 1	
		} 
		
		this.image = loadImage('../assets/character-right.png')
		this.check()
	}
	moveLeft() {
		if (this.row > 0) {
			this.row -= 1
		}
		this.image = loadImage('../assets/character-left.png')
		this.check()
	}
	moveUp() {
		if (this.col > 0 ) {
			this.col -= 1
		}
		this.image = loadImage('../assets/character-up.png')
		this.check()
	}
	moveDown() {
		if (this.col <9 ) {
			this.col += 1
		}
		this.image = loadImage('../assets/character-down.png')
		this.check()
	}

  draw() {
		image(this.image, 100*this.row, 100*this.col, 100, 100)
		// if you keep 'd' (keyCode 68)  pressed the player keeps moving to the right

		if (keyIsDown(68)) {
			this.moveRight()
		}
	}

	check(){
		if (this.col === game.treasure.col && this.row === game.treasure.row) {
			 clear()
			 console.log('cats')
			 game.treasure.treasureReset()
			 this.score += 1;
			 console.log(this.score)
			 scoreCount.innerText = 'Score: ' + this.score;
		}
	}

	// scoreCount(){
	// 	let score = 0
	// 	if (this.col === game.treasure.col && this.row === game.treasure.row) {
	// 		score + 1
	//    }
}

class Treasure {
	constructor() {
		// this.row = Math.floor(Math.random() * 9)
		// this.col = Math.floor(Math.random() * 9)
		this.image
	}

	treasureReset() {
		this.row = Math.floor(Math.random() * 9)
		this.col = Math.floor(Math.random() * 9)
	}
	
	draw(){
		image(this.image, 100*this.row, 100*this.col, 100, 100)
	} 
	// setRandomPosition() 
}





