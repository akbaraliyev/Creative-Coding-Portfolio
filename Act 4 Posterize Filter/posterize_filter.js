var img;
function preload(){
  img = loadImage("https://i.ibb.co/XkYkP7JQ/download.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  background(0);
}

function draw() {
  background(0);
  image(img,0,0);
  
  filter(POSTERIZE,3)
}