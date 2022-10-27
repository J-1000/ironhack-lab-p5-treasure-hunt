class Game {
  constructor() {
    this.player = new Player()
    this.treasure = new Treasure()
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
    this.treasure.draw()
    this.updateTreasure()
  }

  updateTreasure() {
    if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
      this.treasure.col = this.treasure.setRandomPosition()
      this.treasure.row = this.treasure.setRandomPosition()
    }
  }
}

class Player {
  constructor() {
    this.col = 0
    this.row = 0
    this.image
    this.width = SQUARE_SIDE
		this.height = SQUARE_SIDE
  }

  moveUp() {
    this.image = loadImage("./../assets/character-up.png")
    this.row -= SQUARE_SIDE
    console.log(`column: ${this.col}, row: ${this.row}`)
  }

  moveDown() {
    this.image = loadImage("./../assets/character-down.png")
    this.row += SQUARE_SIDE
    console.log(`column: ${this.col}, row: ${this.row}`)
  }

  moveLeft() {
    this.image = loadImage("./../assets/character-left.png")
    this.col -= SQUARE_SIDE
    console.log(`column: ${this.col}, row: ${this.row}`)
  }

  moveRight() {
    this.image = loadImage("./../assets/character-right.png")
    this.col += SQUARE_SIDE
    console.log(`column: ${this.col}, row: ${this.row}`)
  }

  draw() {
    image(this.image, this.col, this.row, this.width, this.height)
  }
}

class Treasure {
  constructor() {
    this.col = this.setRandomPosition()
    this.row = this.setRandomPosition()
    this.image
    this.width = SQUARE_SIDE
		this.height = SQUARE_SIDE
  }

  draw() {
    image(this.image, this.col, this.row, this.width, this.height)
  }

  setRandomPosition() {
    const nums = []
    const step = SQUARE_SIDE
    for (let i = 0; i <= WIDTH - step; i += step) {
      nums.push(i)
    }
    return nums[Math.floor(Math.random()*nums.length)]
  }
}
