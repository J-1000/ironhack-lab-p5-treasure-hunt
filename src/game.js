class Game {
  constructor () {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  drawGrid() {
    line(1000, 0, 0, 0);
    line(1000, 100, 0, 100);
    line(1000, 200, 0, 200);
    line(1000, 300, 0, 300);
    line(1000, 400, 0, 400);
    line(1000, 500, 0, 500);
    line(1000, 600, 0, 600);
    line(1000, 700, 0, 700);
    line(1000, 800, 0, 800);
    line(1000, 900, 0, 900);
    line(0, 1000, 0, 0);
    line(100, 1000, 100, 0);
    line(200, 1000, 200, 0);
    line(300, 1000, 300, 0);
    line(400, 1000, 400, 0);
    line(500, 1000, 500, 0);
    line(600, 1000, 600, 0);
    line(700, 1000, 700, 0);
    line(800, 1000, 800, 0);
    line(900, 1000, 900, 0);
    line(1000, 1000, 1000, 0);
    line(1000, 1000, 0, 1000);
  }
  preload() {
    this.player.image = loadImage('/assets/character-down.png');
    this.treasure.image = loadImage('/assets/treasure.png')
  }
  draw() {
    this.player.draw();
    this.treasure.draw();
  }
  setRandomPosition() {
    this.treasure.setRandomPosition();
  }
}

class Player {
  constructor () {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
    }

  moveUp() {
    this.row -= 100;
    this.image = loadImage('/assets/character-up.png');
  }
  moveDown() {
    this.row += 100;
    this.image = loadImage('/assets/character-down.png');
  }
  moveLeft() {
    this.col -= 100;
    this.image = loadImage('/assets/character-left.png');
  }
  moveRight() {
    this.col += 100;
    this.image = loadImage('/assets/character-right.png');
  }
  draw() {
    this.col = constrain(this.col, 0, (width - 100))
    this.row = constrain(this.row, 0, (height - 100))
    image(this.image, this.col, this.row, this.width, this.height);

    // if (keyCode === 87) {
    //   player.moveUp();
    // }
    // if (keyCode === 83) {
    //   player.moveDown();
    // }
    // if (keyCode === 65) {
    //   player.moveLeft();
    // }
    // if (keyCode === 68) {
    //   player.moveRight();
    // }
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
  }
  draw() {
    this.x = constrain(this.x, 0, (width - 100));
    this.y = constrain(this.y, 0, (height - 100));
    image(this.image, this.col, this.row, this.width, this.height);

    if (this.col === game.player.col && this.row === game.player.row) {
      this.setRandomPosition();
    }
  }

  setRandomPosition() {  
    let randomCol = Math.floor(Math.random() * 10) * 100;
    let randomRow = Math.floor(Math.random() * 10) * 100;  
    this.col = randomCol;
    this.row = randomRow;
    }
}