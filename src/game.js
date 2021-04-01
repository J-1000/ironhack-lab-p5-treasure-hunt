class Game {
  constructor() {
    this.treasure = new Treasure();
    this.player = new Player(0, 0);
    this.score = 0;
    this.scoreDom;
  }
  preload() {
    this.player.preload();
    this.treasure.preload();
    this.treasure.setRandomPosition();
  }
  setup() {}

  keyPressed(keyCode) {
    // if we press up we wanna move the player up
    if (keyCode === UP_ARROW) {
      this.player.moveUp(); //38
    }
    if (keyCode === DOWN_ARROW) {
      this.player.moveDown(); //40
    }
    if (keyCode === LEFT_ARROW) {
      this.player.moveLeft(); //37
    }
    if (keyCode === RIGHT_ARROW) {
      this.player.moveRight(); //39
    }

    this.checkPlayerTreasurePosition();
  }
  setPlayerFoundTreasure() {
    this.scoreDom.innerText = this.increaseScore();
    this.treasure.setRandomPosition();
  }
  increaseScore() {
    return this.player.increaseScore();
  }
  getScore() {
    return this.player.getScore();
  }
  resetScore() {
    return this.player.resetScore();
  }
  checkPlayerTreasurePosition() {
    console.log(
      'player treasure XY',
      this.player.col,
      this.player.row,
      this.treasure.col,
      this.treasure.row
    );
    if (
      this.player.col == this.treasure.col &&
      this.player.row == this.treasure.row
    ) {
      this.setPlayerFoundTreasure();
    }
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    clear();
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
    this.treasure.drawTreasure();
    this.player.draw();
  }
}
