class User {

  constructor(){
    this.x= undefined;
    this.y= undefined;
    this.size= 50;
    this.fill= 0;
    this.vy = 3;
  }

  display(){
    push();
    fill(this.fill);
    circle(this.x,this.y,this.size);
    pop();
  }

  move(){
    if (keyIsDown(38)){
      this.y -= this.vy
    }
    else if (keyIsDown(40)){
      this.y += this.vy
    };
  }
}
