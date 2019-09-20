//  Austin Matel
// 9/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var gameState = 1;
var difficulty;

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
  if (mouseX > 50 && mouseX < 150 && mouseY > 500 && mouseY < 575){
    gameState = 2;
    difficulty = 5;
    loadObjects(difficulty);
  }
  if (mouseX > 250 && mouseX < 350 && mouseY > 500 && mouseY < 575){
    gameState = 2;
    difficulty = 10;
    loadObjects(difficulty);
  }
  if (mouseX > 450 && mouseX < 550 && mouseY > 500 && mouseY < 575){
    gameState = 2;
    difficulty = 15;
    loadObjects(difficulty);
  }
}



//game code
function playGame(){
  background(20,20,20,50);
  runObjects();
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
}

function runObjects(){
  for(var t = 0; t < balls.length; t++){
    balls[t].run();
    console.log("balls");
  }
  paddle.run();
}

function loadObjects(n){
  for (var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(0,200), random(-3,3), random(-3,3));
    console.log(balls[0]);
  }
  paddle = new Paddle(width/2, 700);
}
