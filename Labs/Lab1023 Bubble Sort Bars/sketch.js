// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars = 0;
function swap(list,a,b){
  var temp = list[a].loc.x;
  list[a].loc.x = list[b].loc.x;
  list[b].loc.x = temp;
}
function runBars(){
  for(var j = 0; j < bars.length; j++){
    bars[j].run();
  }
}
function setup() {
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
  makeList(10, bars);
}
function draw(){
  background(200);
  runBars();
  for(var i = 0; i < bars.length - 1; i++){
    for (j = 0; j < bars.length - 1 - i; j++){
      if(bars[j].h > bars[j + 1].h){
        swap(bars, j, j + 1);
      }
    }
  }
}
