const game = new Game();

function preload(){
  game.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  
  game.draw()

}


