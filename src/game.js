// create class(template/new block of code) Player - encapsulation (key principle of OOP)
// data and functionality of object go into class - this is object template
// function definition inside the class is constructor(){} - it is an object set up

class Game {
  constructor(player) {
    this.player = new Player(0, 0); 
    this.treasure = new Treasure; 
    this.score = 0;
  }

  preload() {
  this.playerImage = loadImage('../assets/character-down.png');
  this.playerImageDown = loadImage("../assets/character-down.png");
  this.playerImageUp = loadImage("../assets/character-up.png");
  this.playerImageLeft = loadImage("../assets/character-left.png");
  this.playerImageRight = loadImage("../assets/character-right.png");
  this.treasureImage = loadImage("../assets/treasure.png")
  }
 
  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      let x = i * SQUARE_SIDE;
      stroke(130, 100, 0)
      line(0, x, 1000, x);
      line (x, 0 , x ,1000)
    }
  }

  drawPlayer() {
  this.player.drawPlayer();
  }

  drawTreasure() {
    this.treasure.drawTreasure();
  }

  drawCollision() {
    if(this.treasure.col === this.player.col && this.treasure.row === this.player.row){
      this.treasure.setRandomPosition();
      document.querySelector('h2').innerText = `Score: ${++this.score * 10}`;
  }
}
}

class Player {
constructor(col, row) {
this.col = col;
this.row = row;
}

drawPlayer() {
image(game.playerImage, this.row*100, this.col*100, 100, 100) 
}

moveUp() {
  game.playerImage = game.playerImageUp;
  this.col <= 0 ? this.col = 0 : this.col--;
}

moveDown() {
  game.playerImage = game.playerImageDown;
  this.col >= 9 ? this.col = 9 : this.col++;
}

moveLeft() {
  game.playerImage = game.playerImageLeft; 
  this.row <= 0 ? this.row = 0 : this.row--;
}


moveRight() {
  game.playerImage = game.playerImageRight;
  this.row >= 9 ? this.row = 9 : this.row++;
}
}

class Treasure {

  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.setRandomPosition();
    }

    setRandomPosition() {
      this.col = Math.floor(Math.random()*10);
      this.row = Math.floor(Math.random()*10);
    }
    
    drawTreasure() {
    image(game.treasureImage, this.row*100, this.col*100, 100, 100) 
    }

}