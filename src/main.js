const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
function preload() {
  game.preload()
} 

function draw() {
  game.drawGrid();
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