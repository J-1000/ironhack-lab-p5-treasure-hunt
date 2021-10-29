const game = new Game();
const player = new Player(0,0);
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
function preload() {
game.preload();

}


function draw() {
  clear();
  game.drawGrid();
  game.draw();
  
  // game.player();

}
function keyPressed() {
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight();
	
	}
	if (keyCode === 37) {
		// move the player to the left
		game.player.moveLeft();
	}
	if (keyCode === 38) {
		console.log(keyCode)
		// move the player up
		game.player.moveUp();
	}
	if (keyCode === 40) {
		console.log(keyCode)
	 	// move the player up
		game.player.moveDown();
	}
}

