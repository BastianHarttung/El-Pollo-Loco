class World {
    
    /* background = new Background();
    clouds = [
        new Clouds(),        
        ];
    hills = new Hills();
    bgcacti = new BgCacti();
    ground = new Ground(); */
    backgroundObjects = [
        new Background(),
        new Clouds(),
        new Hills(),
        new BgCacti(),
        new Ground()
    ]

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chick(),
        new Chick()
        ];
    canvas;
    ctx;
    
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    /**
     * Draw function for drawing the world
     * 
     */
    draw(){
        /* Clear canvas */
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
                
        /* Background */ 
        this.backgroundObjects.forEach(bgObject => {
            this.ctx.drawImage(bgObject.img, bgObject.x, bgObject.y, bgObject.width, bgObject.height)
        })       
        /* this.ctx.drawImage(this.background.img, this.background.x, this.background.y, this.background.width, this.background.height);
        
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });  

        this.ctx.drawImage(this.hills.img, this.hills.x, this.hills.y, this.hills.width, this.hills.height)     

        this.ctx.drawImage(this.bgcacti.img, this.bgcacti.x, this.bgcacti.y, this.bgcacti.width, this.bgcacti.height)     

        this.ctx.drawImage(this.ground.img, this.ground.x, this.ground.y, this.ground.width, this.ground.height) */     
        
               
        /* Character */
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        /* Enemies */
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
        
        // Draw() wird immer wieder aufgerufen je nach leistung des pcs
        let self = this;
        requestAnimationFrame(function () {
            self.draw();            
        });

        /* Gegner laufen */
        this.walkingEnemies()
    }

    /**
     * Intervall for Walking Enemies
     * 
     */
    walkingEnemies(){
        setInterval(() => {
            this.enemies.forEach(enemy => {
                enemy.x = enemy.x -5
            })
        }, 1000);
    }

}