class Statusbar_Endboss extends Endboss {

    IMAGES_ENDBOSS_LIFE = [
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_100.png',
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_80.png',
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_60.png',
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_40.png',
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_20.png',
        './img/7.Marcadores/Marcadorvida_enemy/orange/endboss-life_0.png',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_ENDBOSS_LIFE);
        this.width = 150;
        this.height = 28;
        this.setPercentage(100);
        this.imageOffsetTop = 0;
        this.imageOffsetRight = 0;
        this.imageOffsetBottom = 0;
        this.imageOffsetLeft = 0;
    }


    setPercentage(percentage) {
        this.percentage = percentage; // => 0...5
        let path = this.IMAGES_ENDBOSS_LIFE[this.returnImageIndex()]
        this.img = this.availableImages[path];
    }


    returnImageIndex() {
        if (this.percentage > 80) {
            return 0
        } else if (this.percentage > 60 && this.percentage <= 80) {
            return 1
        } else if (this.percentage > 40 && this.percentage <= 60) {
            return 2
        } else if (this.percentage > 20 && this.percentage <= 40) {
            return 3
        } else if (this.percentage > 0 && this.percentage <= 20) {
            return 4
        } else if (this.percentage == 0) {
            return 5
        }
    }

    movingWithEndboss() {
        setInterval(() => {
            if (world.level.endboss.endbossWalking) {
                this.x -= 2;
            }
        }, 1000 / this.frameRate);
    }

}