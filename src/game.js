class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line


    for (let i = 0; i <= HEIGHT; i += 100 ) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
  };

  draw() {
    this.player1.draw();
    this.player2.draw();
    this.treasure.draw();
    if (this.treasure.col === game.player1.col && this.treasure.row === game.player1.row) {
      this.treasure.move();
      this.player1.addPoint();
    };
    if (this.treasure.col === game.player2.col && this.treasure.row === game.player2.row) {
      this.treasure.move();
      this.player2.addPoint();
    };
    
  }

  setup() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.treasure = new Treasure();
  }

  move(key) {
    switch (key.keyCode) {

      case 38: // UP
        this.player1.moveUp();
      break;

      case 37: // LEFT
        this.player1.moveLeft();     
      break;

      case 39: // RIGHT
        this.player1.moveRight();
      break;

      case 40: // UP
        this.player1.moveDown();
      break;

      case 87: // UP
      this.player2.moveUp();
    break;

    case 65: // LEFT
      this.player2.moveLeft();     
    break;

    case 68: // RIGHT
      this.player2.moveRight();
    break;

    case 83: // RIGHT
      this.player2.moveDown();
    break;

    }
  }

};


