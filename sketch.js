var ground,Background
var father,son
var tree
var elephant,tiger,lion,snake,bear;
var preb
var PREPLAY = 0;
var PLAY = 1;
var END = 2;
var gamestate = PREPLAY;


function preload(){
  backgroundimg= loadImage("backgroundnew.jpg")
  fatherimg = loadAnimation("p1.PNG","p2.PNG","p3.PNG","p_2.PNG");
  prebimg = loadImage("B1.PNG")


  ya = loadImage("backgroundnew.jpg")
  
  
}

function setup() {
createCanvas(windowWidth,windowHeight);

ground = createSprite(200,350,3200,20);
background1 = createSprite(windowWidth/2,windowHeight/2)
background1.addImage(backgroundimg)
background1.visible = false;

father = createSprite(200,300);
father.addAnimation("running",fatherimg);
father.scale = 0.08;
father.visible = false;

preb = createSprite(windowWidth/3+315,windowHeight/2);
preb.addImage(prebimg)
preb.visible = false;
button = createSprite(windowWidth-200,windowHeight-100);
button.visible = false;
}

function draw(){
  background("white")
if(gamestate === PREPLAY){
  preb.visible = true
  button.visible = true;
  if(mousePressedOver(button)){
    gamestate = PLAY;

  }
  if(gamestate===PLAY){
    background1.visible=true;
    father.visible=true;
    preb.visible=false;
    button.visible=false
  }
}  
  

  drawSprites()
}