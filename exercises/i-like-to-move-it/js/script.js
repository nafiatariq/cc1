/**

Exercise: I like to move it!
Nafia Tariq

*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 2,
};
let circle = {
  x: 0,
  y: 130,
  size: 100,
  growthRate: 2,
  speed: 1,
  fill: 1,
  alpha: 200,
};
let rectangle = {
  x: 300,
  y: 400,
  size: 85,
  speed: -1.6,
  fill: 300,
  alpha: 200,
};

function setup() {
  createCanvas(500,500);
  noStroke();
}

function draw() {
  //background
  background(bg.r, bg.g, bg.b);
  bg.b = map(circle.size,100,width/2,0,255);

  //mouse
  line(mouseX,0,mouseX,100);
  line(0,mouseY,100,mouseY);

  //circle
  //movement
  circle.x = circle.x + circle.speed;
  circle.x = constrain(circle.x,0,width/4);
  //size change
  circle.size = circle.size + circle.growthRate;
  circle.size = constrain(circle.size,0,width/2);
  fill(circle.fill, circle.alpha);
  ellipse(circle.x,circle.y,circle.size);

  //rectangle
  //movement
  rectangle.x = rectangle.x + rectangle.speed;
  rectangle.x = constrain(rectangle.x,100,width);
  fill(rectangle.fill, rectangle.alpha);
  rect(rectangle.x,rectangle.y,rectangle.size);

  //triangle
  fill(bg.r+200,bg.g,bg.b+20);
  triangle(300,100,500,300,200,370);

}
