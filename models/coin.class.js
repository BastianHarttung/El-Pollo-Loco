class Coin extends MovableObject {
    height = 100;
    width = 100;

    IMAGES_ANIMATE = [
        './img/8.Coin/Moneda1.png',
        './img/8.Coin/Moneda2.png'
    ]

    constructor(x) {
        super().loadImage('./img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_ANIMATE);
        this.x = x + Math.random() * 50; /* 400 + Math.random() * this.levelLength */;
        this.y = Math.random() * 160;  
        
        // Offset to correct Collision
        this.imageOffsetTop = 25;
        this.imageOffsetRight = 50;
        this.imageOffsetBottom = 50;
        this.imageOffsetLeft = 25;
        
        this.animate();
    }

    /**
     * The Coins are blinking
     */
    animate(){
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_ANIMATE.length; //Modulo Rest von länge des array
            let path = this.IMAGES_ANIMATE[index];
            this.img = this.availableImages[path];
            this.currentImage++;
        }, 250);
    }
}