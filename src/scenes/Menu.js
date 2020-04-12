class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }
    create(){
        //console.log(this);

        //displays menu text
        // add this text to screen at (x axis,y axis,string)
        // 0,0 coordination is upper left corner
        this.add.text(20,20,"Rocket Patrol Menu");

        //launch the next scene
        this.scene.start("playScene");
    }
}