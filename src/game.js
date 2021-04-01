class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    push()
    for (let i=0; i<11; i++){
      let rect=0;
      const xstart= width/2-(rect*5)
      const xend = width/2+(rect*5)
      line(xstart, i*rect, xend, i*rect)
      line(xstart+i*rect, 0, xstart+i*rect, rect*10)
    }
    pop()

}
}
