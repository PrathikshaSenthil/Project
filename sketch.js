const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine,world;
var backgroundImg;
var ground,platform;

function preload(){

  backgroundImg = loadImage("assets/background_1.png");
}

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,100);
    platform = new Ground(150,height-120,300,170);
}

function draw(){

    background(backgroundImg);
    Engine.update(engine);


    ground.display();
    platform.display();
}
