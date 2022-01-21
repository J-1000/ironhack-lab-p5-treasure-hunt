let player = new Player()
let treasure = new Treasure(player)
const game = new Game(treasure);


let scoreElement = document.querySelector('#score')


function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {

  game.drawGrid();
  player.draw()
  treasure.drawTreasure()
  scoreElement.innerHTML = treasure.score
}

function preload(){

  player.preload()
  treasure.preload()
}

function keyPressed(){

  clear()

  if(keyCode === UP_ARROW){

    player.moveUp()
    player.currentPlayerImage = player.playerUp
  }
    
    
  else if(keyCode === DOWN_ARROW){

    player.moveDown()
    player.currentPlayerImage = player.playerDown
  }
  
  else if(keyCode === LEFT_ARROW){

    player.moveLeft()
    player.currentPlayerImage = player.playerLeft
  }

  else if(keyCode === RIGHT_ARROW){

    player.moveRight()
    player.currentPlayerImage = player.playerRight
  }
}

