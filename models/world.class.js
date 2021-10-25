class World {

    canvas;
    ctx;
    keyboard;

    camera_x = 0;

    width_background = 1187;

    frameRate = 60;

    level = level1;

    statusBar_Life = new Statusbar_Life();
    statusBar_Tequila = new Statusbar_Tequila();
    statusBar_Coins = new Statusbar_Coins();

    character = new Character();

    wall = new Wall();

    lastHit = new Date().getTime();

    throwableObjects = [];

    SOUND_coinsPickup = new Audio('./audio/money_pickup.mp3');
    SOUND_bottlePickup = new Audio('./audio/bottle_pickup.mp3');
    SOUND_chicken = new Audio('./audio/chicken.mp3');
    SOUND_chickenKill = new Audio('./audio/chicken_kill.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.wall.src = './img/wall.png';
        this.draw();
        this.setWorld();
        this.checkThrowObjects();
        this.showEndboss();
        this.checkCollisions();
    }

    /**
     * Give the World Variables to classes
     */
    setWorld() {
        this.character.world = this;
        this.statusBar_Tequila.world = this;
    }

    /**
     * Draw function for drawing the world
     * Wird immer wieder aufgerufen
     * 
     */
    draw() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  /* Clear canvas */

        this.addObjectsToMap(this.level.background);            /* Background */

        this.addObjectsToMap(this.level.clouds);                //Clouds

        this.ctx.translate(this.camera_x * 0.6, 0);
        this.addObjectsToMap(this.level.hills);                 //Hills
        this.ctx.translate(-this.camera_x * 0.6, 0);

        this.ctx.translate(this.camera_x * 0.85, 0);
        this.addObjectsToMap(this.level.cacti);                 //Cacti
        this.ctx.translate(-this.camera_x * 0.85, 0);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.ground);                //Ground
        this.ctx.translate(-this.camera_x, 0);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.coins);                 // Coins
        this.addObjectsToMap(this.level.tequilas);              // Tequilas
        this.addObjectsToMap(this.level.enemies);               /* Enemies */
        this.addObjectsToMap(this.level.endboss);               /* Endboss */
        this.addToMap(this.character);                          /* Character */
        this.addObjectsToMap(this.throwableObjects);            // Throw Bottle
        this.addToMap(this.wall);                               // Wall
        this.ctx.translate(-this.camera_x, 0);

        //-----------Space for fixed Objects -----------------

        this.addToMap(this.statusBar_Life);                     // Health Bar
        this.addToMap(this.statusBar_Tequila);                              // Status Tequila
        this.addCounterToMap(this.statusBar_Tequila.tequila_counter, 210);   //  Status Tequila Count
        this.addToMap(this.statusBar_Coins);                                // Status Coins
        this.addCounterToMap(this.statusBar_Coins.coins_counter, 292);       // Status Coins Count

        // Draw() wird immer wieder aufgerufen je nach leistung des pcs

        if (!this.character.pepeIsDead) {
            let self = this;
            requestAnimationFrame(function () {
                self.draw();
            });
        }
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
        movableObject.drawFrame(this.ctx);                  //////////////////
        movableObject.drawFrameCollision(this.ctx);         //////////////////

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

    /*-----------------------Collisions---------------------------------*/

    /**
    * Check collisions from Character with things
    */
    checkCollisions() {
        setInterval(() => {
            this.checkCollisionWithEnemies();
            this.checkCollisionWithEndboss();
            this.checkCollisionBottleWithEndboss();
            this.checkCollisionWithCoins();
            this.checkCollisionWithTequila();
        }, 1000 / this.frameRate);
    }

    /**
     * Check Collision from Character with Chicken
     */
    checkCollisionWithEnemies() {
        this.level.enemies.forEach((enemy, index) => {
            if (!enemy.isDead) {
                if (this.character.isColliding(enemy)
                    && !this.character.isAboveGround()
                    && this.character.energy > 0
                    && (new Date().getTime() - this.lastHit) > 1500) {
                    this.lastHit = new Date().getTime()
                    this.character.hit();                   //lost energy   
                    this.soundPlay(this.SOUND_chicken, 1);
                    this.statusBar_Life.setPercentage(this.character.energy);

                    console.log('Getroffen von: ', enemy);          ///////////
                    console.log('Energy: ', this.character.energy); /////////////

                    this.character.checkIfDead();
                }
                if (this.character.isColliding(enemy)
                    && this.character.isAboveGround()
                    && this.character.energy > 0) {

                    console.log('Chicken killed', enemy.id)   ////////////////                 

                    enemy.isDead = true;
                    this.soundPlay(this.SOUND_chickenKill, 1);

                    setTimeout(() => {
                        let killedIndex = this.level.enemies.findIndex(x => x.id === enemy.id);
                        this.level.enemies.splice(killedIndex, 1)
                    }, 1000);
                }
            }
        })
    }

    /**
     * Check Collision from Character to Endboss
     */
    checkCollisionWithEndboss() {
        if (this.character.isColliding(this.level.endboss[0])
            && (new Date().getTime() - this.lastHit) > 1500) {
            console.log('Endboss hurt pepe')                /////////////////////
            this.lastHit = new Date().getTime()
            this.character.hit();                   //lost energy   
            this.soundPlay(this.SOUND_chicken, 1);
            this.statusBar_Life.setPercentage(this.character.energy);
            this.character.checkIfDead();
        }
    }

    /**
     * Check Collision if Bottle hits Endboss
     */
    checkCollisionBottleWithEndboss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle !== undefined) {
                if (this.level.endboss[0].isColliding(bottle)) {
                    console.log('Bottle hit Endboss')
                }
            }
        })
    }


    /**
     * Check Collision from Character to collect Coins
     */
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.statusBar_Coins.coins_counter++;
                this.soundPlay(this.SOUND_coinsPickup, 0.4);
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
                this.soundPlay(this.SOUND_bottlePickup, 0.4);
                const indexTequila = this.level.tequilas.indexOf(tequila);
                this.level.tequilas.splice(indexTequila, 1)
            }
        })
    }

    /**
     * Play sound at Pickup
     * @param {sound new Audio, audio volume} sound 
     */
    soundPlay(sound, volume) {
        sound.volume = volume;
        sound.currentTime = 0;
        sound.play();
    }

    /*----------------------Throw Bottle (Throwable Object)------------------- */
    /**
     * Throw Object (Bottle) if Space is pressed
     */
    checkThrowObjects() {
        let throwTime = new Date().getTime()
        setInterval(() => {
            if (this.keyboard.SPACE
                && this.timeSinceLastThrow(throwTime)
                && this.enoughCollectedTequilas()
                && this.character.moveDirection === 'right') {
                let bottle = new ThrowableObject(this.character.x, this.character.y + 70);
                this.throwableObjects.push(bottle);
                throwTime = new Date().getTime()
            }
        }, 1000 / this.frameRate);
    }

    /**
     * Check Time since last throw so the bottle can only be thrown
     * every second
     * @param {new Date} throwTime 
     * @returns 
     */
    timeSinceLastThrow(throwTime) {
        return new Date().getTime() - throwTime > 1000
    }

    /**
     * Check if enough Bottles Collected
     * @returns true if its enough tequilas collected
     */
    enoughCollectedTequilas() {
        return world.statusBar_Tequila.tequila_counter > 0
    }

    /*-----------------------------Images Flip------------------------------*/
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

    /*-------------------------------Endboss---------------------------- */
    /**
     * Start Animation of Endboss if Character walks to the end
     */
    showEndboss() {
        let endbossThere = false;
        setInterval(() => {
            if (this.character.x > 2800 && endbossThere === false) {
                this.level.endboss[0].animate()
                endbossThere = true
            }
        }, 1000 / this.frameRate);
    }

}

