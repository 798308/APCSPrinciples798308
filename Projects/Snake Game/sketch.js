//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var width, food, direction;
var snake = [];
snakeHead = new Snake(392, 600);
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  width = 16;
}
//function loadObjects(n){
  //for(i = 0; i < n; i++){
    //snake[i] =
//  }
//}
//  The draw function is called @ 30 fps
function draw() {
  snakeHead.run();
}
