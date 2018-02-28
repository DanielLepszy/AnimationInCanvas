var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
const circleSize = 50;
var amountOfBigCircle = 3;
var amountOfMediumCircle = 3;
let amountOfCheckingPosition = 0;
let circleX;
let circleY;

var positionXCircle = [];
var positionYCircle = [];
var positionXMediumCircle = [];
var positionYMediumCircle = [];

table();
showCircleOnWindow();

function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, cw, ch);
}

function showCircleOnWindow() {
    getPositionXY()
    blockShowingBigCirclesOnTheSamePosition()
    blockShowingMediumCirclesOnTheSamePosition()
    blockShowingMediumAndBigCirclesOnTheSamePosition()
    allCircle()
}

function allCircle() {
    bigCircle();
    mediumCircle();
    // smallCircle();
}

function randomPositions() {
    circleX = Math.floor(Math.random() * (1536 - 2 * circleSize) + circleSize);
    circleY = Math.floor(Math.random() * (864 - 2 * circleSize) + circleSize);
}

function getPositionXY() {
    for (var i = 1; i <= amountOfBigCircle; i++) {
        randomPositions()
        positionXCircle.push(circleX);
        positionYCircle.push(circleY);
    }
    for (var i = 1; i <= amountOfMediumCircle; i++) {
        randomPositions()
        positionXMediumCircle.push(circleX);
        positionYMediumCircle.push(circleY);
    }
}

function blockShowingBigCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        for (var j = i + 1; j <= amountOfBigCircle - 1; j++) {
            if ((positionXCircle[i] - positionXCircle[j]) < 100 && (positionXCircle[i] - positionXCircle[j]) > -100) {
                if ((positionYCircle[i] - positionYCircle[j]) < 100 && (positionYCircle[i] - positionYCircle[j]) > -100) {
                    do {
                        randomPositions()
                    } while ((positionYCircle[i] - positionYCircle[j]) < 100 && (positionYCircle[i] - positionYCircle[j]) > -100);

                    positionXCircle[i] = circleX;
                    positionYCircle[j] = circleY;

                }
            }
        }
    }
}

function blockShowingMediumCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfMediumCircle - 1; i++) {
        for (var j = i + 1; j <= amountOfMediumCircle - 1; j++) {
            if ((positionXMediumCircle[i] - positionXMediumCircle[j]) < 80 && (positionXCircle[i] - positionXCircle[j]) > -80) {
                if ((positionYMediumCircle[i] - positionYMediumCircle[j]) < 100 && (positionYCircle[i] - positionYCircle[j]) > -80) {
                    do {
                        randomPositions()
                    } while ((positionYMediumCircle[i] - positionYMediumCircle[j]) < 80 && (positionYCircle[i] - positionYCircle[j]) > -80);

                    positionXMediumCircle[i] = circleX;
                    positionYMediumCircle[j] = circleY;

                }
            }
        }
    }
    
}
function blockShowingMediumAndBigCirclesOnTheSamePosition()
{
    for (var i = 0; i <= amountOfMediumCircle - 1; i++) {
        for (var j = i; j <= amountOfBigCircle - 1; j++) {
            if ((positionXMediumCircle[i] - positionXCircle[j]) < 90 && (positionXMediumCircle[i] - positionXCircle[j]) > -90) {
                if ((positionYMediumCircle[i] - positionYCircle[j]) < 90 && (positionYMediumCircle[i] - positionYCircle[j]) > -90) {
                    do {
                        randomPositions()
                    } while ((positionYMediumCircle[i] - positionYCircle[j]) < 90 && (positionYMediumCircle[i] - positionYCircle[j]) > -90);

                    positionXMediumCircle[i] = circleX;
                    positionYMediumCircle[j] = circleY;

                }
            }
        }
    }
}
//SIZE OF CIRCLE --------------------
function bigCircle() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREAT CIRCLE ----------------------
        ctx.beginPath();
        ctx.arc(positionXCircle[i], positionYCircle[i], circleSize, 0 * Math.PI, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(positionXCircle[i], positionYCircle[i], circleSize - 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        lineOfBigCircle();
    }
}

function lineOfBigCircle() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREATE LINES----------------------
        ctx.beginPath();
        ctx.moveTo(positionXCircle[i], positionYCircle[i]);
        ctx.lineTo(positionXCircle[i + 1], positionYCircle[i + 1]);
        ctx.stroke();
        // ADDING LAST LINE CIRCLE TO THE FIRST----------------------
        ctx.beginPath();
        ctx.moveTo(positionXCircle[amountOfBigCircle - 1], positionYCircle[amountOfBigCircle - 1]);
        ctx.lineTo(positionXCircle[i], positionYCircle[i]);
        ctx.stroke();
    }
}
function lineOfMediumCircle() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREATE LINES----------------------
        ctx.beginPath();
        ctx.moveTo(positionXMediumCircle[i], positionYMediumCircle[i]);
        ctx.lineTo(positionXMediumCircle[i + 1], positionYMediumCircle[i + 1]);
        ctx.stroke();
        // ADDING LAST LINE CIRCLE TO THE FIRST----------------------
        ctx.beginPath();
        ctx.moveTo(positionXMediumCircle[amountOfMediumCircle - 1],positionYMediumCircle[amountOfMediumCircle - 1]);
        ctx.lineTo(positionXMediumCircle[i],positionYMediumCircle[i]);
        ctx.stroke();
    }
}

function mediumCircle() {
    for (var i = 0; i <= amountOfMediumCircle - 1; i++) {
        ctx.beginPath();
        ctx.arc(positionXMediumCircle[i], positionYMediumCircle[i], circleSize - 10, 0, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(positionXMediumCircle[i], positionYMediumCircle[i], circleSize - 20, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        lineOfMediumCircle()
    }
}

function smallCircle() {
    ctx.beginPath();
    ctx.arc(200, 200, circleSize - 20, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(200, 200, circleSize - 30, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}
