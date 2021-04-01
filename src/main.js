const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.player.draw();
}

function preload() {
  game.preload();
}

keyPressed() {
  console.log(keyCode);

  switch (key) {
    case 37:
      this.moveLeft();
    case 38:
      this.moveUp();
    case 39:
      this.moveRigth();
    case 40:
      this.moveDown();
  }
}