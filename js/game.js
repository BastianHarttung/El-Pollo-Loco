let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Define canvas and World on start
 */
function init(){
    canvas =document.getElementById('canvas');
    world = new World(canvas);    
    
   /*  console.log('My Character is ',world.character)
    console.log('My Enemies are: ' ,world.enemies) */
}

document.addEventListener('keydown', (event) => { 
    console.log('taste gedrückt', event.code);

    if (event.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    } if (event.code == 'ArrowLeft'){
        keyboard.LEFT = true;
    } if (event.code == 'ArrowUp'){
        keyboard.LEFT = true;
    } if (event.code == 'Space'){
        keyboard.LEFT = true;
    }
    
}, false);

document.addEventListener('keyup', (event) => { 
    console.log('taste losgelassen', event.code);

    if (event.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    } if (event.code == 'ArrowLeft'){
        keyboard.LEFT = false;
    } if (event.code == 'ArrowUp'){
        keyboard.LEFT = false;
    } if (event.code == 'Space'){
        keyboard.LEFT = false;
    }
    
}, false);
