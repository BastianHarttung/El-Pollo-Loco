class CollectableObject{
    x;
    y;
    width;
    height;
    img;
    levelLength = 2000;
    availableImages = {};
    currentImage = 0;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(array){
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.availableImages[path] = img;
        })        
    };    
    
}