class Paper {

    constructer(x,y){
var options ={
    isStatic : false,
    restitution: 0.3,
    friction:0.5,
    density:1.2
}
  this.body = Bodies.circle(x, y, radius, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display(){
    
    push();
    rotate();
    
    pop();
  }
}