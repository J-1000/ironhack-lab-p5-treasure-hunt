class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(220);
    for (let x = 0; x < WIDTH; x += WIDTH / 10) {
     for (let y = 0; y < HEIGHT; y += HEIGHT / 10) {
       stroke(0);
       strokeWeight(1);
       line(x, 0, x, HEIGHT);
       line(0, y, WIDTH, y);
  }
  
}

class Player {
  constructor(col, row){
    this.col = col;
    this.row = row;
  }

  moveUp() {
    return this.col += 1;
  }
  moveDown() {
    return this.col -= 1;
  }
  moveLeft() {
    return this.row -= 1;
  }
  moveRight() {
    return this.row += 1
  }
// Write the `keyPressed` method that should detect `LEFT_ARROW`, 
//`RIGHT_ARROW`, `UP_ARROW`, `DOWN_ARROW` and move the `player` accordingly.
//Why on Earth should we write this arrow thing if we can just use keyCode?
  draw(){
    img = loadImage('/assets/character-up.png');
    image(img, this.col, this.row);
  }
  keyPressed() {
    if (keyCode === 37) {
      this.moveLeft();
    }
    if (keyCode === 38) {
      this.moveUp();
    }
    if (keyCode === 39) {
      this.moveRight();
    }
    if (keyCode === 40) {
      this.moveDown();
    }
    if (Player.col === Treasure.col && Player.row === Treasure.row) {
      Treasure.setRandomPosition();
    }
  }
}

class Treasure{
  constructor(col, row) {
    this.col = col;
    this.row = row;
}

  const randomize = function() {
    return Math.floor(Math.random() * 10);
  }
  setRandomPosition(){
    this.col = randomize(this.col);
    this.row = randomize(this.row);
  }
  drawTreasure(){
    img2 = loadImage('/assets/treasure.png');
    image(img2, this.col, this.row)
  }
}