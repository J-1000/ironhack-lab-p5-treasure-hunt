const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function preload(){
  game.preload();
}



function draw() {
  game.drawGrid();
  game.draw();  
}

function keyPressed() {
	if (keyCode === 38) {
		game.player.moveUP()
    
	}
  if (keyCode === 40) {
		game.player.moveDown()
    
	}
  if (keyCode === 37) {
		game.player.moveLeft()
   
    
	}
  if (keyCode === 39) {
		game.player.moveRight()
   
	}
}

