let canvas;
let world;
let keyboard = new Keyboard();
let showControl = false;

/**
 * Define canvas and World on start
 */
function start(){
    document.getElementById('start-screen').classList.add('d-none');
    canvas =document.getElementById('canvas');
    world = new World(canvas, keyboard);    
    
   /*  console.log('My Character is ',world.character)
    console.log('My Enemies are: ' ,world.enemies) */
}

function showControls() {
    if (showControl == false) {
        document.getElementById('controls-container').classList.remove('d-none');
        showControl = true;
    } else {
        document.getElementById('controls-container').classList.add('d-none');
        showControl = false;
    }    
}

/**
 * Eventlistener for Keyboard press
 */
document.addEventListener('keydown', (event) => { 
    //console.log('taste gedrückt', event.code);

    if (event.code == 'ArrowRight') {
        keyboard.RIGHT = true;
    } if (event.code == 'ArrowLeft'){
        keyboard.LEFT = true;
    } if (event.code == 'ArrowUp'){
        keyboard.UP = true;
    } if (event.code == 'Space'){
        keyboard.SPACE = true;
    }    
}, false);

/**
 * Eventlistener for Keyboard button up * 
 */
document.addEventListener('keyup', (event) => { 
    //console.log('taste losgelassen', event.code);

    if (event.code == 'ArrowRight') {
        keyboard.RIGHT = false;
    } if (event.code == 'ArrowLeft'){
        keyboard.LEFT = false;
    } if (event.code == 'ArrowUp'){
        keyboard.UP = false;
    } if (event.code == 'Space'){
        keyboard.SPACE = false;
    }    
}, false);
