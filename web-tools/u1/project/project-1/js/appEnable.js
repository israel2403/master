var globalWidth = 5.6;
var globalHeight = 2.8;
var globalArea = globalHeight * globalWidth;
var localArea;

// docuement elements
var th1E;
var th2E;
var th3E;


function isItFitFigure(width, height) {
    if(globalHeight > height && globalWidth > width) return true;
    else return false;
}

function getWidthOne() {
    return parseFloat(document.getElementById("widthOne").value);
}

function getHeightOne() {
    return parseFloat(document.getElementById("heightOne").value);
}


function isItFitArea(localWidth, localHeight) {
    localArea = localWidth * localHeight;
    if (localArea < globalArea) return true;
    else return false;
}

function init() {
    th1E = document.getElementById("th1E");
    th2E = document.getElementById("th2E");
    th3E = document.getElementById("th3E");
}

function figureDoesNotFitArea() {
    th1E.innerHTML = "NA";
    th1E.style.color = "red";
    th2E.innerHTML = "NA";
    th2E.style.color = "red";
    th3E.innerHTML = "NA";
    th3E.style.color = "red";
}

function figureDoesNotFitFigure() {
    th2E.innerHTML = "NA";
    th2E.style.color = "red";
    th3E.innerHTML = "NA";
    th3E.style.color = "red";
}

function putMathematicalResult() {
    var mathematicResult = Math.trunc(globalArea / localArea);
        console.log(mathematicResult);
        th1E.style.color = "green";
        th1E.innerHTML = mathematicResult;
}

function mainEnable() {
    // init 
    init();
    //Init localWidth & localHeight
    var localWidth = getWidthOne();
    var localHeight = getHeightOne();
    // Verify if the local figure area fit on the global one
    if (isItFitArea(localWidth, localHeight) == false) {
        figureDoesNotFitArea();
    } else {
        putMathematicalResult();
        // Verify if the new figure fit with the global one.
        if(isItFitFigure(localWidth, localHeight) == false){
            figureDoesNotFitFigure();
        }   
    }
    
}