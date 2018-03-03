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
var canvas = document.getElementById("animationCanvas");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

const BIG_SIZE = 50;
const MEDIUM_SIZE = 40;
const SMALL_SIZE = 25;
const ANIMATION_SPEED = 1;
var AMOUNT_OF_CIRCLES = 20;


var circles = [];
var speedX = [];
var speedY = [];


showCircleOnWindow();

function showCircleOnWindow() {
    createCircles()
    randomSpeedCircle()
    setInterval(startAnimation, ANIMATION_SPEED);
}

function createCircles() {
    for (var i = 0; i <= AMOUNT_OF_CIRCLES - 1; i++) {
        const radius = randomSizeOfCircle();
        var point = getPoint(radius);
        while (!isPointCorrect(point, radius)) { // FIX ME ---- IT CAN BE INFITINE LOOP WHEN IS NO PLACE ON SCREEN
            point = getPoint();
        }
        const circle = new Circle(point, radius)
        circles.push(circle)
    }
}

function startAnimation() {
    drawFieldOfCanvas()
    lineOfBigCircles()
    drawCircles()
    moveCircle()
    circlesCollision()
    circleAndWindowCollision()
}

function randomSizeOfCircle() {
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return SMALL_SIZE;
        case 2:
            return MEDIUM_SIZE;
        case 3:
            return BIG_SIZE;
        default:
            return MEDIUM_SIZE;
    }
}

function getPoint(radius) {
    const circleX = Math.floor(Math.random() * (1536 - 2 * radius) + radius);
    const circleY = Math.floor(Math.random() * (864 - 2 * radius) + radius);
    const point = new CirclePoint(circleX, circleY)
    return point;
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

function randomSpeedCircle() {
    for (var i = 0; i < circles.length; i++) {
        speedX[i] = Math.round(Math.random()) * 2 - 1;
        speedY[i] = Math.round(Math.random()) * 2 - 1;
    }
}

function drawFieldOfCanvas() {
    context.fillStyle = "#212320"
    context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function lineOfBigCircles() {
    for (var i = 0; i <= circles.length - 2; i++) {
        for (var j = 1; j <= circles.length - 1; j++) {

            context.beginPath();
            var distanceFromCircles = 0;
            var pointFirst = circles[i].point;
            var pointSecond = circles[j].point

            for (var z = 9; z >= 1; z--) {
                var opacityOfLine = z / 10;
                var lengthOfLine = Math.sqrt(Math.pow(pointFirst.x - pointSecond.x, 2) + Math.pow(pointFirst.y - pointSecond.y, 2));
                distanceFromCircles += 40;
                if (lengthOfLine <= (circles[i].radius + distanceFromCircles)) {
                    context.moveTo(pointSecond.x, pointSecond.y);
                    context.lineTo(pointFirst.x, pointFirst.y);
                    context.strokeStyle = "rgba(255, 165, 186," + opacityOfLine + ")";
                    context.stroke();
                }
            }
        }
    }
}

function drawCircles() {
    for (var i = 0; i < circles.length; i++) {

        const circle = circles[i];
        var x = circle.point.x;
        var y = circle.point.y;
        var radius = circle.radius;

        context.beginPath();
        context.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
        context.fillStyle = "#FFA5BA";
        context.fill();
        context.beginPath();
        context.arc(x, y, radius - 10, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.stroke();
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

function circleAndWindowCollision() {
    for (var i = 0; i <= circles.length - 1; i++) {
        if (circles[i].point.x < circles[i].radius || circles[i].point.x >= CANVAS_WIDTH - circles[i].radius) {
            speedX[i] = -speedX[i];
        } else if (circles[i].point.y < circles[i].radius || circles[i].point.y >= CANVAS_HEIGHT - circles[i].radius) {
            speedY[i] = -speedY[i];
        }
    }
}

function circlesCollision() {
    for (var i = 0; i < circles.length; i++) {
        for (var j = i + 1; j < circles.length; j++) {
            var distanceCircles = Math.sqrt(Math.pow(circles[i].point.x - circles[j].point.x, 2) + Math.pow(circles[i].point.y - circles[j].point.y, 2));
            if (distanceCircles <= circles[i].radius + circles[j].radius) {
                speedY[i] = -speedY[i];
                speedX[i] = -speedX[i];
                speedY[j] = -speedY[j];
                speedX[j] = -speedX[j];

            }
        }
    }
}