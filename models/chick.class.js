class Chick extends MovableObject{
    y = 225;
    height=70;
    width=79;

    randomNr = 1+ Math.random()*2;

    constructor(){
        super().loadImage('../img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png')
        this.x= 300 + Math.random() * 400;  // Zahl zwishen 300 und 700
        
        this.walkingEnemies();
    };

    /**
     * Intervall for Walking Enemies
     * 
     */
     walkingEnemies(){
        setInterval(() => {            
            this.x -= this.randomNr;            
        }, 1000/60);
    };
}