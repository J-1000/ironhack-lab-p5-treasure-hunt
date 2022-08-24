class Game { 
	constructor() {
		this.player = new Player(0, 0); 
		this.treasure = new Treasure();
	} 
	drawGrid() {
		for (let i = 0; i <= WIDTH; i += SQUARE_SIZE) {
			line(i, 0, i, HEIGHT);
			line(0, i, WIDTH, i);
		}
	}
	preload() {
		this.player.preload();
		this.treasure.preload();
	}
	draw() {
		this.player.drawPlayer();
		this.treasure.drawTreasure();
	}
	Score() {
		// ADD SCORE
	}
	checkPosition() {
		const score = document.querySelector('#score'); 
		if (this.player.row - 11.5 === this.treasure.row && this.player.col - 11.5 === this.treasure.col) {
			this.treasure.row = this.treasure.setRandomPosition(); 
			this.treasure.col = this.treasure.setRandomPosition();
			this.player.score += 5;
			score.innerHTML = `<strong>Score: ${this.player.score}</strong>`;
		}
	}
}

class Player {
	constructor(col, row) {
		this.col = 0; 
		this.row = 0;
		this.width = SQUARE_SIZE / 2;
		this.height = SQUARE_SIZE / 2;
		this.image;
		this.score = 0;
	}
	preload() {
		this.image = loadImage('assets/character-down.png');
	}
	drawPlayer() {
		image(this.image, this.row, this.col, this.width, this.height)

		if (this.col >= HEIGHT - SQUARE_SIZE / 2) {
			this.col = HEIGHT - (SQUARE_SIZE / 2) - (this.width / 2)
		} else if (this.col <= 0) {
			this.col = SQUARE_SIZE / 4
		}
		if (this.row >= WIDTH - SQUARE_SIZE / 2) {
			this.row = WIDTH - (SQUARE_SIZE / 2) - (this.width / 2)
		} else if (this.row <= 0) {
			this.row = SQUARE_SIZE / 4
		}
	} 
	moveRight() {
		this.row += SQUARE_SIZE
	}
	moveLeft() {
		this.row -= SQUARE_SIZE
	}
	moveUp() {
		this.col -= SQUARE_SIZE
	}
	moveDown() {
		this.col += SQUARE_SIZE
	}
}

class Treasure {
	constructor() {
		this.col = this.setRandomPosition();
		this.row = this.setRandomPosition(); 
		this.width = SQUARE_SIZE;
		this.height = SQUARE_SIZE;
		this.image;
	}
	setRandomPosition() {
		for (let i = 1; i <= WIDTH - SQUARE_SIZE; i += SQUARE_SIZE) {
			treasurePosition.push(i)
		}
		return treasurePosition[Math.floor(Math.random() * treasurePosition.length)]
	}
	preload() {
		this.image = loadImage('assets/treasure.png')
	}
	drawTreasure() {
		image(this.image, this.row, this.col, this.width, this.height)
	}
}