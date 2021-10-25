class Chick extends MovableObject{

    y = 225;
    height=70;
    width=79;

    IMAGES_WALKING = [
        './img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        './img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'                  
    ];

    IMAGE_DEATH = './img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png';
    
    constructor(x){
        super().loadImage('./img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x= x; /* + Math.random() * 100; */

        this.moveDirection = 'left';
        
        this.walkingEnemies();

        this.animate();
    };

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 150);
        setInterval(this.changePics.bind(this), 1000 / 60)
    }

    changePics() {
        if (this.isDead) {
            this.img.src = this.IMAGE_DEATH;                                    
        } 
    }
    
}