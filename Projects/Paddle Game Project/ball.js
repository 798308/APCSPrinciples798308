//Austin Matel
//8/21/19
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(225), random(225), random(225));
    this.w = 30;
    this.ballx = dx;
    this.acc = createVector(-0.05,0.05);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.isColliding();
    this.removeBall();
  }

  checkEdges(){
    if (this.loc.x < 0){
      this.ballx = -(this.ballx);
    }
    if (this.loc.x > width){
      this.ballx = -(this.ballx);
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > height){
        this.vel.y = -(this.vel.y);
    }
    if (this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y >= paddle.loc.y && this.loc.y <= paddle.loc.y + paddle.h && this.vel.y > 0){
      this.vel.y = -(this.vel.y);
      score = score + 1;
      if (score === 10){
        win = 1;
      }
    }
  }
  update(){
    this.vel.add(this.acc);
    this.loc.y = this.vel.y + this.loc.y;
    this.loc.x = this.loc.x + this.ballx;
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
  isColliding(){
    if (this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y > paddle.loc.y && this.loc.y < paddle.loc.y + paddle.h && this.vel.y < 0){
      return true;
    }else{
      return false;
    }
  }
  removeBall(){
    for (var i = balls.length - 1; 1 >= 0; i--){
      if (balls[i].isColliding()){//says isColliding is undefined
        balls[i].splice(i,1);
        health = health -1;
      }
    }
  }
}
