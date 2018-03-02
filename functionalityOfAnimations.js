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
var speedX = Math.round(Math.random()) * 2 - 1;
var speedY = Math.round(Math.random()) * 2 - 1;
canv.width = 1536;
canv.height = 864;

const cw = canv.width
const ch = canv.height
var circles = [];
const circleSize = 50;
var amountOfBigCircle = 1;
let amountOfCheckingPosition = 0;


table();
showCircleOnWindow();

function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, cw, ch);
}

function showCircleOnWindow() {
    createBigCircles()
    setInterval(allCircle, 20);
}


function allCircle() {
    table()
    drawBigCircles();
    lineOfBigCircles();
    moveCircle()
}

function getPoint() {
    const circleX = Math.floor(Math.random() * (1536 - 2 * circleSize) + circleSize);
    const circleY = Math.floor(Math.random() * (864 - 2 * circleSize) + circleSize);
    const point = new CirclePoint(circleX, circleY)
    return point;
}

function createBigCircles() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        var point = getPoint();
        while (!isPointCorrect(point)) {
            point = getPoint();
        }
        const circle = new Circle(point)
        circles.push(circle)
    }
}

function checkIfCirclesOverlap(pointA, pointB) {
    return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y) <= (50 + 50);
}

function isPointCorrect(point) {
    var isCorrect = true
    for (let index = 0; index < circles.length; index++) {
        const circle = circles[index];
        if (checkIfCirclesOverlap(point, circle.point)) {
            isCorrect = false;
            break;
        }
    }
    return isCorrect
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


function moveCircle() {
    for (var i = 0; i < circles.length; i++) {

        var coordinates = circles[i].point;

        circles[i].point = movePointCircle(coordinates);

    }

}

function movePointCircle(coordinates) {
    coordinates.x += speedX
    coordinates.y += speedY
    return coordinates
}