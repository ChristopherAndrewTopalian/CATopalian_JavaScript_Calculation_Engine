// makeTitleOfApp.js

function makeTitleOfApp()
{
    let container = ce('div');
    container.style.width = 50 + 'px';
    container.style.position = 'absolute';
    container.style.right = '50px';
    container.style.top = '5px';
    ba(container);

    //-//

    let titleOfApplication = ce("a");
    titleOfApplication.style.fontSize = '15px';
    titleOfApplication.style.color = 'rgb(100, 100, 100)';
    titleOfApplication.style.fontWeight = 'bold';
    titleOfApplication.href = 'https://github.com/ChristopherAndrewTopalian/Topalian_JavaScript_Calculation_Engine'
    titleOfApplication.target = '_blank';
    titleOfApplication.textContent = ' CATopalian JavaScript Calculation Engine';
    container.append(titleOfApplication);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

