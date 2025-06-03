//array of programming language names
let languages = ["Python","C++","C","Java","C#","Javascript","Go"];
//corresponding popularity percentages for each language
let values = [30.38,14.95,14.72, 14.32, 9.23,8.69,7.71];

//RGB color for each bar
let colors = [
  [255, 99, 132],
  [54, 162, 235],
  [255, 206, 86],
  [75, 192, 192],
  [153, 102, 255],
  [255, 159, 64],
  [100, 255, 100]
];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(12);
  textAlign(CENTER, BOTTOM);
  fill(0);
  
  let barWidth = 50;
  let gap = 30;
  let startX = 50;
  let chartHeight = 300;
  
  for (let i = 0; i < values.length; i++) {
    //map percentage value to bar height
    let barHeight  = map (values[i],0, 35, 0, chartHeight);
    fill(colors[i][0], colors[i][1], colors[i][2]); 
    
    //draw bar as rectangle
    rect(startX +i * (barWidth + gap), height - barHeight - 50, barWidth, barHeight);
    
    //draw percentage text above bar
    fill(0);
    text(values[i] + "%", startX + i * (barWidth +gap) + barWidth /2, height - barHeight - 55);
    
    text(languages[i], startX + i * (barWidth + gap) + barWidth / 2, height - 35);
    
  }
  //chart title text
  textSize(20);
  textAlign(CENTER);
  text("Popular Programming Languages", width / 2 , 30);
}