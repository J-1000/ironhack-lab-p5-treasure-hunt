class Player {
    constructor(col, row) {
        this.x = col;
        this.y = row;
        this.image;
    }

    preload() {
        this.playerImage = loadImage('../assets/character-down.png');

    }

    setup() {

        this.image = this.playerImage;

    }

    moveUp() {
        if (this.y > 0) {
            this.y -= 1;
        }

    }
    moveDown() {
        if (this.y < 10) {
            this.y += 1;
        }

    }
    moveLeft() {
        this.x -= 1;
    }
    moveRight() {
        this.x += 1;
    }

    draw() {

        image(this.image, this.x * SQUARE_SIDE, this.y * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);

    }
}


