
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
  }
   
  ground =new Ground(600,390,1200,10);
  
 top_wall = new Ground(1180,300,10,200);

  top_wall1 = new Ground(900,300,10,200);

  // top_wall2 = new Ground(250,200,30,20);
  // top_wall3 = new Ground(350,200,30,20);

  ball = Bodies.circle(100,200,20,ball_options);
  fill("white");
  World.add(world,ball);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
 
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  top_wall1.show();
  // top_wall2.show();
  // top_wall3.show();
  Engine.update(engine);

  
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
  }
}