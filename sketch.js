var fixed,moving;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  
  fixed=createSprite(300, 200, 50, 50);
  fixed.shapeColor="green";
  moving=createSprite(400,200,60,60);
  moving.shapeColor="green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  fixed.velocityY=-2;
  gameObject3.velocityY=2;
}

function draw() {
  background("black");  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  console.log(moving.x-fixed.x)

 if(touching(moving,gameObject1)){
   gameObject1.shapeColor="red";
 }
 else{
  gameObject1.shapeColor="green";
 }

 if(touching(moving,gameObject4)){
   gameObject4.shapeColor="blue";
 }
 else{
   gameObject4.shapeColor="green";
 }

 if(touching(moving,gameObject2)){
  gameObject2.shapeColor="yellow";
}
else{
  gameObject2.shapeColor="green";
}
 
bounceOff(fixed,gameObject3);

  drawSprites();
}

