class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure();
  }
  drawGrid() {
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i)
      line(i, 0, i, HEIGHT)
    }
  }
  preload() {
    this.player.preload()
    this.treasure.preload()
  }
  draw() {
    this.player.drawPlayer()
    this.treasure.drawTreasure()
  }
  Score() {
    // Add score condition
    // Display score on screen
    // Where do I invoke the score function?
  }

  checkPosition() {
    console.log(this.player.col)
    console.log(this.treasure.col)
    const score = document.querySelector('#score')
    // 11.5 is the difference between the player position and the treasure position
    if (this.player.row - 11.5 === this.treasure.row && this.player.col - 11.5 === this.treasure.col) {
      this.treasure.row = this.treasure.setRandomPosition()
      this.treasure.col = this.treasure.setRandomPosition()
      this.player.score += 5
      score.innerHTML = `<strong>Score: ${this.player.score}</strong>`;
      console.log(this.player.score)
    }


    // console.log(this.player.row)


    // }
    // this.player.checkPlayerColPosition()
    // this.player.checkPlayerRowPosition()

    // console.log(this.player.col)
    // console.log(this.treasure.row)
    // console.log(this.treasure.col)


    // Add a conditional to check for the character and treasure position to relocate the score and increment the score

  }
}

class Player {
  constructor(col, row) {
    this.col = col
    this.row = row
    this.width = SQUARE_SIDE / 2
    this.height = SQUARE_SIDE / 2
    this.image;
    this.score = 0;

  }
  preload() {
    this.image = loadImage('assets/character-down.png')
  }

  drawPlayer() {

    image(this.image, this.row, this.col, this.width, this.height)

    // How can I refactor this?
    // Added this code to restrict player from exiting the grid in all directions.
    if (this.col >= HEIGHT - SQUARE_SIDE / 2) {
      this.col = HEIGHT - (SQUARE_SIDE / 2) - (this.width / 2)
    } else if (this.col <= 0) {
      this.col = SQUARE_SIDE / 4
    }
    if (this.row >= WIDTH - SQUARE_SIDE / 2) {
      this.row = WIDTH - (SQUARE_SIDE / 2) - (this.width / 2)
    } else if (this.row <= 0) {
      this.row = SQUARE_SIDE / 4
    }
    // constraint(){

    // }
  }

  moveUp() {
    this.col -= SQUARE_SIDE;
  }
  moveDown() {
    this.col += SQUARE_SIDE;
  }
  moveLeft() {
    this.row -= SQUARE_SIDE;

  }
  moveRight() {
    this.row += SQUARE_SIDE;
  }

}


class Treasure {

  constructor() {
    this.col = this.setRandomPosition();
    this.row = this.setRandomPosition();
    this.width = SQUARE_SIDE;
    this.height = SQUARE_SIDE;
    this.image;
  }
  setRandomPosition() {

    for (let i = 1; i <= WIDTH - SQUARE_SIDE; i += SQUARE_SIDE) {
      treasurePositionArr.push(i)
    }
    return treasurePositionArr[Math.floor(Math.random() * treasurePositionArr.length)]
    // this.row = treasurePositionArr[Math.floor(Math.random() * treasurePositionArr.length)] + SQUARE_SIDE / 4


  }
  preload() {
    this.image = loadImage('assets/treasure.png')
    // this.setRandomPosition()
  }
  drawTreasure() {
    image(this.image, this.row, this.col, this.width, this.height)

  }
}



