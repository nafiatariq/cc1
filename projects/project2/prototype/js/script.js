/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let user;
let building;
let state = 'title';
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

  //create the user
  user = new User();
  building = new Building();


  //define the user x position
  user.x = width/8;
  user.y = height/2;

}


/**
Description of draw()
*/
function draw() {
  background(0);

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
  background(0);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('TITLE', width / 2, height / 2);
	text('CLICK to start', width / 2, height / 2 + 60);
}

function simulation() {
  //display the user
  user.display();
  user.move();

  building.display();
}

function gameOver(){
		background(0);
    textSize(50);
		textAlign(CENTER, CENTER);
		text('GAME OVER!', width / 2, height / 2);
    text('Try Again', width / 2, height / 2 + 60);
}


function mousePressed() {
/** Start simulation by clicking */
  if (state === `title`) {
    state = `simulation`;
  }
}
