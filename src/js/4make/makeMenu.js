// makeMenu.js

function makeMenu()
{
    let menuId = 'menuMainDiv';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    //-//

    let menuMainDiv = ce("div");
    menuMainDiv.id = menuId;
    menuMainDiv.style.position = 'fixed';
    menuMainDiv.style.left = '0px';
    menuMainDiv.style.top = '22px';
    menuMainDiv.style.zIndex = 1000;
    menuMainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    // ge('mainDiv').append(menuMainDiv);
    ba(menuMainDiv);

    //-//

    let minimizeButton = ce("button");
    minimizeButton.className = "menuButtonStyle";
    minimizeButton.style.position = "absolute";
    minimizeButton.style.left = 0 + "px";
    minimizeButton.style.top = -22 + "px";
    minimizeButton.innerHTML = "_";
    minimizeButton.onmouseover = function()
    {
        hoverSound();
    };
    minimizeButton.onclick = function()
    {
        // minimize height of div to show only  _  □
        clickSound();
        ge("menuSubDiv").style.height = 0 + "px";
    };
    menuMainDiv.append(minimizeButton);

    //-//

    let maximizeButton = ce("button");
    maximizeButton.id = 'maximizeButton';
    maximizeButton.className = "menuButtonStyle";
    maximizeButton.style.position = "absolute";
    maximizeButton.style.left = 30 + "px";
    maximizeButton.style.top = -22 + "px";
    maximizeButton.innerHTML = "□";
    maximizeButton.onmouseover = function()
    {
        hoverSound();
    };
    maximizeButton.onclick = function()
    {
        clickSound();
        ge("menuSubDiv").style.height = 300 + "px";
    };
    menuMainDiv.append(maximizeButton);

    //-//

    let menuSubDiv = ce("div");
    menuSubDiv.style.minWidth = '270px';
    menuSubDiv.style.marginLeft = 'auto';
    menuSubDiv.style.marginRight = 'auto';
    menuSubDiv.style.float = 'left';
    menuSubDiv.style.overflowY = 'auto';
    menuSubDiv.style.resize = 'both';  menuSubDiv.id = "menuSubDiv";
    menuSubDiv.innerHTML = "<br>";
    menuMainDiv.append(menuSubDiv);

    //-//

    for (let x = 0; x < calculationData.length; x++)
    {
        let functionButton = ce("button");
        functionButton.style.display = "flex";
        functionButton.style.flexDirection = "row";
        
        functionButton.innerHTML = calculationData[x].name;

        functionButton.id = calculationData[x].name;

        functionButton.onmouseover = function()
        {
            hoverSound();
        };

        functionButton.onclick = function()
        {
            clickSound();

            eval(' '+calculationData[x].calculatorType+' ' + ';');

            console.log(' '+calculationData[x].calculatorType+' ');
        };

        menuSubDiv.append(functionButton);

        ge("menuSubDiv").style.height = 0 + "px";
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

