class Circle {
    constructor(point, radius) {
        this.point = point;
        this.radius = radius;
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
var speedX = [];
var speedY = [];
canv.width = 1536;
canv.height = 864;

const CANVAS_WIDTH = canv.width
const CANVAS_HEIGHT = canv.height
var circles = [];
const BIG_SIZE = 50;
const MEDIUM_SIZE = 40;
const SMALL_SIZE = 25;
var amountOfBigCircle = 15;
let amountOfCheckingPosition = 0;



showCircleOnWindow();

function table() {
    ctx.fillStyle = "#212320"
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function showCircleOnWindow() {
    createCircles()
    randomSpeedCircle()
    setInterval(allCircle, 0.1);
}

function randomSizeOfCircle() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1: return SMALL_SIZE;
        case 2: return MEDIUM_SIZE;
        case 3: return BIG_SIZE;
        default: return MEDIUM_SIZE;
    }
}

function reflectionCirclesFromWindow() {
    for (var i = 0; i <= circles.length - 1; i++) {
        if (circles[i].point.x < circles[i].radius || circles[i].point.x >= CANVAS_WIDTH - circles[i].radius) {
            speedX[i] = -speedX[i];
        } else if (circles[i].point.y < circles[i].radius || circles[i].point.y >= CANVAS_HEIGHT - circles[i].radius) {
            speedY[i] = -speedY[i];
        }
    }
}

function reflectionCirclesFromEachOther() {
    for (var i = 0; i < circles.length; i++) {
        for (var j = i + 1; j < circles.length; j++) {
            var distanceCircles = Math.sqrt(Math.pow(circles[i].point.x - circles[j].point.x, 2) + Math.pow(circles[i].point.y - circles[j].point.y, 2));
            if (distanceCircles <= circles[i].radius) {
                speedY[i] = -speedY[i];
                speedX[i] = -speedX[i];
                speedY[j] = -speedY[j];
                speedX[j] = -speedX[j];

            }
        }
    }
}


function allCircle() {
    table()
    lineOfBigCircles()
    drawBigCircles()
    moveCircle()
    reflectionCirclesFromEachOther()
    reflectionCirclesFromWindow()
}

function randomSpeedCircle() {
    for (var i = 0; i < circles.length; i++) {
        speedX[i] = Math.round(Math.random()) * 2 - 1;
        speedY[i] = Math.round(Math.random()) * 2 - 1;
    }
}

function getPoint(radius) {
    const circleX = Math.floor(Math.random() * (1536 - 2 * radius) + radius);
    const circleY = Math.floor(Math.random() * (864 - 2 * radius) + radius);
    const point = new CirclePoint(circleX, circleY)
    return point;
}

function createCircles() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        const radius = randomSizeOfCircle(); // TU LOSOWAC SIZE! ----------
        var point = getPoint(radius);
        while (!isPointCorrect(point, radius)) {
            point = getPoint();
        }

        const circle = new Circle(point, radius)
        circles.push(circle)
    }
}

function checkIfCirclesOverlap(pointA, pointB, radius) {
    return Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y) <= (radius + radius);
}

function isPointCorrect(point, radius) {
    var isCorrect = true
    for (let index = 0; index < circles.length; index++) {
        const circle = circles[index];
        if (checkIfCirclesOverlap(point, circle.point, radius)) {
            isCorrect = false;
            break;
        }
    }
    return isCorrect
}

function drawBigCircles() {
    for (var i = 0; i <= amountOfBigCircle - 1; i++) {
        //CREAT CIRCLE ----------------------

        const circle = circles[i];
        ctx.beginPath();
        ctx.arc(circle.point.x, circle.point.y, circle.radius, 0 * Math.PI, 2 * Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(circle.point.x, circle.point.y, circle.radius - 10, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.stroke();

    }
}

function lineOfBigCircles() {
    for (var i = 0; i <= amountOfBigCircle - 2; i++) {
        for (var j = 1; j <= amountOfBigCircle - 1; j++) {
            ctx.beginPath();
            var distanceFromCircles = 0;
            // CHECKING LENGTH LINES AND PUT OPACITY
            for (var z = 9; z >= 1; z--) {
                var opacityOfLine = z / 10;
                var lengthOfLine = Math.sqrt(Math.pow(circles[i].point.x - circles[j].point.x, 2) + Math.pow(circles[i].point.y - circles[j].point.y, 2));
                distanceFromCircles += 40;
                if (lengthOfLine <= (circles[i].radius + distanceFromCircles)) {
                    ctx.moveTo(circles[j].point.x, circles[j].point.y);
                    ctx.lineTo(circles[i].point.x, circles[i].point.y);
                    ctx.strokeStyle = "rgba(17, 95, 251," + opacityOfLine + ")";
                    ctx.stroke();

                }
            }
        }
    }
}



function moveCircle() {
    for (var i = 0; i < circles.length; i++) {

        var coordinates = circles[i].point;
        var speedXCircle = speedX[i];
        var speedYCircle = speedY[i];
        circles[i].point = movePointCircle(coordinates, speedXCircle, speedYCircle);

    }

}


function movePointCircle(coordinates, speedXCircle, speedYCircle) {

    coordinates.x += speedXCircle
    coordinates.y += speedYCircle
    return coordinates
}