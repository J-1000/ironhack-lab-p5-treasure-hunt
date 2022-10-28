class Game {
  drawGrid() {
    // if (canvas.getContext) {
    //   let context = canvas.getContext('2d');
    //   for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
    //     context.moveTo(x, 0);
    //     context.lineTo(x, HEIGHT);
    //   }
    //   for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
    //     context.moveTo(0, y);
    //     context.lineTo(WIDTH, y);
    //   }
    //   context.stroke();
    // }
    for (let i = 0; i <= WIDTH; i = i + SQUARE_SIDE) {
      line(i, 0, i, HEIGHT)
      line(0, i, WIDTH, i)
    }
  }
  hunt() {
    if (player.col === treasure.col && player.row === treasure.row) {
      treasure.setRandomPosition();
      treasure.draw();
    }
  }

}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
  }


  moveUp() {
    clear()
    this.row -= 1;
    this.image = loadImage("./assets/character-up.png");
    draw()
  }

  moveDown() {
    clear()
    this.row += 1;
    this.image = loadImage("./assets/character-down.png");
    draw()
  }

  moveLeft() {
    clear()
    this.col -= 1;
    this.image = loadImage("./assets/character-left.png");
    draw()
  }

  moveRight() {
    clear()
    this.col += 1
    this.image = loadImage("./assets/character-right.png");
    draw()
  }

  draw() {
    image(this.image, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }

}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
  }

  drawTreasure() {
    image(this.image, this.col * SQUARE_SIDE, this.row * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
  }



}
