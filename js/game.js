let canvas;
let world;
let moveRightVar;
let moveLeftVar;

function init(){
    canvas =document.getElementById('canvas');
    world = new World(canvas);
    
    
   /*  console.log('My Character is ',world.character)
    console.log('My Enemies are: ' ,world.enemies) */
}

function moveRight() {
    setInterval(() => {            
        world.character.x += 1;            
    }, 1000/60);    
}

function moveLeft() {
    setInterval(() => {            
        world.character.x -= 1;            
    }, 1000/60); 
}

function stopIntervall(direction) {
    clearInterval(direction);    
}