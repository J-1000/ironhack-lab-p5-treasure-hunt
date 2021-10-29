// create class(template/new block of code) Player - encapsulation (key principle of OOP)
// data and functionality of object go into class - this is object template
// function definition inside the class is constructor(){} - it is an object set up

class Game {
  constructor(player) {
    this.player = new Player(0, 0); 
  }

  preload() {
  this.playerImage = loadImage('../assets/character-down.png');
  this.playerImageDown = loadImage("../assets/character-down.png");
  this.playerImageUp = loadImage("../assets/character-up.png");
  this.playerImageLeft = loadImage("../assets/character-left.png");
  this.playerImageRight = loadImage("../assets/character-right.png");
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
  this.col -=1
  game.playerImage = game.playerImageUp;
}

moveDown() {
  this.col += 1
  game.playerImage = game.playerImageDown;
}

moveLeft() {
  this.row -= 1
  game.playerImage = game.playerImageDown; 
}

moveRight() {
  this.row += 1
  game.playerImage = game.playerImageDown;
}
}
