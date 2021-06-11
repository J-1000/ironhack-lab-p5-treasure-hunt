class Game {
  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.treasure = new Treasure();
    this.score1Element = document.getElementById('player1-score');
    this.score2Element = document.getElementById('player2-score');
  }

  preload() {
    player1.image = loadImage('/assets/character-down.png');
    player2.image = loadImage('/assets/character-up.png');
    treasure.image = loadImage('/assets/treasure.png');
    treasure.col = treasure.setRandomPosition();
    treasure.row = treasure.setRandomPosition();
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    
    clear();
    for (let pos = 0; pos <= WIDTH; pos += SQUARE_SIDE) {
      line (0, pos, WIDTH, pos); // horizontal lines
      line (pos, 0, pos, HEIGHT); // vertical lines
    }
    image(player1.image, player1.col + 25, player1.row + 25, 50, 50)
    image(player2.image, player2.col + 25, player2.row + 25, 50, 50)
    image(treasure.image, treasure.col + 25, treasure.row + 25, 50, 50)
    console.log('Player 1 currently at position', player1.col, player1.row)
    console.log('Player 2 currently at position', player2.col, player2.row)

    if (player1.col == treasure.col && player1.row === treasure.row) {
      console.log('Player 1 won!!');
      player1.score++;
      game.score1Element.innerText = player1.score;
      treasure.col = treasure.setRandomPosition();
      treasure.row = treasure.setRandomPosition();
    }
    if (player2.col == treasure.col && player2.row === treasure.row) {
      console.log('Player 2 won!!');
      player2.score++;
      game.score2Element.innerText = player2.score;
      treasure.col = treasure.setRandomPosition();
      treasure.row = treasure.setRandomPosition();
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image;
    this.score = 0;
  }

  moveUp() {
    if (this.row > 0) {
      this.row -= SQUARE_SIDE;
    }
  }

  moveDown() {
    if (this.row + SQUARE_SIDE < HEIGHT) {
      this.row += SQUARE_SIDE;
    }
  }

  moveLeft() {
    if (this.col > 0) {
      this.col -= SQUARE_SIDE;
    }
  }

  moveRight() {
    if (this.col + SQUARE_SIDE < WIDTH) {
      this.col += SQUARE_SIDE;
    }
  }
}

class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }

  setRandomPosition() {
    let pos = Math.floor(Math.random() * 10) * SQUARE_SIDE;
    console.log('pos:', pos)
    return pos;
  }

  preload() {
  }

  drawGrid() {
  }
}