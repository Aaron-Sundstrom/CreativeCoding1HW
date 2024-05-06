//Okay so this is the player and everything that we need to handle here. 

//** TO DO **

// Construct the player, for now just a shape then sprites later. Refer to past work for sprite info

// Set player info through constructors. health, power, speed, maybe a double jump power up? Heatlh is obviously player health, power is the strength of the hits, possibly increased though pickups.

//figure out jump height and gravity situation. Possibly have an is grounded check here or in the level itself. 



class Player {
  constructor (health , power, dexterity, xpos, ypos){
    this.health = health;
    this.power = power;
    this.dex = dexterity;
    this.xpos = xpos;
    this.ypos = ypos;
    this.last_key=0;//for implimenting a direction if we want to go that route. 
  }
  
  //draws the player
  drawPlayer(){
    noFill();
    noStroke();
    circle(this.xpos, this.ypos, 50);
  }
  
  //This will be where the hit info is for the player hitting an enemy
  //Thought process here, the players hit info will be slightly extended from their box to prevent getting hit when you hit (theoretically) 
  //will return a hit or no hit.
  //may need to have some sort of idea which way the player is facing, 
  initAHit(enemyx,enemyy,playerx,playery){
    let d = dist(enemyx,enemyy,playerx,playery)
    if (d <= 75){
      return true;
    }if (d>75){
      return false;
    }else{
      return false;
    }
    
  }
  
  //movement methods
  moveLeft(){
    this.xpos -=5;
    this.last_key = -1;
  }
  sprintLeft(){
    this.xpos -=10;
    this.last_key = -1;
  }
  moveRight(){
    this.xpos +=5;
    this.last_key = 1;
  }
  sprintRight(){
    this.xpos +=10;
    this.last_key = 1;
  }
  swingWeapon(){
  //this will detect the last key and then swing that direction
    //for now lets just let a swing be a swing no matter what, perhaps a whirlwind attack.
    if(this.last_key == 1){
      //console.log('I swing right');
    } if(this.last_key == -1){
      //console.log('I swing left');
    }else{
      //console.log('I am broken dog');
    }
  }
  
  

  
  
}