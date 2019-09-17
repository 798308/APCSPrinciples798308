//  Austin Matel
// 9/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var gameState = 1;

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
  loadObjects(10);
}

//title screen
function startGame(){
  background(255, 20, 100);
  textSize(90);
  fill(20,20,20);
  text("Paddle Game",150,300);
  rect();
  rect();
  rect();

}

//game code
function playGame(){
  function draw(){
    background(20,20,20,50);
    runObjects();

  }

  function runObjects(){
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
      if (balls[i] === true){
        balls[i].splice();
      }
    }
    paddle.run();
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

}
