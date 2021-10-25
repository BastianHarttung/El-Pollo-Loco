class MovableObject extends DrawableObject {

    id = Math.random() *10000;

    randomNr = 1 + Math.random() * 2;

    frameRate = 60;

    moveDirection;
    /* levelLength = 3000; */

    speedY = 0;             // For Gravity
    acceleration = 1;     // For Gravity    

    energy = 100;
    isDead = false;

    lastHit = 0;

    world;

    /**
     * Intervall for Walking Enemies
     * 
     */       
    walkingEnemies() {
        let xStart = this.x;        

        setInterval(() => {

            if (!this.isDead) {
                if (this.x <= xStart - 200) {
                    this.moveDirection = 'right';
                }
                if (this.moveDirection == 'left') {
                    this.otherDirection = false;
                    this.x -= this.randomNr;
                }
                if (this.x >= xStart + 200) {
                    this.moveDirection = 'left'
                }
                if (this.moveDirection == 'right') {
                    this.otherDirection = true;
                    this.x += this.randomNr;
                }             
            }            
        }, 1000 / this.frameRate);               
    }

    /**
     * Play Animation
     * @param {array} imagesArray  The Array with Images Source
     */
    playAnimation(imagesArray) {
        let index = this.currentImage % imagesArray.length; //Modulo Rest von länge des array
        let path = imagesArray[index];
        this.img = this.availableImages[path];
        this.currentImage++;
    }

    /**
     * Gravity to the Objects
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / this.frameRate);
    }

    /**
     * Checks if the Object is above Ground
     * @returns Y-Koordinate vom Objekt über Y Koordinate von Ground
     */
    isAboveGround() {
        return this.y < this.groundY;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 18;
    }

    /**
     * Check if Things colliding
     * @param {json} movableObject 
     * @returns Formular to check if colliding
     */
    isColliding(movableObject) {
        const x = this.x + this.imageOffsetLeft;
        const y = this.y + this.imageOffsetTop;
        const width = this.width - this.imageOffsetRight;
        const height = this.height - this.imageOffsetBottom;

        const moX = movableObject.x + movableObject.imageOffsetLeft;
        const moY = movableObject.y + movableObject.imageOffsetTop;
        const moWidth = movableObject.width - movableObject.imageOffsetRight;
        const moHeight = movableObject.height - movableObject.imageOffsetBottom;

        return x + width > moX &&
            y + height > moY &&
            x < moX &&
            y < moY + moHeight
    }

    /**
     * If Pepe is hit by chicken he lost energy
     */
    hit() {
        this.energy -= 10;
        this.lastHit = new Date().getTime();
    }

    /**
     * If Pepe is hit longer timepassed 1s return true
     * @returns true If Time since last Hit < 1s
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;   // Difference in ms
        return timePassed < 1000;      // Wenn Zeit seit letztem Hit länger als 1000 ms dann wird true ausgegeben
    }

    checkIfDead() {
        if (this.energy <= 0) {
            this.isDead = true;
        }
    }

}
