export class BootScene extends Phaser.Scene {

    constructor() {
        super('boot')
    }

    preload() {
        this.loadImages();
    }

    loadImages() {
        const bgImage = scene.load.image(0, 0, 'assets/images/pandemic_board.png');
    }

    create() {
        this.scene.start('Game')
    }
}