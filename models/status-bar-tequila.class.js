class Statusbar_Tequila extends DrawableObject {

   
    tequila_counter = 0;

    world;

    constructor() {
        super().loadImage('../img/7.Marcadores/Icono/Botella.png');        
        this.x = 160;
        this.y = 290;
        this.width = 45;
        this.height = 44;
        this.setCounter(0);
    }


    setCounter(count) {
        this.tequila_counter = count; // => 0...5
        setTimeout(() => {
            world.ctx.font = "20px Arial";
            world.ctx.fillStyle = "white";
            world.ctx.textAlign = "center";
            world.ctx.fillText("Hallo World hier bin ich",0,0); 
        }, 1000);      
    }

       

}