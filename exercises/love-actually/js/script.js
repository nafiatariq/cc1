/**
Exercise: Love, actually
Nafia Tariq

You are having a small fight with your lover.
You are madly in love and will chase your significant other
to make them feel better. Let's see if you can accomplish your mission!
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

let loveImage; // This is the user

let smirkImage; // This is the non-user

// Preloading the images of the characters
function preload () {
// Loading the lover emoji and the smirk emoji images
  loveImage = loadImage("assets/images/love-emoji.png");
  smirkImage = loadImage("assets/images/smirk-emoji.png");
}

// Setting up the background and characters
function setup() {
  createCanvas(windowWidth,windowHeight);

  setupCircles ();
  rectMode(CENTER);
}

// Setting up the positions & speed for the characters
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

// Making the different options that can appear on screen
function draw() {
  background(0);
  backgroundRect();


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

// This is the title in the beginning
function title(){
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER, CENTER);
  // Text that appears on screen
  text('Chase after your Love!', width/2, height/2);
  pop();
}

// Different kind of simulation
function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

// When you catch your lover
function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER, CENTER);
  // Text that appears on screen
  text('You did it <3', width/2, height/2);
  pop();
}

// When you lose your lover
function sadness() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER, CENTER);
  // Text that appears on screen
  text('You missed it </3', width/2, height/2);
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

// When lover and smirk emoji are reunited
function checkOverlap() {
  // Check if the circles overlap
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
  }
}

// Making the images appear on screen
function display () {
  // Display the circles
  imageMode(CENTER);
  image(loveImage,circle1.x,circle1.y, circle1.size, circle1.size);

  imageMode(CENTER);
  image(smirkImage,circle2.x,circle2.y, circle2.size, circle2.size);
}

// Rectangles in the background to create more tension
function backgroundRect() {
  push();
// Rectangle 1
    	translate(150, 150);
    	rotate(radians(frameCount));
    	fill(10);
    	rect(0, 0, 100, 100);
// Rectangle 2
      translate(150, 150);
    	rotate(radians(frameCount));
    	fill(20);
    	rect(0, 0, 200, 200);
// Rectangle 3
      translate(250, 250);
    	rotate(radians(frameCount));
    	fill(30);
    	rect(0, 0, 300, 300);
// Rectangle 4
      translate(350, 350);
    	rotate(radians(frameCount));
    	fill(40);
    	rect(0, 0, 400, 400);
// Rectangle 5
      translate(450, 450);
    	rotate(radians(frameCount));
    	fill(50);
    	rect(0, 0, 500, 500);

  pop();
}

function mousePressed() {
// Game starting after clicking on title
  if (state === 'title') {
    state = 'simulation';
  }
// Making lover chase by pressing on screen with mouse
  circle1.x = mouseX;
  circle1.y = mouseY;
}
