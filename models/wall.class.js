class Wall extends MovableObject {
    x = -10;
    y = 95;
    
    height = 210;
    width = 90;
   
    constructor() {
        super().loadImage('./img/wall.png');                
    }
   
}