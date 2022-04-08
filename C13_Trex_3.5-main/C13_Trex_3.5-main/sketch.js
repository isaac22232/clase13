var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var o1, o2, o3, o4, o5, o6
var obstaculo
var puntuacion=0
var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 o1 = loadImage("obstacle1.png")
 o2 = loadImage("obstacle2.png")
 o3 = loadImage("obstacle3.png")
 o4 = loadImage("obstacle4.png")
 o5 = loadImage("obstacle5.png")
 o6 = loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hola"+ 5)
  
}

function draw() {
  background(180);
  textSize(15);
  text("Puntuacion: "+puntuacion,450,50);
  puntuacion = puntuacion + Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds();
  spawnObstacles();

  drawSprites();
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(20,90))
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    
    //asignar tiempo de vida a una variable
    cloud.lifetime = 200
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacles(){
if(frameCount % 60===0){
obstaculo = createSprite(600,165,10,40);
obstaculo.velocityX= -5
var l2 = Math.round(random(1,6))
switch(l2) {
case 1:
  obstaculo.addImage(o1)
break;
case 2:
  obstaculo.addImage(o2)
break;
case 3:
  obstaculo.addImage(o3)
break;
case 4:
  obstaculo.addImage(o4)
break;
case 5:
  obstaculo.addImage(o5)
break;
case 6:
  obstaculo.addImage(o6)
break;
default:
break;
}
obstaculo.scale=0.5;
obstaculo.lifetime=300
}

}
