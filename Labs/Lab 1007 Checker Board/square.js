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
    if(rowNum % 2 === 0){
      if(number % 2 === 0){
        fill(255,0,0);
      }else{
        fill(0);
      }
    }
    if(rowNum % 2 === 1){
      if(number % 2 === 0){
        fill(0);
      }else{
        fill(255, 0, 0);
      }
    }
    rect(this.x, this.y, this.w, this.w);
  }
}