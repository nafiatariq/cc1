/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let user;
let building;
let numberOfBuildings = 15;
let buildings = [];
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
  createCanvas(1000,500);

  //create the user
  user = new User();


  //define the user x position
  user.x = width/8;
  user.y = height/2;

  //set the initial buildings in the buildings array
  for (let i = 0; i<numberOfBuildings; i++){
    building = new Building(100+random(150,200)*i,random(50,200),random(50,300));
    buildings.push(building);
  }

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

  for (let i = 0; i<buildings.length; i++){
    buildings[i].display();
    buildings[i].move();
  }

  for (let i=0; i<buildings.length; i++){
    if (checkTouch(buildings[i]) === true){
      state = 'gameOver'
    }
  }

}

function leftScreen(object) {
  if (object.x <= 0-object.width){
    return true
  }
  else{
    return false
  };
}

function checkTouch(object){
  let d = dist(user.x,user.y,object.x,object.y);

  if (d <= (user.size/2+object.width/2)){
    return true
  }
  else{
    return false
  };
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