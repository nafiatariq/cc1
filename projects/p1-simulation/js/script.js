/**
Project 1: Simulation
Catch the Balls!

Nafia Tariq

Tennis balls are falling from the sky. Catch them with your
white box! If you miss, you will have to start over.
*/

"use strict";

let ball ={
  x: 200,
  y: -10,
  size: 50,
  speed: 5,
}

let user ={
  x: 200,
  y: 500,
  size: 100,
  fill: {
    r: 250,
    g:250,
    b:250
  }
}

let state = 'title';
let court;
let tennisBall;

/**
Description of preload
*/
function preload() {
  court = loadImage("assets/images/court.jpg");
  tennisBall = loadImage("assets/images/ball.png");
}


/**
Description of setup
*/
function setup() {
  createCanvas(760,500);

  noCursor();
}


/**
Description of draw()
*/
function draw() {
  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'gameOver') {
  }
}

function title(){
  //beginning title
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('CATCH THE TENNIS BALLS!', width / 2, height / 2);
	text('CLICK to start', width / 2, height / 2 + 60);
}

function simulation() {
  imageMode(CENTER);
  image(court, width / 2, height / 2);

  display();
  move();
  checkOverlap();
}
