//const game = new Game();
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  //game.drawGrid();
}
class player {
  constructor(col, row, ctx) {
    var img = new Image();
    img.style.display = "none";
    img.src = "/assets/character-down.png";

    this.img = img;
    document.body.appendChild(img);
    img.onload = () => {
      this.img = img;
      this.draw();
    };
    this.ctx = ctx;
    //this.image = image;
    this.col = col;
    this.row = row;
  }
  draw() {
    this.ctx.drawImage(this.img, this.col, this.row);
  }

  moveUp() {
    this.ctx.clearRect(this.col - 5, this.row - 5, 45, 45);
    // var UImg = new Image();
    // UImg.src = "./assets/character-up.png";
    if (this.row - 50 > 0) this.row = this.row - 50;
    this.draw();
    // UImg.onload = () => {
    // this.draw(UImg);
    // }
  }
  moveDown() {
    this.ctx.clearRect(this.col - 5, this.row - 5, 45, 45);
    if (this.row + 50 < 500) this.row = this.row + 50;
    this.draw();
    // var DImg = new Image();
    // DImg.src = "/assets/character-down.png";
    // DImg.onload = () => {
    //   this.draw(DImg);
    // }
  }
  moveLeft() {
    this.ctx.clearRect(this.col - 5, this.row - 5, 45, 45);
    if (this.col - 50 > 0) this.col = this.col - 50;
    this.draw();
    // var LImg = new Image();
    // LImg.src = "/assets/character-left.png";
    // LImg.onload = () => {
    // this.draw(LImg);
    // };
  }
  moveRight() {
    this.ctx.clearRect(this.col - 5, this.row - 5, 45, 45);
    if (this.col + 50 < 500) this.col = this.col + 50;
    this.draw();
    // var RImg = new Image();
    // RImg.src = "/assets/character-right.png";
    // RImg.onload = () => {
    // this.draw(RImg);
    // };
  }
}
class Treasure {
  constructor(ctx) {
    this.col = 0;
    this.row = 0;
    this.ctx = ctx;
    var img = new Image();
    img.style.display = "none";
    img.src = "/assets/treasure.png";

    this.img = img;
    document.body.appendChild(img);
    img.onload = () => {
      this.img = img;
      this.drawTreasure();
    };
  }
  setRandomPosition(ctx) {
    this.ctx;
    this.col = Math.floor(Math.random() * 10) * 50 + 8;
    this.row = Math.floor(Math.random() * 10) * 50 + 7;
    console.log(this.col, "*", this.row);
    console.log("************");
  }
  drawTreasure() {
    this.ctx.drawImage(this.img, this.col, this.row, 40, 40);
  }
}
var drawGrid = function (w, h, ctx) {
  var ctx;
  ctx.canvas.width = w;
  ctx.canvas.height = h;
  for (x = 0; x <= w; x += 50) {
    for (y = 0; y <= h; y += 50) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  }
};
// run codes when document loaded
window.addEventListener("DOMContentLoaded", () => {
  // load player image
  const ctx = document.getElementById("myCanvas").getContext("2d");
  drawGrid(500, 500, ctx);
  let player1 = new player(8, 7, ctx);
  //******************* */
  keyPress(player1);
  tr = new Treasure(ctx);
  tr.setRandomPosition();
});
function keyPress(plyr) {
  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "38") {
      console.log("up");
      plyr.moveUp();
    } else if (e.keyCode == "40") {
      console.log("down");
      plyr.moveDown();
      // down arrow
    } else if (e.keyCode == "37") {
      console.log("left");
      plyr.moveLeft();
      // left arrow
    } else if (e.keyCode == "39") {
      console.log("right");
      plyr.moveRight();
      // right arrow
    }
  }
}
