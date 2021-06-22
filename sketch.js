const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg//, dayImg;
var snowfall = []
var snowf = [];

//var snowa=[];
//var snowb = [];
//////

var maxSnow= 100;
//var snowaImg, snowbImg;





function preload() {
  backgroundImg = loadImage("snow1.jpg")
  

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    //snowa = new Snow(random(100,700), 0, 20)

    //snowa setup
    
    if(frameCount%200==0){
      for(var i =0;i<maxSnow;i++){
        snowfall.push(new Snow(random(0,800),random(0,400)));
    
}
    }

    if(frameCount%200==0){
      for(var i =0;i<maxSnow;i++){
        snowf.push(new Snow2(random(0,800),random(0,400)));
    
}
    }
  }

function draw() {
  Engine.update(engine);
    
    background(backgroundImg);
  //background(255,255,255);  
  drawSprites();

  for(var i =0;i<snowfall.length;i++){
    snowfall[i].display();
    snowfall[i].update();
  }

  for(var i =0;i<snowf.length;i++){
    snowf[i].display();
    snowf[i].update();
  }
}