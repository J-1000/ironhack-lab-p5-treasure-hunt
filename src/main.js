const game = new Game();
game.scoreDom = document.querySelector('#score');

function preload() {
  console.log('preload');
  game.preload();
}

function setup() {
  console.log('setup');
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent('canvas');
  game.setup();
}

function draw() {
  game.drawGrid();
}

function keyPressed() {
  game.keyPressed(keyCode);
}

// player.moveDown(); // Increase by 1 the value of player.row
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveRight(); // Increase by 1 the value of player.col
// console.log(player.col, player.row); // => 1,2
