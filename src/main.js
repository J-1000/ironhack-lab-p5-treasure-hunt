const game = new Game();
function preload (){
  game.preload();

}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  
}

function draw() {
  game.draw();
  

}
function keyPressed(){
  if(keyCode===38){
  game.player.moveUp()
  game.treasureHunt()
  }
  if(keyCode===40){
  game.player.moveDown()
  game.treasureHunt()
  }
  if(keyCode===39){
  game.player.moveRight()
  game.treasureHunt()
  }
  if(keyCode===37){
  game.player.moveLeft()
  game.treasureHunt()
  }
}

