
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 

function preload(){
	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

     paper = new Paper(50,250, 30);
     World.add(world, paper);

     ground = new Ground(600,height,1200,20);

     side1 = new Dustbin(700,height-20);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  ground.display();
  side1.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
  }
}


