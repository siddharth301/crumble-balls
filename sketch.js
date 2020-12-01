
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(50,500,50,50);
	shapecolor = "white";
	
	log1 = new Log(740,500,80,20);
	shapecolor = "white";

	log2 = new Log(700,500,20,80);
	shapecolor = "white";

	log3 = new Log(780,500,20,80);
	shapecolor = "white";
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown("space")){
	  ball.velocityX = 3;
	  ball.velocityY = 3;
  }
  ball.display();
  log1.display();
  log2.display();
  log3.display();
  
  drawSprites();
 
}



