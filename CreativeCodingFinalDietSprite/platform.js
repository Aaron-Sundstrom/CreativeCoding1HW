//Here I will control the aspects of the platform. The intention is to be able to control if something is solid or not, that way we can do floor detection. 

//The class will have a few attributes we can use to build the platforms, xpos,ypos to determin where it will be, solid as a boolean (just in case I want to make one that isnt, and potentially depending on how sprite mapping works I can add a new attribute to allow for the sprite to be placed over it. All platforms will be placed via center placing)

//

class Platform {
  constructor (xplace,yplace,l,w){
    this.xpos = xplace;
    this.ypos = yplace;
    this.w = w;
    this.l = l;
    
    //this.spritemap?
  }
  
  buildPlat(){
    rectMode(CENTER);
    fill('gray');
    //noStroke();
    rect(this.xpos,this.ypos,this.l,this.w)
  }
  
  
  
  
  
}