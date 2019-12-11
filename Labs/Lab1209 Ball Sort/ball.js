//Austin Matel
//12/09/19
class Ball{
  constructor(x, y, w){
    this.loc = createVector(x, y);
    this.clr = random(255);
    this.w = w;
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr, 0, 0);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }
}
