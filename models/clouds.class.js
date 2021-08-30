class Clouds extends MovableObject{
    x = 0;
    y = 0;
    width = 1188;
    height = 334;

    constructor(imagePath){
        super().loadImage(imagePath)       
    
        this.animateClouds();
    }

    animateClouds(){
        setInterval(() => {
            this.x -= 0.15;
        }, 1000/60);
    }        
    
}