class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }

    preload(){ //something that loads before game starts
        //load images/tile sprite
        //('what you want to define the name as', 'where is this in the folder')
        this.load.image('rocket','./assets/rocket.png');
        this.load.image('spaceship','./assets/spaceship.png');
        this.load.image('starfield','./assets/starfield.png');
    }

    create(){ //something that loads once after game starts
        //place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480,'starfield').setOrigin(0,0);

        // white rectangular borders
        //(x axis, y axis, width, height, color in hex value)
        this.add.rectangle(5,5,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,443,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,5,32,455,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(603,5,32,455,0xFFFFFF).setOrigin(0,0);

        // green UI background
        this.add.rectangle(37,42,566,64,0x00FF00).setOrigin(0,0);


        // add this text to screen at (x axis,y axis,string)
        // 0,0 coordination is upper left corner
        this.add.text(20,20,"Rocket Patrol Play");
    }

    update(){ //something that reloads every frame
        // scroll starfield
        // -= 4 means move backwards 4 pixels each frame on x axis
        this.starfield.tilePositionX -= 4;
        //this.starfield.tilePositionY -= 4;
    }
}