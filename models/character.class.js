class Character extends MovableObject{
    x=50;
    y=65 ;
    height=236;
    width=120;

    constructor(){
        super().loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png')
        this.loadImages([
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
            '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'            
        ])
    }


    moveRight(){

    }

    jump(){

    }
}