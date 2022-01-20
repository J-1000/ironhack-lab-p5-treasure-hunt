const game = new Game();
const player = new Player(10, 10);
const player2 = new Player(110, 10);
const treasure = new Treasure();

function preload() {  
  
  player.preload()
  player2.preload()
  treasure.preload()
  
}

function setup() {
  
  let canvas = createCanvas(WIDTH, HEIGHT);
  
  canvas.parent("canvas");
  
  
}

function draw() {
  
  clear()
  ssgame.randomBkgColor()
  game.drawGrid();
  player.draw();
  player2.draw();
  treasure.draw();
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition()
    player.updateScorePlayer1()
  }
  if (player2.col === treasure.col && player2.row === treasure.row) {
    treasure.setRandomPosition()
    player2.updateScorePlayer2()
            
  }
  
  

}

  

function keyPressed() {
	if (keyCode === 39) {		
		player.moveRight()
        
	}
	if (keyCode === 37) {
		player.moveLeft()
	}
	if (keyCode === 38) {
		player.moveUp()
	}
	if (keyCode === 40) {
		player.moveDown()
	}
  if (keyCode === 68) {		
    player2.moveRight()
    console.log('Hoch')
        
  }
  if (keyCode === 65) {
    player2.moveLeft()
  }
  if (keyCode === 87) {
    player2.moveUp()
  }
  if (keyCode === 83) {
    player2.moveDown()
  }


}

