var fixedrect,movingrect;

  
  
  
  
  
  function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 30, 80);
  movingrect.shapeColor="magenta"
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="magenta"
}

function draw() {
  
  background("black");
  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    ){
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";

  }
  else{
    movingrect.shapeColor="magenta";
    fixedrect.shapeColor="magenta";

  }
  drawSprites();
}