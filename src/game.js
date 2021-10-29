// create class(template/new block of code) Player - encapsulation (key principle of OOP)
// data and functionality of object go into class - this is object template
// function definition inside the class is constructor(){} - it is an object set up

class Game {
  constructor(player) {
    this.player = new Player(0, 0); 
  }

  preload() {
  this.playerImage = loadImage('../assets/character-down.png')
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
  image(game.playerImage, this.row*50, this.col*100, 100, 100);
  console.log('hello')
}

}
