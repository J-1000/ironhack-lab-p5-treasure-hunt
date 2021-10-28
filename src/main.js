const game = new Game();
const player = new Player ();
const treasure = new Treasure ();


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  player.draw();
  game.drawGrid();
  treasure.drawTreasure();
}

function preload(){
  player.preload();
  treasure.preload();
}

function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		player.moveRight();
	}
	if (keyCode === 37) {
		// move the player to the left
		player.moveLeft();
	}
	if (keyCode === 38) {
		// move the player up
		player.moveUp();
	}
	if (keyCode === 40) {
		// move the player down
		player.moveDown();
	}
}


