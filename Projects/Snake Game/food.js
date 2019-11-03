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
    if(snakeHead.loc.x > this.loc.x && snakeHead.loc.x < this.loc.x + cubeWidth && snakeHead.loc.y > this.loc.y && snakeHead.loc.y < this.loc.y + cubeWidth){
      this.loc.x = columns + cubeWidth * random(0,40);
      this.loc.y = rows + cubeWidth * random(0,40);
    }
  }
}
