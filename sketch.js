const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine,myWorld;
var ground;
var ball;

function setup() {
 var canvas = createCanvas(400,400);

 
myEngine = Engine.create();
myWorld = myEngine.world;

var ground_options = {  

  isStatic:true

}
var ball_options = {

  restitution: 1.0
}

ball = Bodies.circle(200,100,20,ball_options);
World.add(myWorld,ball)
 


ground = Bodies.rectangle(200,380,200,20,ground_options);
 World.add(myWorld,ground);
 console.log(ground);
 //console.log(ground.position.y);
 
}


function draw() {
  background("cyan");  
  Engine.update(myEngine);

 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);
  
   ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)

}