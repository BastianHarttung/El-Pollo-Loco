let canvas;
let world;

function init(){
    canvas =document.getElementById('canvas');
    world = new World(canvas);
    
    
   /*  console.log('My Character is ',world.character)
    console.log('My Enemies are: ' ,world.enemies) */
}

function moveRight() {
    world.character.x = world.character.x + 10
    
}

function moveLeft() {
    world.character.x = world.character.x -10
}