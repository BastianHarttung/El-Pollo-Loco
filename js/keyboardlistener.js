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

document.addEventListener('keyup', (event) => {
    var code = event.code;

    if(code == 'ArrowRight') {
         console.log('stop right');
         clearInterval(moveRightVar);
    } if (code == 'ArrowLeft') {
        console.log('stop left');
        clearInterval(moveLeftVar);
    }       

})