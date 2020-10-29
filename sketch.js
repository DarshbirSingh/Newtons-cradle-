
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject =new Roof(400,150,600,50) 
	
	bobObject3 =new Bob(400,500,90)
	bobObject4 =new Bob(490,500,90)
	bobObject5 =new Bob(580,500,90)
	bobObject2 =new Bob(310,500,90)
	bobObject1 =new Bob(220,500,90)

	bobDiameter =20

	rope1 =new Rope(bobObject1.body,roofObject.body,45) 
	rope2 =new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0 ) 
	rope3 =new Rope(bobObject3.body,roofObject.body,-bobDiameter*0,0 ) 
	rope4 =new Rope(bobObject4.body,roofObject.body,+bobDiameter,0 ) 
	rope5 =new Rope(bobObject5.body,roofObject.body,+bobDiameter*2,0 ) 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  
 
}



