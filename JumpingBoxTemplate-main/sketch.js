var canvas;
var music;
var s1,s2,s3,s4
var box
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(110,580,160,20)
s1.shapeColor="red"
s2=createSprite(290,580,160,20)
s2.shapeColor="blue"

s3=createSprite(470,580,160,20)
s3.shapeColor="green"

s4=createSprite(650,580,160,20)
s4.shapeColor="yellow"

box=createSprite(400,400,20,20)
box.shapeColor="white"

    //create box sprite and give velocity
 box.velocityX=5;
 box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges)
 if(box.isTouching(s1)){
box.shapeColor=s1.shapeColor
 } else if(box.isTouching(s2)){
    box.shapeColor=s2.shapeColor
 }else if(box.isTouching(s3)){
    box.shapeColor=s3.shapeColor
 } else{
    box.shapeColor=s4.shapeColor
 }
drawSprites();
    //add condition to check if box touching surface and make it box
    
}
