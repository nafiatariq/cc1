/**
Project 1: Simulation
Catch the Balls!

Nafia Tariq

Tennis balls are falling from the sky. Catch them with your
white box! If you miss, you will have to start over.
*/

"use strict";

let court;

/**
Description of preload
*/
function preload() {
  court = loadImage("assets/images/court.jpg");

}


/**
Description of setup
*/
function setup() {
  createCanvas(760,500);

}


/**
Description of draw()
*/
function draw() {
  if (state === 'title') {
    title();
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
