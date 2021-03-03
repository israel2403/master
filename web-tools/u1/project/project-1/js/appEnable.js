var globalWidth = 5.6;
var globalHeight = 2.8;
var globalArea = globalHeight * globalWidth;
var localArea;

// docuement elements
var th1E;
var th2E;
var th3E;
var myCanvasHorizontal;


function isItFitFigure(width, height) {
    if (globalHeight >= height && globalWidth >= width) return true;
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
    if (localArea <= globalArea) return true;
    else return false;
}

function init() {
    th1E = document.getElementById("th1E");
    th2E = document.getElementById("th2E");
    th3E = document.getElementById("th3E");
    myCanvasHorizontal = document.getElementById("myCanvasHorizontal");
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
    th1E.style.color = "green";
    th1E.innerHTML = mathematicResult;
}

function createCanvas(canvas, x, y) {
    canvas.width = x;
    canvas.height = y;
    canvas.style.border = "1px solid white";
    return canvas;
}

function paintHorizontal(localWidth, localHeight, x, y, canvas, td) {
    localWidth *= 100;
    localHeight *= 100;
    x *= 100;
    y *= 100;
    canvas = createCanvas(canvas, x, y);
    var limitHeight = Math.trunc(y/localHeight);
    var limitWidth = Math.trunc(x/localWidth);
    var contX = 0;
    var contY = 0;
    var acumX = 0;
    var acumY = 0;
    var timesIsItFit = 0;
    var ctx = canvas.getContext("2d");
    while (contY < limitHeight) {
        while (contX < limitWidth) {
            ctx.rect(acumX, acumY, localWidth, localHeight);
            ctx.fillStyle = "teal";
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "white";
            ctx.stroke();
            contX++;
            acumX = localWidth * contX;
            timesIsItFit++;
        }
        contX = 0;
        acumX = 0;
        contY++;
        acumY = localHeight * contY;
    }
    td.innerHTML = ""+timesIsItFit;
    td.style.color = "green";
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
        if (isItFitFigure(localWidth, localHeight) == true) {
            paintHorizontal(localWidth, localHeight, globalWidth, globalHeight, myCanvasHorizontal, th2E);
        }
    }

}