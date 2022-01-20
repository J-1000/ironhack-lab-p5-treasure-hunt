const game = new Game();
const player = new Player();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  //background(color(255, 204, 0));
}

function draw() {
  game.drawGrid();
  player.draw();

}
