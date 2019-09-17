//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x,y;
var speedX,speedY
function setup() {
  x = 400;
  y = 200;
  speedX =3;
  speedY = 3;
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
  if (x >= 460) {
    speedX = -speedX
  }
  if (x <= 350) {
    speedX = -1 * speedX
  }
  if (y <= 100) {
    speedY = -1 * speedY
  }
  if (y >= 500) {
    speedX = -speedX
  }
  noStroke()
  fill(101, 67, 20)
  ellipse(400, 410, 370, 180)
  fill(255,20,20)
  ellipse(400,400,300,150)
  fill(255,150,20)
  strokeWeight(4)
  stroke(101, 67, 33)
  triangle(x, y + 200,x,y,x - 150,y+50)
  noStroke()
  fill(100,100,20)
  rect(400,400,10,10)
  rect(450,400,15,15)
  rect(370,400,8,8)
  rect(450,350,15,15)
  ellipse(300,350,15,15)
  ellipse(310,420,15,15)
  ellipse(470,370,15,15)
}
