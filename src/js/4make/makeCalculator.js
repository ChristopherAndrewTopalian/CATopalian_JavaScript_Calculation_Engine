// makeCalculator.js

function makeCalculator(whichItem, whichAmount)
{
    let calculatorId = 'calculator';

    if (ge(calculatorId))
    {
        ge(calculatorId).remove();
    }

    //-//

    whichAmount = calculationData[whichItem].amountOfTextBoxes;

    //-//

    let mainDiv = ce("div");
    mainDiv.id = calculatorId;
    mainDiv.style.position = 'relative';
    mainDiv.style.top = '0vh';
    mainDiv.style.left = 275 + 'px';
    mainDiv.style.width = '25vw';
    mainDiv.style.paddingLeft = '12px';
    mainDiv.style.paddingRight = '12px';
    mainDiv.style.paddingTop = '12px';
    mainDiv.style.paddingBottom = '12px';
    mainDiv.style.borderStyle = 'solid';
    mainDiv.style.borderWidth = '2px';
    mainDiv.style.borderRadius = '5px';
    mainDiv.style.borderColor = 'rgb(0, 255, 255)';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.alignItems = 'center';
    ba(mainDiv);

    //-//

    let titleOfCalculator = ce("div");
    titleOfCalculator.style.fontSize = '22px';
    titleOfCalculator.style.fontWeight = 'bold';
    titleOfCalculator.style.color = 'rgb(0, 255, 255)';
    titleOfCalculator.innerHTML = '<center> '+calculationData[whichItem].name+' </center>';
    titleOfCalculator.innerHTML += "<br>";
    mainDiv.append(titleOfCalculator);

    //-//

    for (let x = 0; x < whichAmount; x++)
    {
        let textBox = ce("textarea");
        textBox.id = x;

        if (whichAmount == 1)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }

        if (whichAmount == 2)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;
                let b = ge(1).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }

        if (whichAmount == 3)
        {
            textBox.onkeyup = function()
            {
                let a = ge(0).value;
                let b = ge(1).value;
                let c = ge(2).value;

                ge("textBoxResult").value = eval(' '+calculationData[whichItem].calculationFunction+' ');
            };
        }
        mainDiv.append(textBox);
    }

    //-//

    if (whichAmount == 1)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(0));
    }

    if (whichAmount == 2)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(1));

        //-//

        let titleOfTextBox2 = ce("div");
        titleOfTextBox2.innerHTML = calculationData[whichItem].textBoxTwo;
        mainDiv.insertBefore(titleOfTextBox2, ge(2));
    }

    if (whichAmount == 3)
    {
        let titleOfTextBox1 = ce("div");
        titleOfTextBox1.innerHTML = calculationData[whichItem].textBoxOne;
        mainDiv.insertBefore(titleOfTextBox1, ge(1));

        //-//

        let titleOfTextBox2 = ce("div");
        titleOfTextBox2.innerHTML = calculationData[whichItem].textBoxTwo;
        mainDiv.insertBefore(titleOfTextBox2, ge(2));

        //-//

        let titleOfTextBox3 = ce("div");
        titleOfTextBox3.innerHTML = calculationData[whichItem].textBoxThree;
        mainDiv.insertBefore(titleOfTextBox3, ge(4));
    }

    //-//

    let textBoxResult = ce("textarea");
    textBoxResult.id = "textBoxResult";
    textBoxResult.style.borderColor = 'rgb(0, 255, 255)';
    textBoxResult.style.fontWeight = 'bold';
    textBoxResult.style.color = 'rgb(0, 255, 255)';
    textBoxResult.placeholder = "Result";
    window.onkeyup = function()
    {
        if (ge("textBoxResult").value == "NaN" || ge("textBoxResult").value == "Infinity")
        {
            ge("textBoxResult").value = "";
        }
    }
    mainDiv.append(textBoxResult);

    //-//

    let titleOfTextBoxResult = ce("div");
    titleOfTextBoxResult.style.color = 'rgb(0, 255, 255)';
    titleOfTextBoxResult.style.fontWeight = 'bold';
    titleOfTextBoxResult.innerHTML = ' '+calculationData[whichItem].textBoxResult+' ';
    titleOfTextBoxResult.style.fontSize = '16px';
    mainDiv.append(titleOfTextBoxResult);

    //-//

    if (ge("dataContainer"))
        {
            ge("dataContainer").remove();
        }
    
        let dataContainer = ce('div');
        dataContainer.id = 'dataContainer';
        dataContainer.style.position = 'absolute';
        dataContainer.style.right = '50px';
        dataContainer.style.bottom = '25px';
        dataContainer.style.width = '300px';
        dataContainer.style.display = 'flex';
        dataContainer.style.flexDirection = 'column';
        //ge('menuMainDiv').insertAdjacentElement('beforeend', dataContainer);
        ba(dataContainer);
    
        //-//
    
        let formulaText = ce("div");
        formulaText.id = "formulaText";
        formulaText.style.fontSize = '19px';
        formulaText.style.fontWeight = 'bold';
        formulaText.style.color = 'rgb(0, 255, 255)';
        formulaText.innerHTML = calculationData[whichItem].formula;
        dataContainer.append(formulaText);
    
        //-//
    
        dataContainer.append(ce('hr'));
    
        //-//
    
        let expressionText = ce("div");
        expressionText.id = 'expressionText';
        expressionText.style.fontSize = '19px';
        expressionText.style.fontWeight = 'bold';
        expressionText.innerHTML = calculationData[whichItem].expression;
        dataContainer.append(expressionText);
    
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

