class Bar{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = width / numBars;
    this.h = 800 - this.loc.y;
    this.clr1 = random(0,255);
    this.clr2 = random(0,255);
    this.clr3 = random(0,255);
    this.clr = (this.clr1 + this.clr2 + this.clr3)/3;
  }
  run(){
    this.render();
  }
  render(){
    fill(this.clr1, this.clr2, this.clr3);
    rect(this.loc.x, this.loc.y, this.w, this.h);

  }
}
