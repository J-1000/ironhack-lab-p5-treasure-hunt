class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  //  this.player.playerImages =[]
  console.log(this.player)
  }

  preload() {

    this.player.playerImages = [
      loadImage('../assets/character-up.png'),
      loadImage('../assets/character-down.png'),
      loadImage('../assets/character-left.png'),
      loadImage('../assets/character-right.png')
    ]
    this.treasure.treasureImage = loadImage('../assets/treasure.png')
  }


  drawGrid() {
    stroke(150);
    line(0, 1000, 1000, 1000);
    line(1000, 1000, 1000, 0);
    for (let x = 0; x < width; x += 100) {
      console.log(x);
      line(x, 0, x, height);

    }
    for (let y = 0; y < height; y += 100) {
      line(0, y, width, y);

    }
  }

  draw(){
    clear()
    this.player.draw();
    this.drawGrid();

  //  this.treasure.drawTreasure();
   // console.log('this is player draw')
  }
}



class Player {
  constructor() {
    this.x = 500
    this.y = 500
    this.width = 100
    this.height = 100
    this.playerImages
    console.log(this.playerImages)
    //this.image= this.playerImages[0]
  }

  draw() {
    image(this.image, this.x, this.y, this.width, this.height)
  }

  moveUP() {
    this.y -= 100
    
  // this.image = this.playerImages[0]
  }
  moveDown() {
    this.y += 100
   // this.image = this.playerImages[1]
  }
  moveLeft() {
    this.x -= 100
   // this.image = this.playerImages[2]
  }
  moveRight() {
    this.x += 100
  //  this.image = this.playerImages[3]
  }
}





class Treasure{
  constructor() {
    this.x = 300
    this.y = 200
    this.width = 100
    this.height = 100
  }
  setRandomPosition(){}

  drawTreasure() {
    image(this.treasureImage, this.x, this.y, this.width, this.height)
  }

}


