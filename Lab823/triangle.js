/*class Triangle{
  constructor(x, y, x2, y2, x3, y3 dx, dy){
    this.x = x;
    this.y = y;
    this.y2 = y2;
    this.y3 = y3;
    this.x2 = x2;
    this.x3 = x3;
    this.dx = dx;
    this.dy = dy;
    this.clr = color(random(255), random(255),random(255));
  } //end of constructor
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }//end of run
  render(){
    fill(this.clr);
    triangle(this.x, this.y,  this.x2, this.y2, this.x3, this.y3);
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
}//end of Square
