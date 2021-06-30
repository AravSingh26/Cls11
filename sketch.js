var trex;

function preload()
{
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage = loadImage("ground2.png")
}  
function setup(){
  createCanvas(600,200);
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running)
  edges=createEdgeSprites();

  trex.scale=0.5; 
  trex.X=50

  ground=createSprite(200,180,400,20);
  ground.addImage("ground",groundimage);
  ground.x = ground.width/2;

}
function draw(){
  background("white");
  ground.velocityX=-2
  console.log(ground.x)
  //console.log("trex is on the move to chase u n tear ur flesh #run")
  //console.log(trex.y)
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  //jump when space is pressed
  if(keyDown("space")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+0.5
  //to collide the trex with the bottom edge
  trex.collide(ground)
  drawSprites();
}