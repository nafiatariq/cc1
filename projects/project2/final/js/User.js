// Creating the user
class User {

  constructor(){
    this.x= undefined;
    this.y= undefined;
    this.size= 85;
    this.fill= 0;
    this.vy = 4;
    this.velocity = 0;
  }

// Making the User look like a plane
  display(){
    push();
    fill(this.fill);
    image(userImage,this.x,this.y,this.size);
    pop();
  }
