// Creating the Buildings
class Building{

  constructor(x,widthOfBuilding,heightOfBuilding,image){
    this.x= x;
    this.y= 4*height/5;
    this.width= widthOfBuilding;
    this.height= heightOfBuilding;
    this.fill= 255;
    this.vx = -5;
    this.image = image;
  }

// Making regular rectangles into Buildings
  display(){
    push();
    fill(this.fill);
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width, this.height);
    pop();
  }

  move(){
    this.x += this.vx - level/2;
  }
}
