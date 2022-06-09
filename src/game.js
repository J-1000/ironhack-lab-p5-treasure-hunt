class Game {
  constructor() {
    this.player = new Player()
  }
  preload() {
    this.player.image = loadImage('assets/character-down.png')
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x < width; x += width / 10) {
		for (let y = 0; y < height; y += height / 10) {
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		  }
	  }
  }
}
