class Building{

  constructor(){
    this.x= width/2;
    this.y= height/2;
    this.width= 10;
    this.height= 70;
    this.fill= 255;
    this.vy = 3;
  }

  display(){
    push();
    fill(this.fill);
    rect(this.x,this.y,this.width, this.height);
    pop();
  }
}
