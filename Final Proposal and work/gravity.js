//Lets try putting gravity in here so it is available to all. 

//*** TO DO ***
//
// Use those physics classes to come up with an acceleration for gravity to make it feel better. 
//
//Still need to figure out how to check for the solid platform without a grid system. 
//
//There is the possibility that this will be moved to the player as technically it is the only thing affected by the gravity. 
//

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