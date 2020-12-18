
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground1;
var d1,d2,d3;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	

  ball=new paper(100,780,50,50);
  ground1=new ground(350,760,700,10);
  d1=new dustbin(200,680,20,100);
  d2=new dustbin(300,690,200,20);
  d3=new dustbin(400,680,20,100);
	

	
	Engine.run(engine);

  
}


function draw() {
	rectMode(CENTER);
  background(0);
  Engine.update(engine);

ball.display();
ground1.display();
d1.display();
d2.display();
d3.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
   
	   
	 }
   }
   



