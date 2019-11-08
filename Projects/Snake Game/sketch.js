//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var cubeWidth, food, direction;
var score = 0;
var columns;
var rows;
var snake;
var oneCube = 0;
var gameOver = 0;
var snakeNum = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cubeWidth = 20;
  columns = width / cubeWidth;
  rows = height / cubeWidth;
  snake = new Snake(columns, 600);
  food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
}
function runObjects(){
  snake.run();
  food.run();
}
//  The draw function is called @ 30 fps
function draw() {
  frameRate(10);
  if(gameOver === 0){
    background(5,5,5);
    runObjects();
    textSize(20);
    text("Score = "+score,10,20);
  }
  if(gameOver === 1){
    fill(255);
    textSize(90);
    text("Game Over!!!", 100, 100);
  }
}
