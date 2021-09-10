class World {

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    width_background = 1187;

    level = level1;

    statusBar_Life = new Statusbar_Life();
    statusBar_Tequila = new Statusbar_Tequila();
    statusBar_Coins = new Statusbar_Coins();

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
        this.statusBar_Tequila.world = this;
    }

    /**
     * Check collisions from Character with things
     */
    checkCollisions() {
        setInterval(() => {
            this.checkCollisionWithEnemies();
        }, 200);

        setInterval(() => {
            this.checkCollisionWithCoins();
            this.checkCollisionWithTequila();
        }, 1000 / 60);
    }

    /**
     * Check Collision from Character with Chicken
     */
    checkCollisionWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.energy > 0) {
                this.character.hit();       //lost energy                    
                this.statusBar_Life.setPercentage(this.character.energy);

                console.log('Getroffen von: ', enemy);
                console.log('Energy: ', this.character.energy);

                this.character.checkIfDead();
            };
        })
    }

    /**
     * Check Collision from Character to collect Coins
     */
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.statusBar_Coins.coins_counter++;
                const indexCoin = this.level.coins.indexOf(coin);
                this.level.coins.splice(indexCoin, 1)
            }
        })
    }

    /**
     * Check Collision from Character to collect Tequila
     */
    checkCollisionWithTequila() {
        this.level.tequilas.forEach((tequila) => {
            if (this.character.isColliding(tequila)) {
                this.statusBar_Tequila.tequila_counter++;
                const indexTequila = this.level.tequilas.indexOf(tequila);
                this.level.tequilas.splice(indexTequila, 1)
            }
        })
    }

    /**
     * Draw function for drawing the world
     * Wird immer wieder aufgerufen
     * 
     */
    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  /* Clear canvas */

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);     /* Background */
        this.ctx.translate(-this.camera_x, 0);

        //-----------Space for fixed Objects -----------------
        this.addObjectsToMap(this.level.clouds);                //Clouds

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);                 // Coins
        this.addObjectsToMap(this.level.tequilas);              // Tequilas
        this.addObjectsToMap(this.level.enemies);               /* Enemies */
        this.addToMap(this.character);                          /* Character */
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar_Life);                     // Health Bar
        this.addToMap(this.statusBar_Tequila);                              // Status Tequila
        this.addCounterToMap(this.statusBar_Tequila.tequila_counter, 210);   //  Status Tequila Count
        this.addToMap(this.statusBar_Coins);                                // Status Coins
        this.addCounterToMap(this.statusBar_Coins.coins_counter, 292);       // Status Coins Count

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
     * Counter Number to Status
     */
    addCounterToMap(counter, x) {
        this.ctx.font = "35px boogalooregular";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(counter, x, 323);
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

