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
    this.update();
    this.checkEdges();
    this.loadSegments();
  }
  render(){
    //render head
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
    //render body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, this.w, this.w);
    }
  }
  update(){
    for(var i = 0; i < this.body.length; i++){
      if(i === 0){
      this.body[i].x = this.loc.x;
      this.body[i].y = this.loc.y;
    }else if(i > 1){
      this.body[score].x = this.body[score - 1].x;
      this.body[score].y = this.body[score-1].y;
    }
  }


    if(keyCode === RIGHT_ARROW){
      if(direction === 2){
        gameOver = 1;
      }
      this.vel.y = 0;
      this.vel.x = cubeWidth;
      direction = 1;
    }
    if(keyCode === LEFT_ARROW){
      if(direction === 1){
        gameOver = 1;
      }
      this.vel.y = 0;
      this.vel.x = -cubeWidth;
      direction = 2;
    }
    if(keyCode === UP_ARROW){
      if(direction === 4){
        gameOver = 1;
      }
      this.vel.x = 0;
      this.vel.y = -cubeWidth;
      direction = 3;
    }
    if(keyCode === DOWN_ARROW){
      if(direction === 3){
        gameOver = 1;
      }
        this.vel.x = 0;
        this.vel.y = cubeWidth;
        direction = 4;
    }
    this.loc.add(this.vel);
  }
  checkEdges(){
    if(this.loc.x > width - this.w || (this.loc.x < 0) || (this.loc.y > height - this.w) || (this.loc.y < 0)){
      gameOver = 1;
    }
  }
  loadSegments(){
    for(var i = 0; i < score; i++){
      this.body.push(createVector(0,0));
      console.log("hey bud")
    }
  }
}
