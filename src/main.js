const game = new Game();


// console.log(score + 'hello')


function preload() {

  game.preLoad();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup()
}



function draw() {
  clear();
  game.draw();
  game.player.draw();

}


// document.querySelector(".score").innerText = game.player.score

function keyPressed() {




  if (keyCode === 39) {

    game.player.moveRight()

  }
  if (keyCode === 37) {

    game.player.moveLeft()
  }
  if (keyCode === 38) {

    game.player.moveUp()
  }
  if (keyCode === 40) {

    game.player.moveDown()
  }

}


// console.log(player)