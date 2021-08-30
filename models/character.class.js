class Character extends MovableObject{
    x=50;
    xmin = -30;
    xmax = 520;
    y=65 ;
    height=236;
    width=120;
    speed = 2.5;
    world;
    
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

       this.walkingAnimation(); 
    }

    walkingAnimation(){

        // Move Pepe on X-Axis
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.xmax){
                this.x += this.speed;   
                this.otherDirection = false; 
            } if(this.world.keyboard.LEFT && this.x > this.xmin){                
                this.x -= this.speed;
                this.otherDirection = true; 
            } else {                
            }
        }, 1000/this.framerate);

        // Change Pics so Pepe is Walking
        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT){                               
                this.changePicsForWalking();
            }
        }, 1000/10);        
    }

    changePicsForWalking(){
        let index = this.currentImage % this.IMAGES_WALKING.length; //Modulo Rest von länge des array
        let path = this.IMAGES_WALKING[index];
        this.img = this.availableImages[path];
        this.currentImage++;
    }

    jump(){

    }
}