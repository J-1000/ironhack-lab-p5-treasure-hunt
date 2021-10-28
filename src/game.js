class Game {
    constructor() {
        this.player = new Player()
        this.treasure = new Treasure()
    }

    preload() {
        this.player.image = loadImage("assets/character-down.png")
        this.treasure.image = loadImage("assets/treasure.png")
        this.treasure.setRandomPosition()
    }

    drawGrid() {
        // Iteration 1
        // Draw the grid
        // https://p5js.org/reference/#/p5/line
        for (var x = 0; x < width; x += width / 10) {
            for (var y = 0; y < height; y += height / 10) {
                stroke(0)
                strokeWeight(1)
                line(x, 0, x, height)
                line(0, y, width, y)
            }
        }

        line(WIDTH, 0, WIDTH, WIDTH)
        line(0, WIDTH, WIDTH, WIDTH)
    }

    draw() {
        clear()
        this.player.drawPlayer()
        this.treasure.drawTreasure()

        if (this.player.col === this.treasure.col && this.player.row === this.treasure.row) {
            this.treasure.setRandomPosition()
        }
    }
}

class Player {
    constructor() {
        this.col = 0
        this.row = 0

        this.width = 50
        this.height = this.width

        this.image

        this.move = this.width
    }

    drawPlayer() {
        image(this.image, this.col, this.row, this.width, this.height)
    }

    moveUp() {
        if (this.row >= 0) {
            this.row -= this.move
        }
    }

    moveDown() {
        this.row += this.move
    }

    moveLeft() {
        this.col -= this.move
    }

    moveRight() {
        this.col += this.move
    }
}

function randomise() {
    let arr = []

    for (i = 0; i <= 500; i++) {
        if (i % 50 === 0 && i !== 500) {
            arr.push(i)
        }
    }

    let randomNumber = Math.floor(Math.random() * 10)

    console.log(arr)

    return arr[randomNumber]
}

class Treasure {
    constructor() {
        this.col = 0
        this.row = 0
        this.image
    }

    setRandomPosition() {
        this.col = randomise()
        this.row = randomise()
    }

    drawTreasure() {
        image(this.image, this.col, this.row, 50, 50)
    }
}