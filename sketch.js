
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
var left;
var right;
var score;


function preload()
{
	//ballImg = loadImage("bubble.png")
	
}

function setup() {
	createCanvas(1000, 400);
    engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
     //Create the Bodies Here.
	groundObj = new Ground(width/2,370,width,20);
	leftSide = new Ground(400,300,20,120);
	rightSide = new Ground(600,300,20,120);
	right2Side = new Ground(700,300,20,120)

	ball=Bodies.circle(100,10,20,ball_options)
	World.add(world,ball);
   // ball = createImg('bubble.png')
	//ball.position(30,30)
	//ball.size(50,50)
    Engine.run(engine);
    ellipse(RADIUS)

	button1=createImg("right.png");
	button1.position(20,20);
	button1.size(50,50);
	button1.mouseClicked(HForce);

	button2 = createImg("up.png");
	button2.position(70,20);
	button2.size(50,50);
	button2.mouseClicked(VForce);
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("Score:",700,50)
  //fontcolor("white")
  groundObj.show();
  leftSide.show();
  rightSide.show();
  right2Side.show();
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
  
  
}

//function keyPressed(){
//	if(keyCode === UP_ARROW){
//	Matter.Body.applyForce(ball,{x:500,y:600},{x:50,y:10})
  //}
  //else
   //if(keyCode === DOWN_ARROW)
	//Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 //}

 function HForce(){
Matter.Body.applyForce(ball,{x:500,y:600},{x:50,y:10})
  }

  function VForce(){
	  //console.log("hello")
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-0.05})
  }
