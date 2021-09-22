class Character extends MovableObject {

    x = 100;
    xmin = 1;

    y = 63;           //65
    groundY = 63;   // Boden Y Koordinate
    height = 236;
    width = 120;
    speed = 3.5;    //Change speed at end 3.5

    lastMove = 0;

    world;          //Variables from World like Keyboard
    pepeIsDead = false;

    IMAGES_WALKING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_STAND = [
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
    ];

    IMAGES_SLEEP = [
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];

    IMAGES_JUMP = [
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_HURT = [
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGES_DEATH = [
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png'
    ];

    SOUND_walking = new Audio('./audio/walking_sand.mp3');
    SOUND_jump = new Audio('./audio/jump_hop.mp3');
    SOUND_death = new Audio('./audio/pepe_death.mp3');
    SOUND_sleep = new Audio('./audio/pepe_sleep.mp3');
    SOUND_snoring = new Audio('./audio/pepe_snoring.mp3');
    SOUND_hurt = new Audio('./audio/pepe_hurt.wav');



    constructor() {
        super().loadImage('./img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEATH);
        this.loadImages(this.IMAGES_STAND);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        // Move Pepe on X-Axis
        setInterval(this.move.bind(this), 1000 / this.frameRate);

        // Change Pics 
        setInterval(this.changePics.bind(this), 1000 / 5);
    }

    move() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
        }
        if (this.world.keyboard.LEFT && this.x > this.xmin) {
            this.moveLeft();
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
        }
        this.world.camera_x = -this.x;                      //Move Ground
        this.world.camera_x_hills = -this.x * 0.5;          //Move Hills
        this.world.camera_x_cacti = -this.x * 0.8;          //Move Cacti
    }

    changePics() {
       
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);            
            this.SOUND_hurt.play();
            this.lastMove = new Date().getTime();
        } else if (this.isDead && this.pepeIsDead == false) {
            this.playAnimation(this.IMAGES_DEATH);
            this.stopSounds();
            this.SOUND_death.play();
            this.pepeIsDead = true;
            MUSIC_GameMusic.pause();
            setTimeout(() => {
                document.getElementById('end-screen').classList.remove('d-none');
            }, 500);
        } else if (this.isAboveGround()) {            
            this.SOUND_jump.play();
            this.playAnimation(this.IMAGES_JUMP);   // Pepe Jumping animation
            this.lastMove = new Date().getTime();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.stopSounds();
            this.SOUND_walking.play();           
            this.playAnimation(this.IMAGES_WALKING);    // Pepe Walking animation
            this.lastMove = new Date().getTime();
        } else if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT
            && !this.world.keyboard.UP && !this.world.keyboard.SPACE) {

            if (this.lastMoveLongerThan4s()) {
                this.playAnimation(this.IMAGES_SLEEP)                
                this.SOUND_snoring.play();
            } else {
                this.playAnimation(this.IMAGES_STAND);
                this.stopSounds();
            }
        }
    }

    stopSounds() {
        this.SOUND_snoring.pause();
        this.SOUND_snoring.currentTime = 0;

        this.SOUND_walking.pause();
        
        this.SOUND_jump.pause();
        this.SOUND_jump.currentTime = 0;
        
        this.SOUND_hurt.pause();
        this.SOUND_hurt.currentTime = 0;
    }

    lastMoveLongerThan4s() {
        let lastMoveTime = new Date().getTime() - this.lastMove
        if (lastMoveTime > 4000) {
            return true
        } else {
            return false
        }
    }
}