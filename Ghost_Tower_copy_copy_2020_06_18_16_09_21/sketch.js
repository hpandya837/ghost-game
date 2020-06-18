var building
var towerImage
var doorImaged
var ghost
var ghostImage

var climberImage

function preload(){
towerImage=loadImage("tower.png")
doorImage=loadImage("door.png")
climberImage=loadImage("climber.png")
ghostImage=loadImage("ghost-standing.png")
}
function setup(){
createCanvas(600,600)
building=createSprite(300,300,100,300)
building.addImage(towerImage)
ghost=createSprite(200,300,20,20)
ghost.addImage(ghostImage)
ghost.scale=0.3


}

function draw(){
background(270)
drawSprites();
building.velocityY=-4

if(building.y<=0){
building.y=400
}
if(keyDown("space")){
    ghost.velocityY=-2

}
if(keyDown("right_arrow")){
ghost.x=ghost.x+3
}
if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
}


spawnDoors();
}
function spawnDoors(){

if(frameCount % 240==0){
var door=createSprite(430,200,20,20)
door.velocityY=1
door.x=Math.round(random (120,400))
door.addImage(doorImage)
door.scale=0.5
var climber=createSprite(430,240,20,20)
climber.x=door.x
climber.velocityY=1
climber.addImage(climberImage)
}
}
