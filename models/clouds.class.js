class Clouds extends MovableObject{
    
    y = 0;
    width = 1188;
    height = 334;

    constructor(imagePath, x){
        super().loadImage(imagePath)       
        this.x = x;
        this.animateClouds();
    }

    animateClouds(){
        setInterval(() => {
            this.x -= 0.25;
        }, 1000/60);
    }        
    
}