class Building{

  constructor(x,width, height){
    this.x= x;
    this.y= height;
    this.width= width;
    this.height= height;
    this.fill= 255;
    this.vx = -3;
  }

  display(){
    push();
    fill(this.fill);
    rect(this.x,this.y,this.width, this.height);
    pop();
  }

  move(){
    this.x += this.vx;
  }
}
