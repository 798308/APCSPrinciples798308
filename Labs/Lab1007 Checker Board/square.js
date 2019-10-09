//  Austin Matel
// 	10/7/19
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
        fill(250,245,230);
      }else{
        fill(255,228,196);
      }
    }
    if(rowNum % 2 === 1){
      if(number % 2 === 0){
        fill(255,228,196);
      }else{
        fill(250,245,230);
      }
    }
    rect(this.x, this.y, this.w, this.w);
  }
}
