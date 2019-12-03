//  Austin Matel
// 12/3/19
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet, disToPlanet;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  loadObjects(100);
}

//  The draw function is called @  30 fps
function draw() {
  background(5,5,5,20);
  runShips();
}
function loadObjects(n){
  ship = new Ship(random(width), random(height), random(-3,3), random(-3,3), 1);
  planet = new Planet(width/2, height/2, random(-0.5,0.5), random(-2,2), 0);
}
function runShips(){
  ship.run();
  planet.run();
}
