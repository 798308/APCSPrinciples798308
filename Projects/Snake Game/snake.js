class Snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = width;
    this.clr = color(0,255,0);
  }
  run(){
    this.render;
    this.update;
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
  update(){
    if(keyCode === RIGHT_ARROW && direction !== 2){
      this.loc.x = this.loc.x + this.w;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW && direction !== 1){
      this.loc.x = this.loc.x - this.w;
      direction = 2;
    }
    if(keyCode === UP_ARROW && direction !== 4){
      this.loc.y = this.loc.y + this.w;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW && direction !== 3){
      this.loc.y === this.loc.y - this.w;
      direction = 4;
    }
  }
}
