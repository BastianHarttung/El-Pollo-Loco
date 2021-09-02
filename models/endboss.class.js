class Endboss extends MovableObject {
    x = 2100;
    y= 18;
    height=300;
    width=258;
    IMAGES_WALKING = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'                  
    ];
    IMAGES_ALERT = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];
    IMAGES_ATTACK = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];
    IMAGES_HURT = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];
    IMAGES_DEATH = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ]

    constructor(){
        super().loadImage('../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png')
        this.loadImages(this.IMAGES_WALKING); 
        this.loadImages(this.IMAGES_ALERT);      
                
        /* this.walkingEnemies(); */

        this.animate();
    }

    animate(){
        setInterval(() => {
            let index = this.currentImage % this.IMAGES_ALERT.length; //Modulo Rest von länge des array
            let path = this.IMAGES_ALERT[index];
            this.img = this.availableImages[path];
            this.currentImage++;
        }, 1000/ (5+ Math.random()*5) );
    }
}