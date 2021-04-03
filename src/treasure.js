class Treasure {
    constructor() {
        this.col = 500;
        this.row = 500;
    };

    draw() {
        image(treasureImg, this.col, this.row, 100, 100);
    };

    move() {
        this.col = Math.floor(Math.random()*10) * 100;
        this.row = Math.floor(Math.random()*10) * 100;
    }

    
}