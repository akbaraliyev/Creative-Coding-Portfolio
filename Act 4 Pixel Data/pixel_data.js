var img, x,y;
function preload(){
  img = loadImage("https://i.ibb.co/XkYkP7JQ/download.jpg");
}

function setup(){
  createCanvas(img.width,img.height); //img.width and img.height creates canvas size based on image size
  noStroke();
  
}

function draw(){
  x = mouseX;
  y = mouseY;
  
  image(img,0,0);
  
  var c = get(x,y);
  fill(c);
  ellipse(x,y,100,100);
}

