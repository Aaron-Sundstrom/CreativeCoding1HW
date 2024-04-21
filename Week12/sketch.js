
//Variables needed for play
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

//Click the mouse yo
function mouseClicked() {  
  mouseplaceX = mouseX;
  mouseplaceY = mouseY;
}

//Draw that sick sick background
function drawbackground(){
  background(84, 89, 85);
  fill(280,280,280)
  rect(0,700,1000,10);
  rect(0,340,1000,10);
  fill(255, 204, 0);
  rect(0,500,1000,10);
  rect(0,540,1000,10);
}

//Tell the human how to interact
function howToPlay() {
  fill('gold');
  textAlign(CENTER);
  textSize(15)
  text("Welcome to my legally distinct video game where an hereto unnamed blue hedgehog must 'frog' his way across a nonsensical highway of indeterminate origin. The controls are simple! WASD to move, shift to sprint and a click of the mouse will allow you to place an ethereal roadblock that does not do anything as of yet.", 5,800,250,1000)
}

//Draw the finish line
function finishLine() {
  //Drawing the finish line
  rectMode(CENTER);
  fill('white');
  rect(500,100,100,30)
  fill('black');
  text("FINISH",500,105);
  rectMode(CORNER);
}

//Draw the player
function drawPlayer() {
  fill('blue');
  circle(playerx,playery,50);
}

//Check to see if the player wins and beg for secrecy against litigious organizations
function winCheck() {
    if ((playerx > 450 && playerx < 550) && (playery < 150 && playery > 50)){
    rectMode(CENTER);
    textSize(30);
    fill('gold')
    text("YOU WIN! PLEASE DONT TELL SEGA OR KONAMI",500,50);
    rectMode(CORNER);
  }
}

//draw the ethereal roadblock
function roadBlock() {
  fill('orange');
  rect(mouseplaceX,mouseplaceY,10,50);
}

//Overly Complex random speed function (called within other functions)
function setRandSpeed(){
  var low = 10;
  var high = 45;
  var result = Math.floor(low + (Math.random() * (high-low + 1)));
  return result
}

//Draw the enemies
function createConflict(){
  fill('red');
  square(enemyset1x,350,50);
  square(negenemyset1x,450,50);
  fill('green');
  square(enemyset2x,550,50);
  square(negenemyset2x, 650, 50);
}

//Get the random speeds for the shapes constantly every round
function createSPEED() {
  enemyset1x += enemyset1xspeed;
  negenemyset1x -= enemyset1xspeed;
  enemyset2x += enemyset2xspeed;
  negenemyset2x -= enemyset2xspeed;
}

//Check to see if the trucks get to the edge
function edgeCheck() {
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

//Draw Borders
function borderLands() {
  fill('black')
  rect(0,995,1000,5);
  rect(0,0,1000,5);
  rect(0,0,5,1000);
  rect(995,0,5,1000);
}


function draw() {
  
  //FUNCTIONS ONLY 
  playerMovement();
  drawbackground();
  howToPlay();
  drawPlayer();
  finishLine();
  winCheck();
  roadBlock();
  createConflict();
  createSPEED();
  edgeCheck();
  borderLands();

}