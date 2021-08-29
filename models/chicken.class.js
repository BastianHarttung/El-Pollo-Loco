class Chicken extends MovableObject{
    
    y= 210;
    height=88;
    width=90;
   
    constructor(){
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x= 500 + Math.random() * 500;  // Zahl zwishen 500 und 1000
        
        this.walkingEnemies();
    }

    
}