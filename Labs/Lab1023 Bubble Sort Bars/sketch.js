// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars = 0;
function setup() {
  function swap(list,a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200);
  fill(200, 30, 150);
  function makeList(n, list){
    for (var i = 0; i < n; i++){
      numBars = n;
      list[i] = new Bar(i * (width / n), random(0,800));
    }
  }
  makeList(20, bars);
}
function draw(){
  function runBars(){
    for(var j = 0; j < bars.length; j++){
      bars[j].run();
    }
  }
  runBars();
  for(var i = 0; i < bars.length - 1; i++){
    for (j = 0; j < bars.length - 1 - i; j++){
      if(bars[j]. > bars[j + 1]){
        swap(bars, j, j + 1);//need different swap function
      }
    }
  }
}
