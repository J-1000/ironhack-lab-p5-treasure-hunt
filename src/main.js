const game = new Game();

function setup() {
  createCanvas(600, 600);
  background('gray');
}

function draw() {
  game.drawGrid()
}

class Player {
  constructor() {
    this.x = 0
    this.y = 0
    this.image;
  }
  draw() {
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

function keyPressed() {
	if (keyCode === 39) {
		game.player.moveRight()
	}
	if (keyCode === 37) {
		game.player.moveLeft()
	}
	if (keyCode === 38) {
		game.player.moveUp()
	}
	if (keyCode === 40) {
		game.player.moveDown()
	}
}

const player = new Player(0,0)
console.log(player)