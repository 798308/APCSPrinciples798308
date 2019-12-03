//Austin Matel
//12/3/19
class Planet{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.w = 10;
    this.acc = createVector(0,0);
    this.id = id;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x < 0){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.x > width){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > height){
        this.vel.y = -(this.vel.y);
    }
  }
  update(){
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);
    if(disToPlanet < 70){
      this.loc.x = random(10,790);
      this.loc.y = random(10,790);
      this.vel.x = random(-.5,.5);
      this.vel.y = random(-2,2);
    }
  }
  render(){
    fill(this.clr);
    if(this.id == 0){
      this.w = 50;
    }
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
}
