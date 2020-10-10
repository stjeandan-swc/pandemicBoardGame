class GameScene extends Phaser.Scene {

    constructor() {
        super('Game');
    }

    // Phaser life cycle function for create and instance of the assets.
    create() {
        // create the background image
        const bgImage = this.add.image(0, 0, 'bgImage');
        // set the images origin.
        bgImage.setOrigin(0, 0);
    }
}