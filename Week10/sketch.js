//Variables needed to make the spice

var eye_movement;
var eyebrow_movement;
var xdiag_movement;
var ydiag_movement;

var x_eye = 180;
var y_eyebrows = 180;
var x_diag = 160;
var y_diag = 250;

var size = 32;
var size_movement = 1;



var counter=0;




function setup() {
  createCanvas(400, 400);
  
  eyebrow_movement = floor(random() * 10) + 1;
  eye_movement = floor(random() * 10) + 1;
  xdiag_movement = floor(random() * 10) + 1;
  ydiag_movement = xdiag_movement;
}

function draw() {
  background(52, 192, 235);
  let skin = color(235, 182, 157);
  let hair = color(107, 38, 5);
  let eyes = color(52, 130, 78);
  let shirt = color(199, 32, 40); 

  //Section where I need to think about how to do this

  //So Ill need to make two shapes go left and right, two go up and down, one go diagonally, 


  textSize(size);
  text('Aaron Sundstrom', 100, 30);
  size +=size_movement;
  counter++;
  if(counter > 5)
    {
        size_movement *=-1;
        counter = 0;
    }

  //Build Face
  fill(skin);
  ellipse(200,200,100,110);
  
  //Eyes
  fill('white');
  circle(x_eye,190,20);
  circle(x_eye+40,190,20);
  fill(eyes);
  circle(x_eye,190,5);
  circle(x_eye+40,190,5);
  
  
  if(x_eye >= 360 || x_eye <= 0)
    {
       eye_movement *= -1;
    }

     x_eye += eye_movement;

  
  //Glasses
  noFill();
  square(165,175,30);
  square(205,175,30);
  line(195,190,205,190);
  
  //Smile and eyebrows
  arc(180, y_eyebrows, 20, 5, PI, TWO_PI);
  arc(220, y_eyebrows, 20, 5, PI, TWO_PI);
  arc(200,230,50,10,0,PI-TWO_PI);
  
  if(y_eyebrows >= 400 || y_eyebrows <= 0)
    {
       eyebrow_movement *= -1;
    }

     y_eyebrows += eyebrow_movement;
  
  //Nose
  triangle(200,210,190,215,210,215);
  
  //Hair
  fill(hair);
  rect(165, 140, 70, 20, 20, 20, 20, 20);
  
  //Rockin' bod
  fill(shirt);
  rect(x_diag,y_diag,80,150)

  if(x_diag >= 320 || x_diag <= 0)
    {
       xdiag_movement *= -1;
    }

     x_diag += xdiag_movement;
  
  if(y_diag >= 320 || y_diag <= 0)
    {
       ydiag_movement *= -1;
    }

     y_diag += ydiag_movement;
  
  
  
}