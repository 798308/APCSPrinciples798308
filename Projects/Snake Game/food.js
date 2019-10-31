class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
    this.w = width;
  }
  run(){

  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
}
