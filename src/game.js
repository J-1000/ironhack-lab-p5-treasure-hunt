class Game {
  constructor() {
    this.player;
    this.treasure;

    this.treasureImage; 
    this.playerImage;
  }

  drawGrid() {
    // (startX, startY, endX, endY)
    for (let i = 0; i <= 10; i++) {
      line(0, i*SQUARE_SIDE, WIDTH, i*SQUARE_SIDE);
    }

    for (let i = 0; i <= 10; i++) {
      line(i*SQUARE_SIDE, 0, i*SQUARE_SIDE, WIDTH);
      }
    }

  preload() {
		this.playerImage = loadImage('assets/character-down.png');
    this.treasureImage = loadImage('assets/treasure.png');

    this.treasure = createTreasureAtRandomLocation(this.treasureImage);
    this.player = createPlayerAtRandomLocation(this.playerImage);
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

  draw() {
      clear();
      this.drawGrid();
      this.player.draw();
      this.treasure.drawTreasure();

    }

    update() {
      if ((this.player.col === this.treasure.col)  && (this.player.row === this.treasure.row)) {
        this.treasure = createTreasureAtRandomLocation();
        this.treasure.image = this.treasureImage;
      }
    }
  }

class Player {
  constructor(img, col, row) {
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

    draw() {
      image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }
  }

  class Treasure {
    constructor(img, col, row) {
      this.col = col;
      this.row  = row;
      this.image = img;
    }

    drawTreasure()  {
      image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }


    } 

function createTreasureAtRandomLocation(treasureImage){
  let randomHeight = Math.floor(Math.random() * (HEIGHT/SQUARE_SIDE) ) * SQUARE_SIDE;
  let randomWidth = Math.floor(Math.random() * (WIDTH/SQUARE_SIDE) ) * SQUARE_SIDE;
  // you create the object in a random location with the correct image
  let randomTreasure = new Treasure(treasureImage, randomWidth, randomHeight);
  return randomTreasure;
} 

function createPlayerAtRandomLocation(playerImage){
    let randomHeight = Math.floor(Math.random() * (HEIGHT/SQUARE_SIDE) ) * SQUARE_SIDE;
    let randomWidth = Math.floor(Math.random() * (WIDTH/SQUARE_SIDE) ) * SQUARE_SIDE;
    let randomPlayer = new Player(playerImage, randomWidth, randomHeight);
    return randomPlayer;
}
  