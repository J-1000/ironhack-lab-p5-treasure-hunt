class Game {
  
  drawGrid() {
    stroke('black');
    strokeWeight(2);
    
    //H line x10
    let HstartY = 0;
    let HendY = 0;
    for (let i = 0; i <= 10; i++) {
      line(0, HstartY, 1000, HendY);
      HstartY += 100;
      HendY += 100;
    }
    
    //V line x10
    let VstartX = 0;
    let VendX = 0;
    for (let j = 0; j <= 10; j++) {
      line(VstartX, 0, VendX, 1000);
      VstartX += 100;
      VendX += 100;
    }
  }
  
  preloadGame() {
    this.playerImageUp = loadImage('../assets/character-up.png');
    this.playerImageDown = loadImage('../assets/character-down.png');
    this.playerImageLeft = loadImage('../assets/character-left.png');
    this.playerImageRight = loadImage('../assets/character-right.png');
    this.treasureImage = loadImage('../assets/treasure.png');
    
    // Can be here as well instead of in main.preload() 🤔
    //treasure.setRandomPosition();
  }
  
  findTreasure() {
    if ( player.col === treasure.col && player.row === treasure.row ) {
      
      treasure.setRandomPosition();
      
      // If I add an alert message, it pops before the
      // player is drawn in that cell.
      //alert('Well done, champ!');
      
      // Works anyway including the line below 🤔
      //treasure.drawTreasure();
    }
  }


}
