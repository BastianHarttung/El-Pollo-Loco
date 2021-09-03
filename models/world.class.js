class World {

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    width_background = 1187;

    level = level1;

    character = new Character();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    /**
     * Übergebe die World Variablen an Character
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Check collisions
     */
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && this.character.energy > 0) {
                    this.character.hit();
                    console.log('Getroffen von: ', enemy);
                    console.log('Energy: ', this.character.energy);
                    this.character.checkIfDead();
                };
            })
        }, 200);
    }

    /**
     * Draw function for drawing the world
     * 
     */
    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  /* Clear canvas */

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);     /* Background */
        this.addObjectsToMap(this.level.clouds);                //Clouds       
        this.addObjectsToMap(this.level.coins);                 // Coins
        this.addObjectsToMap(this.level.tequilas);              // Tequilas
        this.addObjectsToMap(this.level.enemies);               /* Enemies */

        this.addToMap(this.character);                          /* Character */

        this.ctx.translate(-this.camera_x, 0);

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
    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            this.flipImage(movableObject);
        }

        movableObject.draw(this.ctx);

        movableObject.drawFrame(this.ctx);

        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    }

    /**
     * for Each loop for object arrays short
     */
    addObjectsToMap(objectArray) {
        objectArray.forEach(object => {
            this.addToMap(object);
        })
    }

    /**
     * Flip Image horizontally
     * @param {json} movableObject 
     */
    flipImage(movableObject) {
        this.ctx.save();
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    /**
     * Flip Image back to normal
     * @param {json} movableObject 
     */
    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore();
    }

}

