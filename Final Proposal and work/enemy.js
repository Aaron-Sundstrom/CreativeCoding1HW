// This will house the enemy class and create the enemy movements. essentially the enemy will have hp, start position and a platform length to bounce back and forth between.


//** TO DO **

//
//
//Check on the hit mechanics and make sure damage works
//
// 
//
//
//
// Will have to change movement stuff slightly when I make the sprites as the size may change. 

class Enemy{
  constructor(health, xstart, ystart, plat_length, start_direction,sprite_width,sprite_height){
    this.healthda = health;
    this.xpos = xstart;
    this.ypos = ystart - 50;
    this.range = plat_length;
    this.direction = start_direction;
    this.start = xstart;
  }
  //calling hit, if an enemy is hit this will check the amount it was hit for and subtract
  //from the total health
  wasHit(amount){
    this.health -= amount;
  }
  
  //checking to see if the enemy is dead. When dead the enemy will disappear and maybe       //drop something
  deathCheck(){
    if (this.health < 0){
      return true;
    }
  }
  
  drawEnemy(){
    //Temp until sprites
    rectMode(CENTER);
    fill("purple");
    square(this.xpos,this.ypos + 25,50);
  }
  
  enemyMovement(){
    
    //Okay so enemy will be placed at a point determined by me when the scene is drawn. What I need to do is some sick math to find out the end of the platform, send them there and have them bounce back and forth.maybe with a delay at the edge of some different amounts.
    
    var rightMax = this.start + (this.range/2);
    var leftMax = this.start- (this.range/2);
    
    if (this.direction == true){
      this.xpos +=5;
    }
    if (this.direction == false){
      this.xpos -=5;
    }
    
    if(this.xpos > rightMax){
      this.direction = false;
    }
    if(this.xpos < leftMax){
      this.direction = true;
    }
  }
}