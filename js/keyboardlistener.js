let left = false;
let right = false;
let up = false;
let space = false;


document.addEventListener('keydown', (event) => {    
    
    console.log('taste gedrückt', event);
    
    var code = event.code;

    if (code == 'ArrowRight') { 
        event.repeat = false;             
        right = true;
        world.moveRight(right);
        
    } if(code == 'ArrowLeft'){
        left = true;
        world.moveLeft();
    }

    // Alert the key name and key code on keydown
    /* alert(`Key pressed ${name} \r\n Key code value: ${code}`); */
    
  }, false);

  document.addEventListener('keyup', (event) => {    
    console.log('taste losgelassen', event)
    right = false;
    left = false;
    
  }, false);



