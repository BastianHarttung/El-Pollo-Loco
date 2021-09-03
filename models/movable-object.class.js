class MovableObject {
    x;
    y;
    img;
    height=197;
    width=100;
    availableImages = {};
    randomNr = 1+ Math.random() *2;
    currentImage = 0;
    framerate = 60;
    otherDirection = false;
    levelLength = 2000;

    speedY = 0;             // For Gravity
    acceleration = 1;     // For Gravity    

    /**
     * Load Image on Constructor
     * @param {string} path 
     */
    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Load images to animate Character and Enemies
     * @param {Array} array = ['img/image1.png', 'img/image2.png'] 
     */
    loadImages(array){
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.availableImages[path] = img;
        })        
    };    

    /**
     * Intervall for Walking Enemies
     * 
     */
     walkingEnemies(){
        setInterval(() => {              
                this.x -= this.randomNr                                            
        }, 1000/this.framerate);
    }     

    /**
     * Play Animation
     * @param {array} imagesArray  The Array with Images Source
     */
    playAnimation(imagesArray){
        let index = this.currentImage % imagesArray.length; //Modulo Rest von länge des array
        let path = imagesArray[index];
        this.img = this.availableImages[path];
        this.currentImage++;
    }   

    /**
     * Gravity to the Objects
     */
    applyGravity(){
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }           
        }, 1000/this.framerate);
    }

    /**
     * Checks if the Object is above Ground
     * @returns Y-Koordinate vom Objekt über Y Koordinate von Ground
     */
    isAboveGround() {
        return this.y < this.groundY;
    }      
    
    moveRight(){
        this.x += this.speed;
        this.otherDirection = false;           
    }

    moveLeft(){
        this.x -= this.speed;
        this.otherDirection = true;
    }
    
    jump(){
        this.speedY = 18;
    }
}
