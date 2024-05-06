//Maybe this will hold the intro screen and the death/restart screen

class Intro {
  constructor(clickstatus){
    this.click = clickstatus;
  }
 
  runIntro(){
    textAlign(CENTER);
    background('black');
    fill("white");
    textSize(30)
    text("Welcome to Knight Quest!",500,50);
    text("Here you will inhabit the role of a knight tasked with finding the scattered",500,90)
    text("Best played in a 1000 x 1000 window!",500,150);
    text("legendary artifacts in order to escape the dungeon.",500,120)
    text("Controls:",500,500);
    text("W to jump, A and D to move left and right. SPACE to swing your weapon!",500,530);
    text("Holding shift will allow you to sprint",500,560);
    text("When you are ready, please click anywhere on the screen and good luck!",500,800);
    text("You can exit the scene from the left or right to go to next stage ",500,900);
    text("BUT BEWARE if you dont clear the enemies!",500,930)
    
  }
  
  
  
}

class DeathScreen{
  constructor(b){
    this.b = b;
  }
  
  runDeathScreen(){
    background('black');
    fill("white");
    text("Oh no! You have become separated from your mortal coil!",500,500);
    text("Click if you want to play again from where you left off",500,600);
  }
}

class WinScreen{
  constructor(b){
    this.b = b;
  }
  
  runWinScreen(){
    background("gold");
    fill('black');
    text("YOU WIN CONGRATS",500,500);
  }
}