 

//creating a pc. 
var pc = new Player(5,5,5,100,200);

var en1 = new Enemy(10,200,100,200,false);

//handling player movement (just left and right for now.)
function playerMovement(){
  if (keyIsDown(68)){
    pc.moveRight();
  }
  if (keyIsDown(65)){
    pc.moveLeft();
  }
}


function setup() {
  createCanvas(1000, 1000);
}






//First thing is first we will need a ticker to track current scene. This will start at scene 0 and go from there. 

var currentScene = 0;

function drawFirstScene(){
  let scene1 = new SceneOne;
  scene1.drawScene();
}
function drawSecondScene(){
  square(50,50,50);
}



function callScene (scene){
  if (scene == 0){
    drawFirstScene();
  }
  if(scene == 1){
    drawSecondScene();
  }
}


function draw() {
  background(220);
  callScene(currentScene);
  pc.drawPlayer();
  var grav = new Gravity(pc)
  grav.initiateGravity();
  playerMovement();
  en1.drawEnemy();
  en1.enemyMovement();
  rectMode(CENTER);
  rect(200,105,200,10);
  fill('purple');
  rectMode(CENTER);
  rect(500,1000,1050,100);
  
  
}
