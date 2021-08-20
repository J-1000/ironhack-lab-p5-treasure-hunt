class Treasure {

    constructor() {

        this.y;
        this.x;

    }

    // randomizer(){

    //      Math.floor(Math.random() * (max - min + 1) + min);
    // }

    randomizer() {

        this.x = Math.floor(Math.random() * (9 - 1 + 1) + 1) * 100;
        this.y = Math.floor(Math.random() * (9 - 1 + 1) + 1) * 100;
    }


    draw() {

        image(game.treasureImage, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE)

    }

    collision(player) {

        let treasureX = this.x
        let treasureY = this.y

        let playerX = player.row
        let playerY = player.col

        if (dist(treasureX, treasureY, playerX, playerY) > 0) {

            return false
        } else {

            return true
        }



    }

}