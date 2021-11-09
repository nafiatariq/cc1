class Building{

  constructor(x,widthOfBuilding,heightOfBuilding){
    this.x= x;
    this.y= 4*height/5;
    this.width= widthOfBuilding;
    this.height= heightOfBuilding;
    this.fill= 255;
    this.vx = -3;
  }

  display(){
    push();
    fill(this.fill);
    rectMode(CENTER);
    rect(this.x,this.y,this.width, this.height);
    pop();
  }

  move(){
    this.x += this.vx;
  }
}
