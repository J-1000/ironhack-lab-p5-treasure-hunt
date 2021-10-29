class Game {
    constructor(player1, player2, treasure) {
        this.player1 = player1;
        this.player2 = player2;
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
        if (this.player1.col === this.treasure.col &&
            this.player1.row === this.treasure.row) {

            const rndX = Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
            const rndY = Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE)) * SQUARE_SIDE;
            treasure.setRandomPosition(rndX, rndY)
            this.player1.increaseScore();
        }

        if (this.player2.col === this.treasure.col &&
            this.player2.row === this.treasure.row) {

            const rndX = Math.floor(Math.random() * (WIDTH / SQUARE_SIDE)) * SQUARE_SIDE;
            const rndY = Math.floor(Math.random() * (HEIGHT / SQUARE_SIDE)) * SQUARE_SIDE;
            treasure.setRandomPosition(rndX, rndY);
            this.player2.increaseScore();
        }

    }

    displayScore() {
    document.getElementById('player1').innerText = `Player1: ${this.player1.score}`
    document.getElementById('player2').innerText = `Player2: ${this.player2.score}`
    }

}


class Player {
    constructor(col, row, score) {
        this.col = col;
        this.row = row;
        this.score = score;
        this.playerImage = playerRight;
    }

    moveUp() {
        if (this.row > 0)
            this.row -= SQUARE_SIDE;
        this.playerImage = playerUp;

    }

    moveDown() {
        if (this.row < HEIGHT - SQUARE_SIDE)
            this.row += SQUARE_SIDE;
        this.playerImage = playerDown;
    }

    moveLeft() {
        if (this.col > 0)
            this.col -= SQUARE_SIDE;
        this.playerImage = playerLeft;

    }

    moveRight() {
        if (this.col < WIDTH - SQUARE_SIDE)
            this.col += SQUARE_SIDE;
        this.playerImage = playerRight;
    }

    draw() {
        image(this.playerImage, this.col, this.row, 100, 100)
    }

    increaseScore() {
        this.score++;
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
