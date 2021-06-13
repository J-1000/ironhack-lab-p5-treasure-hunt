class Game {
  constructor() {
    this.player = new Player(0, 0);
    this.treasure = new Treasure(500, 500);
    this.score = 0;
  }

  preload() {
    this.player.playerPreload('D');
    this.treasure.treasurePreload();
  }

  drawGrid() {
    clear();
    stroke(0);
    for(let i= 0; i<=1000; i+=100){
      line(0, i, WIDTH, i); //horizontal lines - y changes
      line(i, 0, i, HEIGHT); //vertical lines - x changes    
    }
    this.player.draw();
  }
  drawGame() {
    game.player.draw();
    game.treasure.draw();

    if(game.player.col === game.treasure.col && game.player.row === game.treasure.row)
    {
      game.treasure.setRandomPosition();
      this.score += 1;
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    // this.width = 100;
    // this.height = 100;
    this.image;
  }
  moveRight () {
    this.col += 100;
    this.playerPreload('R')
  }
  moveDown () {
    this.row += 100;
    this.playerPreload('D')
  }
  moveLeft () {
    this.col -= 100;
    this.playerPreload('L')
  }
  moveUp () {
    this.row -= 100;
    this.playerPreload('U')
  }

  playerPreload(direction) {
    switch (direction) {
      case 'U':
        this.image = loadImage('assets/character-up.png');
        break;
      case 'D':
        this.image = loadImage('assets/character-down.png');
        break;
      case 'L':
        this.image = loadImage('assets/character-left.png');
        break;
      case 'R':
        this.image = loadImage('assets/character-right.png');
        break;
    }
  }
  
  draw() {
    this.row = constrain(this.row, 0, (HEIGHT - 100))
    this.col = constrain(this.col, 0, (WIDTH - 100))
    image(this.image, this.col, this.row, 100, 100)
  }
}

class Treasure {
  constructor(col, row) {
    this.row = row;
    this.col = col;
    this.image;
  }

  treasurePreload() {
    console.log('treasuePreload called');
    this.image = loadImage('assets/treasure.png');
  }

  setRandomPosition() {
    console.log("setRandomPosition is called");
    this.row = (Math.floor(Math.random() * 10)) * 100;
    this.col = (Math.floor(Math.random() * 10)) * 100;
    console.log(this.row);
    console.log(this.col);
  }

  draw() {
    image(this.image, this.col, this.row, 100, 100)
  }
}
