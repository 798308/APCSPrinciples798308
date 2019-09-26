//  Austin Matel
// 9/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var gameState = 1;
var difficulty, health, score;
var win;
var BtnEasy, BtnMedium, BtnHard, BtnInstructions;
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
  background(128, 128, 128, 50);
  makeButtons();
}

//title screen
function startGame(){
  runButtons();
  textSize(90);
  fill(20,20,20);
  textFont('Georgia')
  text("Paddle Game",150,300);
}

//end screen
function endGame(){
  fill(255);
  textFont('Times New Roman');
  textSize(90);
  if (win === 1){
    background(10, 200, 100);
    text("You won", 200, 300);
    BtnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
    BtnMenu.run();
    }else{
      background(255, 20, 10);
      text("Game Over", 150, 300);
      BtnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
      BtnMenu.run();
    }
}
//loads the buttons
function makeButtons(){
  BtnEasy = new Button(50, 500, 100, 75, "Easy", color(1, 255, 1), 1);
  BtnMedium = new Button(250, 500, 100, 75, "Medium", color(255, 255, 1), 2);
  BtnHard = new Button(450, 500, 100, 75, "Hard", color(255, 1, 1), 3);
  BtnInstructions = new Button(650, 500, 100, 75, "Instructions",color(1,1,255),4);
}
//shows buttons
function runButtons(){
  BtnEasy.run();
  BtnMedium.run();
  BtnHard.run();
  BtnInstructions.run();
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
    background(128, 128, 128, 50);
    playGame();
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
  fill(255);
  text("Score = "+ score, 20, 50);
  text("Health = "+ health, 700, 50);
  paddle.run();
}
