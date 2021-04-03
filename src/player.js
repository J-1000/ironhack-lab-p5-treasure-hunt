class Player {
    constructor (playernumber) {
        this.col = constrain(0,0, 1000);
        this.row = 0;
        this.score = 0;
        this.image = playerImg;
        this.number = playernumber;
    };

    draw() {
        image(this.image, this.col, this.row, 100, 100);
        
    }

    moveUp() {
        this.row = constrain(this.row -= 100, 0, 900);
        this.image = loadImage("assets/character-up.png");
    };

    moveDown() {
        this.row = constrain(this.row += 100, 0, 900)
        this.image = loadImage("assets/character-down.png");

    };

    moveLeft() {
        this.col = constrain(this.col -= 100, 0, 900)    
        this.image = loadImage("assets/character-left.png");

    };

    moveRight() {
        this.col = constrain(this.col += 100, 0, 900);
        this.image = loadImage("assets/character-right.png");

        console.log('right')
        console.log(this.col)
    };

    addPoint() {
        this.score++;
        document.querySelector(`#player${this.number}-score>span`).innerText = this.score;
    }
};