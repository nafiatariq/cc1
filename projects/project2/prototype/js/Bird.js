class Bird{

  constructor(x,y,counterValue){
    this.x= x;
    this.y= 4*y/5;
    this.size= 50;
    this.fill= 255;
    this.vx = -3;
    this.counter = counterValue;
  }

  display(){
    push();
    fill(this.fill);
    circle(this.x,this.y,this.size);
    pop();
  }

  move(){
    this.x += this.vx - level/2;
    this.y += 5*sin(1/3*(this.counter));
    this.counter += 1;
  }
}
