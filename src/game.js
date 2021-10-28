class Game {
  constructor() {
    this.player = new Player()
    this.treasure = new Treasure()
    
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    //the grid is 1000 x 1000
    for(let i = 100 ; i<WIDTH; i=i+(WIDTH/10)){
      line(0, i, 1000, i)
      line(i, 0, i, 1000)
    }    
  }
  // preload() {
  //   this.player.imageDown = loadImage('/assets/character-down.png')
  // }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image
  }
  preload() {
    this.image = loadImage('/assets/character-down.png')
  }
  moveUp() {
    if(this.row>0){
      this.row-=100
    }
    clear()
  }
  moveDown() {
    if(this.row<900){
      this.row+=100
    }
    clear()
  }
  moveLeft() {
    if(this.col>0){
      this.col-=100
    }
    clear()
  }
  moveRight() {
    if(this.col<900){
      this.col+=100
    }
    clear()
  }
  draw() {
     image(this.image, this.col, this.row, 100, 100)
     
  }
}
class Treasure {
  constructor(){
    this.image
    
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random() * 9);
    this.row = Math.floor(Math.random() * 9);
    console.log(this.col)
    console.log(this.row)
  }
    preload(){
     this.image = loadImage('/assets/treasure.png')
    }
    draw() {
      image(this.image, this.col, this.row, 100, 100)
      
   }
    
  
}
function keyPressed() {
  if(keyCode===39){
      player.moveRight()
    //  console.log('move right')
  }
  if(keyCode===37){
      player.moveLeft()
  }
  if(keyCode===38){
      player.moveUp()
  }
  if(keyCode===40){
      player.moveDown()
  }
}
// player.draw()
// player.moveDown() // Increase by 1 the value of player.row
// player.moveDown() // Increase by 1 the value of player.row
// player.moveRight() // Increase by 1 the value of player.col
// console.log(player.col, player.row) // => 1,2