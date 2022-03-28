var ball;
var leftSide;
var rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1500, 600, 20, 120);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2,
	}

	ball = Bodies.circle(200, 635, 50, ball_options);
    World.add(world, ball);
	
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  rightSide.display();
  leftSide.display();
  ellipse(ball.position.x, ball.position.y, 50, 50)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.5, y:0.5});

	}
}

