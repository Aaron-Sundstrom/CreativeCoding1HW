Hello and welcome to my game! I have spent several weeks coding, bug squashing, and play testing. Its amazing how much work goes into the simple things

The way my game works is your player (the knight) has been trapped in a dungeon and the only way to leave is to collect five relics of immense power while attacking enemies and jumping from platform to platform.

I had grand plans and ideas for this project but in the end so much of it comes down to time, If I had three more weeks I think I could have fit all my wants into it such as:

-Cutscenes
-Scrolling backgrounds
-Sound Effects
-ect

The whole process from initial ideas to implementation to finish project was incredible, I probably threw out five or six starts to this project after realizing that it either was a poorly done idea or it was easier another way. 


Some of the struggles I had and how I overcame them through this project are below

- Initially I had everything inside of the sketch.js but quickly found out that utilizing seperate .js files with classes in them allow for a much more robust system

-In the early implementations of the code, I had a seperate screen.js for each and every screen that the player would scroll to, I realized that with some fiddling of the passthroughs for the class I could control almost everything I needed from sketch.js

-Early trials also had it so that it would randomly make platforms and enemies every time you moved screens, this I had to remove as I could not find a good way to solve platform collision and hit detection in a manner that woulnd't absolutley suck the RAM out of your computer, it would chug down to like 5fps and I couldnt streamline it whatsoever with how it was put in so I had to go with set platforms and set enemy positions. 

-Initially what I wanted to do was create a map of the level and store it inside of arrays, having each section of the array matrix as a "block" that I could map a texture to or place an enemy inside of that way I could just check around the player for collision and detections but I found the performance lacking for multiple levels. 

-GRAVITY: probably took me the longest to implement, I struggled for a solid week on getting gravity to work and feel good. I watched so many tutorials and fiddled and tweaked settings to get something I was happy with. its incredible how much goes into simply JUMPING when there is gravity present. 

-Sprites: I have never made any sort of sprite art before so I had a great time playing around with Aesprite and making some platforms and characters. I did have an almost complete code rewrite that I had to do when I realized that sprites cannot be imported inside of the seperate .js files I had (or at least I couldn't get them to work), I tried having them as a pass through with an enemy.sprite variable and while it would pass the sprite through to drawing, it refused to run giving me an error code that didn't make any sense to me (some sort of internal p5.js issue I think). 

- One of my favorite things that I accomplished in this project was getting enemy respaws and screen clears to work! It took a lot of puzzle work to find out exactly how to make it so that if you left and didn't clear a screen, you would come back to all enemies respawned. I eventually came up with the idea of having all the scene classes in an array and using stored values in those classes to see if the screen was cleared or not and used the same methods to spawn the relics and see if they were collected or not. 

- Surprisingly one of the toughest things about this was continuing to work and work on this while hitting roadblocks, there were quite a few times (such as respawns and sprite work) that all i wanted to do was stop but I am very happy I kept on going. .

-The most rewarding thing I solved was hit detection for enemies! having it so that you can hit and be hit is incredibly difficult and I'm happy with my solution. 

One thing that is also interesting is just how a single line of code you change can break almost everything. I have several spots where if anything is touched it breaks so much. I ended up taking most of them out for the final release but I had to develop a robust method of bug testing with gratuitous console.log calls to find and squash all the bugs. 

There are some things that I did not figure out in time for the submittal, and the one that bugs me the most is some of the platforming. It can be a little touchy and sometimes if you run up against an enemy, it hits you and is supposed to knock you away but if they hit you at the right time they push you to the other side of them. I think it comes from how I determined which way the enemy is facing but I cant seem to get it fixed. There is also a bug currently where if you are holding down W when you hit the top of a platform you fall through, again cant for the life of me figure that one out. 