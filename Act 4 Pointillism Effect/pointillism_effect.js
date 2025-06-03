var img,x,y;
function preload(){
  img = loadImage("https://i.ibb.co/XkYkP7JQ/download.jpg")
}

function setup() {
  createCanvas(img.width, img.height);
  background(0);
  noStroke();
}

function draw() {
  x = random(width);
  y = random(height);
  var c = img.get(x,y);
  
  fill(c[0],c[1], c[2], 50);
  ellipse(x,y,30,30);
}