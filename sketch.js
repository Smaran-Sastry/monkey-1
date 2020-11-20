var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score = 0;

var ground;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");          
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas (400, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground);
  
  foodGroup = createGroup();
  
  obstacleGroup = createGroup();
  
  score = 0;
  


}


function draw() {
  background (255);
  
var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("SCORE: "+ score, 300, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival time: "+ survivalTime, 100, 50);
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  monkey.collide(ground);
  
  food();
  
  obstacles();
  
  drawSprites();
}
  function food(){
    if(frameCount%80 === 0){
      var banana = createSprite(410, Math.round(random(100, 250)))
      banana.velocityX = -4;
      banana.addImage(bananaImage);
      banana.scale = 0.1;
    }
  }
function obstacles(){
    if(frameCount%200 === 0){
      var obstacle = createSprite(410, 320);
      obstacle.velocityX = -4;
      obstacle.addImage(obstacleImage);
      obstacle.scale = 0.2;
    }
  }





