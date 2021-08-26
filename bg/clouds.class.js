class Clouds extends MovableObject{

    y = 0;
    width = 1000;
    height = 281;

    constructor(){
        super().loadImage('../img/5.Fondo/Capas/4.nubes/Completo.png')
        this.x= -500 + Math.random() * 550;
        /* this.y= -20 + Math.random() * 60; */
    }
    
}