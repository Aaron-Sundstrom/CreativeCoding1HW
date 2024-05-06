//Preloading images (some may not work due to p5.js bug)

//function preload(){
  //enemy1 = loadImage('assets/Enemy.png');
  //enemy2 = loadImage('assets/Enemy.png');
  //enemy3 = loadImage('assets/Enemy.png');
  //enemy4 = loadImage('assets/Enemy.png');
  //enemy5 = loadImage('assets/Enemy.png');
  
  //playerimg = loadImage('assets/pc.png');
  
  //grass plats TYPE 0
  //floor1g = loadImage('assets/plat1.png');
  //plat1g = loadImage('assets/plat1.png');
  //plat2g = loadImage('assets/plat1.png');
  //plat3g = loadImage('assets/plat1.png');
  //plat4g= loadImage('assets/plat1.png');
  //plat5g = loadImage('assets/plat1.png');
  
  //stone plats TYPE 1
  //floor1s = loadImage('assets/plat2.png');
  //plat1s = loadImage('assets/plat2.png');
  //plat2s = loadImage('assets/plat2.png');
  //plat3s = loadImage('assets/plat2.png');
  //plat4s= loadImage('assets/plat2.png');
  //plat5s = loadImage('assets/plat2.png');
  
  //brick plats TYPE 2
  //floor1b = loadImage('assets/plat3.png');
  //plat1b = loadImage('assets/plat3.png');
  //plat2b = loadImage('assets/plat3.png');
  //plat3b = loadImage('assets/plat3.png');
  //plat4b= loadImage('assets/plat3.png');
  //plat5b = loadImage('assets/plat3.png');
  
  //Relic load
  //rel = loadImage('assets/relic.png');
//}


//gamestate tracking
let playing = 0;


//enemy tracking variables
var current_enemies = 5;

//relic vars
var colx = 500;
var coly = 400;
var colw = 30;


//creating a pc. 
var pc = new Player(100,5,5,500,800);

//creating enemies
var en1 = new Enemy(10,200,635,250,false,false);
var en2 = new Enemy(10,800,635,250,true,false);
var en3 = new Enemy(10,500,435,250,false,false);
var en4 = new Enemy(10,200,235,250,false,false);
var en5 = new Enemy(10,800,235,250,true,false);


//creating Intro, Death and Win Screens
let intro = new Intro(false);
let death = new DeathScreen(false);
let win = new WinScreen(false);

//Below is scene control and various needs for scene switching 
let sceneHolder = [];

let sceneNeg2 = new Scene(pc.xpos,pc.ypos,false,-1,0,2)
sceneHolder.push(sceneNeg2);
let sceneNeg1 = new Scene(pc.xpos,pc.ypos,false,0,0,1);
sceneHolder.push(sceneNeg1);
let scene0 = new Scene(pc.xpos,pc.ypos,false,0,0,0);
sceneHolder.push(scene0);
let scene1 = new Scene(pc.xpos,pc.ypos,false,0,0,1);
sceneHolder.push(scene1);
let scene2 = new Scene(pc.xpos,pc.ypos,false,1,0,2);
sceneHolder.push(scene2);

//starting screen
current_Scene = 2;

//Checking if the player won.
function winCheck(){
  //Okay so this will run through the sceneHolder and check the values of all the scenes colstat. If all are true we will move to a new playing state and reveal the win screen. 
  winstat = 0;
  for ( i=0; i<sceneHolder.length; i++){//run through sceneholder
    if (sceneHolder[i].colstat == true){//if collectable is grabbed
      winstat += 1;
    }
    if (winstat == 5){//all collectables grabbed
      playing = 3;
    }
  }
}

//draw the scene we are on and assigning sprites 
function callScene (scene){
  sceneHolder[scene].drawScene();
  //if (sceneHolder[scene].type == 0){//if its grass type
    //image(floor1g,500,850,1000,50)
    //image(plat1g,200,650);
    //image(plat2g,800,650);
    //image(plat3g,500,450);
    //image(plat4g,200,250);
    //image(plat5g,800,250);
  //}
  //if (sceneHolder[scene].type == 1){//if its stone type
    //image(floor1s,500,850,1000,50)
    //image(plat1s,200,650);
    //image(plat2s,800,650);
    //image(plat3s,500,450);
    //image(plat4s,200,250);
    //image(plat5s,800,250);
  //}
  //if (sceneHolder[scene].type == 2){//if its stone type
    //image(floor1b,500,850,1000,50)
    //image(plat1b,200,650);
    //image(plat2b,800,650);
    //image(plat3b,500,450);
    //image(plat4b,200,250);
    //image(plat5b,800,250);
  //}
}







