//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var cubeWidth, food, direction;
var snake = [];
var columns;
var rows;
var snakeHead;
var oneCube = 0;
var gameOver = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cubeWidth = 20;
  columns = width / cubeWidth;
  rows = height / cubeWidth;
  snakeHead = new Snake(columns, 600, 1);
  food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
}
function loadObjects(n){
    var addition;
    if(oneCube === 0){
      snake[0] = snakeHead;
      oneCube = 1;
      if(direction === 1){
        addition = snakeHead.loc.x - cubeWidth;
        snake[1] = new Snake(addition, snakeHead.loc.y, 0);
        console.log("m");
      }
      if(direction === 2){
        addition = snakeHead.loc.x + cubeWidth;
        snake[1] = new Snake(addition, snakeHead.loc.y, 0);
        console.log("m");
      }
      if(direction === 3){
        addition = snakeHead.loc.y + cubeWidth;
        snake[1] = new Snake(snakeHead.loc.x, addition, 0);
        console.log("m");
      }
      if(direction === 4){
        addition = snakeHead.loc.y - cubeWidth;
        snake[1] = new Snake(snakeHead.loc.x, addition, 0);
        console.log("m");
      }
      snake[1].run();
      console.log("?")
    }else{
      for(i = 0; i < n; i++){
      if(direction === 1){
        addition = snake[i - 1].loc.x - cubeWidth;
        snake[i] = new Snake(addition, snake[i-1].loc.y, 0);
        console.log("l");
      }
      if(direction === 2){
        addition = snake[i - 1].loc.x + cubeWidth;
        snake[i] = new Snake(addition, snake[i-1].loc.y, 0);
        console.log("l");
      }
      if(direction === 3){
        addition = snake[i - 1].loc.y + cubeWidth;
        snake[i] = new Snake(snake[i-1].loc.x, addition, 0);
        console.log("l");
      }
      if(direction === 4){
        addition = snake[i - 1].loc.y - cubeWidth;
        snake[i] = new Snake(snake[i-1].loc.x, addition, 0);
        console.log("l");
      }
      snake[i].run();
    }
  }
}
//  The draw function is called @ 30 fps
function draw() {
  frameRate(10);
  if(gameOver === 0){
    background(5,5,5);
    snakeHead.run();
    food.run();
  }
  if(gameOver === 1){
    fill(255);
    textSize(90);
    text("Game Over!!!", 100, 100);
  }
}
