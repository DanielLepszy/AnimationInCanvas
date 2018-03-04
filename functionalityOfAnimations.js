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

var slider = document.getElementById("myRange");
var sliderValue = slider.value;
var refreshIntervalId;
var output = document.getElementById("demo");
output.innerHTML = slider.value;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

const BIG_SIZE = 50;
const MEDIUM_SIZE = 40;
const SMALL_SIZE = 30;
const ANIMATION_SPEED = 18;
var AMOUNT_OF_CIRCLES = slider.value;


var circles = [];
var speedX = [];
var speedY = [];

slider.oninput = function () {
    output.innerHTML = this.value;
}

setInterval(showNewCircleOnWindow, ANIMATION_SPEED);

function showNewCircleOnWindow() {
    if (sliderValue != slider.value) {
        clearInterval(refreshIntervalId);
        sliderValue = slider.value
        AMOUNT_OF_CIRCLES = sliderValue;
        circles = [];
        drawFieldOfCanvas()
        showCircleOnWindow();
    }
}
showCircleOnWindow();

function showCircleOnWindow() {
    createCircles()
    randomSpeedCircle()
    refreshIntervalId = setInterval(startAnimation, ANIMATION_SPEED);
}

function createCircles() {
    for (var i = 0; i <= AMOUNT_OF_CIRCLES - 1; i++) {
        const radius = randomSizeOfCircle();
        var point = getPoint(radius);
        var circle = new Circle(point, radius);
        while (!isCirclePositionValid(circle)) { // FIX ME ---- IT CAN BE INFITINE LOOP WHEN IS NO PLACE ON SCREEN
            point = getPoint();
            circle = new Circle(point, radius);
        }
        circles.push(circle)
    }
}

function startAnimation() {
    sliderValue2 = slider.value;
    drawFieldOfCanvas()
    drawLinesBetweenCircles()
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
    const circleX = Math.floor(Math.random() * (canvas.width - 2 * radius) + radius);
    const circleY = Math.floor(Math.random() * (canvas.height - 2 * radius) + radius);
    const point = new CirclePoint(circleX, circleY)
    return point;
}

function checkCollision(circleA, circleB) {
    return Math.hypot(circleA.point.x - circleB.point.x, circleA.point.y - circleB.point.y) <= (circleA.radius + circleB.radius);
}

function isCirclePositionValid(circle) {
    var isCorrect = true
    for (let index = 0; index < circles.length; index++) {
        const circleOnMap = circles[index];
        if (checkCollision(circle, circleOnMap)) {
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

function drawLinesBetweenCircles() {
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

            if (checkCollision(circles[i], circles[j])) {
                speedY[i] = -speedY[i];
                speedX[i] = -speedX[i];
                speedY[j] = -speedY[j];
                speedX[j] = -speedX[j];
            }
        }
    }
}