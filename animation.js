let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
  if (position + radius > 640) {
    moveSpeed = -speed;
  } else if (position - radius < 0) {
    moveSpeed = speed;
  }
  position += moveSpeed;
}

function drawBall() {
  context.clearRect(0, 0, 640, 480); //Specifies pixel on the canvas
  context.fillStyle = "#62687f";
  context.beginPath(); //Draws the ball in its current position using the context dot begin path
  context.arc(position, 50, radius, 0, 2 * Math.PI);
  context.fill();
}

function animate() {
  moveBall(); // calls moveBall function
  drawBall(); // calls drawBall function
  window.requestAnimationFrame(animate); //calls window dot request animation frame to schedule the animate function to be called again at the end of the file
}

window.requestAnimationFrame(animate); //Again call window dot request animation frame to start the animate function being called.
