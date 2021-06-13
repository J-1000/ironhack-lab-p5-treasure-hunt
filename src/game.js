class Game {

  constructor () {
    //create treasure and score
    this.score = 0;
    this.score2 = 0;
  }

  drawGrid() {
    clear();
    stroke(0);

    for(let i= 0; i<=1000; i+=100)
  {
    line(0, i, WIDTH, i);   //horizontal lines - y changes
    line(i, 0, i, HEIGHT);  //vertical lines - x changes   
  }
  }

  setup() {
    this.player = new Player(0,0);
    this.treasure = new Treasure();
    this.player2 = new Player2(900,900);
    this.player.image = loadImage('../assets/character-down.png');
    this.treasure.image = loadImage('../assets/treasure.png');
    this.player2.image = loadImage('../assets/character-up.png');
  }

  preload(){
    
  }

  drawGame() {
    this.player.draw()
    this.player2.draw()
    this.treasure.drawTreasure()

    if ( this.player.col === this.treasure.col && this.player.row === this.treasure.row ) {

      this.treasure.setRandomPosition();

      this.score += 1;
    }
    if ( this.player2.col === this.treasure.col && this.player2.row === this.treasure.row ) {

      this.treasure.setRandomPosition();

      this.score2 += 1;
    }
    document.querySelector('#player1score').querySelector('span').innerText = this.score; 
    document.querySelector('#player2score').querySelector('span').innerText = this.score2; 

  }
}

class Player {

  constructor(col,row) {

    this.col = col;
    this.row = row;
    this.image;

  }

  moveUp() {
    this.row -= 100;
    this.playerPreload('U')
  }

  moveDown() {
    this.row += 100;
    this.playerPreload('D')
  }

  moveLeft() {
    this.col -= 100;
    this.playerPreload('L')
  }

  moveRight() {
    this.col += 100;
    this.playerPreload('R')
  }

  playerPreload (direction) {

    switch(direction) {
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
        this.image = loadImage('assets/character-right.png')
    }

  }

  draw() {
    this.row = constrain(this.row, 0, (HEIGHT - 100))
    this.col = constrain(this.col, 0, (WIDTH - 100))
    image(this.image, this.col, this.row, 100, 100);
  }
}


class Treasure {

  constructor () {
    this.col = (Math.floor(Math.random() * 9) * 100);
    this.row = (Math.floor(Math.random() * 9) * 100);
    this.image;
  }

  setRandomPosition() {
    this.col = (Math.floor(Math.random() * 9) * 100);
    this.row = (Math.floor(Math.random() * 9) * 100);
  }

  drawTreasure() {
    image(this.image, this.col, this.row, 100, 100);
  }
}


// add second player!!

class Player2 {

  constructor(col,row) {

    this.col = col;
    this.row = row;
    this.image;

  }

  moveUp() {
    this.row -= 100;
    this.player2Preload('U')
  }

  moveDown() {
    this.row += 100;
    this.player2Preload('D')
  }

  moveLeft() {
    this.col -= 100;
    this.player2Preload('L')
  }

  moveRight() {
    this.col += 100;
    this.player2Preload('R')
  }

  player2Preload (direction) {

    switch(direction) {
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
        this.image = loadImage('assets/character-right.png')
    }

  }

  draw() {
    this.row = constrain(this.row, 0, (HEIGHT - 100))
    this.col = constrain(this.col, 0, (WIDTH - 100))
    image(this.image, this.col, this.row, 100, 100);
  }
}