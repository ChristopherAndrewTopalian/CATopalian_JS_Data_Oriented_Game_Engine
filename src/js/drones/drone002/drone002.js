// drone002.js

let drone002 = {
    name: 'Drone 002',
    id: 'drone002',

    x: 150,
    y: 200,

    vx: 0, // Speed moving left/right
    vy: 0,  // Speed moving up/down

    width: 100,
    height: 28,

    borderColor: 'rgb(0, 0, 0)',
    bodyColor: 'rgb(100, 100, 255)',

    texture: 'src/media/textures/drones/drone_002.webp',

    keyboard: false,
    led: true,
    location: true,
    distance: false,
    evasion: false,

    isEvading: false     // The action is currently off
};

//----//

/*
We know its art is 998x275.
If we want its width to be 100, we do the math: (275 / 998) * 100 = 27.55.

We simply open up our drone001.js file and change its explicit height to 28:
*/

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

