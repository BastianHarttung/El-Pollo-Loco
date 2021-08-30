class BackgroundObjects extends MovableObject{
    
    y = 0;
    width = 1188;
    height = 334;

    constructor(imagePath){
        super().loadImage(imagePath)
        this.x = 0;
           
    }
        
}