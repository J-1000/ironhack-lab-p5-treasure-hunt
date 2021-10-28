class Game {
    constructor(player, treasure) {
        this.player = player;
        this.treasure = treasure;
    }

    drawGrid() {
        // Iteration 1
        // Draw the grid
        // https://p5js.org/reference/#/p5/

        for (let x = 0; x <= HEIGHT; x = x + SQUARE_SIDE) {
            for (let y = 0; y <= WIDTH; y = y + SQUARE_SIDE) {

                line(0, y, WIDTH, y);
            }
            line(x, 0, x, HEIGHT);
        }
    }

    check() {
        if (this.player.col === this.treasure.col &&
            this.player.row === this.treasure.row) {

            const rndX = Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
            const rndY = Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE)) * SQUARE_SIDE;
            treasure.setRandomPosition(rndX, rndY)
        }

    }

}


class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.playerImage = loadImage('assets/character-down.png');
    }

    moveUp() {
        if (this.row > 0)
            this.row -= SQUARE_SIDE;
        this.playerImage = loadImage('assets/character-up.png');

    }

    moveDown() {
        if (this.row < HEIGHT - SQUARE_SIDE)
            this.row += SQUARE_SIDE;
        this.playerImage = loadImage('assets/character-down.png');
    }

    moveLeft() {
        if (this.col > 0)
            this.col -= SQUARE_SIDE;
        this.playerImage = loadImage('assets/character-left.png');

    }

    moveRight() {
        if (this.col < WIDTH - SQUARE_SIDE)
            this.col += SQUARE_SIDE;
        this.playerImage = loadImage('assets/character-right.png');
    }

    draw() {
        image(this.playerImage, this.col, this.row, 100, 100)
    }

}

class Treasure {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }

    setRandomPosition(col, row) {
        this.col = col;
        this.row = row;
    }

    draw() {
        image(treasureImage, this.col, this.row, 100, 100)
    }
}
