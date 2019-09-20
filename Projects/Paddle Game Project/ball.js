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
  }

  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x = -(this.loc.x);
    }
    if (this.loc.x > width){
      this.loc.x = -(this.loc.x);
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
    this.loc.y = this.vel.y + this.loc.y;
    this.loc.x = this.loc.x + this.ballx;
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }
  isColliding(){
    if(this.loc.x > paddle.loc.x && this.loc.x < paddle.loc.x + paddle.w && this.loc.y < paddle.loc.y + paddle.h && this.loc.y > paddle.loc.y){
      return true;
    } else{
      return false;
    }
  }
}
