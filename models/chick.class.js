class Chick extends MovableObject{

    y = 225;
    height=70;
    width=79;
    
    constructor(){
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png')
        this.x= 500 + Math.random() * 500;  // Zahl zwishen 500 und 1000
        
        this.walkingEnemies();
    };
    
}