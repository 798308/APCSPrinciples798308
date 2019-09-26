//Austin Matel
//8/21/19
class Button{//creating parameters
  constructor(x, y, w, h, msg, clr, id){
    this.loc = createVector(x,y);
    this.h = h;
    this.w = w;
    this.msg = msg;
    this.clr = clr;
    this.id = id;
  }
  //actually creating buttons
  run(){
    this.render();
    this.isPressed();
  }
  //drawing buttons
  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h, 20);
    fill(10);
    textSize(30);
    text(this.msg, this.x + 40, this.y+ 30);
  }
  //checks if the button is pressed and makes different buttons do different things
  isPressed(){
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h && mouseIsPressed){
      if(this.id == 1){
        gameState = 2;
        difficulty = 5;
        health = 10;
        score = 0;
        loadObjects(difficulty);
      }
      if(this.id == 2){
        gameState = 2;
        difficulty = 10;
        health = 5;
        score = 0;
        loadObjects(difficulty);
      }
      if(this.id == 3){
        gameState = 2;
        difficulty = 15;
        health = 3;
        score = 0;
        loadObjects(difficulty);
      }
      if(this.id == 4){
        fill(255);
        text("Click on a difficulty and try to catch the balls on the top of the paddle.", 150, 400);
        text("If a ball hits the bottom of your paddle, you will lose health.", 150, 420);
        text("If you catch 10 balls before running out of health, you win! Good Luck!", 150, 440);
      }
      if(this.id == 5){
        gameState = 1;
      }
    }
  }
}
