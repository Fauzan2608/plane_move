let j;
function setup() {
  createCanvas(800,500);

  y = 100;
  j = 0;

}

function draw() {
  var y = 500 - j
  j+=5
  background(220);
  fill(255);
  strokeWeight(3);
  line(125,0,125,499);
  line(275,0,275,499);

  rect(180,y-300,40,100);
  rect(180,y,40,100);
  rect(180,y+300,40,100);


  fill(150);
  strokeWeight(2);
  beginShape(); 
  vertex(170, 250); 
  vertex(170, 200); 
  vertex(170, 70);
  vertex(130, 40);
  vertex(120, 25);
  vertex(200, 40);
  vertex(280, 25);
  vertex(270, 40);
  vertex(230, 70);
  vertex(230, 200);
  vertex(230, 250);
  endShape(CLOSE);
  triangle(230,200,325,170,230,250);
  triangle(170,250,75,170,170,200);
  arc(200,250,60,120,0,22);
  
  beginShape(); 
  vertex(180, 70);
  vertex(190, 30);
  vertex(200, 15);
  vertex(210, 30); 
  vertex(220, 70);
  vertex(170, 70);
  vertex(230, 70);
  endShape(CLOSE);

  fill(255);
  arc(200,270,30,60,0,22);

  strokeWeight(6);
  line(400,0,400,499);

  strokeWeight(3);
  line(525,0,525,499);
  line(675,0,675,499);

  rect(580,400,40,100);
  rect(580,100,40,100);

  fill(150);
  strokeWeight(2);
  beginShape(); 
  vertex(570, 250); 
  vertex(570, 200); 
  vertex(570, 70);
  vertex(530, 40);
  vertex(520, 25);
  vertex(600, 40);
  vertex(680, 25);
  vertex(670, 40);
  vertex(630, 70);
  vertex(630, 200);
  vertex(630, 250);
  endShape(CLOSE);
  triangle(630,200,725,170,630,250);
  triangle(570,250,475,170,570,200);
  arc(600,250,60,120,0,22);
  
  beginShape(); 
  vertex(580, 70);
  vertex(590, 30);
  vertex(600, 15);
  vertex(610, 30); 
  vertex(620, 70);
  vertex(570, 70);
  vertex(630, 70);
  endShape(CLOSE);

  fill(255);
  arc(600,270,30,60,0,22);
}
