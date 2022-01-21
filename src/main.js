const game = new Game();
let player = new Player(100,100)

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw()
}

function preload(){

  player.preload()
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

