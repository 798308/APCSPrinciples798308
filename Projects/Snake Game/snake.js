//Ausstin Matel
//10/31/19
class Snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = cubeWidth;
    this.clr = color(0,255,0);
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
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
      this.loc.y = this.loc.y - this.w;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW && direction !== 3){
      this.loc.y = this.loc.y + this.w;
      direction = 4;
    }
  }
  checkEdges(){
    if(this.loc.x > width || (this.loc.x < 0) || (this.loc.y > height) || (this.loc.y < 0)){
      gameOver = 1;
    }
  }
}
