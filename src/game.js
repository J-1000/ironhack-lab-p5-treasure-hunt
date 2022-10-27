class Game {
  constructor() {
    this.player = new Player()
  }

  drawGrid() {
    clear()
    const step = SQUARE_SIDE
    // https://editor.p5js.org/rustyrobison/sketches/TFzek4T1v
    for (let i = 0; i <= WIDTH; i += step) {
      line(i, 0, i, HEIGHT);
      line(WIDTH, i, 0, i);
    }
    this.player.draw()
  }
}

class Player {
  constructor(col,row) {
    this.col = 0
    this.row = 0
    this.image
    this.width = 100
		this.height = 100
  }

  moveUp() {
    this.row -= SQUARE_SIDE
  }

  moveDown() {
    this.row += SQUARE_SIDE
  }

  moveLeft() {
    this.col -= SQUARE_SIDE
  }

  moveRight() {
    this.col += SQUARE_SIDE
  }

  draw() {
    image(this.image, this.col, this.row, this.width, this.height)
  }
}
