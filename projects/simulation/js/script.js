/**
P1: Simulation
Catching Balls
Nafia Tariq

Tennis balls are falling from the sky.
You need to catch them with the little white box you have!
*/

"use strict";

let ball ={
  x: 300,
  y: -10,
  size: 50,
  speed: 10,
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
let numStatic = 5;

/**
Loading the background and the ball images
*/
function preload() {
  court = loadImage("assets/images/court.jpg");
  tennisBall = loadImage("assets/images/ball.png");
}

/**
Setting up the size of the canvas
*/
function setup() {
/** Canvas Size */
  createCanvas(760,500);
/** Removing cursor from mouse */
  noCursor();
}

/**
The functions for the beginning, during and after the simulation
*/
function draw() {
  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
  else if (state === 'gameOver') {
    gameOver();
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

function move() {
  ball.y = ball.y+ball.speed;
}

function checkOverlap() {
  if(ball.y > height-10 && ball.x > mouseX-20 && ball.x < mouseX+20){
    ball.y = -20;
  }

  if(ball.y == -20){
    directionRandom();
  }

if(ball.y > height){
    state = `gameOver`;
  }
}

function directionRandom(){
  ball.x = random(20,width-20);
}

function gameOver(){
		background(0);
    textSize(50);
		textAlign(CENTER, CENTER);
		text('GAME OVER!', width / 2, height / 2);
    text('Try Again', width / 2, height / 2 + 60);

    staticBg();
}

function staticBg() {
  push();
  for (let i = 0; i < numStatic; i++){
    let x = random(0,width);
    let y = random(0,height);
    stroke(239,255,66);
    strokeWeight(20);
    point(x,y);
  }
  pop();
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }

  user.x = mouseX;
}
