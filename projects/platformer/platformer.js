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
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(240, 650, 50, 350)
    createPlatform(400, 200, 50, 320)
    createPlatform(600, 200, 50, 300)
    createPlatform(580, 630, 50, 50)
    createPlatform(470, 500, 50, 50)
    createPlatform(570, 380, 60, 30)
    createPlatform(580, 280, 50, 30)
    createPlatform(430, 200, 50, 30)
    createPlatform(900, 500, 50, 30)
    createPlatform(750, 500, 50, 30)
    createPlatform(1200, 300, 50, 30)
    createPlatform(1080, 400, 50, 30)

    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("max", 570, 380); // creates a "max" collectable at the coordinates(570, 380), falling with default gravity and bouncing with default bounce %
    createCollectable("database", 410, 150);
    createCollectable("kennedi", 1200, 250); // creates a "database" collectable at the coordinates(410,150), falling with default gravity and bouncing with default bounce %


    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 800, 500); // cannon on bottom wall, 800px down, shooting once every six second
    createCannon("left", 120, 780); // cannon on left wall, 100px left, shooting once every seven seconds
    createCannon("bottom", 1000, 490); // cannon on bottom wall, 1000px down,
    


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
