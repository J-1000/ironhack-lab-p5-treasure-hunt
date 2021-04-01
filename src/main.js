const game = new Game();

const player = new Player(0,5) // (0,0) = Initial position (col, row)


let playerImage;
function preload(){
  playerImage = loadImage('/ironhack-lab-p5-treasure-hunt/assets/character-down.png');
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw(playerImage);
  player.keyPressed();
}


// function keyPressed(){
//   if(keyIsDown(37)){
//     player.moveLeft();
//     console.log('left key is pressed')
//   }

//   if(keyIsDown(38)){
//     player.moveUp();
//     console.log('right key is pressed')
//   }

//   if(keyIsDown(39)){
//     player.moveRight();
//     console.log('down key is pressed')
//   }

//   if(keyIsDown(40)){
//     player.moveDown();
//     console.log('down key is pressed')
//   }
// }


console.log(player.col, player.row) // => 1,2




