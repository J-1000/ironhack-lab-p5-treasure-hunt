
class Game {
  constructor () {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  drawGrid() {
      line(0, 50, 500, 50);
      line(0, 100, 500, 100);
      line(0, 150, 500, 150)
      line(0, 200, 500, 200)
      line(0, 250, 500, 250)
      line(0, 300, 500, 300)
      line(0, 350, 500, 350)
      line(0, 400, 500, 400)
      line(0, 450, 500, 450)

      line(50, 0, 50, 500)
      line(100, 0, 100, 500)
      line(150, 0, 150, 500)
      line(200, 0, 200, 500)
      line(250, 0, 250, 500)
      line(300, 0, 300, 500)
      line(350, 0, 350, 500)
      line(400, 0, 400, 500)
      line(450, 0, 450, 500)

  }

  draw () {
    this.player.draw();
    this.treasure.draw();
  }

  preload() {
    this.player.image = loadImage('../assets/character-down.png');
    this.treasure.image = loadImage('../assets/treasure.png');
  }
}


class Player {
  constructor () {
    this.x = 0;
    this.y = 0;
    this.image;
  }

  draw () {
    this.x = constrain(this.x, 0, (width - 50));
    this.y = constrain(this.y, 0, (height - 50));
    image(this.image, this.x, this.y, 50, 50);

    if (keyIsDown(38)) {
        this.moveUp()
    }
    if (keyIsDown(40)) {
        this.moveDown()
        }
    if (keyIsDown(37)) {
        this.moveLeft()
        }
    if (keyIsDown(39)) {
        this.moveRight()
    }
  }

  moveUp () {
    this.y -= 50;
  }
  moveDown () {
    this.y += 50;
  }
  moveLeft () {
    this.x -= 50;
  }
  moveRight () {
    this.x += 50;
  }
}

class Treasure {
  constructor (){
    this.x = 100;
    this.y = 100;
    this.image;
  }

  draw (){
    this.x = constrain(this.x, 0, (width - 50));
    this.y = constrain(this.y, 0, (height - 50));
    image(this.image, this.x, this.y, 50, 50);

    if (this.x === game.player.x && this.y === game.player.y) {
      this.setRandomPosition();
    }
  }

  setRandomPosition (){
      this.x = Math.floor(Math.random()* 100);
      this.y = Math.floor(Math.random()* 100);
      console.log(this.x )
   }
}

function keyPressed () { 
  if (keyCode === 38) {
    game.player.moveUp();
  }

  if (keyCode === 40) {
    game.player.moveDown();
  }

  if (keyCode === 37) {
    game.player.moveLeft();
  }

  if (keyCode === 39) {
    game.player.moveRight();
  }
}

function drawTreasure () {
  if (game.treasure.x === game.player.x) {
    console.log(game.player.x)
  }
}