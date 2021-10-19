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
let numStatic = 5;

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

function move() {
  ball.y = ball.y+10;
}

function checkOverlap() {
  if(ball.y > height-10 && ball.x > mouseX-20 && ball.x < mouseX+20){
    ball.y = -20;
  }

  if(ball.y == -20){
    directionRandom();
  }

if(ball.y > height){
    gameOver();
  }
}

function directionRandom(){
  ball.x = random(20,width-20);
}

function gameOver(){
		background(0);
    textSize(50);
		textAlign(CENTER);
		text('GAME OVER!', width / 2, height / 2);
    text('MOVE to play again', width / 2, height / 2 + 60);

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
