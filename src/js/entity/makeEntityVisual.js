// makeEntityVisual.js

// THE VISUAL FACTORY
function makeEntityVisual(currentData) 
{
    let element = ce('div');
    element.id = currentData.id;
    element.style.position = 'absolute';
    element.style.width = currentData.width + 'px';
    element.style.height = currentData.height + 'px';

    // THE TEXTURE UPGRADE
    if (currentData.texture) 
    {
        element.style.backgroundImage = `url('${currentData.texture}')`;
        element.style.backgroundSize = 'contain';
        element.style.backgroundRepeat = 'no-repeat'; 
        element.style.backgroundPosition = 'center';
    } 
    else 
    {
        element.style.backgroundColor = currentData.bodyColor;
        element.style.border = `solid 1px ${currentData.borderColor}`;
    }

    // The Click to Select
    element.onclick = function() 
    {
        clickSound();

        selectedEntity = currentData;

        ge('infoBox').textContent = selectedEntity.id;

        updateInterface();
    };

    // Automatically append it to the game board
    ge('gameBoard').append(element);
    
    return element; 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

