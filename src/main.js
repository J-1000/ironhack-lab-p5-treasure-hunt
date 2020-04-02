const game = new Game();
let img;
const player = new Player(0, 0);
let DOWN_ARROW = 40;
let UP_ARROW = 38;
let RIGHT_ARROW = 39;
let LEFT_ARROW = 37;
let randomCol;
let randomRow;

function preload() {
  player.img = loadImage("../assets/character-down.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  image(player.img, player.col, player.row, SQUARE_SIDE, SQUARE_SIDE);
}
