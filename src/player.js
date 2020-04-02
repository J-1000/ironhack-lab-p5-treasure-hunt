class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.col -= SQUARE_SIDE;
  }
  moveDown() {
    this.col += SQUARE_SIDE;
  }
  moveLeft() {
    this.row -= SQUARE_SIDE;
  }
  moveRight() {
    this.row += SQUARE_SIDE;
  }
}

let player = new Player(0, 0);
console.log(player.col, player.row);

function keyPressed() {
  if (keyCode === 40) {
    player.moveDown();
    console.log('arrow Down');
  }
  if (keyCode === 38) {
    player.moveUp();
    console.log('arrow up');
  }
  if (keyCode === 37) {
    player.moveLeft();
    console.log('arrow left');
  }
  if (keyCode === 39) {
    player.moveRight();
    console.log('arrow right');
  }
}

keyPressed();
