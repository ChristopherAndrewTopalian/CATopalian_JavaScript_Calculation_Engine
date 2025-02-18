// calculation_functions.js

function calculateAddition(a, b)
{
    let sum = parseFloat(a) + parseFloat(b);

    return sum;
}

function calculateAddition3(a, b, c)
{
    let sum = parseFloat(a) + parseFloat(b) + parseFloat(c);

    return sum;
}

function calculateDifference(a, b)
{
    let difference = parseFloat(a) - parseFloat(b);

    return difference;
}

function calculateMultiplication(a, b)
{
    let product = parseFloat(a) * parseFloat(b);

    return product;
}

function calculateDivision(a, b)
{
    let quotient = parseFloat(a) / parseFloat(b);

    return quotient;
}

function calculateModulo(a, b)
{
    let remainder = a % b;

    return remainder;
}

function calculatePercent(whichValue, whichTotalValue)
{
    let percent = (whichValue / whichTotalValue) * 100;

    return percent;
}

function calculateRectangleArea(a, b)
{
    let area = parseFloat(a) * parseFloat(b);

    return area;
}

function calculateSquareArea(a)
{
    let area = a * a;

    return area;
}

function calculateCircleAreaFromRadius(a)
{
    let area = Math.PI * Math.pow(a, 2);

    return area;
}

function calculateCircleAreaFromDiameter(a)
{
    let area = Math.PI * Math.pow((a / 2), 2);

    return area;
}

function calculateCircleAreaFromCircumference(a)
{
    let area = Math.pow(a, 2) / (4 * Math.PI);

    return area;
}

function calculateCircleCircumferenceFromDiameter(a)
{
    let circumference = Math.PI * a;

    return circumference;
}

function calculateCircleCircumferenceFromRadius(a)
{
    let circumference = (2 * Math.PI) * a;

    return circumference;
}

function calculateCircleCircumferenceFromArea(a)
{
    let circumference =  2 * (Math.sqrt(Math.PI * a));

    return circumference;
}

function calculateDistance(a, b)
{
    let distance = (a * b) / 60;

    return distance;
}

function calculateSpeed(a, b)
{
    let speed = (a * 0.000189394) / (b * 0.0166667);

    return speed;
}

function calculateTime(a, b)
{
    let time = (a * 0.000189394) / (b * 0.0166667);

    return time;
}

function calculateRectanglePerimeter(a, b)
{
    let perimeter = (2 * a) + (2 * b);

    return perimeter;
}

function calculateSquarePerimeter(a)
{
    let perimeter = 4 * a;

    return perimeter;
}

function calculateTriangleEquilateralPerimeter(a)
{
    let perimeter = 3 * a;

    return perimeter;
}

function calculateTriangleIsoscelesPerimeter(a, b)
{
    let perimeter = (2 * parseFloat(a)) + parseFloat(b);

    return perimeter;
}

function calculateSphereAreaFromRadius(a)
{
    let area = 4 * Math.PI * Math.pow(a, 2);

    return area;
}

function calculateSphereRadiusFromDiameter(a)
{
    let radius = a / 2;

    return radius;
}

function calculateSphereVolumeFromRadius(a)
{
    let volume = (4 / 3 * Math.PI) * Math.pow(a, 3.0);

    return volume;
}

function calculateCelsiusToFahrenheit(a)
{
    let fahrenheit = (a * 1.8) + 32;

    return fahrenheit;
}

function calculateFahrenheitToCelsius(a)
{
    let celsius = 5 * (a - 32) / 9;

    return celsius;
}

function calculateDecimalToPercent(a)
{
    let percent = a * 100;

    return percent;
}

function calculatePercentToDecimal(a)
{
    let decimal = a / 100;

    return decimal;
}

function calculateMphToKph(a)
{
    let kph = a * 1.60934;

    return kph;
}

function calculateKphToMph(a)
{
    let mph = a * 0.621371;

    return mph;
}

function calculateFpsToMph(a)
{
    let mph = a * 0.681818;

    return mph;
}

