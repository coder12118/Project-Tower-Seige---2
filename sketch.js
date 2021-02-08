const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon, polygonImg;

function preload(){
    polygonImg = loadImage('polygon.png');
}

function setup(){
    createCanvas(1000, 500)
    
    engine = Engine.create();
    world = engine.world

    var poly_options = {
        restitution: 0.5,
        density: 1
    }
    polygon = Bodies.circle(50, 200, 20,poly_options)
    World.add(world, polygon)
    slingshot = new Slingshot(this.polygon,{x:100, y:200});

    ground1 = new Ground(500, 495, 1000, 10);
    ground2 = new Ground(400, 350, 250, 10);
    ground3 = new Ground(700, 270, 200, 10);

    block1 = new Block(400, 325, 30, 40);
    block2 = new Block(430, 325, 30, 40);
    block3 = new Block(460, 325, 30, 40);
    block4 = new Block(490, 325, 30, 40);
    block5 = new Block(370, 325, 30, 40);
    block6 = new Block(340, 325, 30, 40);
    block7 = new Block(310, 325, 30, 40);
    block8 = new Block(400, 285, 30, 40);
    block9 = new Block(370, 285, 30, 40);
    block10 = new Block(340, 285, 30, 40);
    block11 = new Block(430, 285, 30, 40);
    block12 = new Block(460, 285, 30, 40);
    block13 = new Block(400, 245, 30, 40);
    block14 = new Block(370, 245, 30, 40);
    block15 = new Block(430, 245, 30, 40);
    block16 = new Block(400, 205, 30, 40);

    block17 = new Block(700, 245, 30, 40);
    block18 = new Block(730, 245, 30, 40);
    block19 = new Block(760, 245, 30, 40);
    block20 = new Block(670, 245, 30, 40);
    block21 = new Block(640, 245, 30, 40);
    block22 = new Block(700, 205, 30, 40);
    block23 = new Block(730, 205, 30, 40);
    block24 = new Block(670, 205, 30, 40);
    block25 = new Block(700, 165, 30, 40);

}

function draw(){
    background("black");
    Engine.update(engine);

    imageMode(CENTER)
    image(polygonImg, this.polygon.position.x, this.polygon.position.y, 40, 40);
    slingshot.display();

    ground1.display();
    ground2.display();
    ground3.display();

    fill("blue");
    block1.display();
    fill("blue");
    block2.display();
    fill("blue");
    block3.display();
    fill("blue");
    block4.display();
    fill("blue");
    block5.display();
    fill("blue");
    block6.display();
    fill("blue");
    block7.display();
    fill("pink");
    block8.display();
    fill("pink");
    block9.display();
    fill("pink");
    block10.display();
    fill("pink");
    block11.display();
    fill("pink");
    block12.display();
    fill("cyan");
    block13.display();
    fill("cyan");
    block14.display();
    fill("cyan");
    block15.display();
    fill("grey");
    block16.display();

    fill("blue")
    block17.display();
    fill("blue")
    block18.display();
    fill("blue")
    block19.display();
    fill("blue")
    block20.display();
    fill("blue")
    block21.display();
    fill("cyan")
    block22.display();
    fill("cyan")
    block23.display();
    fill("cyan")
    block24.display();
    fill("pink")
    block25.display();

fill("white")
textSize(15)
text("Drag the Hexagonal Stone and Release it, to Launch it towards the Blocks", 280, 50);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}