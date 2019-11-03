//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var cubeWidth, food, direction;
var snake = [];
var columns;
var rows;
var snakeHead;
var gameOver = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cubeWidth = 20;
  columns = width / cubeWidth;
  rows = height / cubeWidth;
  snakeHead = new Snake(columns, 600);
  food = new Food(columns + cubeWidth * random(0,40), rows + cubeWidth * random(0,40));
}
function loadObjects(n){
  for(i = 1; i < n; i++){
    var addition;
    if(i===0){
      snake[i] = snakeHead;
    }
    if(direction === 1){
      addition = snake[i - 1].loc.x - cubeWidth;
    }
    if(direction === 2){
      addition = snake[i - 1].loc.x + cubeWidth;
    }
    if(direction === 3){
      addition = snake[i - 1].loc.y + cubeWidth;
    }
    if(direction === 4){
      addition = snake[i - 1].loc.y - cubeWidth;
    }
    snake[i] = new Snake(addition, snake[i-1].loc.y);
  }
}
//  The draw function is called @ 30 fps
function draw() {
  frameRate(25);
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
