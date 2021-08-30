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

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * animate Character and Enemies
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

    
    
       
}