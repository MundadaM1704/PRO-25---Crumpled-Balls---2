const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var dustbinObj, paperObj, groundObj;

function preload(){

}

function setup() {
	createCanvas(1200,400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObj = new Paper(40,40,20);
    dustbinObj = new Dustbin(1000,450);
    groundObj = new Ground(600,400);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");

  groundObj.display();
  paperObj.display();
  dustbinObj.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:85, y:-85})
	}
}
