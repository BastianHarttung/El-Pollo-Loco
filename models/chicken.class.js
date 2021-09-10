class Chicken extends MovableObject{
    
    y= 210;
    height=88;
    width=90;
    
    IMAGES_WALKING = [
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'                  
    ];

    IMAGE_DEATH = './img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png';

    constructor(x){
        super().loadImage('./img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.loadImages(this.IMAGES_WALKING);

        this.x= x + Math.random() * 100/* 500 + 500*Math.random() */  
                
        this.walkingEnemies();

        this.animate();
    }

    /**
     * The Chicken looks like they are walking with different Pics
     */
    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 1000/ (5+ Math.random()*5) );
    }
    
}