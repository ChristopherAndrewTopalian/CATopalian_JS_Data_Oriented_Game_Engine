// makeInterface.js

function makeInterface()
{
    let gameBoard = ce('div');
    gameBoard.id = 'gameBoard';
    //gameBoard.style.width = '100%';
    //gameBoard.style.height = '100%';
    ba(gameBoard);

    //-//

    let title = ce('a');
    title.className = 'theTitle';
    title.textContent = "CATopalian JS Data Oriented Game Engine";
    title.style.textDecoration = 'none';
    title.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JS_Data_Oriented_Game_Engine';
    title.style.position = 'absolute';
    title.style.left = '0px';
    title.style.top = '0px';
    title.style.margin = '4px';
    ba(title);

    //-//

    let abilitiesContainer = ce('div');
    abilitiesContainer.id = 'abilitiesContainer';
    abilitiesContainer.style.display = 'flex';
    abilitiesContainer.style.flexDirection = 'column';
    abilitiesContainer.style.position = 'absolute';
    abilitiesContainer.style.left = '0px';
    abilitiesContainer.style.top = '30px';
    abilitiesContainer.style.width = '130px';
    ba(abilitiesContainer);

    //-//

    let btnKeyboardToggle = ce('button');
    btnKeyboardToggle.id = 'btnKeyboardToggle';
    btnKeyboardToggle.textContent = 'Keyboard';

    btnKeyboardToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.keyboard === true) 
        {
            selectedEntity.keyboard = false;
        } 
        else 
        {
            selectedEntity.keyboard = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnKeyboardToggle);

    //-//

    let btnLocationToggle = ce('button');
    btnLocationToggle.id = 'btnLocationToggle';
    btnLocationToggle.textContent = 'Location';

    btnLocationToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.location === true) 
        {
            selectedEntity.location = false;
        } 
        else 
        {
            selectedEntity.location = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnLocationToggle);

    //-//

    let btnLEDToggle = ce('button');
    btnLEDToggle.id = 'btnLEDToggle';
    btnLEDToggle.textContent = 'LED';

    btnLEDToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.led === true) 
        {
            selectedEntity.led = false;
        } 
        else 
        {
            selectedEntity.led = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnLEDToggle);

    //-//

    let btnDistanceToggle = ce('button');
    btnDistanceToggle.id = 'btnDistanceToggle';
    btnDistanceToggle.textContent = 'Distance';

    btnDistanceToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.distance === true) 
        {
            selectedEntity.distance = false;
        } 
        else 
        {
            selectedEntity.distance = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnDistanceToggle);

    //-//

    let btnEvasionToggle = ce('button');
    btnEvasionToggle.id = 'btnEvasionToggle';
    btnDistanceToggle.textContent = 'Evasion';

    btnEvasionToggle.onclick = function()
    {
        if (selectedEntity === null) return;

        if (selectedEntity.evasion === true) 
        {
            selectedEntity.evasion = false;
        } 
        else 
        {
            selectedEntity.evasion = true;
        }

        updateInterface(); 
    };
    abilitiesContainer.append(btnEvasionToggle);

    //----//

    let infoBox = ce('div');
    infoBox.id = 'infoBox';
    infoBox.textContent = selectedEntity.name;
    infoBox.style.width = '100px';
    infoBox.style.height = '75px';
    infoBox.style.border = 'solid 1px white';
    infoBox.style.overflow = 'scroll';
    infoBox.style.padding = '2px 4px';
    abilitiesContainer.append(infoBox);

    //-//

    let distanceBox = ce('div');
    distanceBox.id = 'distanceBox';
    distanceBox.style.width = '100px';
    distanceBox.style.height = '90px';
    distanceBox.style.border = 'solid 1px white';
    distanceBox.style.overflow = 'scroll';
    distanceBox.style.padding = '2px 4px';
    abilitiesContainer.append(distanceBox);

    //----//

    let actionsContainer = ce('div');
    actionsContainer.id = 'actionsContainer';
    actionsContainer.style.display = 'flex';
    actionsContainer.style.flexDirection = 'column';
    actionsContainer.style.position = 'absolute';
    actionsContainer.style.right = '0px';
    actionsContainer.style.top = '0px';
    actionsContainer.style.width = '130px';
    ba(actionsContainer);

    //-//

    let btnFlyLeft = ce('button');
    btnFlyLeft.id = 'btnFlyLeft';
    btnFlyLeft.textContent = 'Fly Left';
    btnFlyLeft.onclick = function()
    {
        if(selectedEntity.location == true)
        {
            flyLeft(selectedEntity);
        }
        else
        {
            cl('no location enabled');
        }
    };
    actionsContainer.append(btnFlyLeft);

    //-//

    let btnFlyRight = ce('button');
    btnFlyRight.id = 'btnFlyRight';
    btnFlyRight.textContent = 'Fly Right';
    btnFlyRight.onclick = function()
    {
        if(selectedEntity.location == true)
        {
            flyRight(selectedEntity);
        }
        else
        {
            cl('no location enabled');
        }
    };
    actionsContainer.append(btnFlyRight);

    //-//

    let btnLED = ce('button');
    btnLED.id = 'btnLED';
    btnLED.textContent = 'LED';
    btnLED.onclick = function()
    {
        if (selectedEntity.led == true)
        {
            ge(selectedEntity.id).backgroundColor = randomColor(selectedEntity.id);
        }
        else
        {
            ge('infoBox').textContent = 'LED not installed yet';
        }
    };
    actionsContainer.append(btnLED);

    //-//

    let btnEvade = ce('button');
    btnEvade.id = 'btnEvade';
    btnEvade.textContent = 'Evade';
    btnEvade.onclick = function()
    {
        if (selectedEntity.evasion == true)
        {
            selectedEntity.isEvading = true;
        }
        else
        {
            ge('infoBox').textContent = 'Evasion not installed yet';
        }
    };
    actionsContainer.append(btnEvade);

    //-//

    let btnHaltEvasion = ce('button');
    btnHaltEvasion.id = 'btnHaltEvasion';
    btnHaltEvasion.textContent = 'Halt Evasion';
    btnHaltEvasion.onclick = function()
    {
        if (selectedEntity.evasion == true)
        {
            selectedEntity.isEvading = false;
        }
        else
        {
            ge('infoBox').textContent = 'Evasion not installed yet';
        }
    };
    actionsContainer.append(btnHaltEvasion);

    //-//

    let saveLoadContainer = ce('div');
    saveLoadContainer.style.display = 'flex';
    saveLoadContainer.style.flexDirection = 'column';
    actionsContainer.append(saveLoadContainer);

    //-//

    let saveButton = ce('button');
    saveButton.id = 'saveButton';
    saveButton.textContent = 'Save';
    saveButton.onclick = function()
    {
        saveGame();
    };
    saveLoadContainer.append(saveButton);

    //-//

    let loadButton = ce('input');
    loadButton.id = 'loadButton';
    loadButton.textContent = 'Load';
    loadButton.type = 'file';
    loadButton.accept = '.json';
    loadButton.style.display = 'none';
    loadButton.onchange = function(event)
    {
        loadGame(event);
    };
    saveLoadContainer.append(loadButton);

    //-//

    let loadButtonClick = ce('button');
    loadButtonClick.textContent = 'LOAD';
    loadButtonClick.onclick = function()
    {
        loadButton.click();
    };
    saveLoadContainer.append(loadButtonClick);

    //-//

    let btnSwarmEvade = ce('button');
    btnSwarmEvade.textContent = 'Swarm Evade!';

    btnSwarmEvade.onclick = function() 
    {
        // Loop through the entire matrix
        for (let i = 0; i < world.length; i++) 
        {
            // Flip ALL necessary behavioral switches
            world[i].evasion = true;
            world[i].location = true; // Make sure the engine knows it's allowed to move.

            // Force the Nudge (Check for undefined OR 0)
            if (!world[i].vx || world[i].vx === 0) 
            {
                world[i].vx = (Math.random() - 0.5) * 10; // Kick it left or right
            }
            
            if (!world[i].vy || world[i].vy === 0) 
            {
                world[i].vy = (Math.random() - 0.5) * 10; // Kick it up or down
            }
        }
        
        console.log("Swarm behavior activated for " + world.length + " entities.");
    };
    saveLoadContainer.append(btnSwarmEvade);

    //-//

    let btnCreateRandom = ce('button');
    btnCreateRandom.textContent = 'Create Random Drone';

    btnCreateRandom.onclick = function()
    {
        // OUR EXACT ART DIMENSIONS (Index 0 is Drone 1, etc.)
        const artDimensions = [
            { w: 918,  h: 210 }, // Drone 1
            { w: 998,  h: 275 }, // Drone 2
            { w: 905,  h: 363 }, // Drone 3
            { w: 970,  h: 463 }, // Drone 4
            { w: 1016, h: 383 }, // Drone 5
            { w: 1016, h: 307 }, // Drone 6
            { w: 926,  h: 368 }, // Drone 7
            { w: 993,  h: 419 }  // Drone 8
        ];

        // Pick a random index from 0 to 7
        let randomIndex = Math.floor(Math.random() * 8); 
        
        // Get the exact dimensions for the chosen bird
        let exactArt = artDimensions[randomIndex];

        // CALCULATE THE PERFECT HIT-BOX HEIGHT
        let targetWidth = 100;
        // Math magic: (Original Height / Original Width) * Target Width
        let perfectHeight = (exactArt.h / exactArt.w) * targetWidth; 

        // Generate strings for paths and IDs
        let paddedTexNum = String(randomIndex + 1).padStart(3, '0'); 

        let randomTexturePath = `src/media/textures/drones/drone_${paddedTexNum}.webp`;

        let uniqueCount = world.length + 1;
        let paddedIDNum = String(uniqueCount).padStart(3, '0');
        let newID = `drone_${paddedIDNum}`;   
        let newName = `Hummingbird ${paddedIDNum}`; 

        // GENERATE THE SOUL WITH PERFECT DIMENSIONS
        let newDroneData = createDroneData({
            id: newID,
            name: newName,
            x: Math.floor(Math.random() * (window.innerWidth - 100)), 
            y: Math.floor(Math.random() * (window.innerHeight - 100)),
            width: targetWidth,          // Explicitly set to 100
            height: perfectHeight,       // It will be ~23px for Drone 1, and ~42px for Drone 8.
            texture: randomTexturePath
        });

        // GENERATE THE VESSEL
        makeEntityVisual(newDroneData);

        // AWAKEN THE ENTITY
        world.push(newDroneData);
    };
    saveLoadContainer.append(btnCreateRandom)
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

