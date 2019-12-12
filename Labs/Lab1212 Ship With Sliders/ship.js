//Austin Matel
//12/3/19
class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.angle = 0;
    this.acc = createVector(0,0.1);
    this.id = id;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }
  update(){
    disToPlanet = this.loc.dist(planet.loc);
    if(disToPlanet > 100){
      this.acc = p5.Vector.sub(planet.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(sliderAttraction.value());
    }
    this.vel.limit(sliderSpeed.value());
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    }

  render(){
    fill(this.clr);
    this.angle = this.vel.heading() + 360;
    this.angle = this.angle - 0.1;
    push();
      translate(this.loc.x,this.loc.y);
      rotate(this.angle);
      triangle(-10,16,10,16,0,-16);
    pop();
    }
}
