// gameLoop.js

function gameLoop() 
{
    // THE BRAIN (What do I want to do?)

    // Calculate how far apart everyone is
    distanceSystem();

    // Change vx/vy to run away from neighbors
    evasionSystem();

    // THE ENGINE
    // Apply vx/vy to x/y
    movementSystem();

    // THE PHYSICS CONSEQUENCES (Did element hit something?)
    // If x/y is off-screen, reverse vx/vy
    boundarySystem();

    // If elements collide with each other
    collisionSystem(); 

    // THE SHADOW (Update the screen)
    renderSystem();

    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