function calculateMphToFps(a)
{
    let fps = (a * 5280) / 3600;

    return fps;
}

function calculateFeetToMeter(a)
{
    let meter = a * 0.3048;

    return meter;
}

function calculateMeterToFeet(a)
{
    let feet = a * 3.28084;

    return feet;
}

function calculatePercentOfHour(a)
{
    let percentOfHour = (a * 100) / 60;

    return percentOfHour;
}

function calculateSalesTaxAndTotalPrice(a, b)
{
    let price = a;

    let taxRate = b;

    let salesTaxAmount = price * (taxRate / 100);

    let totalPriceTaxIncluded = parseFloat(price) + salesTaxAmount;

    ge(2).value = salesTaxAmount.toFixed(2);

    return totalPriceTaxIncluded.toFixed(2);
}

function calculateYearBornFromCurrentYear(a)
{
    let age = a;

    let currentYear = new Date().getFullYear();

    ge(1).textContent = currentYear;

    let yearBorn = currentYear - age;

    return yearBorn;
}

function calculateYearBornFromSpecifiedYear(a, b)
{
    let age = a;

    let specifiedYear = b;

    let yearBorn = specifiedYear - age;

    return yearBorn;
}

function calculateMeanAverageOfNumbers()
{
    // split separates values according to the character chosen
    let numbersArray = ge(0).value.split(',');

    // add the numbers together
    let theSum = numbersArray.reduce(function(theTotal, number)
    {
        return parseFloat(theTotal) + parseFloat(number);
    });

    // how many numbers exist in the string
    let howMany = numbersArray.length;

    // result of dividing theSum by howMany
    let average = theSum / howMany;

    return average.toFixed(2);
}

function calculateMedianAverageOfNumbers()
{
    // split separates values according to the character chosen
    let numbersArray = ge(0).value.split(',');

    // sort the numbers in ascending order, low to high
    numbersArray.sort(function(a, b)
    {
        return a - b;
    });

    // convert to an array of float values
    let floatNumbersArray = numbersArray.map(function(item)
    {
        return parseFloat(item, 10);
    });

    // find the median of floatNumbersArray
    let median = Math.floor(floatNumbersArray.length / 2);

    if (floatNumbersArray.length % 2)
    {
        result = floatNumbersArray[median];
    }

    else
    {
        result = (floatNumbersArray[median - 1] + floatNumbersArray[median]) / 2.0;
    }

    return result;
}

function calculateFeetAndInchToMeter(a, b)
{
    let feet = a;

    let inches = b;

    // convert feet to centimeter
    let centimeterFromFeet = feet * 30.48

    // convert inch to centimeter
    let centimeterFromInch = inches * 2.54;

    let totalCentimeters = centimeterFromFeet + centimeterFromInch;

    // convert total centimeters to meters
    let meters = totalCentimeters / 100;

    return meters;
}

function calculateMeterAndCentimeterToFeet(a, b)
{
    let meter = a;

    let centimeter = b;

    // convert meters to inches
    let inchFromMeter = meter * 39.3701;

    // convert centimeters to inches
    let inchFromCentimeter = centimeter * 0.393701;

    let totalInches = inchFromMeter + inchFromCentimeter;

    // convert total inches to feet
    let feet = totalInches * 0.0833333;

    return feet;
}

function calculateMeterToMile(a)
{
    let meter = a;

    let mile = meter * 0.000621371;

    return mile;
}

function calculateMileToMeter(a)
{
    let mile = a;

    let meter = mile * 1609.344;

    return meter;
}

function calculateDifferenceBetweenDates(a, b)
{
    let date1 = new Date(a);
    let date2 = new Date(b);

    // calculate the time difference of two dates
    let differenceInTime = date2.getTime() - date1.getTime();

    // calculate # of days
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.abs(differenceInDays).toFixed(0);
}

function calculateNumberOfDaysInFebruary(whichYear)
{
    let febDays;

    if (whichYear % 4 == 0)
    {
        febDays = 29;
    }
    else
    {
        febDays = 28;
    }

    return febDays;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

