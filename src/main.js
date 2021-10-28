const game = new Game();
const player = new Player()
//const treasure = new Treasure()
//const treasure = new Treasure()
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.treasure.setRandomPosition()
}

function draw() {
  game.drawGrid();
  player.draw();
  game.treasure.draw()
  
}
function preload() {

  player.preload()
  game.treasure.preload()
  
  // this.player.imageDown = loadImage('/assets/character-down.png')
  }
//   function keyPressed() {
//     if(keyCode===39){
//         game.player.moveRight()
//     }
//     if(keyCode===37){
//         game.player.moveLeft()
//     }
//     if(keyCode===38){
//         game.player.moveUp()
//     }
//     if(keyCode===40){
//         game.player.moveDown()
//     }
// }