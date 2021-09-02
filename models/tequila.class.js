class Tequila extends CollectableObject {

    IMAGES_SAND = [
        '../img/6.botella/2.Botella_enterrada1.png',
        '../img/6.botella/2.Botella_enterrada2.png'
    ];

    IMAGES_FLY = [
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        '../img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        '../img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];

    constructor() {
        super().loadImage('../img/6.botella/1.Marcador.png');
        this.loadImages(this.IMAGES_SAND);
        this.loadImages(this.IMAGES_FLY);
        this.loadImages(this.IMAGES_SPLASH);
    }
}