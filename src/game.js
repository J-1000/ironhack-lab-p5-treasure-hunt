class Game {
  constructor() {
    this.player;
    this.treasure;
    this.playerImg;
    this.treasureImg;
  }

  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      line(0, i * SQUARE_SIDE, HEIGHT, i * SQUARE_SIDE);
      line(i * SQUARE_SIDE, 0, i * SQUARE_SIDE, WIDTH);
    }
  }

  preload() {
    this.playerImg = loadImage("../assets/character-down.png");
    this.treasureImg = loadImage("../assets/treasure.png");

    this.player = this.#castPlayer(this.playerImg);
    this.treasure = this.#castTreasure(this.treasureImg);
  }

  draw() {
    clear();
    this.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.player.moveLeft();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.player.moveRight();
    }

    if (keyIsDown(UP_ARROW)) {
      this.player.moveUp();
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.player.moveDown();
    }
  }

  over() {
    if (
      this.player.col === this.treasure.col &&
      this.player.row === this.treasure.row
    ) {
      this.treasure.image = this.treasureImage;
      this.treasure = this.#castTreasure(this.treasureImg);
    }
  }

  #castPlayer(image) {
    const { randomCol, randomRow } = this.#randomCoordinates();
    return new Player(randomCol, randomRow, image);
  }

  #castTreasure(image) {
    const { randomCol, randomRow } = this.#randomCoordinates();
    return new Treasure(randomCol, randomRow, image);
  }

  #randomCoordinates() {
    let randomCol =
      Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE)) * SQUARE_SIDE;
    let randomRow =
      Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;

    return {
      randomCol,
      randomRow,
    };
  }
}

class Player {
  constructor(col, row, img) {
    this.col = col;
    this.row = row;
    this.image = img;
  }

  moveUp() {
    this.row -= SQUARE_SIDE;
  }

  moveDown() {
    this.row += SQUARE_SIDE;
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
  }

  moveRight() {
    this.col += SQUARE_SIDE;
  }

  drawPlayer() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}

class Treasure {
  constructor(col, row, img) {
    this.col = col;
    this.row = row;
    this.image = img;
  }

  drawTreasure() {
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
