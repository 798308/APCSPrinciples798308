//  Austin Matel
// 8/21/19
//  This is a comment
//  The setup function function is called once when your program begins
//testing github
var balls = [];
var squares = [];
//var triangles[];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadBalls(200);
  loadSquares(50);
}

//  The draw function is called @  30 fps
function draw() {
  background(5,5,5);
  runBalls();
  runSquares();
}
function loadBalls(n){
  for (var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-8,8), random(-8,8));
  }
}
function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
function runSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
}
function loadSquares(n){
  for (var i = 0; i < n; i++){
    squares[i] = new Square(random(width), random(height), random(-8,8), random(-8,8));
  }
}
//add triangle code
