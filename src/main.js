const game = new Game()
const player = new Player()
const treasure = new Treasure()

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT)
  canvas.parent('canvas')
}

function draw() {
  game.drawGrid()
  player.draw()
  treasure.draw()
}
function preload() {
  player.preload()
  treasure.preload()
}
function keyPressed() {
  if (keyCode === 39) {
    // move the player to the right
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
}
