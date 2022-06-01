class Boat {

  constructor(x, y, width, height, boatpos) {
    var options = {
      resitution:0.8
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image=loadImage("assets/boat.png")
    this.boatpos=boatpos 
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0 ,this.boatpos, this.width, this.height);
    pop();
  }
}
