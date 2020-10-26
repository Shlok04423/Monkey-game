
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 600);
  


  var survivalTime=0;
  
  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);

   monkey.scale=0.199
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  obstacleGroup=new Group()
  FoodGroup = new Group()
  
}


function draw() {
  
  background("255");
  
  
  if(ground.x<0) {
    ground.x=ground.width /2;
  }
  
  spawn_food()
  spawn_obstacles() 
    if(keyDown("space")&& monkey.collide(ground) ) {
      monkey.velocityY = -15;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground); 
  
  drawSprites()
  
      
  
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
      FoodGroup.destroyEach()
      obstacleGroup.destroyEach()
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

    }


function spawn_food(){
if(frameCount%100===0){
var bananas = createSprite(600,250,40,10)
bananas.addImage(bananaImage)
bananas.scale=0.1  
bananas.velocityX=-2
bananas.y=random(120,210) 
  
  FoodGroup.add(bananas)
  
}  
} 
function spawn_obstacles(){
 if(frameCount%300===0){
var obstacle = createSprite(600,310,40,10)
obstacle.addImage(obstacleImage)
   
obstacle.scale=0.2  
obstacle.velocityX=-2
obstacleGroup.add(obstacle)
  
  
  
}  
  
  
  
}  
  
  
  
  
  

