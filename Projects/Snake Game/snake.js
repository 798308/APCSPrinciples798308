//Ausstin Matel
//10/31/19
class Snake{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.w = cubeWidth;
    this.clr = color(0,255,0);
    this.vel = createVector(0, 0);
    this.body = [];
  }
  run(){
    this.render();
    this.loadSegments();
    this.update();
    this.checkEdges();
    this.tangle();
  }
  render(){//displays the head and segments of the snake
    //render head
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
    //render body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, this.w, this.w);
    }
  }
  update(){//makes sure the head moves and the segments follow the head
    if(keyCode === RIGHT_ARROW && direction !== 2){
      this.vel.y = 0;
      this.vel.x = cubeWidth;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW && direction !== 1){
      this.vel.y = 0;
      this.vel.x = -cubeWidth;
      direction = 2;
    }
    if(keyCode === UP_ARROW && direction !== 4){
      this.vel.x = 0;
      this.vel.y = -cubeWidth;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW && direction !== 3){
        this.vel.x = 0;
        this.vel.y = cubeWidth;
        direction = 4;
    }
    for(var i = this.body.length - 1; i > 0; i--){
      this.body[i].y = this.body[i - 1].y;
      this.body[i].x = this.body[i - 1].x;
    }
    if(this.body.length > 0){
      this.body[0].x = this.loc.x;
      this.body[0].y = this.loc.y;
    }
    this.loc.add(this.vel);
  }
  loadSegments(){//fills the list of segments with vectors
    if(this.body.length / 2 < score){
      this.body.push(createVector(this.loc.x, this.loc.y));
      }
    }
  checkEdges(){//makes you lose when the snake head hits the edges
    if(this.loc.x > width - this.w || (this.loc.x < 0) || (this.loc.y > height - this.w) || (this.loc.y < 0)){
      gameOver = 1;
    }
  }
  tangle(){
    if(this.body.length > 3){
      for(var i = 0; i < this.body.length; i++){
        temp = i;
          if (this.loc.x === this.body[i].x && this.loc.y === this.body[i].y){
            gameOver = 1;
          }
        }
      }
    }
}
