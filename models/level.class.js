class Level {
    background;
    hills;
    cacti;
    ground;
    clouds;

    enemies;
    endboss;

    coins;
    tequilas;
    
    level_end_x = 2950;     //Ende des Level Character läuft nicht weiter

    constructor(background, hills, cacti, ground, clouds, enemies, endboss, coins, tequilas) {
        
        this.background = background;
        this.hills = hills;
        this.cacti = cacti;
        this.ground = ground;
        this.clouds = clouds;

        this.enemies = enemies;
        this.endboss = endboss;
        
        this.coins = coins;
        this.tequilas = tequilas;
    }
}