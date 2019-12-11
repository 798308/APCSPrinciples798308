//Lab1209 Austin Matel
//12/09/19
var balls = [];
var numBalls = 0;
//this code swaps the location of the bars as well as their index
function swap(list,a,b){
  var temp = list[a].loc.x;
  list[a].loc.x = list[b].loc.x;
  list[b].loc.x = temp;
  temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
//renders the balls
function runBalls(){
  for(var j = 0; j < balls.length; j++){
    balls[j].run();
  }
}
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200);
  fill(200, 30, 150);
  //loads the balls into the list
  function makeList(n, list){
    for (var i = 0; i < n; i++){
      numBalls = n;
      list[i] = new Ball(i * (width / n) + 20, 400, 20);
    }
  }
  //first parameter is the number of balls
  makeList(50, balls);
}
//bubble code
var i = balls.length - 1;
function draw(){
  frameRate(20);
  i = i + 1;
  background(100);
  runBalls();
    for(var j = 0; j < balls.length - 1 - i; j++){
      if(balls[j].clr > balls[j + 1].clr){
        swap(balls, j, j + 1);
      }
    }
  }
