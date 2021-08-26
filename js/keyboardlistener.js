document.addEventListener('keydown', (event) => {
    /* var name = event.key; */
    var code = event.code;

    if (code == 'ArrowRight') {
        moveRight()
        
    } if(code == 'ArrowLeft'){
        moveLeft()
    }

    // Alert the key name and key code on keydown
    /* alert(`Key pressed ${name} \r\n Key code value: ${code}`); */
    
  }, false);