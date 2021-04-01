class Game {
  constructor() {}
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
      line(i, 0, i, HEIGHT);
    }
  }
}
