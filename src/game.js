class Game {
  constructor() {
    this.player = new Player();
    this.treasure= new Treasure();
  }

  preload() {
    this.player.image = loadImage("/assets/character-down.png");
    this.player.imgUp = loadImage("/assets/character-up.png");
    this.player.imgDown = loadImage("/assets/character-down.png");
    this.player.imgRight = loadImage("/assets/character-right.png");
    this.player.imgLeft = loadImage("/assets/character-left.png");
    this.treasure.treasureImg=loadImage("/assets/treasure.png")
    this.treasure.setRandomPosition()
  }
  draw() {
    clear();
    this.drawGrid();
    this.player.draw();
    this.treasure.drawTreasure();
  }
  drawGrid() {
  
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
      line(0, x, WIDTH, x);
    }
  }
  treasureHunt(){
    if (this.player.row===this.treasure.row && this.player.col===this.treasure.col){
    this.treasure.setRandomPosition();
    this.treasure.drawTreasure()
    }
}
}
class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
    this.imgDown;
    this.imgLeft;
    this.imgRight;
    this.imgUp;
  }
  moveUp() {
    if (this.row > 0) this.row -= 1;
    this.image = this.imgUp;
    draw();
  }
  moveDown() {
    if (this.row < 9) this.row += 1;
    this.image = this.imgDown;
    draw();
  }
  moveLeft() {
    if (this.col > 0) this.col -= 1;
    this.image = this.imgLeft;
    draw();
  }
  moveRight() {
    if (this.col < 9) this.col += 1;
    this.image = this.imgRight;
    this.draw();
  }
  draw() {
    image(this.image, this.col * 100, this.row * 100, 100, 100);
  }
}
class Treasure {
  constructor(){
    this.col;
    this.row;
    this.treasureImg;
  }
  setRandomPosition(){
   this.row=Math.floor(Math.random() * 10);
   if(this.row==0)
   this.row+=1
   this.col=Math.floor(Math.random()*10)
   if(this.col==0)
   this.col+=1

  }
  drawTreasure(){
    image(this.treasureImg, this.col * 100, this.row * 100, 100, 100);
  }
  
}
