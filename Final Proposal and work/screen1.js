//This will be the first screen drawn. I want the main sketch.js to hold basically just the drawing and maybe some initialization stuff. 

//This will be called by the scene drawer, it will contain most of the enemy info we see and play with.

//We will pass in the player Xpos and Ypos so we can seamlessly continue from where the player enters. we will also see if the collectable in the stage was grabbed or not (might be nothing tbh)

//Two options for drawing, figuring out a tileable map solution with a 2d array (who knows)
//or drawing in the shapes and putting the sprites over them, having the shapes be a solid piece would help if i can figure out how to make somthing solid. 

//floor
class SceneOne {
  constructor(playerXPos,playerYpos,collectable_status){
    this.xpos = playerXPos;
    this.ypos = playerYpos;
    this.colstat = collectable_status;
  }
  
  drawScene(){
    //floor
    var floor = new Platform(500,1000,1050,50,true);
    floor.buildPlat();
    floor.checkSolid();
  }
}
