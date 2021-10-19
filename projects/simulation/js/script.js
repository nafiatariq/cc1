/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
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
/**
Description of preload
*/

let state = 'title';
let court;
let tennisBall;

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

function display() {
  imageMode(CENTER);
  image(tennisBall,ball.x,ball.y, ball.size, ball.size);

  rectMode(CENTER);
  rect(mouseX, user.y, user.size);
  fill(user.fill.r,user.fill.g,user.fill.b);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }

  user.x = mouseX;
}
