function setup() {
  createCanvas(400, 400);
  let skin = color(235, 182, 157);
  let hair = color(107, 38, 5);
  let eyes = color(52, 130, 78);
  let shirt = color(199, 32, 40);
  background(52, 192, 235);
  
  //Build Face
  fill(skin);
  ellipse(200,200,100,110);
  
  //Eyes
  fill('white');
  circle(180,190,20);
  circle(220,190,20);
  fill(eyes);
  circle(180,190,5);
  circle(220,190,5);
  
  //Glasses
  noFill();
  square(165,175,30);
  square(205,175,30);
  line(195,190,205,190);
  
  //Smile and eyebrows
  arc(180, 180, 20, 5, PI, TWO_PI);
  arc(220, 180, 20, 5, PI, TWO_PI);
  arc(200,230,50,10,0,PI-TWO_PI);
  
  //Nose
  triangle(200,210,190,215,210,215);
  
  //Hair
  fill(hair);
  rect(165, 140, 70, 20, 20, 20, 20, 20);
  
  //Rockin' bod
  fill(shirt);
  rect(160,250,80,150)
}

function draw() {
 textSize(32);
 text('Aaron Sundstrom', 100, 30);
}
