const game = new Game();
const player = new Player(0,0);
const treasure = new Treasure();
let counter = 0;

setInterval(function(){
  treasure.col = Math.floor(Math.random() * 10);
  treasure.row = Math.floor(Math.random() * 9);
  treasure.image = loadImage('/assets/treasure.png')
  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
  }
}, 2000);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function preload() {
  player.preload();
  treasure.preload();
}

function keyPressed() {
  
  if (keyCode === 38) {
      player.moveUp();
      player.direction = 'up'
  }
  if (keyCode === 40) {
      player.moveDown();
      player.direction = 'down'
  }
  if (keyCode === 37) {
      player.moveLeft();
      player.direction = 'left'
  }
  if (keyCode === 39) {
      player.moveRight();
      player.direction = 'right'
  }

  if (player.col === treasure.col && player.row === treasure.row) {
    treasure.setRandomPosition();
    counter++;
    document.querySelector('#text span').innerText = counter;
    if (player.col === treasure.col && player.row === treasure.row) {
      treasure.setRandomPosition();
    }
  }
}