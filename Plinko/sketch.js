
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
var score = 0


function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	engine = Engine.create()
	world = engine.world 
 	ground = new Ground(width/2,height,width,20)
    for(var k = 0; k <= width; k = k+80){
		divisions.push(new Divisions(k,height - divisionHeight / 2,10,divisionHeight))
	}
	for(var j = 75; j <= width; j = j+50){
		plinkos.push(new Plinko(j,75))
	}
	for(var j = 50; j <= width-10; j = j+50){
		plinkos.push(new Plinko(j,175))
	}
	for(var j = 75; j <= width; j = j+50){
		plinkos.push(new Plinko(j,275))
	}
	for(var j = 50; j <= width-10; j = j+50){
		plinkos.push(new Plinko(j,375))
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  ground.display()
  for(var i = 0;i <plinkos.length;i ++){
	  plinkos[i].display()
  }
  for(var j = 0;j <divisions.length;j ++){
	divisions[j].display()
}
if (frameCount% 60 == 0) {
	particles.push (new Particle(random(width/2 - 30, width/2 + 30),10,10))
	score ++ 
}
for(var k = 0;k <particles.length;k ++){
	particles[k].display()
}
 
}
