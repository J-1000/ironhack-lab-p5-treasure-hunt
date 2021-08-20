class Game {



  setup() {
    this.backGround = new Background()
    this.player = new Player(0, 0)
    this.treasure = new Treasure
    this.treasure.randomizer()

  }

  preLoad() {
    this.playerImage = [
      this.imgDown = loadImage('assets/character-down.png'),
      this.imgUp = loadImage('/assets/character-up.png'),
      this.imgLeft = loadImage('/assets/character-left.png'),
      this.imgRight = loadImage('/assets/character-right.png')
    ]

    this.backGroundimg = loadImage('/assets/grass.png')

    this.treasureImage = loadImage('/assets/treasure.png')

  }

  draw() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let x = 0; x < WIDTH; x += WIDTH / 10) {
      for (let y = 0; y < HEIGHT; y += HEIGHT / 10) {

        stroke(0)
        strokeWeight(1)
        line(x, 0, x, HEIGHT)
        line(0, y, WIDTH, y)
      }
    }

    this.player.draw()
    this.backGround.draw()
    this.treasure.draw()

    if (this.treasure.collision(this.player)) {

      this.treasure.randomizer()
      this.player.score += 10
      document.querySelector(".score").innerText = 'Points:' + game.player.score
    }




  }

}

