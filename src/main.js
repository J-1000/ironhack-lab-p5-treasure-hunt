const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup()
}

function draw() {
  clear();
  game.drawGrid();
  game.drawGame();
}

function keyPressed() {
  if (keyCode === 38) {
    game.player.moveUp();
  }
  if (keyCode === 40) {
    game.player.moveDown();

  }
  if (keyCode === 37) {
    game.player.moveLeft();
  }
  if (keyCode === 39) {
    game.player.moveRight();
  }
  if (keyCode === 87) {
    game.player2.moveUp();
  }
  if (keyCode === 83) {
    game.player2.moveDown();

  }
  if (keyCode === 65) {
    game.player2.moveLeft();
  }
  if (keyCode === 68) {
    game.player2.moveRight();
  }
}





// OOP

// let img;
// let tr_img;
// let player_x = 0;
// let player_y = 0;
// let treasure_x = 500;
// let treasure_y = 500;
// let score = 0;

// function setup() {
//   console.log("setup is called");
//   let canvas = createCanvas(WIDTH, HEIGHT);
//   canvas.parent("canvas");
// }

// function draw() {
//   console.log("draw is called");
//   clear();
//   stroke(0);

//   for(let i= 0; i<=1000; i+=100)
//   {
//     line(0, i, WIDTH, i);   //horizontal lines - y changes
//     line(i, 0, i, HEIGHT);  //vertical lines - x changes   
//   }

//   image(img, player_x, player_y, 100, 100);
//   image(tr_img, treasure_x, treasure_y, 100, 100);

//   if(player_x === treasure_x && player_y === treasure_y)
//   {
//     treasure_x = (Math.floor(Math.random() * 10)) * 100;
//     treasure_y = (Math.floor(Math.random() * 10)) * 100;
//     score += 1;
//   }
//   document.querySelector('h2').querySelector('span').innerText = score; 

// }

// function preload() {
//   console.log("preload is called");
//   img = loadImage('assets/character-down.png');
//   tr_img = loadImage('assets/treasure.png');
// }

// function keyPressed() {
//   if (keyCode === 38) {
//     player_y -= 100;
//     img = loadImage('assets/character-up.png');
//   }
//   if (keyCode === 40) {
//     player_y += 100;
//     img = loadImage('assets/character-down.png');
//   }
//   if (keyCode === 37) {
//     player_x -= 100;
//     img = loadImage('assets/character-left.png');
//   }
//   if (keyCode === 39) {
//     player_x += 100;
//     img = loadImage('assets/character-right.png');
//   }

// }
