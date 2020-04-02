class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i <= WIDTH; i += 100) {
      line(i, 0, i, 1000);
      line(0, i, 1000, i);
    }
  }
}
