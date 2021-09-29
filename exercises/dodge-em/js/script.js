/**
Exercise: Dodge-em
Nafia Tariq
*/

"use strict";
let bg ={
  r: 135,
  g: 206,
  b: 250
}

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 119,
    g: 221,
    b: 119
  }
};

let user = {
  x: 250,
  y: 250,
  size: 150,
  vx: 0,
  vy: 0,
  fill: {
    r: 251,
    g:236,
    b:93
  }
};

let numStatic = 10;


function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

  noCursor();
}


function draw() {
  background(bg.r,bg.g,bg.b);

for (let i = 0; i < numStatic; i++){
  let x = random(0,width);
  let y = random(0,height);
  stroke(79,134,247);
  strokeWeight(10);
  point(x,y);
}

  if (mouseX < covid19.x){
    covid19.vx = -covid19.speed/2;
  }
  else {
    covid19.vx = covid19.speed/2;
  }
  if (mouseY < covid19.y){
    covid19.vy = -covid19.speed/2;
  }
  else {
    covid19.vy = covid19.speed/2;
  }

  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if(covid19.x > width){
    covid19.x = 0;
    covid19.y = random(0,height);
  }

  //user.x = mouseX;
  //user.y = mouseY;

  let d = dist(user.x,user.y,covid19.x,covid19.y);
  if (d < covid19.size/3 + user.size/3) {
    noLoop();
  }

  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  strokeWeight(2);
  rect(covid19.x,covid19.y,covid19.size);

  fill(user.fill.r,user.fill.g,user.fill.b);
  strokeWeight(2);
  ellipse(user.x,user.y,user.size);

}

function mousePressed(){
  user.x = mouseX;
  user.y = mouseY;
}
