class BackgroundObjects extends MovableObject{
    x = 0;
    y = 0;
    width = 1188;
    height = 334;

    constructor(imagePath){
        super().loadImage(imagePath)
        
        this.animate();
    }
    
    /**
     * Move Object every second
     */
    animate(){
        setInterval(() => {
            this.x -= 1;
        }, 1000/60);        
    }
}