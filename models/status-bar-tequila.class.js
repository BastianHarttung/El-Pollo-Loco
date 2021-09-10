class Statusbar_Tequila extends DrawableObject {
   
    tequila_counter = 0;

    world;

    constructor() {
        super().loadImage('./img/7.Marcadores/Icono/Botella.png');        
        this.x = 160;
        this.y = 290;
        this.width = 45;
        this.height = 44;       
    }

}