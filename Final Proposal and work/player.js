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
  }
  
  //draws the player
  drawPlayer(){
    fill("red");
    circle(this.xpos, this.ypos, 50);
  }
  
  
  //movement methods
  moveLeft(){
    this.xpos -=5;
  }
  moveRight(){
    this.xpos +=5;
  }
}