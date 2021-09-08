class Statusbar_Life extends DrawableObject {

    IMAGES_LIFE = [
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/100_ .png',
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/80_ .png',
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/60_ .png',
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/40_ .png',
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        '../img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE);
        this.x = 10;
        this.y = 290;
        this.width = 150;
        this.height = 40;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_LIFE[this.returnImageIndex()]
        this.img = this.availableImages[path];
    }

   
    returnImageIndex (){
        if (this.percentage > 80) {
            return 0
        } else if (this.percentage > 60 && this.percentage <= 80) {
            return 1
        }else if (this.percentage > 40 && this.percentage <= 60) {
            return 2
        }else if (this.percentage > 20 && this.percentage <= 40) {
            return 3
        }else if (this.percentage > 0 && this.percentage <= 20) {
            return 4
        }else if (this.percentage == 0) {
            return 5
        }
    }

}