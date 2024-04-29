//Here I will control the aspects of the platform. The intention is to be able to control if something is solid or not, that way we can do floor detection. 

//The class will have a few attributes we can use to build the platforms, xpos,ypos to determin where it will be, solid as a boolean (just in case I want to make one that isnt, and potentially depending on how sprite mapping works I can add a new attribute to allow for the sprite to be placed over it. All platforms will be placed via center placing)

//Potential ideas, should I have it place enemies here or in the screen section?

class Platform {
  constructor (xplace,yplace,l,w,isSolid){
    this.xpos = xplace;
    this.ypos = yplace;
    this.w = w;
    this.l = l;
    this.isSolid = isSolid;
    //this.spritemap?
  }
  
  buildPlat(){
    rectMode(CENTER);
    fill("gray");
    rect(this.xpos,this.ypos,this.l,this.w)
  }
  
  //Will move this to the scene itself because this is good stuff
  checkSolid(playerx,playery){
    var px = playerx;
    var py = playery;
    //need to do some math to figure out the max and min of the platform.
    var platMin = (this.l/2) - this.xpos;
    var platMax = (this.l/2) + this.xpos;
    var platTop = (this.yplace + (this.w/2));
    if ((this.isSolid == true) && ( platMin < px < platMax) && (py == platTop)){
      //this will be where gravity will no longer take place. need to do gravity.
      return true;
    }else{
      return false;
    }
      
      
  }
  
}