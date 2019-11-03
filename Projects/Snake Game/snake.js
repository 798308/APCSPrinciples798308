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
    if(keyCode === RIGHT_ARROW){
      if(direction === 2){
        gameOver = 1;
      }
      this.loc.x = this.loc.x + this.w;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW){
      if(direction === 1){
        gameOver = 1;
      }
      this.loc.x = this.loc.x - this.w;
      direction = 2;
    }
    if(keyCode === UP_ARROW){
      if(direction === 4){
        gameOver = 1;
      }
      this.loc.y = this.loc.y - this.w;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW){
      if(direction === 3){
        gameOver = 1;
      }
      this.loc.y = this.loc.y + this.w;
      direction = 4;
    }
  }
  checkEdges(){
    if(this.loc.x > width - this.w || (this.loc.x < 0) || (this.loc.y > height - this.w) || (this.loc.y < 0)){
      gameOver = 1;
    }
  }
}
