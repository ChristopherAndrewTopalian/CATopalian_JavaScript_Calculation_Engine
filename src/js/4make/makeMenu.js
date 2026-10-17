// makeMenu.js

function makeMenu()
{
    let mainContainer = ce('div');
    mainContainer.id = 'mainContainer';
    mainContainer.style.display = 'flex';
    mainContainer.style.flexDirection = 'row';
    mainContainer.style.gap = '4px';
    ba(mainContainer);

    //-//

    let menuId = 'menuMainDiv';

    if (ge(menuId))
    {
        ge(menuId).remove();
    }

    //-//

    let menuMainDiv = ce("div");
    menuMainDiv.id = menuId;
    //menuMainDiv.style.position = 'fixed';
    //menuMainDiv.style.left = '0px';
    //menuMainDiv.style.top = '22px';
    menuMainDiv.style.zIndex = 1000;
    menuMainDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    // ge('mainDiv').append(menuMainDiv);
    mainContainer.append(menuMainDiv);

    //-//

    let minimizeButton = ce("button");
    minimizeButton.className = "menuButtonStyle";
    minimizeButton.style.position = "absolute";
    minimizeButton.style.left = 0 + "px";
    minimizeButton.style.top = -22 + "px";
    minimizeButton.textContent = "_";
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
    maximizeButton.textContent = "□";
    maximizeButton.onmouseover = function()
    {
        hoverSound();
    };
    maximizeButton.onclick = function()
    {
        clickSound();
        ge("menuSubDiv").style.height = 290 + "px";
    };
    menuMainDiv.append(maximizeButton);

    //-//

    let menuSubDiv = ce("div");
    menuSubDiv.style.maxWidth = '150px';
    menuSubDiv.style.marginLeft = 'auto';
    menuSubDiv.style.marginRight = 'auto';
    menuSubDiv.style.float = 'left';
    menuSubDiv.style.overflow = 'scroll';
    menuSubDiv.style.resize = 'both';  menuSubDiv.id = "menuSubDiv";
    menuSubDiv.style.display = 'flex';
    menuSubDiv.style.flexDirection = 'column';
    menuMainDiv.append(menuSubDiv);

    //-//

    for (let x = 0; x < calculationData.length; x++)
    {
        let functionButton = document.createElement("button");
        functionButton.className = "tactical-btn"; 
        functionButton.textContent = calculationData[x].name;

        // Add our hover sounds
        functionButton.onmouseover = function()
        {
            hoverSound();
        };

        functionButton.onclick = function()
        {
            clickSound();

            // we just call the action function directly from the object! 
            calculationData[x].action(); 
        };

        menuSubDiv.append(functionButton);
    }

    //-//

    //-// Right Panel Setup

    let rightPanel = ce('div');
    rightPanel.style.position = 'absolute';
    rightPanel.style.right = '0px';
    rightPanel.style.top = '0px';
    rightPanel.style.width = '120px'; // Widened slightly to fit details arrow
    rightPanel.style.height = '100%';
    rightPanel.style.overflowY = 'scroll';
    rightPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'; // Matching menu theme
    rightPanel.style.padding = '5px';
    ba(rightPanel);

    let rightContainer = ce('div');
    rightContainer.style.position = 'relative';
    rightContainer.style.display = 'flex';
    rightContainer.style.flexDirection = 'column';
    rightContainer.style.gap = '8px';
    rightPanel.append(rightContainer);

    calculationData.sort((a, b) => a.name.localeCompare(b.name));

    // Group data by category dynamically
    let categories = {};
    
    for (let x = 0; x < calculationData.length; x++)
    {
        let item = calculationData[x];
        let cat = item.category;
        
        // If this category doesn't exist in our object yet, create an empty array for it
        if (!categories[cat])
        {
            categories[cat] = [];
        }
        
        // Push the current item into its matching category array
        categories[cat].push(item);
    }

    // Generate the Details/Summary UI for each category
    for (let catName in categories)
    {
        let categoryDetails = ce('details');
        categoryDetails.style.color = 'white';
        // categoryDetails.open = true; // Uncomment if you want them open by default

        let categorySummary = ce('summary');
        // Capitalize the first letter of the category name
        categorySummary.textContent = catName.charAt(0).toUpperCase() + catName.slice(1);
        categorySummary.style.cursor = 'pointer';
        categorySummary.style.fontWeight = 'bold';
        categorySummary.style.marginBottom = '4px';
        categorySummary.style.fontSize = '12px';
        categoryDetails.append(categorySummary);

        let buttonContainer = ce('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.flexDirection = 'column';
        buttonContainer.style.gap = '2px';
        buttonContainer.style.paddingLeft = '10px'; // Indent buttons slightly
        categoryDetails.append(buttonContainer);

        // Loop through the items inside this specific category
        let itemsInCategory = categories[catName];
        
        for (let i = 0; i < itemsInCategory.length; i++)
        {
            let currentItem = itemsInCategory[i];
            
            let theButton = ce('button');
            theButton.className = "tactical-btn";
            theButton.textContent = currentItem.name;
            theButton.style.width = '100%';
            theButton.style.textAlign = 'left';
            
            theButton.onmouseover = function()
            {
                hoverSound();
            };
            
            theButton.onclick = function()
            {
                clickSound();
                currentItem.action(); // Calls the function directly
            };
            
            buttonContainer.append(theButton);
        }

        rightContainer.append(categoryDetails);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

