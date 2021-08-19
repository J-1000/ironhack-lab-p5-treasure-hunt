const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function preload() {
	game.preload();
}

function draw() {
  game.drawGrid();
  game.draw();
}

function keyPressed() {
	if (![39, 37, 40, 38].includes(keyCode)) {
		alert('wrong keycode');
	}
	if (keyCode === 39) {
		// move the player to the right
		game.player.moveRight();
	}
	if (keyCode === 37) {
		game.player.moveLeft();
	}
	if (keyCode === 40) {
		game.player.moveDown();
	}
	if (keyCode === 38) {
		game.player.moveUp();
	}

	if (game.player.row === game.treasure.row && game.player.col === game.treasure.col) {
		game.treasure.setRandomPosition();
		game.score += 100
		document.querySelector('h2').innerText = `Score : ${game.score}`
	}
	
	if (game.score === 1000) {
		document.querySelector('#canvas').innerHTML = '';
		document.querySelector('h1').innerText = 'You Won!'
	}
}


  
