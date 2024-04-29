//Lets try putting gravity in here so it is available to all. 

//*** TO DO ***
//
// Use those physics classes to come up with an acceleration for gravity to make it feel better. 
//
//Still need to figure out how to check for the solid platform without a grid system. 
//
//There is the possibility that this will be moved to the player as technically it is the only thing affected by the gravity. 
//
//Okay fuck what I said, what we will do is delete this and move gravityt to the screen itself, that way we can do a platform check just simply by building the platforms and having those values stores somewhere (array?) and do the checks individually. 

class Gravity{
  constructor(player){
    this.player = player;
  }
  initiateGravity(){
    this.player.ypos += 5;
  }
  checkSolid(platform){
    
  }
}