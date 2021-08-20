class Player {

    constructor(col, row) {

        this.col = col
        this.row = row
        this.image = game.playerImage[0]
    }

    moveUp() {

        if (this.col === 0) {
            this.col = 0
        } else {
            this.col -= 100
            this.image = game.playerImage[1]
        }
    }
    moveDown() {
        if (this.col === 900) {
            this.col = 900
        } else {
            this.col += 100
            this.image = game.playerImage[0]

        }
    }
    moveLeft() {
        if (this.row === 0) {

            this.row = 0
        } else {
            this.row -= SQUARE_SIDE
            this.image = game.playerImage[2]
        }

    }
    moveRight() {

        if (this.row === 900) {

            this.row = 900
        } else {
            this.row += SQUARE_SIDE
            this.image = game.playerImage[3]

        }



    }


    draw() {

        image(this.image, this.row, this.col, 100, 100)


    }


}