const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand1, stand2, polygon,slingshot, polygonImage;
var box1, box2, box3, box4, box5
var box6, box7, box8, box9;
var box10, box11, box12;
var box13, box14;
var box15;

function preload (){
  hexagonImage=loadImage("hexagon3.png"); 
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(800, 795, 1600, 10);

  stand1 = new Ground(800,500, 400, 10);

  box1 = new Box(800, 470, 50, 50);

  box2 = new Box(730, 470, 50, 50);

  box3 = new Box(660, 470, 50, 50);

  box4 = new Box(870, 470, 50, 50);

  box5 = new Box(940, 470, 50, 50);

  box6 = new Box(695, 420, 50, 50);

  box7 = new Box(765, 420, 50, 50);

  box8 = new Box(835, 420, 50, 50);

  box9 = new Box(905, 420, 50, 50);

  box10 = new Box(730, 370, 50, 50);

  box11 = new Box(800, 370, 50, 50);

  box12 = new Box(870, 370, 50, 50);

  box13 = new Box(765, 320, 50, 50);

  box14 = new Box(835, 320, 50, 50);

  box15 = new Box(800, 270, 50, 50);

  var polygonOptions = {
    'density': 0.01
  };
  polygon = Bodies.circle(50,200,20, polygonOptions);
  World.add(world,polygon);

  slingshot=new Slingshot(polygon, {x:200, y:200});
}

function draw() {
  background(255);  

  Engine.update(engine);
  
  ground.display();

  stand1.display();
  
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

  box15.display();

  slingshot.display();

  imageMode(CENTER);
  image(hexagonImage, polygon.position.x, polygon.position.y, 40, 40);
}

function mouseDragged (){
  Matter.Body.setPosition(polygon, {x: mouseX, y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}

function keyPressed (){
  if(keyCode === 32 ){
    slingshot.attach(polygon);
    Matter.Body.setPosition(polygon, {x:200,y:200 });
  }
}
