class BootScene extends Phaser.Scene {

    constructor() {
        super('Boot');
    }

    // Phaser life cycle function for loading assets.
    preload() {
        this.loadImages();
    }

    // load all image assets.
    loadImages() {
        this.load.image('bgImage', 'assets/images/pandemic_board.jpg');
    }

    // Phaser life cycle function for create and instance of the assets.
    create() {
        this.scene.start('Game');
    }
}