let score = 0
scoreDisplay = document.querySelector("h2 span")


class Game {
  drawGrid() {
   let chartSize = 0

    while (chartSize < WIDTH+1){
      line(0,chartSize,WIDTH,chartSize)
      line(chartSize,0,chartSize,HEIGHT)
      chartSize += SQUARE_SIDE
    }}

  updateScore() {
    if (player.row === treasure.row && player.col === treasure.col) {score ++;
      }
      console.log("leci", score)
      scoreDisplay.innerText = score;    
  }
  }

   class Player {
     constructor() {
       this.col = 100
       this.row = 200
       this.width = 100
       this.height = 100
       this.image
       this.imageUp
     } 

     preload() {
       this.imageDown = loadImage('assets/character-down.png')
       this.imageUp = loadImage('assets/character-up.png')
       this.imageLeft = loadImage('assets/character-left.png')
       this.imageRight = loadImage('assets/character-right.png')
        this.image = this.imageDown
      }
        
      drawPlayer() {
         image(this.image, this.col, this.row, this.width, this.height)
         
        }

      moveUp() {
        this.row -= SQUARE_SIDE
        this.image = this.imageUp
      }

      moveDown() {
         this.row += SQUARE_SIDE
         this.image = this.imageDown
        }

      moveLeft() {
         this.col -= SQUARE_SIDE
         this.image = this.imageLeft
        }

      moveRight() {
         this.col += SQUARE_SIDE
         this.image = this.imageRight
        }
      
      keyPressed() {
        if (keyIsDown(38)) {
          this.moveUp()
         }

          if (keyIsDown(40)) {
           this.moveDown()
         }

          if (keyIsDown(37)) {
           this.moveLeft()
         }

          if (keyIsDown(39)) {
           this.moveRight()
         }
        }
      }


class Treasure {

    constructor() {
      
      this.setRandomPosition();
      this.col
      this.row
      this.width = SQUARE_SIDE;
      this.height = SQUARE_SIDE;
      this.image;
    }

    preload() {
      this.image=loadImage('assets/treasure.png')
   }
  
    setRandomPosition(){
      
      this.col = Math.floor(Math.random()*10)*100
      this.row = Math.floor(Math.random()*10)*100
}

    drawTreasure() {

       image(this.image, this.col, this.row, this.width, this.height);

       if (player.row===treasure.row&&player.col===treasure.col){treasure.setRandomPosition()}
       console.log("pl row: ", player.row, "pl col: ", player.col, "tr row: ", treasure.row, "tr col: ", treasure.col)
  }

}
  


    

