/**
Project 2 - Prototype: City Escape
Nafia Tariq

Avoid buildings and birds by moving the airplane
up and down with the keyboard arrows! The higher level you
are at, the faster you will go.

Fly Safely!
*/


// Loading in all images and sounds
function preload() {
  music = loadSound('assets/sounds/bark.wav');
  bark = loadSound('assets/sounds/bark.wav');

  buildingImages[0] = loadImage("assets/images/b-1.png");
  buildingImages[1] = loadImage("assets/images/b-2.png");
  buildingImages[2] = loadImage("assets/images/b-3.png");

  birdImage = loadImage("assets/images/bird.png");

  userImage = loadImage("assets/images/user.png");

  backgroundImage = loadImage("assets/images/bg.png");
}

// Making the base elements
function setup() {
// Creating the size of the canvas
  createCanvas(1050,500);
