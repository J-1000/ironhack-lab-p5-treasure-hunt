class Treasure {
    
    constructor() {
        this.col = 0;
        this.row = 0;
    }

    setRandomPosition() {
        this.row = Math.floor(Math.random()*10)*100;
        this.col = Math.floor(Math.random()*10)*100;
        console.log('*Treasure*  x:' + this.row + ' y:' + this.col);
    }

    drawTreasure() {
        image(game.treasureImage, this.col, this.row , 100, 100);
    }


}