class Player {

    constructor() {
        this.col = 0;
        this.row = 0;
        
        // This is not necessary, but adding it 
        // doesn't change anything 🤔
        //this.image = game.playerImageDown;
    }

    moveUp() {
        if (this.row < 1) {
            alert('You cannot leave board!');
        } else {
            this.row = this.row -= SQUARE_SIDE;
            console.log('Player  x:' + this.row + ' y:' + this.col);
            //this.drawPlayerUp();
            //image(game.playerImageUp, this.col, this.row, 100, 100);
        }
    }

    moveDown() {
        if (this.row > 899) {
            alert('You cannot leave board!');
        } else {
            this.row = this.row += SQUARE_SIDE;
            console.log('Player  x:' + this.row + ' y:' + this.col);
        }
    }

    moveLeft() {
        if (this.col < 1) {
            alert('You cannot leave board!');
        } else {
            this.col = this.col -= SQUARE_SIDE;
            console.log('Player  x:' + this.row + ' y:' + this.col);
        }
    }

    moveRight() {
        if (this.col > 899) {
            alert('You cannot leave board!');
        } else {
            this.col = this.col += SQUARE_SIDE;
            console.log('Player  x:' + this.row + ' y:' + this.col);
        }
    }       

    drawPlayerDown(img) {

        // Why does class Player have access to class Game if in HTML is above?
        image(game.playerImageDown, this.col, this.row, 100, 100); 

        //image(player.image, this.col, this.row, 100, 100); 


        // This does not work >>> this.image is undefined 🤔
        //console.log(this.image);
        //image(this.image, this.col, this.row, 100, 100); 
    }
    

    drawPlayerUp(img) {
        image(game.playerImageUp, this.col, this.row, 100, 100); 
    }


}

