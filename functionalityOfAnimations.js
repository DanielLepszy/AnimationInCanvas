var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
const circleSize = 50;
var amountOfBigCircle = 3;
let amountOfCheckingPosition = 0;
let circleX;
let circleY;

var positionXCircle = [];
var positionYCircle = [];

table();
showCircleOnWindow();

function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, cw, ch);
}

function showCircleOnWindow() {
    getPositionXY();
    blockShowingCirclesOnTheSamePosition();
    allCircle();
}

function allCircle() {
    bigCircle();
    // mediumCircle();
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
}

function blockShowingCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        for (var j = i + 1; j <= amountOfBigCircle - 1; j++) {
            if ((positionXCircle[i] - positionXCircle[j]) < 100 && (positionXCircle[i] - positionXCircle[j]) > -100) {
                if ((positionYCircle[i] - positionYCircle[j]) < 100 && (positionYCircle[i] - positionYCircle[j]) > -100) {
                    randomPositions()
                    alert('poprawa');
                    positionXCircle[i] = circleX;
                    positionYCircle[j] = circleY;

                }
            }
        }
    }
}
//SIZE OF CIRCLE --------------------
function bigCircle() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREAT CIRCLE----------------------
        ctx.beginPath();
        ctx.arc(positionXCircle[i], positionYCircle[i], circleSize, 0 * Math.PI, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(positionXCircle[i], positionYCircle[i], circleSize - 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();
        lineCircle();
    }
}

function lineCircle() {
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

function mediumCircle() {
    ctx.beginPath();
    ctx.arc(400, 200, circleSize - 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(400, 200, circleSize - 20, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
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
