var playerx=500;
var playery = 970;
var sprint =0;
var mouseplaceX=0;
var mouseplaceY=0;

var enemyset1x = 50;
var enemyset2x = 50;
var negenemyset1x = 950;
var negenemyset2x = 950;

var enemyset1xspeed = 50;
var enemyset2xspeed = 50;






function setup() {
  createCanvas(1000, 1000);

}


function draw() {
  
  //Cool sick background
  background(84, 89, 85);
  fill(280,280,280)
  rect(0,700,1000,10);
  rect(0,340,1000,10);
  fill(255, 204, 0);
  rect(0,500,1000,10);
  rect(0,540,1000,10);
  
  
  //How to Play text
  textAlign(CENTER);
  textSize(15)
  text("Welcome to my legally distinct video game where an hereto unnamed blue hedgehog must 'frog' his way across a nonsensical highway of indeterminate origin. The controls are simple! WASD to move, shift to sprint and a click of the mouse will allow you to place an ethereal roadblock that does not do anything as of yet.", 0,800,250,1000)
  
  //Drawing the finish line
  rectMode(CENTER);
  fill('white');
  rect(500,100,100,30)
  fill('black');
  text("FINISH",500,105);
  rectMode(CORNER);
  
  //Checking for the W
  if ((playerx > 450 && playerx < 550) && (playery < 150 && playery > 50)){
    rectMode(CENTER);
    textSize(30);
    fill('gold')
    text("YOU WIN! PLEASE DONT TELL SEGA OR KONAMI",500,50);
    rectMode(CORNER);
  }
  
  
  //Player and roadblock on click
  fill('blue');
  circle(playerx,playery,50);
  fill('orange');
  rect(mouseplaceX,mouseplaceY,10,50);
  playerMovement();
  
  
  //Enemies and their movement hither and yon
  
  //Function for a more interesting and dumb random speed
  function setRandSpeed(){
    var low = 10;
    var high = 45;
    var result = Math.floor(low + (Math.random() * (high-low + 1)));
    return result
  }
  

  //Scalable enemies, can make as many as we want and just have to set a y value.
  fill('red');
  square(enemyset1x,350,50);
  square(negenemyset1x,450,50);
  fill('green');
  square(enemyset2x,550,50);
  square(negenemyset2x, 650, 50);
  
  //Gotta go a set speed determined at the start of every frame!
  enemyset1x += enemyset1xspeed;
  negenemyset1x -= enemyset1xspeed;
  enemyset2x += enemyset2xspeed;
  negenemyset2x -= enemyset2xspeed;
  
  //Checking to see if evil squares reach the edge and if they do send them to the abyss on the otherside.
  
  if (enemyset1x > 1000){
    enemyset1x = -50;
    setRandSpeed();
    enemyset1xspeed = setRandSpeed();
    
  }
  
  if (enemyset2x > 1000){
    enemyset2x = -50;
    setRandSpeed();
    enemyset2xspeed = setRandSpeed();
  }
  if (negenemyset1x < 0){
    negenemyset1x = 1050;
    setRandSpeed();
    enemyset1xspeed = setRandSpeed();
  }
  
  if (negenemyset2x < 0){
    negenemyset2x = 1050;
    setRandSpeed();
    enemyset2xspeed = setRandSpeed();
  }
}
  
  
  
  //Setting up char movement (dont touch its working now)
  function playerMovement(){
    //Sprinting if LeftShift is held down
    if (keyIsDown(16)){
      sprint = 5;
    }else{
      sprint = 0;
    }
    if (keyIsDown(83)){
      playery += (5 + sprint);
    }
    if (keyIsDown(87)){
      playery -= (5 + sprint);
    }
    if (keyIsDown(68)){
      playerx += (5 + sprint);
    }
    if (keyIsDown(65)){
      playerx -= (5 + sprint);
    }
  }

  
  function mouseClicked() 
    {  
      mouseplaceX = mouseX;
      mouseplaceY = mouseY;
    }
  
  
  
