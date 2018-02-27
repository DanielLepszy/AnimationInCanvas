var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
const circleSize = 50;
var amountOfBigCircle = 4;
let amountOfCheckingPosition=0;
let circleX;
let circleY;

var poistionXCircle = [];
var poistionYCircle = [];

function allCircle() {
    bigCircle();
    // mediumCircle();
    // smallCircle();
}
table();
showCircleOnWindow();
// allCircle();
function showCircleOnWindow(){
for (var i = 1; i <= amountOfBigCircle; i++) {
    circleX = Math.floor(Math.random() * (1536 - 2 * circleSize) + circleSize);
    circleY = Math.floor(Math.random() * (864 - 2 * circleSize) + circleSize);
    poistionXCircle.push(circleX);
    poistionYCircle.push(circleY);
    allCircle();
}

for ( var x=1;x<=amountOfBigCircle;x++)
{
    amountOfCheckingPosition+=(amountOfBigCircle-1);
    amountOfBigCircle--;
}

}
function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, cw, ch);
}
//Size of Circle
function bigCircle() {
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleSize, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleSize - 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
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
