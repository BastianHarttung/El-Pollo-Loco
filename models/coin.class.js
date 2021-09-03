class Coin extends MovableObject {
    height = 100;
    width = 100;

    IMAGES_ANIMATE = [
        '../img/8.Coin/Moneda1.png',
        '../img/8.Coin/Moneda2.png'
    ]

    constructor() {
        super().loadImage('../img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_ANIMATE);
        this.x = 400 + Math.random() * this.levelLength;
        this.y = Math.random() * 160;  
        
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