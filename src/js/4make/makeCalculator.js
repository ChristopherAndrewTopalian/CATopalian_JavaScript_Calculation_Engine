// makeCalculator.js

function makeCalculator(whichItem) 
{
    // our data shortcut
    let data = calculationData[whichItem]; 

    let calculatorId = 'calculator';

    if (ge(calculatorId))
    {
        ge(calculatorId).remove();
    }

    // THE MAIN CONTAINER
    let mainDiv = ce("div");
    mainDiv.id = calculatorId;
    mainDiv.style.position = 'relative';
    mainDiv.style.left = '250px';
    mainDiv.style.width = '25vw';
    mainDiv.style.padding = '12px';
    mainDiv.style.border = '2px solid rgb(0, 255, 255)';
    mainDiv.style.borderRadius = '5px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';
    ba(mainDiv);

    //-//

    let titleOfCalculator = ce("div");
    titleOfCalculator.style.fontSize = '17px';
    titleOfCalculator.style.fontWeight = 'bold';
    titleOfCalculator.style.color = 'rgb(0, 255, 255)';
    titleOfCalculator.textContent = data.name;
    mainDiv.append(titleOfCalculator);

    //-//

    // THE MATH ENGINE
    let mathOperation = new Function('a', 'b', 'c', 'return ' + data.expression);

    //-//

    // TEXT BOX GENERATION
    let labels = [data.textBoxOne, data.textBoxTwo, data.textBoxThree];

    //-//

    for (let x = 0; x < data.amountOfTextBoxes; x++) 
    {
        let textBox = ce("textarea");
        textBox.id = "box_" + x; 

        // We use the standard anonymous function you are comfortable with!
        textBox.onkeyup = function() 
        {
            // We set default values to zero
            let a = 0;
            let b = 0;
            let c = 0;

            // Explicit, easy-to-read IF statements instead of the ? shorthand!
            if (ge("box_0"))
            {
                a = ge("box_0").value;
            }
            if (ge("box_1"))
            {
                b = ge("box_1").value;
            }
            if (ge("box_2"))
            {
                c = ge("box_2").value;
            }

            // run the safe math engine
            let result = mathOperation(a, b, c);

            // print the result cleanly
            if (isNaN(result) || !isFinite(result))
            {
                ge("textBoxResult").value = "";
            }
            else
            {
                ge("textBoxResult").value = result;
            }
        };

        mainDiv.append(textBox);

        // add the label underneath the box if it exists
        if (labels[x])
        {
            let labelDiv = ce("div");
            labelDiv.textContent = labels[x];
            labelDiv.style.fontSize = '14px';
            labelDiv.style.margin = '8px 0px'; 
            mainDiv.append(labelDiv);
        }
    }

    // THE RESULT UI
    let textBoxResult = ce("textarea");
    textBoxResult.id = "textBoxResult";
    textBoxResult.style.borderColor = 'rgb(0, 255, 255)';
    textBoxResult.style.fontWeight = 'bold';
    textBoxResult.style.color = 'rgb(0, 255, 255)';
    textBoxResult.placeholder = "Result";
    textBoxResult.readOnly = true; 
    mainDiv.append(textBoxResult);

    //-//

    let titleOfTextBoxResult = ce("div");
    titleOfTextBoxResult.style.color = 'rgb(0, 255, 255)';
    titleOfTextBoxResult.style.fontWeight = 'bold';
    titleOfTextBoxResult.textContent = data.textBoxResult;
    titleOfTextBoxResult.style.fontSize = '16px';
    mainDiv.append(titleOfTextBoxResult);

    //-//

    if (ge("dataContainer"))
    {
        ge("dataContainer").remove();
    }

    //-//

    let dataContainer = ce('div');
    dataContainer.id = 'dataContainer';
    dataContainer.style.position = 'absolute';
    dataContainer.style.right = '0px';
    dataContainer.style.bottom = '10px';
    dataContainer.style.width = '250px';
    dataContainer.style.display = 'flex';
    dataContainer.style.flexDirection = 'column';
    //ge('menuMainDiv').insertAdjacentElement('beforeend', dataContainer);
    ba(dataContainer);

    //-//

    let formulaText = ce("div");
    formulaText.id = "formulaText";
    formulaText.style.fontSize = '16px';
    formulaText.style.fontWeight = 'bold';
    formulaText.style.color = 'rgb(0, 255, 255)';
    formulaText.textContent = calculationData[whichItem].formula;
    dataContainer.append(formulaText);

    //-//

    dataContainer.append(ce('hr'));

    //-//

    let expressionText = ce("div");
    expressionText.id = 'expressionText';
    expressionText.style.fontSize = '16px';
    expressionText.style.fontWeight = 'bold';
    expressionText.textContent = calculationData[whichItem].expression;
    dataContainer.append(expressionText);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

