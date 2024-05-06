//perhaps this will just hold sprite info for platforms and collectable locations? I kinda need all the platforms to be in the same positions in the sketch. 
//floor



class Scene {
  constructor(playerXPos,playerYpos,collectable_status,edge,cleared,type){
    this.xpos = playerXPos;
    this.ypos = playerYpos;
    this.colstat = collectable_status;
    this.respawnEnemy = cleared;
    //-1 for left edge, 1 for right edge
    this.edge = edge;
    this.type = type;
  }
  
  

  drawScene(){
    //floor
    var floor = new Platform(500,850,1050,50);
    var plat1 = new Platform(200,650,300,30);
    var plat2 = new Platform(800,650,300,30);
    var plat3 = new Platform(500,450,300,30);
    var plat4 = new Platform(200,250,300,30);
    var plat5 = new Platform(800,250,300,30);
    floor.buildPlat();
    plat1.buildPlat();
    plat2.buildPlat();
    plat3.buildPlat();
    plat4.buildPlat();
    plat5.buildPlat();
    
    //if we have an edge, we need to make sure the player cannot go further left or right
    if (this.edge == -1){//left edge
      var leftEdge = new Platform(0,500,10,1000);
      leftEdge.buildPlat();
    }
    if (this.edge == 1){//right edge
      var rightEdge = new Platform(1000,500,10,1000);
      rightEdge.buildPlat();
    }
    
  }
  
  
  
  //simple stat to check if the scene has been cleared and the collectable has been grabbed, if it hasnt it will respawn all enemies when you come back and will have to clear it again.
  hasBeenCleared(){
    if (this.colstat == true){
      return true;
    }else{
      //respawnEnemy = true;
      return false;
    }
  }
  
  
  
}
