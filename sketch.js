const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(550,300,70,70);
    pig1 = new Pig(625,300,55.55,55.55);
    log1 = new Log(625,250,200,15,0);
    box3 = new Box(700,200,70,70);
    box4 = new Box(550,200,70,70);
    pig2 = new Pig(625,200,55.55,55.55);
    log2 = new Log(625,175,200,15,0);
    box5 = new Box(700,150,70,70);
    box6 = new Box(550,150,70,70);
    pig3 = new Pig(625,150,55.55,55.55);
    log3 = new Log(625,100,200,15,0);
    box7 = new Box(625,50,70,70);
    log4 = new Log(600,25,150,15,135);
    log5 = new Log(650,25,150,15,45);

    bird = new Bird(100,100,50,50)

    ground = new Ground(400,390,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    box6.display();
    pig3.display();
    log3.display();
    box7.display();
    log4.display();
    log5.display();

    bird.display();
    ground.display();

}