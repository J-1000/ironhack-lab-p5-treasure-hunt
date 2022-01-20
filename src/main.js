const game = new Game()
const player = new Player()

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT)
  canvas.parent('canvas')
}

function draw() {
  game.drawGrid()
  player.draw()
}
function preload() {
  player.preload()
}
function keyPressed() {
  player.keyPressed()
}
