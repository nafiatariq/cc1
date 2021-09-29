/**
Exercise: Dodge-em
Nafia Tariq

The user is a piece of cheese that is running away from Covid19.
You need to click to make yourself move.
*/

"use strict";

let bg ={
  r: 163,
  g: 193,
  b: 173
}

let covid19 = {
  x: 0,
  y: 200,
  size: 200,
  vx: 0,
  vy: 0,
  speed: 5,
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  fill: {
    r: 251,
    g:236,
    b:93
  }
};

//Static in the background
let numStatic = 10;

//Covid19 image
let covid19Image;


function preload () {
//Loading covid19 image 
  covid19Image = loadImage("assets/images/virus.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

//Making the cursor replaced by "user"
  noCursor();
}


function draw() {
//Background colour
  background(bg.r,bg.g,bg.b);

//Displaying the static in the background
for (let i = 0; i < numStatic; i++){
  let x = random(0,width);
  let y = random(0,height);
  stroke(143,151,121);
  strokeWeight(10);
  point(x,y);
}

//Making the covid19 follow the cursor
  if (mouseX < covid19.x){
    covid19.vx = -covid19.speed/4;
  }
  else {
    covid19.vx = covid19.speed/4;
  }
  if (mouseY < covid19.y){
    covid19.vy = -covid19.speed/4;
  }
  else {
    covid19.vy = covid19.speed/4;
  }

//Covid19 movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if(covid19.x > width){
    covid19.x = 0;
    covid19.y = random(0,height);
  }

//Covid19 image & size
  imageMode(CENTER);
  image(covid19Image,covid19.x,covid19.y, covid19.size, covid19.size);

//The distance between user and covid19 to stop game
  let d = dist(user.x,user.y,covid19.x,covid19.y);
  if (d < covid19.size/4 + user.size/4) {
    noLoop();
  }

//User shaped as a cheese
  fill(user.fill.r,user.fill.g,user.fill.b);
  strokeWeight(2);
  rect(user.x,user.y,user.size);

}

function mousePressed(){
//Making user move by clicking on the screen
  user.x = mouseX;
  user.y = mouseY;
}
