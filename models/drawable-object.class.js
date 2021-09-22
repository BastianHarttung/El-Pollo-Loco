class DrawableObject {

    x;
    y =290;    
    height = 197;
    width = 100;

    img;
    availableImages = {};
    currentImage = 0;

    /**
     * Load Image on Constructor
     * @param {string} path 
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Load images to animate Character and Enemies
     * @param {Array} array = ['img/image1.png', 'img/image2.png'] 
     */
    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.availableImages[path] = img;
        })
    };

    /**
     * Draw Image
     * @param {ctx} ctx ctx from World 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * EDIT Draw Frames for testing collision
     * @param {ctx} ctx ctx from World
     */
     drawFrame(ctx) {

        if (this instanceof Character
            || this instanceof Chicken
            || this instanceof Chick
            || this instanceof Coin
            || this instanceof Tequila) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "darkorange";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}