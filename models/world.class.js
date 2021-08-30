class World {

    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    backgroundObjects = [        
        new BackgroundObjects('../img/5.Fondo/Capas/5.cielo_1920-1080px.png'),      /* Background */
        new Clouds('../img/5.Fondo/Capas/4.nubes/Completo.png'),                    /* Clouds */
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
        
    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    /**
     * Übergebe die World Variablen an Character
     */
    setWorld(){
        this.character.world = this;        
    }

    /**
     * Draw function for drawing the world
     * 
     */
    draw(){
        
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);  /* Clear canvas */
                      
        this.ctx.translate(this.camera_x,0);

        this.addObjectsToMap(this.backgroundObjects);   /* Background */        
        this.addObjectsToMap(this.enemies);             /* Enemies */         
        this.addToMap(this.character);                  /* Character */

        this.ctx.translate(-this.camera_x);

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
        if (movableObject.otherDirection){
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1,1);
            movableObject.x = movableObject.x * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection){
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
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

