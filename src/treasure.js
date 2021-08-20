class Treasure {

    constructor() {

        this.y = Math.floor(Math.random() * (10 - 1 + 1) + 1) * 100;
        this.x = Math.floor(Math.random() * (10 - 1 + 1) + 1) * 100;

    }

    // randomizer(){

    //      Math.floor(Math.random() * (max - min + 1) + min);
    // }



    draw() {

        image(game.treasureImage, this.x, this.y, SQUARE_SIDE, SQUARE_SIDE)
        console.log(this.x)
        console.log(this.y)
    }
}