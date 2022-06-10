class Game {
  constructor(){
    this.player = new Player();

  }

  preload(){
    this.playerImages = [
      { src: loadImage('../assets/character-up.png'), x: 0, speed: 0 },
      { src: loadImage('../assets/character-down.png'), x: 0, speed: 0 },
      { src: loadImage('../assets/character-left.png'), x: 0, speed: 0 },
      { src: loadImage('../assets/character-right.png'), x: 0, speed: 0 },
    ]
  }
  
  draw(){
    clear()
    this.player.draw();
    this.drawGrid();
   // console.log('this is player draw')
  }


  drawGrid() { 
    stroke(150);
    line(0, 1000, 1000, 1000);
    line(1000, 1000, 1000, 0);
    for (let x = 0; x < width; x += 100) {
      console.log(x);
      line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += 100) {
      line(0, y, width, y);
     
    }
    
  }



  keyPressed(){
    if (keyCode === 38){
       this.player.moveUP
    }
    if (keyCode === 40){
      this.player.moveDown
   }
   if (keyCode === 37){
    this.player.moveLeft
 }
 if (keyCode === 39){
  this.player.moveRight
}

  }

}

class Player {
  constructor(){
    this.x = 500 
    this.y = 500
    this.width = 100
    this.height = 100
  }

  draw(){
    
    if (keyIsDown(38)){
      this.moveUP()
    console.log('this is player moveUP')
    }
   image(this.playerImages[1], this.x, this.y, this.width, this.height)

    
    //console.log('this is player draw in player')
  
  }

  
  moveUP(){
    this.y -= 100
  }
  moveDown(){
    this.y += 100 
  }
  moveLeft(){
    this.x -= 100 
  }
  moveRight(){
    this.x += 100 
  }


}