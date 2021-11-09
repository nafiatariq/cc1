/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let user;
let building;
let bird;
let numberOfBuildings = 15;
let numberOfBirds = 5;
let buildings = [];
let birds = [];
let state = 'title';
let buildingImages = [];
let backgroundImage;
let level = 0;
//level threshold is the number of buildings that need to leave the screen before the level goes up
let levelThreshold = 10;
let numberOfObjectsLeftScreen = 0;

/**
Description of preload
*/
function preload() {
  buildingImages[0] = loadImage("assets/images/b-1.png");
  buildingImages[1] = loadImage("assets/images/b-2.png");
  buildingImages[2] = loadImage("assets/images/b-3.png");

  backgroundImage = loadImage("assets/images/bg.jpeg");
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
    building = new Building(100+random(150,200)*i,random(50,200),random(400,600),buildingImages[int(random(0,buildingImages.length))]);
    buildings.push(building);
  }

  //create the birds in the game
  for (let i = 0; i<numberOfBirds; i++){
    bird = new Bird(random(300,width),random(0,height/9), random(0,360));
    birds.push(bird);
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
  background(211);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text('CITY ESCAPE', width / 2, height / 2);
	text('CLICK to start', width / 2, height / 2 + 60);
}

function simulation() {
  imageMode(CENTER);
  image(backgroundImage, width/2, height/2, width, height);
  displayLevel();
  checkLevel();

  //display the user
  user.display();
  user.move();

  for (let i = 0; i<buildings.length; i++){
    buildings[i].display();
    buildings[i].move();
    //wrap the building if it left the canvas
    if (leftScreenBuilding(buildings[i]) === true){
      wrap(buildings[i])
    };
  }

  for (let i = 0; i<birds.length; i++){
    birds[i].display();
    birds[i].move();
    //wrap the building if it left the canvas
    if (leftScreenBird(birds[i]) === true){
      wrap(birds[i])
    };
  }

  for (let i=0; i<buildings.length; i++){
    if (checkTouch(buildings[i]) === true){
      state = 'gameOver'
    }
  }

}

function leftScreenBuilding(object) {
  if (object.x <= 0-object.width){
    numberOfObjectsLeftScreen += 1
    return true
  }
  else{
    return false
  };
}

function leftScreenBird(object) {
  if (object.x <= 0-object.size){
    numberOfObjectsLeftScreen += 1
    return true
  }
  else{
    return false
  };
}

//I'll need to make this function more smart for rectangles later on
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
		background(211);
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
  //reset the game
  else if (state === `gameOver`){
    user.y = height/2;
    state = `title`;
  }
}

function wrap(object){
  //reset the object position to the width of the canvas
  object.x = width;
}

function checkLevel(){
  if (numberOfObjectsLeftScreen >= levelThreshold){
    level += 1
    numberOfObjectsLeftScreen = 0
  }
}

function displayLevel(){
  push();
  textSize(50);
  text("Level: " + level, 5*width/6, 100);
  pop();
}
