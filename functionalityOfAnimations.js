var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
const circleSize = 50;
var amountOfBigCircle = 1;
var amountOfMediumCircle = 1;
var amountOfSmallCircle =3;
let amountOfCheckingPosition = 0;
let circleX;
let circleY;

var positionXCircle = [];
var positionYCircle = [];
var positionXMediumCircle = [];
var positionYMediumCircle = [];
var positionXSmallCircle = [];
var positionYSmallCircle = [];

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
    blockShowingSmallCirclesOnTheSamePosition()
    blockShowingMediumAndBigCirclesOnTheSamePosition()
    blockShowingSmallAndBigCirclesOnTheSamePosition()
    blockShowingSmallAndMediumCirclesOnTheSamePosition()
    allCircle()
}

function allCircle() {
    bigCircle();
    mediumCircle();
    smallCircle();
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
    for (var i = 1; i <= amountOfSmallCircle; i++) {
        randomPositions()
        positionXSmallCircle.push(circleX);
        positionYSmallCircle.push(circleY);
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
            if ((positionXMediumCircle[i] - positionXMediumCircle[j]) < 80 && (positionXMediumCircle[i] - positionXCMediumircle[j]) > -80) {
                if ((positionYMediumCircle[i] - positionYMediumCircle[j]) < 80 && (positionYMediumCircle[i] - positionYMediumCircle[j]) > -80) {
                    do {
                        randomPositions()
                    } while ((positionYMediumCircle[i] - positionYMediumCircle[j]) < 80 && (positionYMediumCircle[i] - positionYMediumCircle[j]) > -80);

                    positionXMediumCircle[i] = circleX;
                    positionYMediumCircle[j] = circleY;

                }
            }
        }
    }

}
function blockShowingSmallCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfSmallCircle - 1; i++) {
        for (var j = i + 1; j <= amountOfSmallCircle - 1; j++) {
            if ((positionXSmallCircle[i] - positionXSmallCircle[j]) < 60 && (positionXCircle[i] - positionXCircle[j]) > -60) {
                if ((positionYSmallCircle[i] - positionYSmallCircle[j]) < 60 && (positionYCircle[i] - positionYCircle[j]) > -60) {
                    do {
                        randomPositions()
                    } while ((positionYSmallCircle[i] - positionYSmallCircle[j]) < 60 && (positionYCircle[i] - positionYCircle[j]) > -60);

                    positionXSmallCircle[i] = circleX;
                    positionYSmallCircle[j] = circleY;

                }
            }
        }
    }

}
function blockShowingMediumAndBigCirclesOnTheSamePosition() {
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
function blockShowingSmallAndBigCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfSmallCircle - 1; i++) {
        for (var j = i; j <= amountOfBigCircle - 1; j++) {
            if ((positionXSmallCircle[i] - positionXCircle[j]) < 80 && (positionXSmallCircle[i] - positionXCircle[j]) > -80) {
                if ((positionYSmallCircle[i] - positionYCircle[j]) < 80 && (positionYSmallCircle[i] - positionYCircle[j]) > -80) {
                    do {
                        randomPositions()
                    } while ((positionYSmallCircle[i] - positionYCircle[j]) < 80 && (positionYSmallCircle[i] - positionYCircle[j]) > -80);

                    positionXSmallCircle[i] = circleX;
                    positionYSmallCircle[j] = circleY;

                }
            }
        }
    }
}
function blockShowingSmallAndMediumCirclesOnTheSamePosition() {
    for (var i = 0; i <= amountOfSmallCircle - 1; i++) {
        for (var j = i; j <= amountOfMediumCircle - 1; j++) {
            if ((positionXSmallCircle[i] - positionXMediumCircle[j]) < 80 && (positionXSmallCircle[i] - positionXMediumCircle[j]) > -80) {
                if ((positionYSmallCircle[i] - positionYMediumCircle[j]) < 80 && (positionYSmallCircle[i] - positionYMediumCircle[j]) > -80) {
                    do {
                        randomPositions()
                    } while ((positionYSmallCircle[i] - positionYMediumCircle[j]) < 80 && (positionYSmallCircle[i] - positionYMediumCircle[j]) > -80);

                    positionXSmallCircle[i] = circleX;
                    positionYSmallCircle[j] = circleY;

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
        ctx.moveTo(positionXMediumCircle[amountOfMediumCircle - 1], positionYMediumCircle[amountOfMediumCircle - 1]);
        ctx.lineTo(positionXMediumCircle[i], positionYMediumCircle[i]);
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
        ctx.moveTo(positionXMediumCircle[amountOfMediumCircle - 1], positionYMediumCircle[amountOfMediumCircle - 1]);
        ctx.lineTo(positionXMediumCircle[i], positionYMediumCircle[i]);
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
        lineOfMediumAndBigCircle()
    }
}
function lineOfMediumAndBigCircle() {
    for (var i = 0; i <= amountOfMediumCircle - 1; i++) {
        for (var j = 0; j <= amountOfBigCircle - 1; j++) {
        //CREATE LINES----------------------
        ctx.beginPath();
        ctx.moveTo(positionXMediumCircle[i], positionYMediumCircle[i]);
        ctx.lineTo(positionXCircle[j], positionYCircle[j]);
        ctx.stroke();
        // ADDING LAST LINE CIRCLE TO THE FIRST----------------------
        ctx.beginPath();
        ctx.moveTo(positionXMediumCircle[i - 1], positionYMediumCircle[i - 1]);
        ctx.lineTo(positionXCircle[j], positionYCircle[j]);
        ctx.stroke();
    }
}
}
function lineOfSmallCircle() {
    for (var i = 0; i <= amountOfSmallCircle - 1; i++) {
        //CREATE LINES----------------------
        ctx.beginPath();
        ctx.moveTo(positionXSmallCircle[i], positionYSmallCircle[i]);
        ctx.lineTo(positionXSmallCircle[i + 1], positionYSmallCircle[i + 1]);
        ctx.stroke();
        // ADDING LAST LINE CIRCLE TO THE FIRST----------------------
        ctx.beginPath();
        ctx.moveTo(positionXSmallCircle[amountOfSmallCircle - 1], positionYMediumCircle[amountOfMediumCircle - 1]);
        ctx.lineTo(positionXSmallCircle[i], positionYSmallCircle[i]);
        ctx.stroke();
    }
}
function smallCircle() {
    for (var i = 0; i <= amountOfSmallCircle - 1; i++) {
    ctx.beginPath();
    ctx.arc(positionXSmallCircle[i], positionYSmallCircle[i], circleSize - 20, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(positionXSmallCircle[i], positionYSmallCircle[i], circleSize - 30, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    lineOfSmallCircle()
    }
}

