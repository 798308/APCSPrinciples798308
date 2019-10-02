//Austin Matel
//8/21/19
//creating parameters
class Button{
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
    rect(this.loc.x, this.loc.y, this.w, this.h, 20);
    fill(10);
    textSize(20);
    if (this.id === 4){
      textSize(18);
      text(this.msg, this.loc.x, this.loc.y + 30);
    }else{
      textSize(20);
      text(this.msg, this.loc.x + 10, this.loc.y + 30);
    }
  }
  //checks if the button is pressed and makes different buttons do different things
  isPressed(){
    if (mouseX > this.loc.x + 400 && mouseX < this.loc.x + this.w + 400 && mouseY > this.loc.y + 400 && mouseY < this.loc.y + this.h + 400 && mouseIsPressed){
      if(this.id == 1){
        gameState = 2;
        difficulty = 5;
        health = 5;
        score = 0;
        winScore = 10;
        loadObjects(difficulty);
      }
      if(this.id == 2){
        gameState = 2;
        difficulty = 10;
        health = 5;
        score = 0;
        winScore = 15;
        loadObjects(difficulty);
      }
      if(this.id == 3){
        gameState = 2;
        difficulty = 15;
        health = 3;
        score = 0;
        winScore = 20;
        loadObjects(difficulty);
      }
      if(this.id == 4){
        fill(255);
        text("Click on a difficulty and try to catch the balls on the top of the paddle.", 90, 650);
        text("If a ball hits the bottom of your paddle, you will lose health.", 90, 670);
        text("If you catch a certain amount balls before running out of health, you win!", 90, 690);
      }
    if (mouseX > this.loc.x && mouseX < this.loc.x + this.w && mouseY > this.loc.y && mouseY < this.loc.y + this.h && mouseIsPressed){
      if(this.id == 5){
        gameState = 1;
        balls = [];
      }
    }
  }
}
}
