// sortByCategoryAndType.js

function sortByCategoryAndType(whichArray, whichDirection)
{
    // ascending
    if (whichDirection == "up")
    {
        whichArray.sort(function(a, b)
        {
            return a.category.localeCompare(b.category) || a.type.localeCompare(b.type)
        });
    }

    // descending
    else if (whichDirection == "down")
    {
        whichArray.sort(function(b, a)
        {
            return a.category.localeCompare(b.category) || a.type.localeCompare(b.type)
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

