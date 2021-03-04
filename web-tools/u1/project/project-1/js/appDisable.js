var globalWidth = 5.6;
var globalHeight = 2.8;
var globalArea = globalHeight * globalWidth;
var localArea;

// docuement elements
var th1E;
var th2E;
var th3E;
var myCanvasHorizontal;
var myCanvasVertical;

function isItFitFigure(width, height, x, y) {
    if (y >= height && x >= width) return true;
    else return false;
}

function getWidthOne() {
    return parseFloat(document.getElementById("widthTwo").value);
}

function getHeightOne() {
    return parseFloat(document.getElementById("heightTwo").value);
}


function isItFitArea(localWidth, localHeight) {
    localArea = localWidth * localHeight;
    if (localArea <= globalArea) return true;
    else return false;
}

function init() {
    th1E = document.getElementById("th1D");
    th2E = document.getElementById("th2D");
    th3E = document.getElementById("th3D");
    myCanvasHorizontal = document.getElementById("myCanvasHorizontal");
    myCanvasVertical = document.getElementById("myCanvasVertical");
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
    var mathematicResult = Math.trunc(globalArea / localArea.toFixed(2));
    th1E.style.color = "green";
    th1E.innerHTML = mathematicResult;
}

function createCanvas(canvas, x, y) {
    canvas.width = x;
    canvas.height = y;
    canvas.style.border = "1px solid white";
    return canvas;
}

function clearCanvas(x,y, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, x, y);
}

function paintRect(localWidth, localHeight, x, y, canvas, td, limitWidth, limitHeight) {
    localWidth *= 100;
    localHeight *= 100;
    x *= 100;
    y *= 100;
    if(limitHeight <=0 || limitWidth <=0) {
        clearCanvas(x,y, canvas);
        td.innerHTML = ""+0;
        return;
    };
    canvas = createCanvas(canvas, x, y);
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

function mainDisable() {
    // init 
    init();
    //Init localWidth & localHeight
    var localWidth = getWidthOne();
    var localHeight = getHeightOne();
    // Verify if the local figure area fit on the global one
    if (isItFitArea(localWidth, localHeight) == false) {
        figureDoesNotFitArea();
    } else {
        console.log(localArea);
        putMathematicalResult();
        // Verify if the new figure fit with the global one.
        paintRect(localWidth, localHeight, globalWidth, globalHeight, myCanvasHorizontal, th2E,  
        Math.trunc((globalWidth * 100)/(localWidth * 100)), Math.trunc((globalHeight * 100)/(localHeight* 100)));
        paintRect(localWidth, localHeight, globalHeight, globalWidth, myCanvasVertical, th3E,
            Math.trunc((globalHeight * 100)/(localWidth* 100)), Math.trunc((globalWidth * 100)/(localHeight * 100)));
        
    }

}