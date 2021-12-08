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
  music = loadSound('assets/sounds/flying-music.wav');
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
  background(255,255,80);
  textSize(50);
  textAlign(CENTER);
  text('CITY ESCAPE', width/2, height/2);
  textSize(30);
	text('CLICK to start', width/2, height/2 + 60);
  textSize(20);
	text('PRESS arrows to move UP & DOWN', width/2, height/2 + 160);
}


function simulation() {
  imageMode(CENTER);
  image(backgroundImage, width/2, height/2, width, height);
  displayLevel();
  checkLevel();
  checkOffscreen();
  for (let i = 0; i<birds.length; i++){
    bird = birds[i];
    checkOverlap(bird);
  }

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
      //music.stop();
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

  if (user.x > object.x - object.width/2 &&
      user.x < object.x + object.width/2 &&
      user.y > object.y - object.height/2 &&
      user.y < object.y + object.height/2) {
        return true;
      }
      else {
        return false;
      }
}

function gameOver(){
		background(150,255,255);
    textSize(50);
    textAlign(CENTER);
    text('GAME OVER!', width/2, height/2);
    textSize(30);
  	text('Restart to Try Again', width/2, height/2 + 60);
}


function mousePressed() {
/** Start simulation by clicking */
  if (!music.isPlaying()){
    music.loop();
  }

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

function checkOffscreen() {
  // Check if the user have gone offscreen
  if (isOffscreen(user)) {
    state = `gameOver`;
  }
}

function isOffscreen(user) {
  if (user.x < 0 || user.y < 0) {
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap(bird) {
  // Check if the user and bird overlap
  let d = dist(user.x,user.y,bird.x,bird.y);
  if (d < user.size/3 + bird.size/3) {
    bark.play();
    state = `gameOver`;
  }
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
