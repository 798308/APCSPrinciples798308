// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars = 0;
//this code swaps the location of the bars as well as their index
function swap(list,a,b){
  var temp = list[a].loc.x;
  list[a].loc.x = list[b].loc.x;
  list[b].loc.x = temp;
  temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
//renders the bars
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
  //loads the bars into the list
  function makeList(n, list){
    for (var i = 0; i < n; i++){
      numBars = n;
      list[i] = new Bar(i * (width / n), 400);
    }
  }
  //first parameter is the number of bars
  makeList(100, bars);
}
//bubble code
var i = bars.length - 1;
function draw(){
  frameRate(30);
  i = i + 1;
  background(100);
  runBars();
    for(var j = 0; j < bars.length - 1 - i; j++){
      if(bars[j].clr > bars[j + 1].clr){
        swap(bars, j + 1, j);
      }
    }
  }
