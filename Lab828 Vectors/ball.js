//Austin Matel
//8/28/19
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,1);
    this.clr = color(random(225), random(225), random(225));
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.loc.x < 0){
    this.vel.dx = -this.vel.dx;
  }
  if(this.loc.x > width){
    this.vel.dx = -this.vel.dx;
  }
    if(this.loc.y < 0){
      this.vel.dy = -this.vel.dy;
      this.loc.y = this.loc.y + 10;
    }
      if(this.loc.y > height){
        this.vel.dy = -this.vel.dy;
      }
  }
  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
}
render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, 50, 50)
  }
}
