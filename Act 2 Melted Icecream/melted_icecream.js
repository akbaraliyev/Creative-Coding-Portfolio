var cream = 150;
var cone1 = -80;
var cone2 = 120;
var cone3 = 130;

function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  line(0,250,400,300);
  
  
  fill(179,79,113);
  ellipse(210,cream,200,150);
  
  fill(244,191,111);
  triangle(250,cone1, 115,cone2,310,cone3);

  
  if(cone1 < 50 && cone2 < 250 && cone3 < 260){
    cone1++;
    cone2++;
    cone3++;
  }
  
  if(cream < 280){
    cream++;

  }else{
    fill(104,33,57);
    ellipse(80,355,50,5);
    ellipse(210, 360, 200, 10);
  }
}