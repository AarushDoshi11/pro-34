var gamingbackground;
var box1,box2,box3,box4;
var box5,box6;
var superman;
function preload() {
//preload the images here
backgroundImg = loadImage("gamingbackground.png");

supermanImg = loadImage("superman.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  box1 = createSprite(900,100,70,70);
  box1.shapeColor  = "green";
  box1.debug = true;

  box2 = createSprite(900,100,70,70);
  box2.shapeColor  = "green";
  box2.debug = true;

  box3 = createSprite(900,100,70,70);
  box3.shapeColor  = "green";
  box3.debug = true;

 box4 = createSprite(900,100,70,70);
 box4.shapeColor  = "green";
 box4.debug = true;

 box5 = createSprite(800,100,70,70);
 box5.shapeColor  = "yellow";
 box5.debug = true;

 box6 = createSprite(800,100,70,70);
 box6.shapeColor  = "yellow";
 box6.debug = true;

 superman = createSprite(500,200,);
 superman.debug = true;
}

function draw() {

  gamingbackground.x = World.mouseX

  if(box6.isTouching(box6)){
    box6.shapeColor = "green"
   }

  background(0);

drawSprites();
}

