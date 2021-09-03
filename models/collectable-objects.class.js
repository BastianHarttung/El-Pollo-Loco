class CollectableObject{
    x;
    y;
    width;
    height;
    img;
    levelLength = 2000;
    availableImages = {};
    currentImage = 0;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(array){
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.availableImages[path] = img;
        })        
    };    

    /**
     * Gravity to the Objects
     */
     applyGravity(){
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
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
    
}