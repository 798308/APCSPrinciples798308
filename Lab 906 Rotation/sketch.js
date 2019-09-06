//  Austin Matel
// 9/03/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var repellor,attractor;
//var squares = [];
//var triangles[];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadObjects(12);
  //loadSquares(50);
}

//  The draw function is called @  30 fps
function draw() {
  background(5,5,5,50);
  runBalls();
  //runSquares();
}
function loadObjects(n){
  for (var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-3,3), random(-3,3), 1);
  }
  repellor = new Ball(width/2, height/2, random(-0.5,0.5), random(-0.5,0.5), 0);
  attractor = new Ball(width/2, height/2, random(-0.5,0.5), random(-0.5,0.5), 0);
}
function runShips(){
  for(var i = 0; i < balls.length; i++){
    ships[i].run();
  }
  repellor.run();
  attractor.run();
}
/*function runSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].run();
  }
}*/
/*function loadSquares(n){
  for (var i = 0; i < n; i++){
    squares[i] = new Square(random(width), random(height), random(-8,8), random(-8,8));
  }
}*/
//add triangle code
