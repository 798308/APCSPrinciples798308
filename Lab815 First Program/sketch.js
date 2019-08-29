//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, );
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  noStroke()
  fill(101, 67, 20)
  ellipse(400, 410, 370, 180)
  fill(255,20,20)
  ellipse(400,400,300,150)
  fill(255,150,20)
  strokeWeight(4)
  stroke(101, 67, 33)
  triangle(400,400,400,200,250,250)
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
