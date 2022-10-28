class Game {
constructor() {
  this.player = new Player(0, 0);
  this.treasure = new Treasure();
}

  preload() {
    this.player.image = loadImage("../assets/character-down.png");
    this.player.image2 = loadImage("../assets/character-up.png");
    this.player.image3 = loadImage("../assets/character-left.png");
    this.player.image4 = loadImage("../assets/character-right.png");

    this.treasure.image = loadImage("../assets/treasure.png");
  }

  draw() {
    clear()
    this.drawGrid();
    this.player.draw();
    this.treasure.draw();
  }

  drawGrid() {
    for(let i = 0; i <= WIDTH; i+=SQUARE_SIDE){
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
  }
  
}

class Player {
  constructor(col, row){
    this.col = col;
    this.row = row;
    // this.image;
  }
  
  moveUp(){
    clear();
    if(this.row > 0 ){
      this.row -= SQUARE_SIDE;
    }
  };
  moveDown(){
    clear();
    if(this.row < WIDTH-SQUARE_SIDE){
      this.row += SQUARE_SIDE;
      console.log(this.row);
    }
  };
  moveLeft(){
    clear();
    if(this.col > 0){
      this.col -= SQUARE_SIDE;
    }
    console.log(this.col);
  };
  moveRight(){
    clear();
    if(this.col < HEIGHT-SQUARE_SIDE){
      this.col += SQUARE_SIDE;
    }
    console.log(this.col);
  };

  draw(){
    if(keyCode === 40) {
      image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    } else if(keyCode === 38) {
      image(this.image2, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    } else if(keyCode === 37) {
      image(this.image3, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    } else if(keyCode === 39) {
      image(this.image4, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    } else {
      image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    }
  };
}

class Treasure {
  constructor(){
    this.col = 0;
    this.row = 0;
    this.image;

    this.setRandomPosition();
  }
  
  setRandomPosition(){
    this.col = Math.floor(Math.random()*10)*SQUARE_SIDE;
    this.row = Math.floor(Math.random()*10)*SQUARE_SIDE;
  }

  draw(){
    image(this.image, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);

    if(this.col === game.player.col && this.row === game.player.row){
      this.setRandomPosition();
    }
  }
}


