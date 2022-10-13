var bloco;
function setup() {
  createCanvas(400,400);
  bloco=createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    bloco.position.x=bloco.position.x+5;
  }
  if(keyIsDown(LEFT_ARROW)){
    bloco.position.x=bloco.position.x-5;
  }
  if(keyIsDown(UP_ARROW)){
    bloco.position.y=bloco.position.y-5;
  }
  if(keyIsDown(DOWN_ARROW)){
    bloco.position.y=bloco.position.y+5;
  }
drawSprites();
}




