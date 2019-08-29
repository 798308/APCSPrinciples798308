//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
var speedX,speedY
function setup() {
  x = 400;
  y = 200;
  speedX =random(-3,3);
  speedY = random(-3,3);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  background(0,0,0)
  x = x + speedX;
  y = y + speedY;
  if (x < 0 ) {
    speedX = -speedX
  }
  if (x > 800) {
    speedX = -1 * speedX
  }
  if (y <= 0) {
    speedY = -1 * speedY
  }
  if (y >= 800) {
    speedX = -speedX
  }
fill(255,0,0)
ellipse(x + 100,y,50,50)
fill(0,255,0)
ellipse(x -200,y,50,50)
fill(0,0,255)
ellipse(x,y,50,50)
}
