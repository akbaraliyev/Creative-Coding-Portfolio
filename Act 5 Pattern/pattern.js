let gridSize = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 360,100,100);
  //draw initial pattern
  drawPattern();
}

function drawPattern() {
  background(0,0,95);
  
  for(let x = 0; x < width; x = x+gridSize) {
    for(let y = 0; y < height; y = y + gridSize) {
      //generating random color hue
      let hue = random(360);
      //set fill colr with random hue
      fill(hue,80,90);
      
      //randomly choosing shape type. 0 or 1
      let shapeType = int(random(2));
      
      if(shapeType === 0) {
        //draw circle in center of grid cell
        ellipse(x + gridSize / 2, y + gridSize / 2, gridSize * 0.5);
      } else{
        
        //draw square in center of grid cell
        rect(x + gridSize /4, y +gridSize / 4, gridSize /2, gridSize / 2);
      }
    }
  }
}

function mousePressed() {
  //redraw pattern when mouse clicked
  drawPattern();
}