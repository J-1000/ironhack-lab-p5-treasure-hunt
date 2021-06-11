const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
}

const player1 = new Player(0,0) // (0,0) = Initial position (col, row)
const player2 = new Player(900,900) // (900,900) = Initial position (col, row)
const treasure = new Treasure();

console.log('Initial position Player 1:', player1.col, player1.row)
console.log('Initial position Player 2:', player2.col, player2.row)

function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		player1.moveRight();
    player1.image = loadImage('/assets/character-right.png');
	}
	if (keyCode === 37) {
		// move the player to the left
		player1.moveLeft();
    player1.image = loadImage('/assets/character-left.png');
	}
	if (keyCode === 40) {
		// move the player down
		player1.moveDown();
    player1.image = loadImage('/assets/character-down.png');
	}
	if (keyCode === 38) {
		// move the player up
		player1.moveUp();
    player1.image = loadImage('/assets/character-up.png');
	}

  if (keyCode === 68) {
		// move the player to the right
		player2.moveRight();
    player2.image = loadImage('/assets/character-right.png');
	}
	if (keyCode === 65) {
		// move the player to the left
		player2.moveLeft();
    player2.image = loadImage('/assets/character-left.png');
	}
	if (keyCode === 83) {
		// move the player down
		player2.moveDown();
    player2.image = loadImage('/assets/character-down.png');
	}
	if (keyCode === 87) {
		// move the player up
		player2.moveUp();
    player2.image = loadImage('/assets/character-up.png');
	}
}