class World {

    canvas;
    ctx;
    backgroundObjects = [        
        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png'),      /* Background */
        new BackgroundObjects('../img/5.Fondo/Capas/4.nubes/Completo.png'),         /* Clouds */
        new BackgroundObjects('../img/5.Fondo/Capas/3.Fondo3/Completo.png'),        /* Hills */
        new BackgroundObjects('../img/5.Fondo/Capas/2.Fondo2/completo.png'),        /* BG Cacti */
        new BackgroundObjects('../img/5.Fondo/Capas/1.suelo-fondo1/completo.png'),  /* Ground */        
    ]
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick()
        ];
    character = new Character();
        
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    /**
     * Draw function for drawing the world
     * 
     */
    draw(){
        
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);  /* Clear canvas */
                
         
        this.addObjectsToMap(this.backgroundObjects);   /* Background */        
        this.addObjectsToMap(this.enemies);             /* Enemies */         
        this.addToMap(this.character);                  /* Character */

        // Draw() wird immer wieder aufgerufen je nach leistung des pcs
        let self = this;
        requestAnimationFrame(function () {
            self.draw();            
        });

                
    }
        
    /**
     * Draw image of movable Object short
     * @param {*} movableObject 
     */
    addToMap(movableObject){
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }
    
    /**
     * for Each loop for object arrays short
     */
    addObjectsToMap(objectArray){
        objectArray.forEach(object => {
            this.addToMap(object);
        })   
    }   
    
    
}

