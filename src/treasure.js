

class Treasure {
    constractor() {
        this.x;
        this.y;
        //this.image;
    }
    preload() {
        this.treasureImage = loadImage('../assets/treasure.png');
    }
    //setup() {
    //this.image = this.treasureImage;
    //this.setRandomPosition();
    // }
    setRandomPosition() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
    draw() {

        image(this.treasureImage, this.x * SQUARE_SIDE, this.y * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE);
    }
    catchTreasure() {
        if (player.x === treasure.x && player.y === treasure.y) {
            treasure.setRandomPosition();
        }
    }


}
