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

  //create the user
  user = new User();

  //define the user x position
  user.x = width/8;
  user.y = 0;

  //set the initial buildings in the buildings array
  for (let i = 0; i<numberOfBuildings; i++){
    building = new Building(10+random(15,200)*i,random(50,200),random(100,450),buildingImages[int(random(0,buildingImages.length))]);
    buildings.push(building);
  }

  //create the birds in the game
  for (let i = 0; i<numberOfBirds; i++){
    bird = new Bird(random(300,width),random(0,height/9), random(0,360),birdImage);
    birds.push(bird);
  }

}
