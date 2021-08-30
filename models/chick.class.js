class Chick extends MovableObject{

    y = 225;
    height=70;
    width=79;

    IMAGES_WALKING = [
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'                  
    ]
    
    constructor(){
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x= 500 + Math.random() * 500;  // Zahl zwishen 500 und 1000
        
        this.walkingEnemies();

        this.animate();
    };

    animate(){
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_WALKING.length; //Modulo Rest von länge des array
            let path = this.IMAGES_WALKING[index];
            this.img = this.availableImages[path];
            this.currentImage++;
        }, 150);
    }
    
}