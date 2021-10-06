/**
Exercise: Love, actually
Nafia Tariq

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// This is the love-emoji circle (user)
let circle1 = {
  x: undefined,
  y: 250,
  size: 200,
  vx: 0,
  vy:0,
  speed: 4,
};

// This is the smirk-emoji circle (non-user)
let circle2 = {
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy:0,
  speed: 8,
};

let state = 'title'; // Can be: title, simulation, love, sadness

let loveImage;

let smirkImage;

function preload () {
//Loading covid19 image
  loveImage = loadImage("assets/images/love-emoji.png");
  smirkImage = loadImage("assets/images/smirk-emoji.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

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
  text('Chase your Love!', width/2, height/2);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER, CENTER);
  text('<3', width/2, height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER, CENTER);
  text('</3', width/2, height/2);
  pop();
}

function move() {
  // Move the circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vx;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vx;
}

function checkOffscreen() {
  // Check if the circles have gone offscreen
  if (isOffscreen(circle1) || isOffscreen(circle2)) {
    state = 'sadness';
  }
}

function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
  }
}

function display () {
  // Display the circles
  imageMode(CENTER);
  image(loveImage,circle1.x,circle1.y, circle1.size, circle1.size);

  imageMode(CENTER);
  image(smirkImage,circle2.x,circle2.y, circle2.size, circle2.size);
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation';
  }
  circle1.x = mouseX;
  circle1.y = mouseY;
}
