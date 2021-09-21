class Statusbar_Coins extends DrawableObject {
   
    coins_counter = 0;

    world;

    constructor() {
        super().loadImage('./img/7.Marcadores/Icono/Monedas.png');        
        this.x = 235;
        this.y = 288;
        this.width = 45;
        this.height = 45;
        } 
       
}