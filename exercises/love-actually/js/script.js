/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let circle1 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 3
};

let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 3
};

function setup() {
  createCanvas(500, 500);

  setupCircles ();
}

function setupCircles () {
  // Position circles separated from one another
  circle1.x = width/3;
  circle2.x = 2 * width/3;

  // Start circles moving in a random direction
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);

  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle1.speed, circle1.speed);
}

function draw() {
  background(0);

  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'love') {
    love();
  }
  else if (state === 'sadness') {
    sadness();
  }
}

function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER, CENTER);
  text('LOVE?', width/2, height/2);
  pop();
}
