const game = new Game();

let treasureImage;
let img;
function preload(){
  img = loadImage('../assets/character-down.png')
  treasureImage = loadImage('../assets/treasure.png')
}





function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent("canvas");
}


function draw() {
  clear();
  game.drawGrid();
  newPlayer.drawPlayer();
  newTreasure.drawTreasure()
function keyPressed (){
  if (keyIsDown(40)){
    Player.moveDown();
  }
     console.log("arrow down");

  if (keyIsDown(38)) {
Player.moveUp();
}
    console.log("arrow up");
   
  if (keyIsDown(39)) {
  
    Player.moveRight();
  }
   console.log("arrow right");
  
  
  if (keyIsDown(37)) {
  
    Player.moveLeft();
  }
    console.log("arrow left");

}
}