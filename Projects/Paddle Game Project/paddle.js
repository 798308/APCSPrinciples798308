class Paddle{
  constructor(x, y){
    this.loc = createVector(mouseX, mouseY);
    this.clr = color(random(225), random(225), random(225));
    this.w = 100;
    this.h = 20;
    this.acc = createVector(0,0);
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x = 0;
    }
    if ((this.loc.x + this.w) > width){
      this.loc.x = width - this.w;
    }
  }
  update(){
    var mouseLoc = createVector(mouseX,mouseY);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, 0.09);
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, 700, this.w, this.h);
  }
}
