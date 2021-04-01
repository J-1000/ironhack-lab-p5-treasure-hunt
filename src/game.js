class Player {
  constructor(col, row) {
    this.col = 0;
    this.row = 0;
    this.score = -1;
    this.imageDown;
    this.imageRight;
    this.imageLeft;
    this.imageUp;
  }
  renderScore() {
    document.querySelector('#score span').innerText = this.score;
  }
  moveUp() {
    if (this.row > 0) this.row -= SQUARE_SIDE
  }
  moveDown() {
    if (this.row < 900) this.row += SQUARE_SIDE
  }
  moveLeft() {
    if (this.col > 0) this.col -= SQUARE_SIDE
  }
  moveRight() {
    if (this.col < 900) this.col += SQUARE_SIDE;
  }

  draw() {
    image(this.imageDown, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    if (keyCode === 38) {
      image(this.imageUp, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
    if (keyCode === 39) {
      image(this.imageRight, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
    if (keyCode === 37) {
      image(this.imageLeft, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
    }
  }
}


class Treasure {
  constructor(col, row) {
    this.col = 0;
    this.row = 0;
    this.image;
  }
  setRandomPosition() {
    let randomRow = Math.floor(Math.random() * 10) * 100;
    let randomCol = Math.floor(Math.random() * 10) * 100;
    this.col = randomRow;
    this.row = randomCol;
  }
  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE)
  }
}


class Game {
  constructor() {
    this.player = new Player(500, 500)
    this.treasure = new Treasure(500, 500)
  }

  preload() {
    this.player.imageDown = loadImage('assets/character-down.png')
    this.player.imageRight = loadImage('assets/character-right.png')
    this.player.imageLeft = loadImage('assets/character-left.png')
    this.player.imageUp = loadImage('assets/character-up.png')
    this.treasure.image = loadImage('assets/treasure.png')
  }

  drawGrid() {
    fill('black');
    // horizontal Lines
    line(0, 100, 1000, 100)
    line(0, 200, 1000, 200)
    line(0, 300, 1000, 300)
    line(0, 400, 1000, 400)
    line(0, 500, 1000, 500)
    line(0, 600, 1000, 600)
    line(0, 700, 1000, 700)
    line(0, 800, 1000, 800)
    line(0, 900, 1000, 900)

    // vertival Lines
    line(100, 0, 100, 1000)
    line(200, 0, 200, 1000)
    line(300, 0, 300, 1000)
    line(400, 0, 400, 1000)
    line(500, 0, 500, 1000)
    line(600, 0, 600, 1000)
    line(700, 0, 700, 1000)
    line(800, 0, 800, 1000)
    line(900, 0, 900, 1000)

    this.player.draw();
    this.treasure.drawTreasure();
    // this.treasure.setRandomPosition();


    if (game.treasure.col === game.player.col && game.treasure.row === game.player.row) {
      this.treasure.setRandomPosition();
      this.player.score++
      this.player.renderScore();
    }
  }
}