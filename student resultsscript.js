const maxPoints = 120;
const passingPoints = 70;
const samPoints = 84;
const alexPoints = 75;
const jessiePoints = 99;
const didAlexPass = !false;
const samPointsDisplay = "Sam earned " + samPoints + " points out of " +
  maxPoints;
const alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
const jessiePointsDisplay = "Jessie earned " + jessiePoints +
  " points out of " + maxPoints;
const samPercentage = (samPoints/maxPoints)*100;
const samPercentDisplay = " Sam scored " + passingPoints + " % ";

const listItemArray = document.querySelectorAll("li");
const alexPercentage = (alexPoints/maxPoints)*100;
const alexPercentDisplay = " Alex scored "+ alexPercentage + " % ";

const jessiePercentage = (jessiePoints/maxPoints)*100;
const jessiePercentDisplay = " Jessie scored "+ jessiePercentage + " % ";

const samMissedPoints = (maxPoints - samPoints);

const alexMissedPoints = (maxPoints - alexPoints);

const jessieMissedPoints = (maxPoints - jessiePoints);

const samMissedPointsDisplay = " Sam missed "+ samMissedPoints + "points";

const alexMissedPointsDisplay = " Alex missed "+ alexMissedPoints + "points";

const jessieMissedPointsDisplay = "Jessie missed"+ jessieMissedPoints + "points";

const classAveragePoints = ((samPoints+alexPoints+jessiePoints)/3);
const classAveragePercent = (classAveragePoints/maxPoints)*100;

const classAvgDisplay = "The class average was "+ classAveragePoints + "points or "+ classAveragePercent;

const alexPointsUpdated = "Alex failed initally but did extra credit, Their new score is"+ alexPoints + "out of "+ maxPoints;

listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
console.log(samPointsDisplay);

console.log(alexPointsDisplay);

console.log(jessiePointsDisplay);

console.log(samPercentDisplay);

console.log(alexPercentDisplay);

console.log(jessiePercentDisplay);

console.log(samMissedPointsDisplay);

console.log(alexMissedPointsDisplay);

console.log(jessieMissedPointsDisplay);

console.log(classAvgDisplay);
console.log(alexPointsUpdated);

listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;
