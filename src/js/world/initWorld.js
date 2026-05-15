// initWorld.js

function initWorld() 
{
    ge('gameBoard').innerHTML = '';

    for (let i = 0; i < world.length; i++) 
    {
        //let currentData = world[i];

        makeEntityVisual(world[i]);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

