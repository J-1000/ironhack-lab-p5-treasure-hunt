const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.drawGame();
}
// 	background(255);
// 	for (let x = 0; x <= width; x += width / 10) {
// 		for (let y = 0; y <= height; y += height / 10) {
// 			stroke(0);
// 			strokeWeight(1);
// 			line(x, 0, x, height);
// 			line(0, y, width, y);
// 		}

// 	}
// }

function preload() {
  game.preload();
}

function keyPressed() {
  //console.log(keyCode);
  if (keyCode === 38) {
      game.player.moveUp();
  }
  if (keyCode === 40) {
      game.player.moveDown();
  }
  if (keyCode === 37) {
      game.player.moveLeft();
  }
  if (keyCode === 39) {
      game.player.moveRight();
  }
}
// function preload() {
//   img = loadImage('assets/character-down.png')
//   tr_img = loadImage('assets/treasure.png')
// }


// }
