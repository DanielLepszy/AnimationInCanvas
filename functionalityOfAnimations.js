var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
const circleSize = 50;
let circleX=Math.floor(Math.random()*1486+1);
let circleY=Math.floor(Math.random()*824+1);


function allCircle() {
    bigCircle();
    // mediumCircle();
    // smallCircle();
}
table();
allCircle();

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




//Amount of Circle
const amountOfBigCircle =2;
const amountOfMediumCircle=2;
const amountOfSmallCircle=2;
const arrayOfBigCircle =[bigCircle()];
// arrayOfBigCircle[amountOfBigCircle]= bigCircle();


