const game = new Game();
const player = new Player(3, 3, 1);
const extraPlayer = new ExtraPlayer(6, 6, 2)
const treasure = new Treasure();

function preload() {
  player.preload();
  extraPlayer.preload();
  treasure.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition();
  // make sure the player position is not the position of the player at the start of the game
  while(treasure.col === (player.col || extraPlayer.col) && treasure.row === (player.row || extraPlayer.row)) {
    treasure.setRandomPosition();
  }
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  extraPlayer.draw();
  treasure.drawTreasure();
  isFound(player);
  isFound(extraPlayer);
  if (player.scores === MAX_SCORES || extraPlayer.scores === MAX_SCORES) {
    reset();
  }
}

function keyPressed() {
  player.keyPressed();
  extraPlayer.keyPressed();
}

function isFound(player) {
  if (player.col === treasure.col && player.row === treasure.row) {
    player.scores++;
    document.querySelector(`#player${player.playerX} span`).innerText = player.scores;
    if (player.scores === MAX_SCORES) {
      setTimeout(() => {
        victory(player);
      }, 100);
    }
    // generate new treasure positions
    treasure.setRandomPosition();
    while(player.col === treasure.col && player.row === treasure.row) {
      treasure.setRandomPosition();
    }
  }
}


function victory(player) {
  const vic = document.createElement("div");
  vic.setAttribute("class", "victory");
  vic.innerHTML = `<img src='assets/treasure.png' alt='treasure'> <h1>Player ${player.playerX} won the game</h1> <h2>Refresh the page to start a new game</h2>`
  // vic.appendChild(img)
  document.querySelector("body").appendChild(vic);
}