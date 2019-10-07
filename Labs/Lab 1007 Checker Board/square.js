class Square{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w =100;
  }
  run(){
    this.render();
  }
  render(){
    if(number % 2 === 0){
      fill(255,0,0);
    }else{
      fill(0);
    }
    rect(this.x, this.y, this.w, this.w);
  }
}
