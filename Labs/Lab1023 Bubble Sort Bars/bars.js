class Bar{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = width / numBars;
    this.h = 800 - this.loc.y;
  }
  run(){
    this.render();
  }
  render(){
    fill(220, 100, 100);
    rect(this.loc.x, this.loc.y, this.w, this.h);

  }
}
