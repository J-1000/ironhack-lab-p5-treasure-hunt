let player1, treasure, game;

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
    player1 = new Player(0, 0, 0);
    player2 = new Player(0, HEIGHT - SQUARE_SIDE, 0);
    treasure = new Treasure(400, 400);
    game = new Game(player1, player2, treasure);
}

function draw() {
    clear();
    game.drawGrid();
    player1.draw();
    player2.draw();
    treasure.draw();
    game.check();
    game.displayScore();
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
    // up arrow
    if (keyCode === 38) {
        player1.moveUp();
    }
    // down arrow
    if (keyCode === 40) {
        player1.moveDown();
    }
    // left arrow
    if (keyCode === 37) {
        player1.moveLeft();
    }
    // right arrow
    if (keyCode === 39) {
        player1.moveRight();
    }

    // W
    if (keyCode === 87) {
        player2.moveUp();
    }
    // S
    if (keyCode === 83) {
        player2.moveDown();
    }
    // A
    if (keyCode === 65) {
        player2.moveLeft();
    }
    //D
    if (keyCode === 68) {
        player2.moveRight();
    }
}

