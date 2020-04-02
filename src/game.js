class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let x = i * 100;
        let y = j * 100;
        stroke(10);
        rect(x, y, 100, 100);
      }
    }
  }
}
