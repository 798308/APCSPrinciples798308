//  Austin Matel
// 9/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var gameState = 1;
var difficulty, health, score;
var win = 2;
var btnEasy, btnMedium, btnHard, btnInstructions;
var winScore;
//thx yasai
var circle = 400;
var rot;
var col;
var freq = 0.000005;
var cont = 0;
var r;

//setup
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  makeButtons();
}
//loads balls and paddles
function loadObjects(n){
  for (var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,200), random(-3,3), random(-3,3));
  }
  paddle = new Paddle(width/2, 700);
}
//title screen
function startGame(){
  win = 2;
  runButtons();
  background(242);
  translate(300, 300);
  rotate(radians(rot));
 ellipseMode(CORNER);
  for (var i=0; i<500; i ++) {
    circle= 200 + 50*sin(millis()*freq*i);
    col=map(circle,150,250,255,60);
    r=map(circle,150,250,5,2);
    fill(col,0,74);
    noStroke();
    ellipse(circle*cos(i), circle*sin(i),r,r);
    rot=rot+0.00005;
  }
  textSize(90);
  fill(20,20,20);
  textFont('Georgia')
  text("Paddle Game",150,200);
  fill(random(0,255), random(0,255), random(0,255));
  ellipse(340, 300, 100, 100);
  fill(random(0,255), random(0,255), random(0,255));
  ellipse(460, 300, 100, 100);
  fill(random(0,255), random(0,255), random(0,255));
  arc(400, 400, 80, 80, 0, PI, CHORD);
}

//end screen
function endGame(){
  fill(255);
  textFont('Times New Roman');
  textSize(90);
  if (win === 1){
    background(10, 200, 100);
    text("You won", 200, 200);
    btnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
    btnMenu.run();
    //smiley face
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(340, 300, 100, 100);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(460, 300, 100, 100);
    fill(random(0,255), random(0,255), random(0,255));
    arc(400, 400, 80, 80, 0, PI, CHORD);
    }else{
      background(255, 20, 10);
      text("Game Over", 150, 200);
      btnMenu = new Button(250, 600, 300, 100, "Menu", color(10,255,10), 5);
      btnMenu.run();
      //frowny face
      fill(random(0,255), random(0,255), random(0,255));
      ellipse(340, 300, 100, 100);
      fill(random(0,255), random(0,255), random(0,255));
      ellipse(460, 300, 100, 100);
      fill(random(0,255), random(0,255), random(0,255));
      arc(400, 400, 80, 80, PI, 0, CHORD);

    }

}
//loads the buttons
function makeButtons(){
  btnEasy = new Button(50, 500, 100, 75, "Easy", color(1, 255, 1), 1);
  btnMedium = new Button(250, 500, 100, 75, "Medium", color(255, 255, 1), 2);
  btnHard = new Button(450, 500, 100, 75, "Hard", color(255, 1, 1), 3);
  btnInstructions = new Button(650, 500, 100, 75, "Instructions",color(0, 255, 255), 4);
}
//shows buttons
function runButtons(){
  btnEasy.run();
  btnMedium.run();
  btnHard.run();
  btnInstructions.run();
}
//game code
function playGame(){
  background(128, 128, 128, 50);
  runObjects();
  removeBall();
  if (health <= 0){
    win = 0;
    gameState = 3;
  }
  if (win === 1){
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
  fill(255);
  textSize(20);
  text("Score = "+ score, 20, 50);
  text("Health = "+ health, 700, 50);
  paddle.run();
}
//if the ball hits the underside of the paddle, the ball will disappear
function removeBall(){
  for (var i = balls.length - 1; i >= 0; i--){
    if (balls[i].isColliding()){
      balls.splice(i,1);
      health = health -1;
    }
  }
}
