class Game {
  drawGrid() {
    background(220);
	 for (var x = 0; x < WIDTH; x += WIDTH / 10) {
		for (var y = 0; y < HEIGHT; y += HEIGHT / 10) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, HEIGHT);
			line(0, y, WIDTH, y);
		}
	}
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
}
  moveUp(){
    return this.row -= 1
  }
  moveDown(){
    return this.row += 1
  }
  moveLeft(){
    return this.col -= 1
  }
  moveRight(){
    return this.col += 1
  }
  draw(){
    // image(img, this.col, this.row);
    image(img, (this.col * 50 ), (this.row * 50),50,50)
  }
  keyPressed() {
    if (keyCode === 40) {
      this.moveDown()
    //   image(img, (this.col * 100 ), (this.row * 100),100,100)
     }
    if (keyCode === 38) {
      this.moveUp()
    }
    if (keyCode === 39) {
      this.moveRight()
      console.log()
    }
    if (keyCode === 37) {
      this.moveLeft()
    }
  } 
}

class Treasure{
  constructor(col, row) {
    this.col = col;
    this.row = row;
}
  setRandomPosition(){
   this.col = Math.floor(Math.random() * 10);
          this.row = Math.floor(Math.random() * 10)
  }
  drawTreasure(){
    image(img2, (this.col * 50 ), (this.row * 50),50,50)
  }
}

