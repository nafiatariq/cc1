/**
Musical Toy
Nafia Tariq

A program that plays music based on primitive physics.
*/

"use strict";

// the balls
let balls = [];

// F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];

// create canvas
function setup() {
  createCanvas(600, 600);

  userStartAudio();
}

function draw() {

  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

// press mouse to activate balls
function mousePressed() {
  let note = random(notes);
  createBall(mouseX, mouseY, note);
}

// create ball
function createBall(x, y) {
  let ball = new Ball(x, y);
  balls.push(ball);
}
