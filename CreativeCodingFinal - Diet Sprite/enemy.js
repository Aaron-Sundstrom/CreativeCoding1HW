//info on this file and fill in info below. 



//** TO DO **
// Will have to change movement stuff slightly when I make the sprites as the size may change. 

class Enemy{
  constructor(health, xstart, ystart, plat_length, start_direction,is_Dead){
    this.hp = health;
    this.xpos = xstart;
    this.ypos = ystart - 50;
    this.range = plat_length;
    this.direction = start_direction;
    this.start = xstart;
    this.dead = is_Dead;
    
    
  }
  respawnScreen(){
    //need a way that when the next screen is called to respawn all the enemies on that screen. 
    this.dead = false;
    
    
  }
  
  drawEnemy(){
    
    
    
    //hitbox stuff
    if (this.dead == false){
      rectMode(CENTER);
      noFill();
      noStroke();
      square(this.xpos,this.ypos + 25,50);
    }else{
      
    }
    
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