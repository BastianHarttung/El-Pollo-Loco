class Tequila extends MovableObject {
    y = 210;
    height = 90;
    width = 90;    

    groundY = 210;   // Boden Y Koordinate

    IMAGES_SAND = [
        './img/6.botella/2.Botella_enterrada1.png',
        './img/6.botella/2.Botella_enterrada2.png'
    ];
    
    //random Image of Images_Sand
    randomImageNumber = Math.floor(Math.random()*this.IMAGES_SAND.length); 
    
    

    constructor(x) {        
        super().loadImage(this.IMAGES_SAND[this.randomImageNumber]);        
        this.loadImages(this.IMAGES_SAND);
        this.x = x + Math.random() * 70;/* 400 + Math.random() * this.levelLength; */ 
        this.applyGravity();       
    }
}