//Gravity controls
var jump = false; //are we jumping
var direction = 1; //the force of gravity in y direction
var velocity = 4; //speed of player
var jumpPower = 18; //strength of jump
var fallingSpeed = 4; //equal to velocity
var minHeight = 800; //height of ground
var gravAcc = 1;

var maxHeight = 0;
var jumpCounter = 0;

//WORKING MAY NEED TO BUMP SOME VALUES
function gravity(){
  if (pc.ypos >= minHeight && jump == false){
    //stop falling
    pc.ypos = minHeight;
    jumpCounter = 0;
    fallingSpeed = 2;
    
  }else{
    
    pc.ypos = pc.ypos + (direction*velocity); //makes grav work
   
  }
  
  if (jump == true) {
    if(pc.ypos <= maxHeight || jumpCounter >= jumpPower){
      if (pc.ypos >= minHeight){
        pc.ypos = minHeight;
      }else{
        fallingSpeed = fallingSpeed + gravAcc;
        velocity = fallingSpeed;
      }
    }else{
      velocity = -jumpPower + gravAcc;
      jumpCounter = jumpCounter + 1;
    }
  }else{
    fallingSpeed = fallingSpeed + gravAcc;
    velocity = fallingSpeed;
  }
  
}
//END GRAVITY. 

function setup() {
  createCanvas(1000, 1000);
  //imageMode(CENTER);
  
}



//handling player movement and swings WORKING
function playerMovement(){
  if (keyIsDown(68)){
    if (keyIsDown(16)){
      pc.sprintRight();
    }else{
      pc.moveRight();
    }
  }
  if (keyIsDown(65)){
    if (keyIsDown(16)){
      pc.sprintLeft();
    }else{
      pc.moveLeft();
    }
  }
  if (keyIsDown(87)){
    jump = true;
  }else{
    jump = false;
  }
  
  //weapon stuff DONT TOUCH its fragile
  if (keyIsDown(32)){
    //had to store the hit otherwise its bunk
    
    
    //what we do is call the weapon swing from the player class. We check if what plat we are on and the distance of the enemy, too close and we get hit later on in the code and too far we miss. if we hit we swap the enemy.dead value to true which causes them to poof away. 
    pc.swingWeapon();
    if (pc.xpos >= 50 && pc.xpos <=350 && pc.ypos <= 640 && pc.ypos > 240){
      var swing1 = pc.initAHit(en1.xpos,en1.ypos,pc.xpos,pc.ypos);
      if (swing1 == true){
        if (en1.dead == false){
          en1.dead = true;
          current_enemies -=1;
        }
        
        
      }
    }else if (pc.xpos >= 650 && pc.xpos <=950 && pc.ypos <= 640 && pc.ypos > 240){
        var swing2 = pc.initAHit(en2.xpos,en2.ypos,pc.xpos,pc.ypos);
        if (swing2 == true){
          if (en2.dead == false){
            en2.dead = true;
            current_enemies -=1;
        } 
          
        }
    }else if (pc.xpos >= 350 && pc.xpos <= 650 && pc.ypos <= 440){
      var swing3 = pc.initAHit(en3.xpos,en3.ypos,pc.xpos,pc.ypos);
        if (swing3 == true){
          if (en3.dead == false){
            en3.dead = true;
            current_enemies -=1;
        }
        }
    }else if (pc.xpos >= 50 && pc.xpos <= 350 && pc.ypos <= 240){
      var swing4 = pc.initAHit(en4.xpos,en4.ypos,pc.xpos,pc.ypos);
        if (swing4 == true){
          if (en4.dead == false){
            en4.dead = true;
            current_enemies -=1;
        }
        }
    }else if (pc.xpos >= 350 && pc.xpos <= 950 && pc.ypos <= 240){
      var swing5 = pc.initAHit(en5.xpos,en5.ypos,pc.xpos,pc.ypos);
        if (swing5 == true){
          if (en5.dead == false){
            en5.dead = true;
            current_enemies -=1;
        }
        }
    }else{
     
    }
    
  }
}


