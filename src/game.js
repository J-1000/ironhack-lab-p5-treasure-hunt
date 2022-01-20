class Game {
    //contruct new objects: a new player and a treasure.
    constructor() {
        this.player = new Player(0, 0);
        this.treasure = new Treasure();
    }
    drawGrid() {
        //set the black line (0 refers to black color, 255 refers to white)
        stroke(0);
        //set the line width
        strokeWeight(1);
        //Iteration - loop to create grid 10x10 by max width & height
        for (let i = 0; i < WIDTH; i += SQUARE_SIZE) {
            for (let j = 0; j < HEIGHT; j += SQUARE_SIZE) {
                //draw lines by line(x1, y1, x2, y2)
                line(i, 0, i, HEIGHT);
                line(0, j, WIDTH, j);
            }
        }
        //draw the last lines of grid
        line(WIDTH, 0, WIDTH, HEIGHT);
        line(0, HEIGHT, WIDTH, HEIGHT);
    }

    preload() {
        this.player.image = loadImage('assets/character-down.png');
        this.treasure.image = loadImage('assets/treasure.png');
        this.treasure.setRandomPosition(); //can't set in the draw() function because it'll loop all the time.
    }

    draw() {
            //clear() before drawing your player again
            clear()
                //set the white background color
            background(250);
            this.drawGrid();
            this.treasure.drawTreasure();
            this.player.draw();
        }
        //create a new function to check if the player meets the treasure and what's next
    isEnd() {
            return this.treasure.col === this.player.col && this.treasure.row === this.player.row;
        }
        //the game will reset the treasure position when it ends
    reset() {
        this.treasure.setRandomPosition();
    }
}

class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        //should inform the object all the properties which'd be used in constructor and their value can set at null.
        this.image = null;
    }
    moveUp() {
        if (this.row > 0) {
            this.row -= 1;
        }
    }

    moveDown() {
        if (this.row < NUM_ROWS - 1) {
            this.row += 1;
        }
    }

    moveLeft() {
        if (this.col > 0) {
            this.col -= 1;
        }
    }

    moveRight() {
        if (this.col < NUM_COLS - 1) {
            this.col += 1;
        }
    }

    draw() {
        image(this.image, this.col * SQUARE_SIZE, this.row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
}

class Treasure {
    setRandomPosition() {
        this.col = Math.floor(Math.random() * (NUM_COLS));
        this.row = Math.floor(Math.random() * (NUM_ROWS));
    }

    drawTreasure() {
        image(this.image, this.col * SQUARE_SIZE, this.row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
}