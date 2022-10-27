class Game {
  drawGrid() {
    const numberOfRows = 10
    const numberOfColumns = 10
    const step = SQUARE_SIDE
    const positions = []

    // https://editor.p5js.org/rustyrobison/sketches/TFzek4T1v
    for (let i = 0; i <= WIDTH; i += step) {
      line(i, 0, i, HEIGHT);
      line(WIDTH, i, 0, i);
    }
  }
}
