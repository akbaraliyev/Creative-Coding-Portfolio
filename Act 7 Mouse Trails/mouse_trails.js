function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  fill(0,15);
  noStroke();
  rect(0,0,width,height);
  
  fill(0,255,255);
  ellipse(mouseX, mouseY, 20,20)
}