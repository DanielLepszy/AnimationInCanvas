class Circle {
    constructor(point) {
        this.point = point;
    }
}
class CirclePoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var canv = document.getElementById("animationCanvas");
var ctx = canv.getContext("2d");

canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
var circles = [];
var circles2 = [];
const circleSize = 50;
var amountOfBigCircle = 5;


let amountOfCheckingPosition = 0;


table();
showCircleOnWindow();

function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, cw, ch);
}

function showCircleOnWindow() {
    createBigCircles()
    allCircle()
}

function allCircle() {
    drawBigCircles();
    lineOfBigCircles();

}

function randomPositions() {
    const circleX = Math.floor(Math.random() * (1536 - 2 * circleSize) + circleSize);
    const circleY = Math.floor(Math.random() * (864 - 2 * circleSize) + circleSize);
    const point = new CirclePoint(circleX, circleY)
    return point;
}

function createBigCircles() {

    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        const point = randomPositions()
        const circle = new Circle(point)

        circles.push(circle);
        circles2.push(circle);
    }
}
//SIZE OF CIRCLE --------------------
function drawBigCircles() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREAT CIRCLE ----------------------
        const circle = circles[i];
        ctx.beginPath();
        ctx.arc(circle.point.x, circle.point.y, circleSize, 0 * Math.PI, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(circle.point.x, circle.point.y, circleSize - 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

    }
}

function lineOfBigCircles() {

    for (var j = 0; j <= amountOfBigCircle - 1; j++) {
        for (var i = 1; i <= amountOfBigCircle - 1; i++) {
            ctx.beginPath();
            ctx.moveTo(circles[j].point.x, circles[j].point.y);    
            ctx.lineTo(circles[i].point.x, circles[i].point.y);
            ctx.stroke();
        }

    }
}
