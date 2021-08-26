class Chicken extends MovableObject{
    
    
    height=88;
    width=90;

    constructor(){
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png')
        this.x= 300 + Math.random() * 400;  // Zahl zwishen 300 und 700
        this.y= 207;
    }
}