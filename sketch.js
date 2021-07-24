var astronaut
var bg
var bath
var sleep
var brush
var gym
var gymPart2
var eat
var drink
var move
var topEdge
var bottomEdge
var rightEdge
var leftEdge

function preload(){
bg= loadImage("images/iss.png");
bath = loadAnimation("images/bath1.png", "images/bath2.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym = loadAnimation("images/gym1.png", "images/gym2.png");
gymPart2 = loadAnimation("images/gym11.png", "images/gym12.png");
eat = loadAnimation("images/eat1.png", "images/eat2.png");
drink = loadAnimation("images/drink1.png", "images/drink2.png");
move = loadAnimation("images/move.png", "images/move1.png");

} 

function setup() {
  createCanvas(800,400);

  

  astronaut = createSprite(5000,2300);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1

  

}

function draw() {
  background(bg);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 2;
  }  

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = -2;
    astronaut.velocityY = 1.5;
    }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 1.5;
    } 
    
    if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 2.1;
  }  

  if(keyDown("SPACE")){
    astronaut.addAnimation("gyming2", gymPart2);
    astronaut.changeAnimation("gyming2")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = -2.1;
  }  

  if(keyDown("S")){
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = -0.7;
    astronaut.velocityY = 0.3;
  }  

  if(keyDown("D")){
 astronaut.addAnimation("drinking", drink);
 astronaut.changeAnimation("drinking")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 2.8;
    astronaut.velocityY = -1.3;
  }  

  if(keyDown("M")){
    astronaut.addAnimation("movin", move);
    astronaut.changeAnimation("movin")
    astronaut.y = 200;
    astronaut.x = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }  
   
  
 

  drawSprites();
}