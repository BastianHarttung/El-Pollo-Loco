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

/**
 * Start and stop Music in Game
 */
let musicplay = true;
function musicPlay() {
    document.querySelector('.sound-btn').classList.toggle('off');
    if (musicplay) {
        world.MUSIC_GameMusic.pause()
        world.MUSIC_GameMusic.currentTime = 0;        
        musicplay = false;
    } else {
        world.MUSIC_GameMusic.play()
        musicplay = true
    }    
}

/**
 * Show Controls on Screen
 */
function showControls() {
    if (showControl == false) {
        document.getElementById('controls-container').classList.remove('d-none');
        document.getElementById('control-btn').innerHTML = 'Back';
        showControl = true;
    } else {
        document.getElementById('controls-container').classList.add('d-none');
        document.getElementById('control-btn').innerHTML = 'Controls';
        showControl = false;
    }    
}

/**
 * Enable Fullscreen
 */
let isFullscreen = false;
function showFullScreen() {        
    if (isFullscreen == false) {
        canvas.requestFullscreen();
        isFullscreen = true;
    } else {
        document.exitFullscreen();
        isFullscreen = false;
    }    
}

/**
 * Eventlistener for Keyboard press
 */
document.addEventListener('keydown', (event) => { 
    //console.log('taste gedrückt:', event.code);

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
