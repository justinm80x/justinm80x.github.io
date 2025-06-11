$(function () {
 // initialize canvas and context when able to
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 window.addEventListener("load", loadJson);


 function setup() {
   if (firstTimeSetup) {
     halleImage = document.getElementById("player");
     projectileImage = document.getElementById("projectile");
     cannonImage = document.getElementById("cannon");
     $(document).on("keydown", handleKeyDown);
     $(document).on("keyup", handleKeyUp);
     firstTimeSetup = false;
     //start game
     setInterval(main, 1000 / frameRate);
   }


   // Create walls - do not delete or modify this code
   createPlatform(-50, -50, canvas.width + 100, 50); // top wall
   createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
   createPlatform(-50, -50, 50, canvas.height + 500); // left wall
   createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall


   //////////////////////////////////
   // ONLY CHANGE BELOW THIS POINT //
   //////////////////////////////////


   // TODO 1 - Enable the Grid
    toggleGrid();




   // TODO 2 - Create Platforms
createPlatform(700,650,200,20, "darkred");
createPlatform(900,530,200,20, "darkred");
createPlatform(600,450,200,20, "darkred")
createPlatform(300,350,200,20,"darkred");
createPlatform(400,500,200,20, "darkred")

   // TODO 3 - Create Collectables
createCollectable("database", 450, 450);
createCollectable("database", 400, 325);
createCollectable("database",1000,500)


  
   // TODO 4 - Create Cannons
createCannon("top", 800, 650);
createCannon("left",500, 1900);
createCannon("left",250, 1900);


  
  
   //////////////////////////////////
   // ONLY CHANGE ABOVE THIS POINT //
   //////////////////////////////////
 }


 registerSetup(setup);
});


