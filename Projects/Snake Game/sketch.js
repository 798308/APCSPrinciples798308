//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var cubeWidth, food, direction, temp;
var highscore = 0;
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
  snake = new Snake(columns, rows);
  food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
}
function runObjects(){//runs the snake and food
  snake.run();
  food.run();
}
function keyPressed(){//detects when the arrow keys are pressed
  if(keyCode === RIGHT_ARROW && direction !== 2){
    snake.vel.y = 0;
    snake.vel.x = cubeWidth;
    direction = 1;
  }
  if(keyCode === LEFT_ARROW && direction !== 1){
    snake.vel.y = 0;
    snake.vel.x = -cubeWidth;
    direction = 2;
  }
  if(keyCode === UP_ARROW && direction !== 4){
    snake.vel.x = 0;
    snake.vel.y = -cubeWidth;
    direction = 3;
  }
  if(keyCode === DOWN_ARROW && direction !== 3){
      snake.vel.x = 0;
      snake.vel.y = cubeWidth;
      direction = 4;
  }
}
//  The draw function is called @ 30 fps
function draw() {//pauses and ends game when snake dies
  if(gameOver === 0){
    background(5,5,5);
    runObjects();
    keyPressed();
    textSize(20);
    text("Score = "+score,10,20);
    frameRate(15);
    text("Highscore = "+highscore, 660, 20);
  }
  if(gameOver === 1){
    fill(255);
    textSize(90);
    text("Game Over!!!", 100, 100);
    textSize(40);
    text("Press Spacesbar", 220, 600);
    if(score > highscore){
      highscore = score;
    }
    if(keyCode === 32){
      gameOver = 0;
      snake = new Snake(columns, rows);
      food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
      snake.body = [];
    }
    score = 0;
  }
}
