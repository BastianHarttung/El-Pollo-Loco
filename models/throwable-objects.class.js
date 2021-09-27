class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 20;
    
    groundY = 340;

    IMAGES_FLY = [
        './img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        './img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        './img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        './img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        './img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    SOUND_Klirr = new Audio('./audio/bottle_klirr.mp3')

    constructor(x,y) {
        super().loadImage('./img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 90;
        this.throw();        
         
        setInterval(this.changePics.bind(this), 120);
        setInterval(this.sounds.bind(this), 1000 / this.frameRate);
    }

    throw() {      
            this.applyGravity();
            this.speedY = 18;            
            setInterval(() => {
                if (this.y < this.groundY) {
                    this.x +=13
                }             
            }, 22);
            world.statusBar_Tequila.tequila_counter --;
    }
    
    changePics() {
        if (this.y > this.groundY - 200) {
            this.playAnimation(this.IMAGES_SPLASH);                                                                                    
        }else {
           this.playAnimation(this.IMAGES_FLY);  
        }               
    }

    sounds() {
        if (this.y > this.groundY -200) {
            //this.SOUND_Klirr.play()                       
        }
    }
}