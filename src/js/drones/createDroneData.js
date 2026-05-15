// createDroneData.js

// The Factory only takes ONE argument: an object literal
function createDroneData(config) 
{
    // Define the defaults first
    let defaults = {
        width: 100, 
        height: 60,
        location: false,
        led: false,
        evasion: false,
        keyboard: false
    };

    // This merges everything. If config has a texture, it keeps it automatically.
    return { ...defaults, ...config };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

