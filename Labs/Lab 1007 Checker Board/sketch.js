//  Austin Matel
// 	10/7/19
//  This is a comment
//  The setup function function is called once when your program begins
var squares = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  fill(200, 30, 150);
loadSquares();

}
noStroke();
//creates squares
function loadSquares(){
  for(var n = 0; n < 8; n++){
    for(var i = 0; i < 8; i++){
      number = i;
      squares[i] = new Square(100 * i, 100 * n);
      squares[i].run();
    }
  }
}
