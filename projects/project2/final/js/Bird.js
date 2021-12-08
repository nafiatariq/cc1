//Creating the bird
class Bird{

  constructor(x,y,counterValue,image){
    this.x= x;
    this.y= 12*y/5;
    this.size= 55;
    this.fill= 255;
    this.vx = -5;
    this.counter = counterValue;
    this.image = image;
  }

  //Making them look like a Bird
  display(){
    push();
    fill(this.fill);
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.size);
    pop();
  }

//Defining how the birds will move
  move(){
    this.x += this.vx - level/2;
    this.y += 5*sin(1/4*(this.counter));
    this.counter += 1;
  }
}
