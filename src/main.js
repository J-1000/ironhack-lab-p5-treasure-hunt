const game = new Game()
const player = new Player()

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT)
    canvas.parent("canvas")
}

function preload() {
    game.preload()
}

function draw() {
    game.draw()
    game.drawGrid()
}

function keyPressed() {
    // console.log(key)
    clear()
    if (key === "ArrowUp") {
        if (game.player.row >= 0) {
            game.player.moveUp()
        }
    }
    if (key === "ArrowDown") {
        // clear()
        game.player.moveDown()
    }

    if (key === "ArrowLeft") {
        game.player.moveLeft()
    }

    if (key === "ArrowRight") {
        game.player.moveRight()
    }
}

// keyPressed()
