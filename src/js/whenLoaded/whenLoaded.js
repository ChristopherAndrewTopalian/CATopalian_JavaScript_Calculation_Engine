// whenLoaded.js

function whenLoaded()
{
    sortByCategoryAndType(calculationData, "up");

    makeMenu();

    makeCalculator(findIndexByName(calculationData, "Addition"), 2);

    makeTitleOfApp();

    // menu starts open
    ge("menuSubDiv").style.height = 300 + "px";
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

