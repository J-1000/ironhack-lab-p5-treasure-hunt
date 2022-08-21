class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //draw a line line(startX, startY, endX, endY)
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
        stroke(0)
        strokeWeight(1)
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
    this.playerImgR = loadImage('../assets/character-right.png')
    this.playerImgL = loadImage('../assets/character-left.png')
    this.playerImgD = loadImage('../assets/character-down.png')
    this.playerImgU = loadImage('../assets/character-up.png')
  }
  moveRight() {
    this.row += 100
    this.playerImgR
  }
  moveLeft() {
    this.row -= 100
    this.playerImgL
  }
  moveUp() {
    this.col -= 100
    this.playerImgU
  }
  moveDown() {
    this.col += 100
  }
  draw() {
    //clear()
    image(this.playerImgD, this.row, this.col, 80, 80)
    image(this.playerImgU, this.row, this.col, 80, 80)
    image(this.playerImgR, this.row, this.col, 80, 80)
    image(this.playerImgL, this.row, this.col, 80, 80)
  }
}

class Treasure {
  preload() {
    this.treasureImage = loadImage('../assets/treasure.png')
  }

  setRandomPosition() {
    // this.col = Math.floor(Math.random() * HEIGHT)
    // this.row = Math.floor(Math.random() * WIDTH)
  }
  draw() {
    image(this.treasureImage, 0, 800, 100, 100)
  }
}
