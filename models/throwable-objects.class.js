class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 20;

    groundY = 210;

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

    constructor(x,y) {
        super().loadImage('./img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 90;
        this.height = 90;
        this.throw();        
    }

    throw() {
        this.speedY = 18;
        this.applyGravity();
        setInterval(() => {
           this.x +=13 
        }, 22);
    }
}