class Character extends MovableObject{
    x=50;
    y=65 ;
    height=236;
    width=120;

    IMAGES_WALKING = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'            
    ]

    constructor(){
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png')
        this.loadImages(this.IMAGES_WALKING)

       /* this.animate(); */
    }

    walkingAnimation(){
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_WALKING.length; //Modulo Rest von länge des array
            let path = this.IMAGES_WALKING[index];
            this.img = this.availableImages[path];
            this.currentImage++;
        }, 1000/10);
        
    }

    moveRight(){

    }

    jump(){

    }
}