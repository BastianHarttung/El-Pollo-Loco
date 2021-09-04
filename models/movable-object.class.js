class MovableObject {
    x;
    y;
    img;
    height = 197;
    width = 100;
    availableImages = {};
    randomNr = 1 + Math.random() * 2;
    currentImage = 0;
    framerate = 60;
    otherDirection = false;
    levelLength = 2000;

    speedY = 0;             // For Gravity
    acceleration = 1;     // For Gravity    

    energy = 100;
    isDead = false;

    lastHit = 0;

    /**
     * Load Image on Constructor
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Load images to animate Character and Enemies
     * @param {Array} array = ['img/image1.png', 'img/image2.png'] 
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.availableImages[path] = img;
        })
    };

    /**
     * Draw Image
     * @param {ctx} ctx ctx from World 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * EDIT Draw Frames for testing collision
     * @param {ctx} ctx ctx from World
     */
    drawFrame(ctx) {

        if (this instanceof Character
            || this instanceof Chicken
            || this instanceof Chick
            || this instanceof Coin
            || this instanceof Tequila) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "darkorange";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Intervall for Walking Enemies
     * 
     */
    walkingEnemies() {
        setInterval(() => {
            this.x -= this.randomNr
        }, 1000 / this.framerate);
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
        }, 1000 / this.framerate);
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
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height
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
