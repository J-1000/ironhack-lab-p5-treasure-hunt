class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //draw a line line(startX, startY, endX, endY)
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        stroke(0)
        line(x, 0, x, HEIGHT)
        line(0, y, WIDTH, y)
      }
    }
  }
}
class Player {
  constructor() {
    this.col = 0
    this.row = 0
    // this.image =
  }
  preload() {
    this.playerR = loadImage('assets/character-right.png')
    this.playerL = loadImage('assets/character-left.png')
    this.playerD = loadImage('assets/character-down.png')
    this.playerU = loadImage('assets/character-up.png')
  }
  moveRight() {
    this.row += 1
  }
  moveLeft() {
    this.row -= 1
  }
  moveUp() {
    this.col -= 1
  }
  moveDown() {
    this.col += 1
  }
  draw() {
    image(this.playerD, this.row, this.col, 100, 100)
  }
  keyPressed() {
    if (keyCode === 39) {
      // move the player to the right
      this.playerR.moveRight()
    }
    if (keyCode === 37) {
      this.playerL.moveLeft()
    }
    if (keyCode === 38) {
      this.playerU.moveUp()
    }
    if (keyCode === 40) {
      this.playerD.moveDown()
    }
  }
}
