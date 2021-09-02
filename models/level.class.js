class Level{
    backgroundObjects;
    clouds;
    enemies;  
    coins;
    tequilas;  
    level_end_x = 1766;
    
    constructor(backgroundObjects, clouds, enemies, coins, tequilas){
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;  
        this.enemies = enemies;  
        this.coins = coins;    
        this.tequilas = tequilas;
    }
}