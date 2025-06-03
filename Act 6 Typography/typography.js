let font;
let points = [];
let msg = "code is poetry";
let angle = 0;

function preload() {
  //load font
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf")
}

function setup() {
  createCanvas(600, 400);
  background(0);
  
  //convert text to dots
  points =font.textToPoints(msg, 80,200,50, {
    sampleFactor: 0.3,
    simplifyThreshold: 0
  });
  angleMode(DEGREES);
}

function draw() {
  background(30);
  noStroke();
  fill(255,100,150);
  
  //looop through all text points
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    //waving each dot's y coordinate with sin
    let wave = sin(angle + i * 1) * 5;
    ellipse (p.x, p.y + wave,3,3);
  }
  
  //increment angle to animate wave over time
  angle = angle + 6;
  
}