//DONT TOUCH ITS WORKING NOW 
// checking if all enemies are cleared and We also check if the relic itself was collectd and poof it away and change the scene value to collected for checking in the win check. 
function colSpawnCheck(){
  //THE MOST TOUCHY FUNCTION IN THE WORLD woe to all who edit here
  
  if (current_enemies == 0){
    sceneHolder[current_Scene].respawnEnemy = 1;
    en1.dead = true;
    en2.dead = true;
    en3.dead = true;
    en4.dead = true;
    en5.dead = true;
    
    //now we need to spawn the collectable.
    if(sceneHolder[current_Scene].colstat == false){
      colx = 500;
    }
    //image(rel,colx,coly,50,50);
    circle(colx,coly,50);
    if ( pc.xpos <= 515 && pc.xpos >= 475 && pc.ypos <= 420 && pc.ypos >= 400){
      colx = 2000;
      sceneHolder[current_Scene].colstat = true;
    }
    //now that it was grabbed, lets run the wincheck
    winCheck();
    return true;
  }else{
    colx = 500;
  }
}


//Edge Check and scroll screen if leaving. 

//FOR THE LOVE OF GOD DONT TOUCH THIS ITS FRAGILE AND BARELY WORKING 
//what we do is check the number of enemies, if we didn't clear the prior screen we will respawn the enemies when we come back (dark souls rules bayBEE), if we cleared the enemies we will spawn the relic to collect.
function edgeCheck(){
  if (pc.xpos > 1000){//exit right
    current_Scene +=1;
    //check if we cleared all the enemies
    if (sceneHolder[current_Scene].respawnEnemy == 1){
      current_enemies = 0;
      colx=2000;
    }
    console.log(sceneHolder[current_Scene]);
    
    
    if (sceneHolder[current_Scene].respawnEnemy == 0){
      current_enemies = 5;
      en1.respawnScreen();
      
      en2.respawnScreen();
     
      en3.respawnScreen();
      
      en4.respawnScreen();
      
      en5.respawnScreen();
      
      console.log(sceneHolder[current_Scene]);
    }
    pc.xpos = 10;//set it to the left side of the screen
  }
  
  
  
  
  if (pc.xpos < 0){//exit left
    //check if we cleared all the enemies
    current_Scene -=1;
    if (sceneHolder[current_Scene].respawnEnemy == 1){
      current_enemies = 0;
      colx = 2000;
    }
    
    if (sceneHolder[current_Scene].respawnEnemy == 0){
      current_enemies = 5;
      en1.respawnScreen();
      
      en2.respawnScreen();
      
      en3.respawnScreen();
     
      en4.respawnScreen();
      
      en5.respawnScreen();
      
      console.log(sceneHolder[current_Scene]);
    }
    pc.xpos = 990
  }
  if (sceneHolder[current_Scene].edge == 1){
    if (pc.xpos >= 975){
      pc.xpos = pc.xpos - 10;
    }
    
  }
  if (sceneHolder[current_Scene].edge == -1){
    if (pc.xpos <= 15){
      pc.xpos = pc.xpos + 10;
    }
  }
}

//simple function for moving from start screen and death screen by clicking.
function mouseClicked(){
  if (playing == 0){
    playing = 1; 
  }
  if (playing == 2){
    pc.health = 50;
    playing = 1;
  }
  
}

