var canvas;
var music;
var box1,box2,box3,box4,ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,700);

    //create 4 different surfaces
box1=createSprite(0,580,250,30)
box1.shapeColor="blue"
box2=createSprite(280,580,250,30)
box2.shapeColor="green"
box3=createSprite(570,580,250,30)
box3.shapeColor="yellow"
box4=createSprite(850,580,250,30)
box4.shapeColor="pink"
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=4
ball.velocityY=9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites()

if(ball.isTouching(box1)){
ball.shapeColor="blue"
music.play()
}
if(ball.isTouching(box2)){
    ball.shapeColor="green"
    ball.velocityX=0
    ball.velocityY=0
    music.stop()
    }
    if(ball.isTouching(box3)){
        ball.shapeColor="yellow"
        }
        if(ball.isTouching(box4)){
            ball.shapeColor="pink"
            }
            ball.bounceOff(edges)
ball.bounceOff(box1)
ball.bounceOff(box2)
ball.bounceOff(box3)
ball.bounceOff(box4)
drawSprites()
    //add condition to check if box touching surface and make it box
}
