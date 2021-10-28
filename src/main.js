let player, treasure, game;

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    player = new Player(0, 0);
    treasure = new Treasure(400, 400);
    game = new Game(player, treasure);
}

function draw() {
    clear();
    game.drawGrid();
    player.draw();
    treasure.draw();
    game.check();
}

let playerRight;
let playerLeft;
let playerUp;
let playerDown;
let treasureImage;

function preload() {
    playerRight = loadImage('assets/character-right.png');
    playerLeft = loadImage('assets/character-left.png');
    playerUp = loadImage('assets/character-up.png');
    playerDown = loadImage('assets/character-down.png');
    treasureImage = loadImage('assets/treasure.png');
}

function keyPressed() {
    if (keyCode === 38) {
        player.moveUp();
    }

    if (keyCode === 40) {
        player.moveDown();
    }

    if (keyCode === 37) {
        player.moveLeft();
    }
    if (keyCode === 39) {
        player.moveRight();
    }
}

