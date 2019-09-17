//Austin Matel
//8/21/19
class Ball{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255),random(255));
    this.w = random(10,70);
  } //end of constructor
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }//end of run
  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.w, this.w);
  }//end of render
  update(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }//end of update
  checkEdges(){
    if(this.y < 0) {
      this.dy = -this.dy;
    }
    if (this.x < 0){
      this.dx = -this.dx;
    }
    if(this.y > height) {
      this.dy = -this.dy;
    }
    if (this.x > width){
      this.dx = -this.dx;
    }
  }//end of checkEdges
}//end of Ball