function draw() {
  //If we are playing the game
  if (playing == 1){
    background('black');
    fill("red");
    text("Health : " + pc.health,85,30);
    noFill();
    callScene(current_Scene);
    
    //player stuff and sprite
    pc.drawPlayer();
    playerMovement();
    //image(playerimg,pc.xpos,pc.ypos,50,50);
    gravity();
    edgeCheck();
    
    
    //enemy stuff AKA sprites dont work how i thought
    en1.drawEnemy();
    //if (en1.dead == false){
      //image(enemy1,en1.xpos,en1.ypos+30,50,50);
    //}
    en1.enemyMovement();
    en2.drawEnemy();
    //if (en2.dead == false){
      //image(enemy2,en2.xpos,en2.ypos+30,50,50);
    //}
    en2.enemyMovement();
    en3.drawEnemy();
    //if (en3.dead == false){
      //image(enemy3,en3.xpos,en3.ypos+30,50,50);
    //}
    en3.enemyMovement();
    en4.drawEnemy();
    //if (en4.dead == false){
      //image(enemy4,en4.xpos,en4.ypos+30,50,50);
    //}
    en4.enemyMovement();
    en5.drawEnemy();
    //if (en5.dead == false){
      //image(enemy5,en5.xpos,en5.ypos+30,50,50);
    //}
    en5.enemyMovement();
    //absolutely needs to be here for some reason everything breaks if its not here. 
    colSpawnCheck();
    //check for death
    if (pc.health <= 0){
      playing = 2;
      death.runDeathScreen();
      pc.xpos = 500;
      pc.ypos = 800;
    }
    //check for win
    
  }
  //Runs at start, shows controls and such
  if (playing == 0){
    intro.runIntro();
    
    
  }
  //if winCheck() swaps state to 3 we display the win screen
  if (playing == 3){
    win.runWinScreen();
  }
  
  
  
  
  //So this works, control the min height for platform collision AND pc getting hit
  if (pc.xpos >= 50 && pc.xpos <=350 && pc.ypos <= 640 && pc.ypos > 240 && jump == false){//lower left1
    minHeight = 610;
    jumpCounter = 0;
    
    let d = dist(pc.xpos,pc.ypos,en1.xpos,en1.ypos)
    if (d < 45 && en1.dead == false){
      pc.health -= 5;
      if (en1.direction == true){
        pc.xpos += 50;
        pc.ypos -= 10;
      }else{
        pc.xpos -= 50;
        pc.ypos -=10;
      }
    }
    
  }else if (pc.xpos >= 650 && pc.xpos <=950 && pc.ypos <= 640 && pc.ypos > 240 && jump == false){//lower right2
    minHeight = 610;
    jumpCounter = 0;
    
    let d = dist(pc.xpos,pc.ypos,en2.xpos,en2.ypos)
    if (d < 50 && en2.dead == false){
      pc.health -= 5;
      if (en2.direction == true){
        pc.xpos += 50;
        pc.ypos -= 10;
      }else{
        pc.xpos -= 50;
        pc.ypos -=10;
      }
      
    }
  }else if (pc.xpos >= 350 && pc.xpos <= 650 && pc.ypos <= 440 && jump == false){//middle3
    minHeight = 410;
    jumpCounter = 0;
    
    let d = dist(pc.xpos,pc.ypos,en3.xpos,en3.ypos)
    if (d < 50 && en3.dead == false){
      pc.health -= 5;
      if (en3.direction == true){
        pc.xpos += 50;
        pc.ypos -= 10;
      }else{
        pc.xpos -= 50;
        pc.ypos -=10;
      }
    }
    
  }else if (pc.xpos >= 50 && pc.xpos <= 350 && pc.ypos <= 240 && jump == false){//upper left4
    minHeight = 210;
    jumpCounter = 0;
    
    let d = dist(pc.xpos,pc.ypos,en4.xpos,en4.ypos)
    if (d < 50 && en4.dead == false){
      pc.health -= 5;
      if (en4.direction == true){
        pc.xpos += 50;
        pc.ypos -= 10;
      }else{
        pc.xpos -= 50;
        pc.ypos -=10;
      }
    }
    
  }else if (pc.xpos >= 350 && pc.xpos <= 950 && pc.ypos <= 240 && jump == false){//upper right5
    minHeight = 210;
    jumpCounter = 0;
    
    let d = dist(pc.xpos,pc.ypos,en5.xpos,en5.ypos)
    if (d < 50 && en5.dead == false){
      pc.health -= 5;
      if (en5.direction == true){
        pc.xpos += 50;
        pc.ypos -= 10;
      }else{
        pc.xpos -= 50;
        pc.ypos -=10;
      }
      
    }
    
    
  }else{
    minHeight = 800;
  }
 
}



