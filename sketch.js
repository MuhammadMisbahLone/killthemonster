const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var backgroundImg,platform;

function preload() {
  backgroundImg = loadImage("sprites/bg.png");
} 

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(560,200,400,5);
    platform = new Ground(150, 305, 300, 170);
    //row d
    box1 = new Box(620,190,20,20);
    box2 = new Box(620,170,20,20);
    box3 = new Box(620,150,20,20);
    box4 = new Box(620,130,20,20);
    //row c
    box5 = new Box(580,190,20,20);
    box6 = new Box(580,170,20,20);
    //row b
    box7 = new Box(540,190,20,20);
    box8 = new Box(540,170,20,20);
    box9 = new Box(540,150,20,20);
    box10 = new Box(540,130,20,20);
    box11 = new Box(540,110,20,20);
    //row a
    box12 = new Box(500,190,20,20);
    box13 = new Box(500,170,20,20);
    box14 = new Box(500,150,20,20);
    superman = new Superman(300,100,240,100);
    enemy = new Enemy(700,160,140,140);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    superman.display();
    enemy.display();
}
