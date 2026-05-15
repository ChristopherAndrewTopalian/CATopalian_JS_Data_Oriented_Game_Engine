// drone001.js

let drone001 = {
    name: 'Drone 001',
    id: 'drone001',

    x: 150,
    y: 50,

    vx: 0, // Speed moving left/right
    vy: 0,  // Speed moving up/down

    width: 100,
    height: 23,

    borderColor: 'rgb(0, 0, 0)',
    bodyColor: 'rgb(0, 255, 255)',

    texture: 'src/media/textures/drones/drone_001.webp',

    keyboard: false,
    led: true,
    location: true,
    distance: false,
    evasion: false,

    isEvading: false     // The action is currently off
};

/*
We know its art is 918x210.
If we want its width to be 100, we do the math: (210 / 918) * 100 = 22.87.

We simply open up our drone001.js file and change its explicit height to 23:
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

