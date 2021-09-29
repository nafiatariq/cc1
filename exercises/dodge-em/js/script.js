/**
Exercise: Dodge-em
Nafia Tariq
*/

"use strict";

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  fill: 255,
};

let numStatic = 1000;


function setup() {
  createCanvas(windowWidth,windowHeight);

  covid19.y = random(0,height);
  covid19.vx = covid19.speed;

  noCursor();
}


function draw() {
  background(0);

for (let i = 0; i < numStatic; i++){
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
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

  user.x = mouseX;
  user.y = mouseY;



  let d = dist(user.x,user.y,covid19.x,covid19.y);
  if (d < covid19.size/2 + user.size/2) {
    noLoop();
  }

  fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
  ellipse(covid19.x,covid19.y,covid19.size);

  fill(user.fill);
  ellipse(user.x,user.y,user.size);

}
