const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,ground,chain,bally;
function setup(){
    createCanvas(1200,700)
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,height,1200,10)
    box1=new Box(800,600,100,100)
    box2=new Box(800,550,100,100)
    box3=new Box(800,500,100,100)
    box4=new Box(800,450,100,100)
    box5=new Box(800,400,100,100)
    box6=new Box(800,350,100,100)
    box7=new Box(950,600,100,100)
    box8=new Box(950,550,100,100)
    box9=new Box(950,500,100,100)
    box10=new Box(950,450,100,100)
    box11=new Box(950,400,100,100)
    box12=new Box(950,350,100,100)
    box13=new Box(1100,600,100,100)
    box14=new Box(1100,550,100,100)
    box15=new Box(1100,500,100,100)
    box16=new Box(1100,450,100,100)
    box17=new Box(1100,400,100,100)
    box18=new Box(1100,350,100,100)
    bally=new Balllllllllll(200,300)
    chain=new Chains(bally.body,{x:600,y:50})
}
function draw(){
    background(0)
    Engine.update(engine)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    chain.display()
    bally.display()
   


    if (keyDown("UP_ARROW")){
        Matter.Body.applyForce(bally.body,bally.body.position,{x:20,y:-10})
    }
    
}