//Austin Matel
//8/21/19
class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.w = 10;
    this.acc = createVector(0,0.1);
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
    if (this.loc.x > 880){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > 880){
        this.vel.y = -(this.vel.y);
    }
  }
  update(){
    var disToMainBall;
    this.loc.add(this.vel);
    if (this.id == 1){
      this.vel.add(this.acc);
    }
    if (this.id > 0){
      disToMainBall = this.loc.dist(mainBall.loc);
    }
    if (disToMainBall < 250){
      this.acc = p5.Vector.sub(this.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    if (disToMainBall > 150)
      this.acc = p5.Vector.sub(this.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
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
