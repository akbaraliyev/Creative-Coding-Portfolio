let pupil = 200;
let direction = 1;

function setup() {
  createCanvas(400, 450);
}

function draw() {
  background(255);
  
  noStroke();
    //horn
  fill(190,174,140);
  triangle(130,90,170,120,150,120);
  triangle(270,90,230,120,250,120);
  
  //head
  fill(78,156, 52);
  ellipse(200,200,200,215);
  
  //eye circle
  fill(255);
  ellipse(200,180,100,100);
  
  //eye
  fill(0,87,32);
  ellipse(pupil,180,60,60);
  
  //eye pupil
  fill(0);
  ellipse(pupil,180,30,30);
  
  //eye light
  fill(255);
  ellipse(pupil+10,155,10,10);
  
  pupil = pupil + direction;
  
  if(pupil > 215 || pupil < 185) {
     direction = direction * -1;
  }
  
  //mouth
  fill(0);
  ellipse(200,260,50,36);
  
  //teeth
  fill(255);
  triangle(186, 264, 176, 267,188,276);
  triangle(200,267,193,278,210,277);
  triangle(214, 264,214,276,225,267);
  
  //arm
  fill(78,156, 52);
  rect(90,200,20,100);
  rect(290,200,20,100);
  
  //hand fingers
  fill(78,156, 52);
  rect(90,300,4,20);
  rect(98,300,4,20);
  rect(106,300,4,20);
  
  rect(290,300,4,20);
  rect(298,300,4,20);
  rect(306,300,4,20);
  
  //hand fingers nail
  fill(190,174,140);
  rect(90,315,4,5);
  rect(98,315,4,5);
  rect(106,315,4,5);
  
  rect(290,315,4,5);
  rect(298,315,4,5);
  rect(306,315,4,5);
  
  //feet
  fill(78,156, 52);
  rect(150,280,20,100);
  rect(220,280,20,100);
  
  //foot
  fill(78,156, 52);
  rect(130,360,20,20);
  rect(240,360,20,20);
  
  //foot fingers
  rect(120,360,10,4);
  rect(120,368,10,4);
  rect(120,376,10,4);
  
  rect(260,360,10,4);
  rect(260,368,10,4);
  rect(260,376,10,4);
  
  //foot fingers nail
  fill(190,174,140);
  rect(120,360,5,4);
  rect(120,368,5,4);
  rect(120,376,5,4);
  
  rect(265,360,5,4);
  rect(265,368,5,4);
  rect(265,376,5,4);
 
}