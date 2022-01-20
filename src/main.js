const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent("canvas");
}

function draw() {
    game.draw()
}

function keyPressed() {
    switch (keyCode) {
        case 39:
            game.player.moveRight();
            break;
        case 37:
            game.player.moveLeft();
            break;
        case 38:
            game.player.moveUp();
            break;
        case 40:
            game.player.moveDown();
            break;
    }
    if (game.isEnd()) {
        game.reset();
        const scores = document.querySelector('span').innerText;
        document.querySelector('span').innerText = parseInt(scores) + 1;
    }
}