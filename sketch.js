
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,rubber, hammer, stone

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  hammer = new Hammer(10,100,150,40)
ground = new Ground(600,height,1200,20)
rubber = new Rubber(900,450,70)
stone = new Stone(700,320,100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  rubber.display()
  hammer.display()
  stone.display()

  
  drawSprites();
 
}



