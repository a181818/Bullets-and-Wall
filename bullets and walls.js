var line1 , line2 , line3;
var b1 , b2 , b3, b4;
var wall;
var thickness;


function setup() {
  createCanvas(1200,600);
  
  line1 = createSprite(600,150,1200,10);
  line1.shapeColor = "white";

  line2 = createSprite(600,300,1200,10);
  line2.shapeColor = "white";

  line3 = createSprite(600,450,1200,10);
  line3.shapeColor = "white";

  b1 = createSprite(1100,75,60,30);
  b1.shapeColor = "grey";

  b2 = createSprite(1100,220,60,30);
  b2.shapeColor = "grey";
  
  b3 = createSprite(1100,380,60,30);
  b3.shapeColor = "grey";

  b4 = createSprite(1100,525,60,30);
  b4.shapeColor = "grey";

  wall = createSprite(10,300,20,600);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("black");  

if(keyDown("space"))
{
  b1.velocityX = -97;
  b2.velocityX = -62;
  b3.velocityX = -73;
  b4.velocityX = -51;
}

if(b1.isTouching(wall)){
  b1.collide(wall);
  b1.shapeColor = "green"
}

if(b2.isTouching(wall)){
  b2.collide(wall);
  b2.shapeColor = "yellow"
}

if(b3.isTouching(wall)){
  b3.collide(wall);
  b3.shapeColor = "red"
}

if(b4.isTouching(wall)){
  b4.collide(wall);
  b4.shapeColor = "white"
}

  drawSprites();
}

