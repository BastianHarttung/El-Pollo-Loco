class BackgroundObjects extends MovableObject{
    
    y = 0;
    width = 1188;
    height = 334;
    

    constructor(imagePath){
        super().loadImage(imagePath)
        this.x = 0;
           
        /* this.movingBackground(); */
    }

    movingBackground(){
        setInterval(() => {

            if(world.keyboard.RIGHT){               
                this.moveRight();
            } if(world.keyboard.LEFT){
                this.moveLeft();
            } else{                
            }
        }, 1000/10);        
    }

    /* moveRight() {          
        world.backgroundObjects[2].x -= 1;   
        world.backgroundObjects[3].x -= 2.5;   
        world.backgroundObjects[4].x -= 4;      
    }

    moveLeft() {             
        world.backgroundObjects[2].x += 1;   
        world.backgroundObjects[3].x += 2.5;   
        world.backgroundObjects[4].x += 4;
    } */
        
}