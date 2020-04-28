
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine
*/
var ground;
var tanker,canonBall,shotBall;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    tanker = new Tanker(300,315,250,150);
    



}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.

}