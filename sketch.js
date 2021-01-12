const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(1200,400);

    grd = new ground(600,380,1200,20);
    box1 = new box(700,350);
    box2 = new box(700,350);
    box3 = new box(700,350);
    box4 = new box(700,350);
    box5 = new box(700,350);

    ball1 = new ball(250,200);

    string = new rope(ball1.body,{x:400,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);
    grd.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball1.display();
    string.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}