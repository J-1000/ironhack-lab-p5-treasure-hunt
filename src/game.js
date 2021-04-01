class Game {
  constructor() {
    this.player = new Player(4, 4);
    this.treasure = new Treasure();
  }
  preload () {
    this.player.image = loadImage('../assets/character-down.png');
    this.treasure.image = loadImage('../assets/treasure.png');
    this.treasure.setRandomPosition();
  }
  drawGrid() {
    for (let i = 100; i < 1000; i += 100) {
      line(i, 0, i, 1000)
      line(0, i, 1000, i)
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
    this.image = loadImage('../assets/character-up.png');
    this.row--;
  }
  moveDown() {
    this.image = loadImage('../assets/character-down.png');
    this.row++;
  }
  moveLeft() {
    this.image = loadImage('../assets/character-left.png');
    this.col--;
  }
  moveRight() {
    this.image = loadImage('../assets/character-right.png');
    this.col++;
  }
  draw() {
    this.col = constrain(this.col, 0, 9);
    this.row = constrain(this.row, 0, 9);
    image(this.image, this.col * 100, this.row * 100, 100, 100)
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
  draw() {
    image(this.image, this.col * 100, this.row * 100, 100, 100)
  }
}