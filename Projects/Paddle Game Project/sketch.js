//  Austin Matel
// 9/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var gameState = 1;
var difficulty, health, score;
var win;
//loads balls and paddles
function loadObjects(n){
  for (var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,200), random(-3,3), random(-3,3));
  }
  paddle = new Paddle(width/2, 700);
}

//setup
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
}

//title screen
function startGame(){
  background(255, 20, 100);
  textSize(90);
  fill(20,20,20);
  text("Paddle Game",150,300);
  for (var i = 0; i < 4; i++){//buttons and labels
    textFont('Georgia');
    textSize(18);
    var label;
    if (i === 0){
      fill(1, 255, 1);
      label = "Easy";
    }
    if (i === 1){
      fill(255, 255, 1);
      label = "Medium";
    }
    if (i === 2){
      fill(255, 1, 1);
      label = "Hard";
    }
    if (i === 3){
      fill(1, 1, 255);
      label = "Instructions";
    }
    rect((i * 200) + 50, 500, 100, 75, 20);
    fill(20,20,20);
    text(str(label), (i * 200) + 55, 550);
  }
  if (mouseX > 50 && mouseX < 150 && mouseY > 500 && mouseY < 575 && mouseIsPressed){
    gameState = 2;
    difficulty = 5;
    health = 10;
    score = 0;
    loadObjects(difficulty);
  }
  if (mouseX > 250 && mouseX < 350 && mouseY > 500 && mouseY < 575 && mouseIsPressed){
    gameState = 2;
    difficulty = 10;
    health = 5;
    score = 0;
    loadObjects(difficulty);
  }
  if (mouseX > 450 && mouseX < 550 && mouseY > 500 && mouseY < 575 && mouseIsPressed){
    gameState = 2;
    difficulty = 15;
    health = 3;
    score = 0;
    loadObjects(difficulty);
  }
  if (mouseX > 650 && mouseX < 750&& mouseY > 500 && mouseY < 575 && mouseIsPressed){
    fill(255);
    text("Click on a difficulty and try to catch the balls on the top of the paddle.", 150, 400);
    text("If a ball hits the bottom of your paddle, you will lose health.", 150, 420);
    text("If you catch 10 balls before running out of health, you win! Good Luck!", 150, 440);
  }
}

//end screen
function endGame(){
  fill(255);
  textFont('Times New Roman');
  textSize(90);
  if (win === 1){
    background(10, 200, 100);
    text("You won", 200, 300);
    fill(255,10,10);
    rect(250, 600, 300, 100, 20);
    fill(255);
    textSize(30);
    text("Menu", 350, 650);
    if (mouseX > 250 && mouseX < 550 && mouseY > 600 && mouseY < 700 && mouseIsPressed){
      gameState = 1;
    }
    }else{
      background(255, 20, 10);
      text("Game Over", 150, 300);
      fill(10,255,10);
      rect(250, 600, 300, 100, 20);
      fill(255);
      textSize(30);
      text("Menu", 350, 650);
      if (mouseX > 250 && mouseX < 550 && mouseY > 600 && mouseY < 700 && mouseIsPressed){
        gameState = 1;
      }
    }
}

//game code
function playGame(){
  background(128, 128, 128, 50);
  runObjects();
  if (health <= 0){
    win = 0;
    gameState = 3;
  }
}

//  The draw function is called @  30 fps
//displaying game states
function draw() {
  if (gameState === 1){
    startGame();
  }
  if (gameState === 2){
    playGame();
  }
  if (gameState === 3){
    endGame();
  }
}

function runObjects(){
  for(var t = 0; t < balls.length; t++){
    balls[t].run();
  }
  paddle.run();//says run is undefined
  fill(255);
  text("Score = "+ score, 20, 50);
  text("Health = "+ health, 700, 50);
}
