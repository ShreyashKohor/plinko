const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight=300

var plinkoObject

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  
  ground = new Ground(240,795,480,10)
  division1 = new Divisions(0,690,5,200)
  division2 = new Divisions(80,690,5,200)
  division3 = new Divisions(160,690,5,200)
  division4 = new Divisions(240,690,5,200)
  division5 = new Divisions(320,690,5,200)
  division6 = new Divisions(400,690,5,200)
  division7 = new Divisions(480,690,5,200)
  plinkoObject = new Plinko(240,300,10)

}

function draw() {
  rectMode(CENTER)
  background("black");  


  

  ground.display()

  plinko()
  division1.display()
  division2.display()
  division3.display()
  division4.display() 
  division5.display()
  division6.display()
  division7.display()
  plinkoObject.display()



  drawSprites();
}
function plinko(){
for (var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75))
}

for (var j = 15; j <=width-10; j=j+50)
{
   plinkos.push(new Plinko(j,175))
}
}