//Ausstin Matel
//10/31/19
class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
    this.w = cubeWidth;
  }
  run(){
    this.render();
    this.touchingSnake();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
  touchingSnake(){
    if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){
      this.loc.x = cubeWidth * int(random(0,800/cubeWidth));
      this.loc.y = cubeWidth * int(random(0,800/cubeWidth));
      score = score + 1;
    }
  }
}
