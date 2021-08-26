class World {
    
    clouds = [
        new Clouds(),
        new Clouds()
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
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });        
        
        /* for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i]; 
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        }     Normale for-schleife  */   

        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        // Draw() wird immer wieder aufgerufen je nach leistung des pcs
        let self = this;
        requestAnimationFrame(function () {
            self.draw();            
        });

        this.walkingEnemies()
    }

    walkingEnemies(){
        setInterval(() => {
            this.enemies.forEach(enemy => {
                enemy.x = enemy.x -5
            })
        }, 1000);

    }

}